import React from 'react'
import tribal from '../assets/tribal.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className=''>
            
            <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">


                <div class="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img class="h-full w-full object-cover" src={tribal} alt="Winding mountain road"/>
                </div>


                
                <div
                    class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                    
                    <div class="flex flex-col p-12 md:px-16">
                        <h2 class="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Winding Mountain Road</h2>
                        <p class="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        
                        <div class="mt-8">
                            <Link to='/quiz'
                                class="px-4 py-2 border-2 border-green-500 text-white bg-green-500 shadow-xl  hover:text-green-500 hover:bg-white">
                                Take a quiz</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero
