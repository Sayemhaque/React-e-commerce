import React from 'react';
import Logo from '../images/Logo.svg'
const Header = () => {
    return (
        <div className='bg-slate-800 py-5 sticky top-0 z-50 w-full'>
           <div className='md:max-w-[1100px] mx-auto px-5 lg:px-0'>
              <div className='md:flex  justify-between'>
                {/* Logo */}
              <img src={Logo} className="w-50 h-50" alt="" />
              {/* Links */}
               <ul className='md:flex  mt-8 md:mt-0 space-y-7 md:space-y-0  text-gray-100 gap-5 items-center font-bold'>
                <li><a href="#">Order</a></li>
                <li><a href="#">Order Review</a></li>
                <li><a href="#">Manage Inventory</a></li>
                <li><a href="#">Log In</a></li>
               </ul>
              </div>
           </div>
        </div>
    );
};

export default Header;