"use client";
import React, { useState,useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter, usePathname } from "next/navigation";
import { 
  User, 
  FileText, 
  Download, 
  Settings, 
  Edit, 
  Trash2, 
  Plus,
  Home,
  LogOut,
  ExternalLink,
  Github,
  Linkedin,
  Sidebar
} from 'lucide-react';
import { deleteResumeFromDB, loadResumes } from '@/utils/resumeStorage';
import EditorSidebar from '../components/EditorSidebar';

export default function Dashboard() {
  const router = useRouter();
  const [resumes, setResumes] = useState([]);
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


  const handleEdit = (id) => {
    router.push(`/ResumeEditor/${id}`);
  };

  const handleDelete = (id) => {
    deleteResumeFromDB(id)

  };

  const handleExport = () => {
    console.log('Export resume');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <EditorSidebar/>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resumes.map((resume) => (
              <Card key={resume.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {resume.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500">
                        Created: {new Date(resume.created).toLocaleString()}
                      </p>
                    </div>
                    <Badge 
                      variant={resume.status === 'active' ? 'default' : 
                              resume.status === 'draft' ? 'secondary' : 'outline'}
                      className={
                        resume.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-100' :
                        resume.status === 'draft' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' :
                        'bg-gray-100 text-gray-800 hover:bg-gray-100'
                      }
                    >
                      {resume.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(resume.id)}
                      className="flex items-center space-x-2"
                    >
                      <Edit className="w-4 h-4" />
                      <span>Edit</span>
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(resume.id)}
                      className="flex items-center space-x-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Add New Resume Card */}
            <Card className="border-dashed border-2 border-gray-300 hover:border-gray-400 transition-colors cursor-pointer" onClick={() => router.push("/ResumeEditor")}>
              <CardContent className="flex flex-col items-center justify-center h-48 text-gray-500">
                <Plus className="w-12 h-12 mb-4" />
                <p className="text-lg font-medium">Create New Resume</p>
                <p className="text-sm text-center mt-2">
                  Start building your next professional resume
                </p>
              </CardContent>
            </Card>
          </div>

          
        </main>
      </div>
    </div>
  );
}