import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import media from '../assets/media.png';


const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
  });
  return (
    <form 
    className='file-upload'
    >
      <div {...getRootProps()} className='w-full h-full flex flex-col items-center'>
        <div className='mt-6'>
          <p>Upload your image here</p>
        </div>
        <input {...getInputProps()} />
        <ul>
          {uploadedFiles.map((file) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
        <img
          className='mt-16'
          src={media}
          alt=""
          width="75"
          height="75"
        />
        <p className='mt-16 mb-8'>Drag and drop files here or click to browse.</p>  
      </div>
    </form>
  );
};
export default FileUpload;