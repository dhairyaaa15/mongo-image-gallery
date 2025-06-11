const Image = require('../models/Image');

const uploadImage = async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Create base64 data URL with proper format
    const base64Image = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
    
    const newImage = new Image({
      name: file.originalname,
      size: file.size,
      data: base64Image,
      uploadDate: new Date(),
    });

    await newImage.save();
    
    // Return formatted response for frontend
    const responseImage = {
      id: newImage._id,
      name: newImage.name,
      size: newImage.size,
      uploadDate: newImage.uploadDate.toLocaleDateString(),
      src: newImage.data // This will be the base64 data URL
    };
    
    res.status(201).json({ 
      message: 'Image uploaded successfully', 
      image: responseImage 
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Error uploading image', error: error.message });
  }
};

const getImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ uploadDate: -1 });
    
    // Format images for frontend
    const formattedImages = images.map(img => ({
      id: img._id,
      name: img.name,
      size: img.size,
      uploadDate: img.uploadDate.toLocaleDateString(),
      src: img.data
    }));
    
    res.status(200).json(formattedImages);
  } catch (error) {
    console.error('Get images error:', error);
    res.status(500).json({ message: 'Error retrieving images', error: error.message });
  }
};

const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedImage = await Image.findByIdAndDelete(id);
    
    if (!deletedImage) {
      return res.status(404).json({ message: 'Image not found' });
    }
    
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ message: 'Error deleting image', error: error.message });
  }
};

module.exports = {
  uploadImage,
  getImages,
  deleteImage
};