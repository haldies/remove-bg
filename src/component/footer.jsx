const FooterPage = () => {
    return (<>
        <footer className="footer">
            <div className="footer__container lg:ml-[60px] lg:mr-[60px] ">
                <div className="footer__content">
                    <div className="logo-footer  mt-14">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0_112_111)">
                                <path d="M16 5.33337H8.00001C7.29277 5.33337 6.61449 5.61433 6.11439 6.11442C5.61429 6.61452 5.33334 7.2928 5.33334 8.00004V24C5.33334 24.7073 5.61429 25.3856 6.11439 25.8857C6.61449 26.3858 7.29277 26.6667 8.00001 26.6667H18.6667" stroke="#8C50D7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M24 26.6667V4" stroke="#8C50D7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 8L24 4L28 8" stroke="#8C50D7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_112_111">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h2 className="text-white">Cleary</h2>
                        <p className="logo__description">Upscale & Background Remover</p>
                    </div>
                    <div className="lg:flex lg:w-full justify-between">
                        <div className="flex  flex-col  mt-16 ">
                            <a className="link__footer" href="">Navigation</a>
                            <a className="link__footer mt-5" href="">Home</a>
                            <a className="link__footer mt-5" href="">Image Upcale</a>
                        </div>
                        <div className=" mt-16 lg:max-w-[488px] lg:w-full">
                            <a className="link__footer" href=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.4995 22.0647C9.48071 22.0647 4.6875 16.8133 4.6875 11.2299C4.6875 6.85893 8.18448 3.3147 12.4995 3.3147C16.8145 3.3147 20.3125 6.85893 20.3125 11.2299C20.3125 16.8133 15.5193 22.0647 12.4995 22.0647Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.1148 11.3465C15.1148 9.90763 13.949 8.74176 12.5101 8.74176C11.0724 8.74176 9.90649 9.90763 9.90649 11.3465C9.90649 12.7842 11.0724 13.9501 12.5101 13.9501C13.949 13.9501 15.1148 12.7842 15.1148 11.3465Z" fill="#131313" />
                            </svg>
                                Jalan Raya Cibolang, Nusa Putra University</a>
                            <a className="link__footer mt-6" href=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9721 13.1461C11.9721 13.1461 -0.503582 10.5653 3.83178 8.06265C7.49027 5.95088 20.0986 2.3201 21.86 3.25823C22.7981 5.01968 19.1674 17.628 17.0556 21.2865C14.5529 25.6218 11.9721 13.1461 11.9721 13.1461Z" fill="white" />
                            </svg>enquiry@cleary.com</a>
                            <a className="link__footer mt-6" href=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.54213 16.647C1.35673 9.46078 2.37848 6.17008 3.13594 5.10967C3.23325 4.93828 5.6317 1.34793 8.20266 3.45437C14.5842 8.70998 6.50528 7.96692 11.8639 13.3265C17.2237 18.6849 16.4806 10.6063 21.7353 16.9865C23.8418 19.5585 20.2513 21.9568 20.081 22.053C19.0206 22.8116 15.7286 23.8333 8.54213 16.647Z" fill="white" />
                            </svg>+62 0123983741 (Cleary)</a>
                        </div>
                    </div>
                    <div className="w-full text-center mt-14 mb-8">
                        <p className="text-white">© Copyright - Cleary 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    </>);
}

export default FooterPage;