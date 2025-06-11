import React from 'react';
import { X } from 'lucide-react';

const ImageModal = ({ selectedImage, setSelectedImage }) => {
  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-100 rounded-3xl p-6 max-w-4xl max-h-full overflow-auto shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {selectedImage.name}
          </h3>
          <button
            onClick={() => setSelectedImage(null)}
            className="p-2 rounded-full bg-gray-200 shadow-lg shadow-gray-300 hover:shadow-xl transition-all duration-300"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-inner shadow-gray-300">
          <img
            src={selectedImage.src}
            alt={selectedImage.name}
            className="max-w-full max-h-96 object-contain mx-auto"
          />
        </div>
        <div className="mt-4 text-center text-gray-600">
          <p>Uploaded: {selectedImage.uploadDate}</p>
          <p>Size: {(selectedImage.size / 1024).toFixed(1)} KB</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;