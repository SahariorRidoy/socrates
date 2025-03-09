import React from 'react';
import logo from '../assets/logoIcon.png';
import logoLabel from '../assets/Logolabel.png';
import searchIcon from '../assets/icon_search.png';
import sidebarIcon from '../assets/icon_sidebar-left.png';
import plusIcon from '../assets/left_plus-icon.png';
import flowIcon from '../assets/icon_flow.png';
import profileIcon from '../assets/UserAvatar.png';
import settingIcon from '../assets/icon_settings.png';
const SidebarLeft = () => {
    return (
        <div className='p-3 w-[256px]'>
            <div className='flex flex-col justify-between gap-[456px]'>
                {/* left top */}
                <div>
                    <header className='flex justify-between items-center py-[6px] mb-8'>
                        <div className='flex gap-[12.51px] items-center'>
                            <img src={logo} className='w-[29.59px] h-7' alt="Logo" />
                            <img src={logoLabel} className='w-24 h-[18px]' alt="Logo Label Socrates" />
                        </div>
                        <div className='flex gap-[12px]'>
                            <img src={searchIcon} className='w-6 h-6' alt="A Search Icon" />
                            <img src={sidebarIcon} className='w-6 h-6' alt="Sidebar Icon" />
                        </div>
                    </header>
                    <div className="flex border mb-3 border-[#ffffff26] justify-center items-center px-6 py-[10.5px] rounded-[56px]">
                        <div className="flex items-center gap-1">
                            <img src={plusIcon} alt="Plus Icon" />
                            <p className="text-sm font-semibold">Add Folder</p>
                        </div>
                    </div>
                    <div className="flex bg-[#ffffff26] justify-center items-center px-6 py-[10.5px] rounded-[56px]">
                        <div className="flex items-center gap-1">
                            <img src={plusIcon} alt="Plus Icon" />
                            <p className="text-sm font-semibold">Create chat</p>
                        </div>
                    </div>
                </div>
                {/* left bottom side */}
                <div>
                    <div className='bg-[#363636] p-4 rounded-[12px]'>
                        <p className='text-base font-semibold'>Upgrade to Premium</p>
                        <p className='text-[12px] text-[#868686]'>Make the most of all features!</p>
                        <div className="flex border mt-3 border-[#F37F0C] justify-center items-center px-6 py-[10.5px] rounded-[56px]">
                            <div>
                                <p className="text-sm font-semibold">Create chat</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='flex items-center  gap-2'>
                            <img src={flowIcon} className='w-9 h-9 bg-[#2B2B2B] p-3 rounded-full' alt="Flow Icon" />
                            <p className='text-sm font-medium'>Flow AI Templates</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='flex items-center justify-between '>
                            <div className='flex  gap-2 items-center justify-between'>
                                <img src={profileIcon} className='w-9 h-9 ' alt="User Avatar Icon" />
                                <p className='text-sm font-medium'>Jessica Mills</p>
                            </div>
                            <div>
                                <img src={settingIcon} alt=" Setting Icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarLeft;