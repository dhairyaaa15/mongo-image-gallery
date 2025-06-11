import { useState } from 'react';
import Navigation from '../components/Navigation';
import UploadView from '../components/UploadView';
import GalleryView from '../components/GalleryView';
import ImageModal from '../components/ImageModal';

export default function Home() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentView, setCurrentView] = useState('upload');

  const handleImageUpload = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = {
          id: Date.now(),
          src: e.target.result,
          name: file.name,
          size: file.size,
          uploadDate: new Date().toLocaleDateString()
        };
        setImages(prev => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
    setSelectedImage(null);
  };

  const recentImage = images.length > 0 ? images[images.length - 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Image Gallery
          </h1>
          <p className="text-gray-600 text-lg">
            Upload and manage your images by storing it in MongoDb
          </p>
        </div>

        {/* Navigation */}
        <Navigation 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
          imageCount={images.length} 
        />

        {/* Main Content */}
        {currentView === 'upload' ? (
          <UploadView 
            handleImageUpload={handleImageUpload} 
            recentImage={recentImage} 
          />
        ) : (
          <GalleryView 
            images={images} 
            deleteImage={deleteImage} 
            setSelectedImage={setSelectedImage} 
          />
        )}

        {/* Image Modal */}
        <ImageModal 
          selectedImage={selectedImage} 
          setSelectedImage={setSelectedImage} 
        />
      </div>
    </div>
  );
}