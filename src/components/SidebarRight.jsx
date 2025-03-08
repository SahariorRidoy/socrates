import React from 'react';
import infoIcon from '../assets/icon_info-circle.png';
import infoCloud from '../assets/App_Icon.png';
import dragIcon from '../assets/DragDropIcons.png';
import urlIcon from '../assets/UrlIcons.png';
import dropboxIcon from '../assets/DropboxIcons.png';
import driveIcon from '../assets/DriveIcons.png';

const SidebarRight = () => {
    return (
        <div className='w-[1116px] h-[868px] bg-[#2B2B2B] rounded-2xl px-5 pt-10 pb-5'>
            {/* Right Side content info  */}
            <div className='w-[636px] mx-auto rounded-full flex justify-center items-center bg-[#242424] py-2 pl-4 pr-3 text-sm mb-10'>
                <div className='flex gap-3 items-center'>
                    <img src={infoIcon} className='w-5 h-5' alt="Info Icon" /><p>The web version does not display local chats. To access all features, please <span className='text-[#FB9937]'><button className='cursor-pointer'>install the app.</button></span></p>
                </div>
            </div>

            {/* Add FIles to Cloud */}
            <div className='relative mb-6 '>
                <h1 className='text-[54px] text-center font-medium tracking-[-1.62px]'>Add Files to <span className='ml-20'>Cloud Chat</span></h1>
                <div className='absolute right-[488px] top-0'>
                    <img src={infoCloud} alt="Cloud Icon" />
                </div>
            </div>
            <div className='text-center mb-[60px]'>
                <p className='text-sm font-semibold tracking-[.14px] text-[#B7B7B7]'>Your files will not be stored on our servers and no AI models will be trained.</p>
                <p className='text-sm font-semibold tracking-[.14px] text-[#F37F0C]'>Supported File Types: .docx, .pdf, .epub, and many text filetypes</p>
            </div>
            {/* Button Groups */}
            <div className='flex flex-col gap-2 max-w-[806px] mx-auto'>
                {/* Top Buttons */}
                <div className="flex justify-center gap-2">
                    <div className="cursor-pointer p-6 flex gap-[6px] bg-[#242424] rounded-[20px] items-center w-[390px]">
                        <div>
                            <img src={dragIcon} className='w-[66px] h-[66px]' alt="Drag Icon" />
                        </div>
                        <h2 className='text-lg leading-[23.4px] font-semibold'>Drag & drop local files here, <br /> or click to select</h2>
                    </div>

                    <div className="p-6 flex gap-[6px] bg-[#242424] rounded-[20px] items-center w-[390px]">
                        <div>
                            <img src={urlIcon} className='w-[66px] h-[66px]' alt="URL Icon" />
                        </div>
                        <div>
                            <h2 className='text-lg leading-[23.4px] font-semibold mb-2'>Enter in a public URL:</h2>
                            <div className='relative flex items-center'>
                                <input type="text" className='bg-[#353535] h-10 text-sm leading-[18.9px] opacity-60 rounded-full py-1 pl-5 w-[264px]' placeholder="https://example.com/file.pdf" />
                                <button className='cursor-pointer absolute right-[2px] w-[60px] h-[36px] bg-[#ffffff26] text-xs font-semibold rounded-[20px]'>Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Buttons */}
                <div className="flex justify-center gap-2">
                    <div className=" cursor-pointer p-6 flex gap-[6px] bg-[#242424] rounded-[20px] items-center w-[390px]">
                        <div>
                            <img src={dropboxIcon} className='w-[66px] h-[66px]' alt="Drag Icon" />
                        </div>
                        <h2 className='text-lg leading-[23.4px] font-semibold'>Add files from Dropbox</h2>
                    </div>

                    <div className="cursor-pointer p-6 flex gap-[6px] bg-[#242424] rounded-[20px] items-center w-[390px]">
                        <div>
                            <img src={driveIcon} className='w-[66px] h-[66px]' alt="Drag Icon" />
                        </div>
                        <h2 className='text-lg leading-[23.4px] font-semibold'>Add files from Google Drive</h2>
                    </div>
                </div>
            </div>
            {/* Selected FIle Field */}
            <div className='w-[788px] mx-auto mt-5 bg-[#242424] rounded-[32px] p-4'>

            </div>
        </div>

    );
};

export default SidebarRight;