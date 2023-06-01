import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const KasaUrunler = () => {

    return (
        <div>
            <div className="h-auto flex items-center justify-center mb-14">
                <div className='w-[80%] 2xl:w-[70%] my-5 relative'>
                    <div className="flex items-center border-b-2 mb-2 border-black w-full h-14">
                        <span className="lg:text-2xl text-md font-medium tracking-wider">KASALAR</span>
                        {/* left arrow */}
                        <div className='slide-icons absolute right-10 lg:text-2xl text-sm cursor-pointer'>
                            <AiOutlineLeft />
                        </div>
                        {/* right arrow */}
                        <div className='slide-icons absolute  right-3 lg:text-2xl text-sm cursor-pointer'>
                            <AiOutlineRight />
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center my-10 flex-wrap gap-5'>
                        <div className="relative md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                            <div className="w-full ">
                                <img src="https://www.antaris.az/wp-content/uploads/2022/07/5.MSR_.50.E-RED.1.webp" alt="" />
                            </div>
                            <div className="mt-3 mx-4 font-medium">
                                <h2>Ürün Başlığı</h2>
                            </div>
                            <div className="font-bold  my-2 space-x-4">
                                <del className=' text-slate-300 font-normal '>300 ₺</del>
                                <span className='text-[#d21937]'>220 ₺</span>
                            </div>
                            <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                                <a href="/"> Sepete Ekle</a>
                            </div>
                            <div className='indirim absolute left-0 top-5 text-center flex items-center justify-center bg-[#d21937] text-white rounded-full w-[50px] h-[50px]'>
                                -%10
                            </div>
                        </div>

                        <div className="md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                            <div className="w-full">
                                <img src="https://www.antaris.az/wp-content/uploads/2021/10/CL-III.50.K.E-Gold-open-1200x1200.webp" alt="" />
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

                        <div className="relative md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                            <div className="w-full ">
                                <img src="https://www.antaris.az/wp-content/uploads/2020/04/AN-00-00022866-1.jpg" alt="" />
                            </div>
                            <div className="mt-3 mx-4 font-medium">
                                <h2>Ürün Başlığı</h2>
                            </div>
                            <div className="font-bold  my-2 space-x-4">
                                <del className=' text-slate-300 font-normal '>300 ₺</del>
                                <span className='text-[#d21937]'>220 ₺</span>
                            </div>
                            <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                                <a href="/"> Sepete Ekle</a>
                            </div>
                            <div className='indirim absolute left-0 top-5 text-center flex items-center justify-center bg-[#d21937] text-white rounded-full w-[50px] h-[50px]'>
                                -%10
                            </div>
                        </div>

                        <div className="md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                            <div className="w-full">
                                <img src="https://www.antaris.az/wp-content/uploads/2022/07/1-.MSR_.30.E-RED_1.webp" alt="" />
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

                        <div className="relative md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                            <div className="w-full ">
                                <img src="https://www.antaris.az/wp-content/uploads/2022/07/3.MSR_.30.E-WHITE_1.webp" alt="" />
                            </div>
                            <div className="mt-3 mx-4 font-medium">
                                <h2>Ürün Başlığı</h2>
                            </div>
                            <div className="font-bold  my-2 space-x-4">
                                <del className=' text-slate-300 font-normal '>300 ₺</del>
                                <span className='text-[#d21937]'>220 ₺</span>
                            </div>
                            <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                                <a href="/"> Sepete Ekle</a>
                            </div>
                            <div className='indirim absolute left-0 top-5 text-center flex items-center justify-center bg-[#d21937] text-white rounded-full w-[50px] h-[50px]'>
                                -%10
                            </div>
                        </div>

                        <div className="relative md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                            <div className="w-full ">
                                <img src="https://www.antaris.az/wp-content/uploads/2020/04/AN-00-00022871-Seyf-200194mm430424mm365320mm-19kq-SH.20.K.E.jpg" alt="" />
                            </div>
                            <div className="mt-3 mx-4 font-medium">
                                <h2>Ürün Başlığı</h2>
                            </div>
                            <div className="font-bold  my-2 space-x-4">
                                <del className=' text-slate-300 font-normal '>300 ₺</del>
                                <span className='text-[#d21937]'>220 ₺</span>
                            </div>
                            <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                                <a href="/"> Sepete Ekle</a>
                            </div>
                            <div className='indirim absolute left-0 top-5 text-center flex items-center justify-center bg-[#d21937] text-white rounded-full w-[50px] h-[50px]'>
                                -%10
                            </div>
                        </div>

                        <div className="relative md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                            <div className="w-full ">
                                <img src="https://www.antaris.az/wp-content/uploads/2022/07/2.MSR_.30.E-BLUE.webp" alt="" />
                            </div>
                            <div className="mt-3 mx-4 font-medium">
                                <h2>Ürün Başlığı</h2>
                            </div>
                            <div className="font-bold  my-2 space-x-4">
                                <del className=' text-slate-300 font-normal '>300 ₺</del>
                                <span className='text-[#d21937]'>220 ₺</span>
                            </div>
                            <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                                <a href="/"> Sepete Ekle</a>
                            </div>
                            <div className='indirim absolute left-0 top-5 text-center flex items-center justify-center bg-[#d21937] text-white rounded-full w-[50px] h-[50px]'>
                                -%10
                            </div>
                        </div>

                        <div className="relative md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                            <div className="w-full ">
                                <img src="https://www.antaris.az/wp-content/uploads/2020/11/FS.90.K-open-1000x700-1.jpg" alt="" />
                            </div>
                            <div className="mt-3 mx-4 font-medium">
                                <h2>Ürün Başlığı</h2>
                            </div>
                            <div className="font-bold  my-2 space-x-4">
                                <del className=' text-slate-300 font-normal '>300 ₺</del>
                                <span className='text-[#d21937]'>220 ₺</span>
                            </div>
                            <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                                <a href="/"> Sepete Ekle</a>
                            </div>
                            <div className='indirim absolute left-0 top-5 text-center flex items-center justify-center bg-[#d21937] text-white rounded-full w-[50px] h-[50px]'>
                                -%10
                            </div>
                        </div>

                        <div className="relative md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                            <div className="w-full ">
                                <img src="https://www.antaris.az/wp-content/uploads/2022/07/7.-MSR.50.E-WHITE_1.webp" alt="" />
                            </div>
                            <div className="mt-3 mx-4 font-medium">
                                <h2>Ürün Başlığı</h2>
                            </div>
                            <div className="font-bold  my-2 space-x-4">
                                <del className=' text-slate-300 font-normal '>300 ₺</del>
                                <span className='text-[#d21937]'>220 ₺</span>
                            </div>
                            <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                                <a href="/"> Sepete Ekle</a>
                            </div>
                            <div className='indirim absolute left-0 top-5 text-center flex items-center justify-center bg-[#d21937] text-white rounded-full w-[50px] h-[50px]'>
                                -%10
                            </div>
                        </div>

                        <div className="relative md:w-[45%] lg:w-[18%] flex flex-col md:my-7 2xl:my-16 items-center text-center">
                            <div className="w-full ">
                                <img src="https://www.antaris.az/wp-content/uploads/2021/10/14.W.2015.K.open_-1200x1200.webp" alt="" />
                            </div>
                            <div className="mt-3 mx-4 font-medium">
                                <h2>Ürün Başlığı</h2>
                            </div>
                            <div className="font-bold  my-2 space-x-4">
                                <del className=' text-slate-300 font-normal '>300 ₺</del>
                                <span className='text-[#d21937]'>220 ₺</span>
                            </div>
                            <div className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-11 text-white py-2 px-4 rounded-full cursor-pointer">
                                <a href="/"> Sepete Ekle</a>
                            </div>
                            <div className='indirim absolute left-0 top-5 text-center flex items-center justify-center bg-[#d21937] text-white rounded-full w-[50px] h-[50px]'>
                                -%10
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KasaUrunler
