import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { RxDotFilled } from 'react-icons/rx';

const HeaderSlide = () => {
    const slides = [
        { url: 'https://images.pexels.com/photos/5417636/pexels-photo-5417636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { url: 'https://images.pexels.com/photos/4087394/pexels-photo-4087394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { url: 'https://images.pexels.com/photos/5499114/pexels-photo-5499114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const lastSlide = currentIndex === slides.length - 1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };


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
                <div onClick={prevSlide} className='slide-icons hidden group-hover:block absolute -translate-x-0 translate-y-[-450%] left-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <AiOutlineLeft size={25} />
                </div>
                {/* right arrow */}
                <div onClick={nextSlide} className='slide-icons hidden group-hover:block absolute -translate-x-0 translate-y-[-450%] right-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
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
    );
}

export default HeaderSlide;