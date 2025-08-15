import { Button } from '@/components/ui/button';
import { Save, Download } from 'lucide-react';

export const SaveExportSection = ({ onSave, saveStatus }) => {
  return (
    <div className="sticky bottom-0 bg-white pt-4 border-t">
      <Button onClick={onSave} className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={saveStatus === 'Saving...'}>
        <Save className="w-4 h-4 mr-2" />
        {saveStatus === 'Saving...' ? 'Saving...' : 'Save Resume'}
      </Button>
      <Button variant="outline" className="w-full mt-2">
        <Download className="w-4 h-4 mr-2" />
        Export PDF
      </Button>
    </div>
  );
};