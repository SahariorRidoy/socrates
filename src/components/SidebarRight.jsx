import React from 'react';
import infoIcon from '../assets/icon_info-circle.png';
import infoCloud from '../assets/App_Icon.png';
import dragIcon from '../assets/DragDropIcons.png';
import urlIcon from '../assets/UrlIcons.png';
import dropboxIcon from '../assets/DropboxIcons.png';
import filesOrangeIcon from '../assets/Filesorange.png';
import filesBlueIcon from '../assets/Filesblue.png';
import containerIcon from '../assets/Container.png';
import driveIcon from '../assets/DriveIcons.png';
import infoIcons from '../assets/info-circle.png';
import closedIcon from '../assets/icon=close small.png';
import deepDiveIcon from '../assets/icon-deep-dive.png';
import tooltipIcon from '../assets/Tooltip.png';

const SidebarRight = () => {
    return (
        <div className='w-[1116px] h-[868px] bg-[#2B2B2B] rounded-2xl px-5 pt-10 pb-5'>
            {/* Right Side content info  */}
            <div className='w-[636px] mx-auto rounded-full flex justify-center items-center bg-[#242424] py-2 pl-4 pr-3 text-sm mb-10'>
                <div className='flex gap-3 items-center'>
                    <img src={infoIcon} className='w-5 h-5' alt="Info Icon" />
                    <p>
                        The web version does not display local chats. To access all features, please
                        <span className='text-[#FB9937]'>
                            <button className='cursor-pointer ml-1 transition-all duration-300 hover:underline hover:text-[#ffae5c]'> install the app.</button>
                        </span>
                    </p>
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
                    <div className="cursor-pointer p-6 flex gap-[6px] bg-[#242424] rounded-[20px] items-center w-[390px] transition-all duration-300 hover:bg-[#303030] hover:scale-105">
                        <div>
                            <img src={dragIcon} className='w-[66px] h-[66px]' alt="Drag Icon" />
                        </div>
                        <h2 className='text-lg leading-[23.4px] font-semibold'>Drag & drop local files here, <br /> or click to select</h2>
                    </div>

                    <div className="p-6 flex gap-[6px] bg-[#242424] rounded-[20px] items-center w-[390px] transition-all duration-300 hover:bg-[#303030] hover:scale-105">
                        <div>
                            <img src={urlIcon} className='w-[66px] h-[66px]' alt="URL Icon" />
                        </div>
                        <div>
                            <h2 className='text-lg leading-[23.4px] font-semibold mb-2'>Enter in a public URL:</h2>
                            <div className='relative flex items-center'>
                                <input type="text" className='bg-[#353535] h-10 text-sm leading-[18.9px] opacity-60 rounded-full py-1 pl-5 w-[264px]' placeholder="https://example.com/file.pdf" />
                                <button className='cursor-pointer absolute right-[2px] w-[60px] h-[36px] bg-[#ffffff26] text-xs font-semibold rounded-[20px] transition-all duration-300 hover:bg-[#ffffff40]'>Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Buttons */}
                <div className="flex justify-center gap-2">
                    <div className="cursor-pointer p-6 flex gap-[6px] bg-[#242424] rounded-[20px] items-center w-[390px] transition-all duration-300 hover:bg-[#303030] hover:scale-105">
                        <div>
                            <img src={dropboxIcon} className='w-[66px] h-[66px]' alt="Dropbox Icon" />
                        </div>
                        <h2 className='text-lg leading-[23.4px] font-semibold'>Add files from Dropbox</h2>
                    </div>

                    <div className="cursor-pointer p-6 flex gap-[6px] bg-[#242424] rounded-[20px] items-center w-[390px] transition-all duration-300 hover:bg-[#303030] hover:scale-105">
                        <div>
                            <img src={driveIcon} className='w-[66px] h-[66px]' alt="Drive Icon" />
                        </div>
                        <h2 className='text-lg leading-[23.4px] font-semibold'>Add files from Google Drive</h2>
                    </div>
                </div>
            </div>

            {/* Selected FIle Field */}
            <div className='w-[788px] mx-auto mt-5 bg-[#242424] rounded-[32px] p-4'>
                <div className='flex items-center gap-5'>
                    <div className='flex gap-4 bg-[#2B2B2B] rounded-[20px] py-[7px] pl-3 pr-[7px]'>
                        <div className='flex gap-2 items-center'>
                            <img src={filesOrangeIcon} className='w-[14px] h-[18px]' alt="Files Icon" />
                            <p>Report_file.pdf</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={containerIcon} alt="Container Icon" />
                            <p>Force OCR</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={infoIcons} alt="info icon" className="cursor-pointer hover:opacity-80 hover:scale-110 transition duration-200" />
                            <img src={closedIcon} alt="close icon" className="cursor-pointer hover:opacity-80 hover:scale-110 transition duration-200" />
                        </div>
                    </div>
                    <div className='flex gap-4 bg-[#2B2B2B] rounded-[20px] py-[7px] pl-3 pr-[7px]'>
                        <div className='flex gap-2 items-center'>
                            <img src={filesBlueIcon} className='w-[14px] h-[18px]' alt="Files Icon" />
                            <p>Report_file.pdf</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={containerIcon} alt="Container Icon" />
                            <p>Force OCR</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={infoIcons} alt="info icon" className="cursor-pointer hover:opacity-80 hover:scale-110 transition duration-200" />
                            <img src={closedIcon} alt="close icon" className="cursor-pointer hover:opacity-80 hover:scale-110 transition duration-200" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Button */}
            <div className='flex justify-center items-center gap-4 mt-[60px]'>
                <button className='cursor-pointer px-[101px] py-5 border rounded-[56px] border-[#FB9937] font-semibold 
        hover:bg-gradient-to-b from-[#FFBF00] to-[#FB9937] hover:text-white transition duration-300'>
                    Start
                </button>
                <p>or</p>
                <button className="cursor-pointer flex items-center gap-2 border border-[#ffffff4d] pl-[32px] pr-10 py-[22px] font-semibold rounded-[56px] 
        bg-gradient-to-b from-[#FFBF00] to-[#FB9937] shadow-[0px_79px_22px_0px_rgba(36,36,36,0.00), 
        0px_50px_20px_0px_rgba(36,36,36,0.03), 
        0px_28px_17px_0px_rgba(36,36,36,0.11), 
        0px_13px_13px_0px_rgba(36,36,36,0.18), 
        0px_3px_7px_0px_rgba(36,36,36,0.21)]
        hover:scale-105 hover:shadow-lg transition duration-300">
                    <img src={deepDiveIcon} alt="Deep Dive icon" /> Start with Deep Dive
                </button>
                <div className="relative group">
                    <img src={tooltipIcon} alt="Tooltip Icon" className="cursor-pointer hover:scale-110 transition duration-300" />

                    {/* Tooltip */}
                    <div className="w-[256px] rounded-[20px] absolute left-32 -bottom-[110px] mb-2 p-3 text-xs text-white bg-[#1E1E1E] opacity-0 transition-opacity duration-300 group-hover:opacity-100 transform -translate-x-1/2 
            group-hover:scale-105">
                        Deep Dive processes documents section by section for "unlimited" context, enabling complete answers. Run once per chat to unlock Table AI and Prompt Loops
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SidebarRight;