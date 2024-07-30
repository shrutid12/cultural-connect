import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineQuiz } from "react-icons/md";
import { BsTranslate } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate=useNavigate();
    return (
        <div>

            <nav className="flex justify-between px-20 py-10 items-center bg-white">
                <h1 className="text-xl text-gray-800 ">Clutural Connect</h1>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <div className='relative'>
                            <input className="  ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..." />
                            <div className='absolute top-10 left-0 shadow-2xl w-full h-full'></div>
                        </div>

                    </div>
                    <ul className="flex items-center space-x-6">
                        
                        <li className='text-xl' onClick={()=>navigate('/')}>
                            <IoHomeOutline/>
                        </li>
                        <li className='text-xl' onClick={()=>navigate('/translate')}>
                            <BsTranslate/>
                        </li>
                        <li className='text-xl' onClick={()=>navigate('/quiz')}>
                            <MdOutlineQuiz/>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
