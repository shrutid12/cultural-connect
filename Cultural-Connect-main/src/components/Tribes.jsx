import React from 'react'
import Card from './Card'
import tribe from '../store'
const Tribes = () => {
    const data = tribe
    return (
        <div className='lg:px-20 px-3 py-20'>
            <div className='text-center text-5xl uppercase'>Tribals</div>
            <div className='text-center capitalize text-2xl'>Honoring Vibrant Tribal Cultures.</div>

            <div className="grid grid-cols-1 lg:grid-cols-3">
                {
                    data && data.map((item, index) => (
                        <Card item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Tribes
