import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const SandalyeList = () => {

    return (
        <div className="h-auto flex items-center justify-center">
            <div className='w-[80%] my-5 relative'>
                <div className="flex items-center border-b-2 mb-2 border-black w-full h-14">
                    <span className="text-2xl font-medium tracking-wider">SANDALYE</span>
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
                            <img src="https://www.antaris.az/wp-content/uploads/2022/09/CH-W695N_DB_TW_10N_1.webp" alt="" />
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

                    <div className="w-[18%] h-[320px] relative flex flex-col my-7 items-center text-center">
                        <div className="w-full ">
                            <img src="https://www.antaris.az/wp-content/uploads/2021/09/KB-10-Lite-Black_03.webp" alt="" />
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

                    <div className="w-[18%] h-[320px] relative flex flex-col my-7 items-center text-center">
                        <div className="w-full ">
                            <img src="https://www.antaris.az/wp-content/uploads/2021/10/CH-W695N_DB_TW-10N_01.webp" alt="" />
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

                    <div className="w-[18%] h-[320px] relative flex flex-col my-7 items-center text-center">
                        <div className="w-full ">
                            <img src="https://www.antaris.az/wp-content/uploads/2021/09/CH-599_AXSL_32G_TW11_03.webp" alt="" />
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

                    <div className="w-[18%] h-[320px] relative flex flex-col my-7 items-center text-center">
                        <div className="w-full ">
                            <img src="https://www.antaris.az/wp-content/uploads/2021/09/MC-W611N_DG_417G_03.webp" alt="" />
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

                    <div className="w-[18%] h-[320px] relative flex flex-col my-7 items-center text-center">
                        <div className="w-full ">
                            <img src="https://www.antaris.az/wp-content/uploads/2021/09/CH-545_1D_418-Black_03.webp" alt="" />
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

                    <div className="w-[18%] h-[320px] relative flex flex-col my-7 items-center text-center">
                        <div className="w-full ">
                            <img src="https://www.antaris.az/wp-content/uploads/2023/04/Iso-stul-wep.webp" alt="" />
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

                    <div className="w-[18%] h-[320px] relative flex flex-col my-7 items-center text-center">
                        <div className="w-full ">
                            <img src="https://www.antaris.az/wp-content/uploads/2021/09/MC-611N_B_418B_03.webp" alt="" />
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

                    <div className="w-[18%] h-[320px] relative flex flex-col my-7 items-center text-center">
                        <div className="w-full ">
                            <img src="https://www.antaris.az/wp-content/uploads/2022/09/CH-W695N_DB_TW_10N_1.webp" alt="" />
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

                    <div className="w-[18%] h-[320px] relative flex flex-col my-7 items-center text-center">
                        <div className="w-full ">
                            <img src="https://www.antaris.az/wp-content/uploads/2021/09/T-8010N-LOW-V_2.webp" alt="" />
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
    );
}

export default SandalyeList;
