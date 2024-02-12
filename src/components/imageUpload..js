import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Handle upload logic here, e.g., sending the image to a server
    if (selectedFile) {
      // Perform upload operation
      console.log("Selected File:", selectedFile);
    } else {
      // Show error or prompt user to select a file
      console.log("Please select a file.");
    }
  };

  return (
    <div>
      <h6>Upload Image</h6>
      <label htmlFor="file-upload" className="file-upload-label">
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <FaCloudUploadAlt className="upload-icon" />
        Choose a file
      </label>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUpload;
