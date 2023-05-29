import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


const Urunler = () => {
    const slides = [
        {},
        {},
        {},
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


    return (
        <div className="w-full flex justify-center m-auto group ">
            <div className='w-[80%] h-auto my-10 relative'>
                <div className="flex items-center bg-green-200 border-b-2 mb-2 border-black w-full h-14">
                    <span className="text-2xl font-medium tracking-wider">OFİS MALZEMELERİ</span>
                    {/* left arrow */}
                    <div onClick={prevSlide} className='slide-icons absolute right-14 text-2xl cursor-pointer'>
                        <AiOutlineLeft size={25} />
                    </div>
                    {/* right arrow */}
                    <div onClick={nextSlide} className='slide-icons absolute  right-3 text-2xl cursor-pointer'>
                        <AiOutlineRight size={25} />
                    </div>
                </div>
                <div className='w-[80%] h-auto mt-12'>
                    <div className="w-[22%] h-auto  flex flex-col bg-slate-400 items-center text-center">
                        <div className="w-full">
                            <img src="https://www.antaris.az/wp-content/uploads/2023/04/2061-Deli-wep.webp" alt="" />
                        </div>
                        <div className="mt-3 mx-4 font-medium">
                            <h2>Ürün Başlığı</h2>
                        </div>
                        <div className="font-bold text-[#d21937] my-2">
                            Ürün Fiyatı ₺
                        </div>
                        <div className="urun-button bg-[#d21937] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                            <a href="/"> Sepete Ekle</a>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Urunler
