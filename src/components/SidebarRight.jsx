import React from 'react';
import infoIcon from '../assets/icon_info-circle.png';
const SidebarRight = () => {
    return (
        <div className='w-[1116px] h-[868px] bg-[#2B2B2B] rounded-2xl px-5 pt-10 pb-5'>
            {/* Right Side content info  */}
            <div className='w-[636px] mx-auto rounded-full flex justify-center items-center bg-[#242424] py-2 pl-4 pr-3 text-sm'>
                <div className='flex gap-3 items-center'>
                    <img src={infoIcon} className='w-5 h-5' alt="" /><p>The web version does not display local chats. To access all features, please <span className='text-[#FB9937]'><button className='cursor-pointer'>install the app.</button></span></p>
                </div>
            </div>

            {/* Add FIles */}
            <div>
                
            </div>
        </div>

    );
};

export default SidebarRight;