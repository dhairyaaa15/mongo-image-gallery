import React from 'react';
import { Plus, Eye } from 'lucide-react';
import { NeumorphismButton } from './UI';

const Navigation = ({ currentView, setCurrentView, imageCount }) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <NeumorphismButton
        onClick={() => setCurrentView('upload')}
        active={currentView === 'upload'}
        className="flex items-center gap-2"
      >
        <Plus size={20} />
        Upload Image
      </NeumorphismButton>
      <NeumorphismButton
        onClick={() => setCurrentView('gallery')}
        active={currentView === 'gallery'}
        className="flex items-center gap-2"
      >
        <Eye size={20} />
        View Gallery ({imageCount})
      </NeumorphismButton>
    </div>
  );
};

export default Navigation;