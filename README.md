# Image Gallery with MongoDB

A full-stack web application that allows users to upload, view, and manage images stored in MongoDB as base64 data.

## What is this project?

This is a modern image gallery application built with:
- **Frontend**: React + Vite + TailwindCSS with a beautiful neumorphism design
- **Backend**: Node.js + Express.js + MongoDB
- **Storage**: Images are converted to base64 and stored directly in MongoDB

## How it works

1. **Upload**: Users can drag & drop or click to upload images
2. **Storage**: Images are converted to base64 format and stored in MongoDB
3. **Display**: Images are retrieved and displayed in a responsive gallery grid
4. **Management**: Users can view image details in a modal and delete images

## Use Cases

- Personal photo gallery
- Small business product showcase
- Team document/image sharing
- Quick image storage and sharing solution
- Learning project for full-stack development

## How to Run

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database (local or cloud like MongoDB Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/dhairyaaa15/mongo-image-gallery
cd Images_Mongo
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:
```bash
npm start
# or for development with auto-restart
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

### 4. Access the Application
- Frontend: http://localhost:5173 (or the port shown in terminal)
- Backend API: http://localhost:5000

## Features

- ✅ Drag & drop image upload
- ✅ Click to browse and upload
- ✅ Responsive gallery grid
- ✅ Image preview modal
- ✅ Delete images
- ✅ Recent upload preview
- ✅ Beautiful neumorphism UI design
- ✅ File size validation (5MB limit)
- ✅ Image format validation

## API Endpoints

- `POST /api/images/upload` - Upload an image
- `GET /api/images/gallery` - Get all images
- `DELETE /api/images/:id` - Delete an image
- `GET /health` - Health check

## Tech Stack

**Frontend:**
- React 19
- Vite
- TailwindCSS
- Lucide React (icons)
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (file handling)
- CORS

## Project Structure
```
Images_Mongo/
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   └── package.json
├── backend/           # Node.js backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── ...
│   └── package.json
└── README.md
```