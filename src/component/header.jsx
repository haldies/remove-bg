// Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="nav-container flex items-center lg:ml-[60px] lg:mr-[60px] ">
            <div className="icon-Arrrows">
                <dir className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_20_542)">
                            <path d="M12 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H14" stroke="#8C50D7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 20V3" stroke="#8C50D7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 6L18 3L21 6" stroke="#8C50D7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_20_542">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h1>Cleary</h1>
                </dir>
                <p className='text-sm'>Upscale & Background Remover</p>
            </div>
            <div className='flex lg:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_895_43634)">
                        <path d="M4 8H20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 16H20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_895_43634">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            </div>

            <div className="text-Image-Upscale hidden lg:flex">
                <h3>Image Upscale</h3>
                <p className="ml-2 px-1 py-[2px] flex items-center rounded-md text-white text-[12px] bg-[#EA4D4D]">NEW</p>
            </div>
        </header>
    );
}

export default Header;
