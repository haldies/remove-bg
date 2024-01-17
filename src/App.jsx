
import './App.css';
import React, { useState , useEffect} from 'react';
import FooterPage from './component/footer';
import { useDropzone } from 'react-dropzone';
import Header from './component/header';
import HeroSection from './component/hero-section';


const App = () => {
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      submitHandler();
    }
  }, [uploadedFiles]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
  });



  const submitHandler = async () => {
    const image = uploadedFiles[0];
    console.log("isi" + image);

    const formData = new FormData();
    formData.append('image_file', image);
    formData.append('size', 'auto');

    const apiKey = "4ssphDdTRnqTfVxM8g4w8AEe";

    try {
      setLoading(true);
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': apiKey,
        },
        body: formData,
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to remove background');
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageURL(url);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
 

  return (
    <>
      <Header />
      <main>
        <HeroSection
          imageURL={imageURL}
          uploadedFiles={uploadedFiles}
          loading={loading}
         
          getRootProps={getRootProps}
          getInputProps={getInputProps}
        />
      </main>
      <FooterPage />
    </>
  );

}

export default App;


