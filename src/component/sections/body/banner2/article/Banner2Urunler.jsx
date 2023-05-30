import '../../banner/article/BannerStyle.css';
const Banner2Urunler = () => {
    return (
        <div>
            <div className='w-full flex items-center justify-center my-10 h-[500px]'>
                <div className='flex w-[80%] h-[400px] my-10 gap-5'>
                    <div className='banner-left relative w-[33%] cursor-pointer'>
                        <img className='w-full h-full absolute ' src="https://www.antaris.az/wp-content/uploads/2020/11/CLII.60.K.E.jpg" alt="" />
                        <h2 className='text-slate-500 absolute left-10 text-2xl font-bold'>Kasalar</h2>
                        <a className='absolute top-10 left-10 text-slate-200 text-center py-2 w-20 rounded-full bg-[#d21937] ' href="/"> DAHA</a>
                    </div>
                    <div className='banner-middle relative w-[33%] cursor-pointer'>
                        <img className='w-full h-full absolute ' src="https://www.antaris.az/wp-content/uploads/2020/05/H%C6%8FD%C4%B0YY%C6%8FL%C4%B0K-D%C6%8FST-HPBKK707N-HUGO-BOSS_.jpg" alt="" />
                        <h2 className='text-slate-500 absolute left-10 text-2xl font-bold'>Kalemler</h2>
                        <a className='absolute top-10 left-10 text-slate-200 text-center py-2 w-20 rounded-full bg-[#d21937] ' href="/"> DAHA</a>
                    </div>
                    <div className='banner-right relative w-[33%] cursor-pointer'>
                        <img className='w-full h-full absolute ' src="https://www.antaris.az/wp-content/uploads/2023/04/S2812-CO60-Comix-wep-2.webp" alt="" />
                        <h2 className='text-slate-500 absolute left-10 text-2xl font-bold'>Öğütücüler</h2>
                        <a className='absolute top-10 left-10 text-slate-200 text-center py-2 w-20 rounded-full bg-[#d21937] ' href="/"> DAHA</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner2Urunler
