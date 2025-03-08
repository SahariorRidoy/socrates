import React from 'react';
import logo from  '../assets/logoIcon.png';
import logoLabel from  '../assets/Logolabel.png';
import searchIcon from '../assets/icon_search.png';
import sidebarIcon from '../assets/icon_sidebar-left.png';
const SidebarLeft = () => {
    return (
        <div className='p-3 w-[256px]'>
            <header className='flex justify-between items-center py-[6px] mb-8'>
                <div className='flex gap-[12.51px] items-center'>
                    <img src={logo} className='w-[29.59px] h-7' alt="Logo" />
                    <img src={logoLabel} className='w-24 h-[18px]' alt="Logo Label Socrates" />
                </div>
                <div className='flex gap-[12px]'>
                    <img src={searchIcon} className='w-6 h-6'  alt="A Search Icon" />
                    <img src={sidebarIcon} className='w-6 h-6' alt="Sidebar Icon" />
                </div>
            </header>
        </div>
    );
};

export default SidebarLeft;