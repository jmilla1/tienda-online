import React, { useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebaseConfig';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    try {
      const storageRef = ref(storage, file.name);
      await uploadBytes(storageRef, file);
      alert("File uploaded successfully.");
    } catch (error) {
      console.error("Error uploading file: ", error);
      alert("Error uploading file.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Upload File</h2>
      <input type="file" onChange={handleChange} />
      <button className="btn btn-success ml-3" onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
