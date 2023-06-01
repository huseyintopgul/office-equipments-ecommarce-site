import '../../banner/article/BannerStyle.css';

const Banner3Urun = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className='w-[80%] 2xl:w-[50%] my-5 relative flex flex-col md:flex-row items-center justify-center h-auto gap-5'>
                    <div className='banner-left relative w-full md:w-[50%] h-[350px] cursor-pointer'>
                        <img className='w-full h-full absolute' src="https://www.antaris.az/wp-content/uploads/2020/04/AN-00-00002783-Mexanizm-58x22mm-Mexanizm-4913-58x22mm-Trodat.jpg" alt="" />
                        <h2 className='text-slate-600 absolute top-10 left-9 text-xl font-bold'>Kaşeler</h2>
                        <a className='absolute top-20 left-7 text-slate-200 text-center py-2 w-20 rounded-full bg-[#d21937] ' href="/"> DAHA</a>
                    </div>
                    <div className='banner-right relative w-full md:w-[50%] h-[350px] cursor-pointer'>
                        <img className='w-full h-full absolute' src="https://www.antaris.az/wp-content/uploads/2022/06/UD087503.webp" alt="" />
                        <h2 className='text-slate-600 absolute top-10 left-9 text-xl font-bold'>Bloknot</h2>
                        <a className='absolute top-20 left-8 text-slate-200 text-center py-2 w-20 rounded-full bg-[#d21937] ' href="/"> DAHA</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner3Urun
