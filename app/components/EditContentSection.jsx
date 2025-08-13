import React,{useState,useEffect} from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  FileText, 
  Download, 
  Settings, 
  Home,
  LogOut,
  ChevronDown,
  ChevronUp,
  Save,
  Plus,
  Trash2,
  Sidebar
} from 'lucide-react';
import { loadResumes,generateId,saveResume } from '@/utils/resumeStorage';
import { Button } from '@/components/ui/button';

const EditContentSection = ({resumeData,setResumeData}) => {
    const [currentResumeId, setCurrentResumeId] = useState(null);
  const [saveStatus, setSaveStatus] = useState('All changes saved');
  
  // Form sections state
  const [expandedSections, setExpandedSections] = useState({
    personalInfo: true,
    summary: false,
    workExperience: false,
    education: false,
    skills: false,
    projects: false,
    certifications: false
  });

  // Resume data state
  

  // Load resumes on component mount
  useEffect(() => {
    loadResumesFromDB();
  }, []);

  const loadResumesFromDB = async () => {
    try {
      const savedResumes = await loadResumes();
      setResumes(savedResumes);
    } catch (error) {
      console.error('Error loading resumes:', error);
    }
  };

  const handleSaveResume = async () => {
    try {
      setSaveStatus('Saving...');
      
      const resumeToSave = {
        id: currentResumeId || generateId(),
        ...resumeData
      };

      await saveResume(resumeToSave);
      
      if (!currentResumeId) {
        setCurrentResumeId(resumeToSave.id);
      }
      
      await loadResumesFromDB();
      setSaveStatus('All changes saved');
      
      setTimeout(() => setSaveStatus('All changes saved'), 2000);
    } catch (error) {
      console.error('Error saving resume:', error);
      setSaveStatus('Error saving');
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };



  const editResume = (resume) => {
    setCurrentResumeId(resume.id);
    setResumeData(resume);
    setCurrentView('editor');
  }
      const updatePersonalInfo = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      data: {
        ...prev.data,
        personalInfo: {
          ...prev.data.personalInfo,
          [field]: value
        }
      }
    }));
    setSaveStatus('Unsaved changes');
  };

  const updateResumeField = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      data: {
        ...prev.data,
        [field]: value
      }
    }));
    setSaveStatus('Unsaved changes');
  };

  const createNewResume = () => {
    setCurrentResumeId(null);
    setResumeData({
      title: 'Untitled Resume',
      templateId: 'modern-minimalist',
      data: {
        personalInfo: {
          fullName: '',
          profession: '',
          location: '',
          phone: '',
          email: '',
          portfolioWebsite: ''
        },
        summary: '',
        workExperience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: []
      }
    });
    setCurrentView('editor');
  };
  return (
     <div className="w-1/2 bg-white border-r overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Resume Editor</h1>
              <div className="flex items-center space-x-3">
                <Select value={resumeData.templateId} onValueChange={(value) => setResumeData(prev => ({...prev, templateId: value}))}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="modern-minimalist">Modern Minimalist</SelectItem>
                    <SelectItem value="classic">Classic</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Personal Info Section */}
            <Card className="mb-4">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleSection('personalInfo')}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Personal Info</CardTitle>
                  {expandedSections.personalInfo ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </CardHeader>
              {expandedSections.personalInfo && (
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      id="fullName"
                      value={resumeData.data.personalInfo.fullName}
                      onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                      placeholder="Liam Basil"
                    />
                  </div>
                  <div>
                    <Label htmlFor="profession">Profession</Label>
                    <Input 
                      id="profession"
                      value={resumeData.data.personalInfo.profession}
                      onChange={(e) => updatePersonalInfo('profession', e.target.value)}
                      placeholder="Graphic Designer"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location"
                      value={resumeData.data.personalInfo.location}
                      onChange={(e) => updatePersonalInfo('location', e.target.value)}
                      placeholder="San Francisco, CA"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone"
                      value={resumeData.data.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                      placeholder="+1 415 555 1234"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={resumeData.data.personalInfo.email}
                      onChange={(e) => updatePersonalInfo('email', e.target.value)}
                      placeholder="liam.basil@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="portfolio">Portfolio Website</Label>
                    <Input 
                      id="portfolio"
                      value={resumeData.data.personalInfo.portfolioWebsite}
                      onChange={(e) => updatePersonalInfo('portfolioWebsite', e.target.value)}
                      placeholder="liambasilportfolio.com"
                    />
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Other Sections */}
            {['summary', 'workExperience', 'education', 'skills', 'projects', 'certifications'].map(section => (
              <Card key={section} className="mb-4">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => toggleSection(section)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg capitalize">
                      {section === 'workExperience' ? 'Work Experience' : section}
                    </CardTitle>
                    {expandedSections[section] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </CardHeader>
                {expandedSections[section] && (
                  <CardContent>
                    {section === 'summary' ? (
                      <Textarea 
                        value={resumeData.data.summary}
                        onChange={(e) => updateResumeField('summary', e.target.value)}
                        placeholder="Write your professional summary here..."
                        rows={4}
                      />
                    ) : (
                      <div className="text-gray-500 text-center py-8">
                        <p>Click to add {section === 'workExperience' ? 'work experience' : section}</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Plus className="w-4 h-4 mr-2" />
                          Add {section === 'workExperience' ? 'Experience' : section.slice(0, -1)}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
            ))}

            {/* Save Button */}
            <div className="sticky bottom-0 bg-white pt-4 border-t">
              <Button 
                onClick={handleSaveResume}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={saveStatus === 'Saving...'}
              >
                <Save className="w-4 h-4 mr-2" />
                {saveStatus === 'Saving...' ? 'Saving...' : 'Save Resume'}
              </Button>
              <Button 
                variant="outline"
                className="w-full mt-2"
              >
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </div>
        </div>
  )
}

export default EditContentSection