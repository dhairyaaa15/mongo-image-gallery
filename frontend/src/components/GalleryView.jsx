import React from 'react';
import { Image, X } from 'lucide-react';
import { NeumorphismCard } from './UI';

const GalleryView = ({ images, deleteImage, setSelectedImage }) => {
  return (
    <div>
      {images.length === 0 ? (
        <NeumorphismCard className="text-center max-w-md mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-gray-200 shadow-inner shadow-gray-300">
              <Image size={48} className="text-gray-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No images yet
              </h3>
              <p className="text-gray-500">
                Upload some images to see them here
              </p>
            </div>
          </div>
        </NeumorphismCard>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <NeumorphismCard key={image.id} className="p-4">
              <div className="relative group">
                <div className="w-full h-48 rounded-2xl overflow-hidden shadow-inner shadow-gray-300 mb-3">
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
                    onClick={() => setSelectedImage(image)}
                  />
                </div>
                <button
                  onClick={() => deleteImage(image.id)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-red-100 shadow-lg shadow-red-200 hover:shadow-xl hover:bg-red-200 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <X size={16} className="text-red-600" />
                </button>
              </div>
              <div className="text-center">
                <p className="text-gray-700 font-medium text-sm truncate mb-1">
                  {image.name}
                </p>
                <p className="text-gray-500 text-xs">
                  {image.uploadDate}
                </p>
              </div>
            </NeumorphismCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryView;