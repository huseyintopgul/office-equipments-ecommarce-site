import { useEffect, useState } from "react"
import urunler from "./urunlerData"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { RxDotFilled } from 'react-icons/rx';

const Urunler = () => {


    return (
        <div className="w-full flex justify-center m-auto group ">
            <div className='slide-zoom w-[80%] h-auto my-10 relative'>
                <div className="slide-zoom-image w-full h-[330px] "
                    style={{
                        backgroundImage: `url(${slides[currentIndex].url})`,
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                ></div>
                {/* left arrow */}
                <div className='slide-icons hidden group-hover:block absolute -translate-x-0 translate-y-[-450%] left-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <AiOutlineLeft size={25} />
                </div>
                {/* right arrow */}
                <div className='slide-icons hidden group-hover:block absolute -translate-x-0 translate-y-[-450%] right-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <AiOutlineRight size={25} />
                </div>
                <div className="flex h-[30px] mt-3 items-center justify-center py-3">
                    {slides.map((slide, slideIndex) => (
                        <div onClick={() => goToSlide(slideIndex)} key={slideIndex} className="text-2xl cursor-pointer transition-slow">
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Urunler
