// HeroSection.js
import React, { useState } from 'react';
import media from '../assets/Media.png';
import imagekucing from '../assets/hero-pic.png';
import SkeletonPage from './skeleton';
import BtnUpload from './btn-upload';

const HeroSection = ({ imageURL, uploadedFiles, loading, getRootProps, getInputProps }) => {
    console.log(uploadedFiles)
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    

    const handleDownload = async () => {
        console.log('handleDownload');
        try {
            setButtonClicked(true);
            setLoadingSpinner(true);
            const downloadAnchor = document.createElement('a');
            downloadAnchor.href = imageURL;
            downloadAnchor.download = uploadedFiles[0].name;
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            document.body.removeChild(downloadAnchor);
        } catch (error) {
            console.error('Error during download:', error);
        } finally {
            setTimeout(() => {
                setButtonClicked(false);

            }, 2000);
            setTimeout(() => {
                setLoadingSpinner(false);
            }, 90);
        }
    };
    return (
        <section className="hero-container">
            <div>
                {loading ? (
                    <SkeletonPage />
                ) : imageURL ? (
                    <div className="hasil-image">
                        <div className="hasil-image flex flex-col items-center">
                            <h1 className='text-5xl text-center font-bold'>Background Succesfully <br></br>Removed! 🎉</h1>
                            <div className='background-image  relative flex justify-center w-auto h-auto m-5' >
                                <img
                                    className='w-auto h-auto'
                                    src={imageURL}
                                    alt="Removed Background" />
                            </div>
                            <button className={`btn-download mt-12 ${buttonClicked ? 'opacity-80  scale-105' : ''}`} onClick={handleDownload} >
                                {loadingSpinner ? (
                                    <>
                                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clipPath="url(#clip0_20_446)">
                                                <path d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7 11L12 16L17 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 4V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_20_446">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Download Image
                                    </>
                                )}
                            </button>
                            <div className='mt-4 mb-28'>
                                <BtnUpload />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="image-background-remover lg:flex lg:mt-[150px] lg:mb-[178px] ">
                        <div className='flex lg:ml-[140px] lg:mr-[224px]'>
                            <img className='mb-10 mt10'
                                src={imagekucing} alt="fotokucing" />
                        </div>
                        <div className="remove-bg__content">

                            <h1 className="flex lg:flex-col text-3xl lg:text-5xl font-bold">
                                Free Image Background
                                <span className=" text-[#8C50D7] items-end flex mr-[100%] ml-2 lg:ml-0">Remover.</span>
                            </h1>
                            <p className="text-sm mt-6 lg:text-xl text-[#928A8A]">
                                Welcome to Cleary, the leading solution for transforming your images into perfect works of art. With our
                                advanced technology, we offer precision background removal and stunning image enhancement services.
                            </p>
                            <form
                                className='file-upload mt-4 lg:mt-14 mb-10'
                            >
                                <div {...getRootProps()} className='h-full flex flex-col items-center'>
                                    <div className='mt-6'>
                                        <BtnUpload />
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
                                    <p className='mt-16 mb-8'>Or Drag n Drop files here . . .</p>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

export default HeroSection;
