import React, { useState, useRef } from 'react';
import { Upload, Image } from 'lucide-react';
import { NeumorphismButton, NeumorphismCard } from './UI';

const UploadView = ({ recentImage, handleImageUpload }) => { // <-- add handleImageUpload prop
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleImageUpload(files[0]); // <-- use prop
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file); // <-- use prop
    }
    e.target.value = null;
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <NeumorphismCard>
        <div
          className={`
            border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300
            ${dragActive 
              ? 'border-blue-400 bg-blue-50 shadow-inner' 
              : 'border-gray-300 hover:border-gray-400'
            }
          `}
          onDrop={handleDrop}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-gray-200 shadow-inner shadow-gray-300">
              <Upload size={48} className="text-gray-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Drop your image here
              </h3>
              <p className="text-gray-600 mb-4">
                or click to browse files
              </p>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
                id="fileInput"
              />
              
              <NeumorphismButton 
                onClick={handleButtonClick}
                className="cursor-pointer inline-flex items-center gap-2"
              >
                <Image size={20} />
                Choose Image
              </NeumorphismButton>
            </div>
          </div>
        </div>
      </NeumorphismCard>

      {/* Recent Upload Preview */}
      {recentImage && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Recent Upload
          </h3>
          <NeumorphismCard className="max-w-md mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden shadow-inner shadow-gray-300">
                <img
                  src={recentImage.src}
                  alt="Recent upload"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 font-medium">
                {recentImage.name}
              </p>
              <p className="text-gray-500 text-sm">
                Uploaded on {recentImage.uploadDate}
              </p>
            </div>
          </NeumorphismCard>
        </div>
      )}
    </div>
  );
};

export default UploadView;