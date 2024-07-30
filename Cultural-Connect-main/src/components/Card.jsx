import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({ item }) => {
    return (
        <div>
            <div className="max-w-screen-xl  p-5 sm:p-10 ">

                <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">

                    <Link to='/'>
                        <img className="w-full h-56  object-cover" src={item.picture} alt="Sunset in the mountains" />
                    </Link>
                    <div className="relative -mt-16 px-5 pt-5  bg-white mx-10 ">
                        <Link to='/' className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                            {item.name}
                        </Link>
                        <p className="text-gray-500 text-sm">
                            {item.location}
                        </p>
                        <p>
                            {item.description.substring(0,58)}...
                        </p>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Card
