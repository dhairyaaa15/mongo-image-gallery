import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import UploadView from '../components/UploadView';
import GalleryView from '../components/GalleryView';
import ImageModal from '../components/ImageModal';

export default function Home() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentView, setCurrentView] = useState('upload');

  useEffect(() => {
    fetch('http://localhost:5000/api/images/gallery')
      .then(res => res.json())
      .then(setImages)
      .catch(() => setImages([]));
  }, []);

  const handleImageUpload = async (file) => {
    if (file && file.type.startsWith('image/')) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch('http://localhost:5000/api/images/upload', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        if (response.ok) {
          setImages(prev => [...prev, data.image]);
        } else {
          alert(data.message || 'Upload failed');
        }
      } catch (err) {
        alert('Error uploading image');
      }
    }
  };

  const deleteImage = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/images/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setImages(prev => prev.filter(img => img.id !== id));
        setSelectedImage(null);
      } else {
        const data = await response.json();
        alert(data.message || 'Delete failed');
      }
    } catch (err) {
      alert('Error deleting image');
    }
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