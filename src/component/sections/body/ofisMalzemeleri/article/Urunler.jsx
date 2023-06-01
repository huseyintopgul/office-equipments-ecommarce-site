import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const OfisUrunleri = () => {

    return (
        <div className="h-auto flex items-center justify-center">
            <div className='w-[80%] 2xl:w-[70%] my-5 relative'>
                <div className="flex items-center border-b-2 mb-2 border-black w-full h-14">
                    <span className="lg:text-2xl text-md font-medium tracking-wider">OFİS MALZEMELERİ</span>
                    {/* left arrow */}
                    <div className='slide-icons absolute right-10 lg:text-2xl text-sm cursor-pointer'>
                        <AiOutlineLeft />
                    </div>
                    {/* right arrow */}
                    <div className='slide-icons absolute  right-3 lg:text-2xl text-sm cursor-pointer'>
                        <AiOutlineRight />
                    </div>
                </div>
                <div className='flex justify-center items-center my-10 flex-wrap gap-5'>
                    <div className="md:w-[45%] lg:w-[18%] sm:h-[400px] md:h-auto flex flex-col md:my-7 2xl:my-16 items-center text-center">
                        <div className='sm:h-[250px] md:h-auto'>
                            <img className='h-full w-full' src="https://www.antaris.az/wp-content/uploads/2023/04/2061-Deli-wep.webp" alt="" />
                        </div>
                        <div className="mt-3 mx-4 font-medium">
                            <h2>Ürün Başlığı</h2>
                        </div>
                        <div className="font-bold text-[#d21937] my-2">
                            Ürün Fiyatı ₺
                        </div>
                        <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-10 text-white py-2 px-4 rounded-full cursor-pointer">
                            <a href="/"> Sepete Ekle</a>
                        </div>
                    </div>

                    <div className="md:w-[45%] lg:w-[18%] sm:h-[400px] md:h-auto flex flex-col md:my-7 2xl:my-16 items-center text-center">
                        <div className="sm:h-[250px] md:h-auto">
                            <img className='h-full' src="https://www.antaris.az/wp-content/uploads/2023/02/FO11010-wep.webp" alt="" />
                        </div>
                        <div className="mt-3 mx-4 font-medium">
                            <h2>Ürün Başlığı</h2>
                        </div>
                        <div className="font-bold text-[#d21937] my-2">
                            Ürün Fiyatı ₺
                        </div>
                        <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                            <a href="/"> Sepete Ekle</a>
                        </div>
                    </div>

                    <div className="md:w-[45%] lg:w-[18%] sm:h-[400px] md:h-auto flex flex-col md:my-7 2xl:my-16 items-center text-center">
                        <div className="sm:h-[250px] md:h-auto">
                            <img className='h-full' src="https://www.antaris.az/wp-content/uploads/2021/04/ff81378da10111e981183cd92b04d74e_dcd4a51b9c2611eb81b00050569bd7c0.jpg" alt="" />
                        </div>
                        <div className="mt-3 mx-4 font-medium">
                            <h2>Ürün Başlığı</h2>
                        </div>
                        <div className="font-bold text-[#d21937] my-2">
                            Ürün Fiyatı ₺
                        </div>
                        <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                            <a href="/"> Sepete Ekle</a>
                        </div>
                    </div>

                    <div className="md:w-[45%] lg:w-[18%] sm:h-[400px] md:h-auto flex flex-col md:my-7 2xl:my-16 items-center text-center">
                        <div className="sm:h-[250px] md:h-auto">
                            <img className='h-full' src="https://www.antaris.az/wp-content/uploads/2021/01/182711-Faber-Castell-wep.webp" alt="" />
                        </div>
                        <div className="mt-3 mx-4 font-medium">
                            <h2>Ürün Başlığı</h2>
                        </div>
                        <div className="font-bold text-[#d21937] my-2">
                            Ürün Fiyatı ₺
                        </div>
                        <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                            <a href="/"> Sepete Ekle</a>
                        </div>
                    </div>

                    <div className="md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                        <div className="w-full">
                            <img src="https://www.antaris.az/wp-content/uploads/2021/03/183102-Faber-Castell-wep.webp" alt="" />
                        </div>
                        <div className="mt-3 mx-4 font-medium">
                            <h2>Ürün Başlığı</h2>
                        </div>
                        <div className="font-bold text-[#d21937] my-2">
                            Ürün Fiyatı ₺
                        </div>
                        <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                            <a href="/"> Sepete Ekle</a>
                        </div>
                    </div>

                    <div className="md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                        <div className="w-full">
                            <img src="https://www.antaris.az/wp-content/uploads/2023/02/950-MAS-2-wep.webp" alt="" />
                        </div>
                        <div className="mt-3 mx-4 font-medium">
                            <h2>Ürün Başlığı</h2>
                        </div>
                        <div className="font-bold text-[#d21937] my-2">
                            Ürün Fiyatı ₺
                        </div>
                        <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                            <a href="/"> Sepete Ekle</a>
                        </div>
                    </div>

                    <div className="md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                        <div className="w-full">
                            <img src="https://www.antaris.az/wp-content/uploads/2020/04/Sko%C3%A7-dispenseri-640-Mas-AN-00-00013184.jpg" alt="" />
                        </div>
                        <div className="mt-3 mx-4 font-medium">
                            <h2>Ürün Başlığı</h2>
                        </div>
                        <div className="font-bold text-[#d21937] my-2">
                            Ürün Fiyatı ₺
                        </div>
                        <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                            <a href="/"> Sepete Ekle</a>
                        </div>
                    </div>

                    <div className="md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                        <div className="w-full">
                            <img src="https://www.antaris.az/wp-content/uploads/2021/04/01f1e6a4aa0711e981193cd92b04d74a_bf83f73a9c2b11eb81b00050569bd7c0.jpg" alt="" />
                        </div>
                        <div className="mt-3 mx-4 font-medium">
                            <h2>Ürün Başlığı</h2>
                        </div>
                        <div className="font-bold text-[#d21937] my-2">
                            Ürün Fiyatı ₺
                        </div>
                        <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                            <a href="/"> Sepete Ekle</a>
                        </div>
                    </div>

                    <div className="md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                        <div className="w-full">
                            <img src="https://www.antaris.az/wp-content/uploads/2020/10/190-Mas-mavi-wep-2.webp" alt="" />
                        </div>
                        <div className="mt-3 mx-4 font-medium">
                            <h2>Ürün Başlığı</h2>
                        </div>
                        <div className="font-bold text-[#d21937] my-2">
                            Ürün Fiyatı ₺
                        </div>
                        <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                            <a href="/"> Sepete Ekle</a>
                        </div>
                    </div>

                    <div className="md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                        <div className="w-full">
                            <img src="https://www.antaris.az/wp-content/uploads/2020/07/183604-faber-castell-wep-2.webp" alt="" />
                        </div>
                        <div className="mt-3 mx-4 font-medium">
                            <h2>Ürün Başlığı</h2>
                        </div>
                        <div className="font-bold text-[#d21937] my-2">
                            Ürün Fiyatı ₺
                        </div>
                        <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                            <a href="/"> Sepete Ekle</a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default OfisUrunleri;
