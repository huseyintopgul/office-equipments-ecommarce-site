import React from 'react'

const Banner2Urunler = () => {
    return (
        <div>
            <div className='w-full flex items-center justify-center my-10 h-[500px]'>
                <div className='flex w-[80%] h-[400px] my-10 gap-5'>
                    <div className='banner-left w-[33%] bg-red-500'>
                        left
                    </div>
                    <div className='banner-middle w-[33%] bg-yellow-600'>
                        middle
                    </div>
                    <div className='banner-right w-[33%]  bg-green-200'>
                        rigth
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner2Urunler
