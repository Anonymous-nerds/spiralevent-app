import React from 'react'
import img from '../../assets/events.png';
import img2 from '../../assets/eventss.png';

const Gallery = () => {
    return (
        <div id='gallery' className='max-w-[1140px] m-auto w-full px-2 py-10'>
            <h2 className='text-center text-5xl font-bold justify-center text-pink-800 p-4'>Gallery</h2>
            <div className='grid sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3  row-span-2'>
                    <img className='w-full h-full object-cover rounded-lg' src={img} alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover rounded-lg' src={img2} alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover rounded-lg' src={img} alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover rounded-lg' src={img2} alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover rounded-lg' src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gallery