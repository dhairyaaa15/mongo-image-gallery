# Project Title: Image Gallery Backend

This backend application is designed to support an image gallery where users can upload images, which are then converted to base64 format and stored in a MongoDB database. The application provides endpoints for uploading images and retrieving the gallery of uploaded images.

## Features

- Upload images and convert them to base64 format.
- Store image data in MongoDB.
- Retrieve all uploaded images for display in the gallery.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Multer (for handling file uploads)
- dotenv (for environment variables)

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the root directory and add your MongoDB connection string:
     ```
     MONGODB_URI=<your_mongodb_connection_string>
     ```

4. **Start the server:**
   ```
   npm start
   ```

5. **API Endpoints:**
   - `POST /api/images/upload`: Upload an image.
   - `GET /api/images`: Retrieve all uploaded images.

## Usage

Once the server is running, you can use tools like Postman or cURL to interact with the API. Use the upload endpoint to send images, and the gallery endpoint to retrieve the list of uploaded images.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.