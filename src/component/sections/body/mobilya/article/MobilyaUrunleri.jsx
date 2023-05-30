import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const MobilyaUrunleri = () => {
    return (
        <div className="h-auto flex items-center justify-center mb-14">
            <div className='w-[80%] my-5 relative'>
                <div className="flex items-center border-b-2 mb-2 border-black w-full h-14">
                    <span className="text-2xl font-medium tracking-wider">MOBİLYA</span>
                    {/* left arrow */}
                    <div className='slide-icons absolute right-14 text-2xl cursor-pointer'>
                        <AiOutlineLeft size={20} />
                    </div>
                    {/* right arrow */}
                    <div className='slide-icons absolute  right-3 text-2xl cursor-pointer'>
                        <AiOutlineRight size={20} />
                    </div>
                </div>
                <div className='h-full flex justify-center items-center flex-wrap gap-7'>
                    <div className="w-[18%] h-[320px] relative flex flex-col my-7 items-center text-center">
                        <div className="w-full ">
                            <img src="https://www.antaris.az/wp-content/uploads/2023/04/Rexel-305st.webp" alt="" />
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

                    <div className="w-[18%] h-[320px] flex flex-col my-7 items-center text-center">
                        <div className="w-full">
                            <img src="https://www.antaris.az/wp-content/uploads/2020/10/102-SG.jpg" alt="" />
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

                    <div className="w-[18%] h-[320px] relative flex flex-col my-7 items-center text-center">
                        <div className="w-full ">
                            <img src="https://www.antaris.az/wp-content/uploads/2020/10/102SS-.jpg" alt="" />
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

                    <div className="w-[18%] h-[320px] flex flex-col my-7 items-center text-center">
                        <div className="w-full">
                            <img src="https://www.antaris.az/wp-content/uploads/2020/10/MA175-1.jpg" alt="" />
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

                    <div className="w-[18%] h-[320px] relative flex flex-col my-7 items-center text-center">
                        <div className="w-full ">
                            <img src="https://www.antaris.az/wp-content/uploads/2020/04/AN-00-00000059-Dolab-asma-qovluq-%C3%BC%C3%A7%C3%BCn-B4-4-siyirm%C9%99li-1320mm465mm645mm-304ST.jpg" alt="" />
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
    )
}

export default MobilyaUrunleri
