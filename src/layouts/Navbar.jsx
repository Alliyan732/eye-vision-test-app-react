import { Link, Outlet, NavLink} from 'react-router-dom';
import React from 'react';


export default function Navbar() {
  return (
    <>
    {/* navbar */}
    <div className='w-full h-[60px] bg-gray-800 justify-center items-center flex mx -auto space-x-5'>
        <NavLink to='/' className='text-white text-[16px] hover:text-blue-500'>Color Blind Test</NavLink>
        <NavLink to='/vision_acuity_test' className='text-white text-[16px] hover:text-blue-500'>Vision Acuity Test</NavLink>
        <NavLink to='/contrast_sensitivity_test' className='text-white text-[16px] hover:text-blue-500'>Contrast Sensitivity Test</NavLink>
        <NavLink to='/astigmatism_test' className='text-white text-[16px] hover:text-blue-500'>Astigmatism Test</NavLink>
    </div>

    {/* outlet */}
    <div>
        <Outlet />
    </div>

    {/* footer */}
    <div className='w-full h-[50px] bg-gray-800 justify-center items-center flex mx -auto space-x-5'>
        {/* <div className='py-[1px] bg-white w-[80%] rounded-[3px] justify-center items-center'> */}
            <p className='text-white text-[13px] mx-auto font-semibold text-center'>© 2024 Eye Vision Tests. All Rights Reserved ~ Alliyan Alvi.</p>
        {/* </div> */}
    </div>

    </>
  )
}
