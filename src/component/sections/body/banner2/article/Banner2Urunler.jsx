import '../../banner/article/BannerStyle.css';
const Banner2Urunler = () => {
    return (
        <div>
            <div className='w-full flex sm:text-red-600 text-slate-500  items-center justify-center h-auto'>
                <div className='w-[80%] 2xl:w-[50%] relative flex flex-col md:flex-row items-center justify-center h-auto gap-5'>
                    <div className='banner-left relative w-full md:w-[33%] h-[300px] sm:my-5 md:my-0 cursor-pointer'>
                        <img className='w-full h-full absolute ' src="https://www.antaris.az/wp-content/uploads/2020/11/CLII.60.K.E.jpg" alt="" />
                        <h2 className='absolute left-10 text-2xl font-bold'>Kasalar</h2>
                        <a className='absolute top-10 left-10 text-slate-200 text-center py-2 w-20 rounded-full bg-[#d21937] ' href="/"> DAHA</a>
                    </div>
                    <div className='banner-middle relative w-full md:w-[33%] h-[300px] sm:my-5 md:my-0 cursor-pointer'>
                        <img className='w-full h-full absolute ' src="https://www.antaris.az/wp-content/uploads/2020/05/H%C6%8FD%C4%B0YY%C6%8FL%C4%B0K-D%C6%8FST-HPBKK707N-HUGO-BOSS_.jpg" alt="" />
                        <h2 className='absolute left-10 text-2xl font-bold'>Kalemler</h2>
                        <a className='absolute top-10 left-10 text-slate-200 text-center py-2 w-20 rounded-full bg-[#d21937] ' href="/"> DAHA</a>
                    </div>
                    <div className='banner-right relative w-full md:w-[33%] h-[300px] sm:my-5 md:my-0 cursor-pointer'>
                        <img className='w-full h-full absolute ' src="https://www.antaris.az/wp-content/uploads/2023/04/S2812-CO60-Comix-wep-2.webp" alt="" />
                        <h2 className='absolute left-10 text-2xl font-bold'>Öğütücüler</h2>
                        <a className='absolute top-10 left-10 text-slate-200 text-center py-2 w-20 rounded-full bg-[#d21937] ' href="/"> DAHA</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner2Urunler
