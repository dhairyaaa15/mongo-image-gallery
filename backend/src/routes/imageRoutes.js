const express = require('express');
const { uploadImage, getImages, deleteImage } = require('../controllers/imageController');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/upload', upload, uploadImage);
router.get('/gallery', getImages);
router.delete('/:id', deleteImage);

module.exports = router;