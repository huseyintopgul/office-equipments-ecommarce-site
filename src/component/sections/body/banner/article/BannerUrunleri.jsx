import './BannerStyle.css';

const BannerUrunleri = () => {
    return (
        <div className='w-full flex items-center justify-center h-aotu'>
            <div className='relative flex w-[80%] h-[350px] my-10 gap-5'>
                <div className='banner-left relative w-[50%] h-full cursor-pointer'>
                    <img className='w-full h-full absolute' src="https://images.pexels.com/photos/403075/pexels-photo-403075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <h2 className='text-slate-200 absolute top-10 left-9 text-xl font-bold'>Kalem Seti</h2>
                    <a className='absolute top-20 left-10 text-slate-200 text-center py-2 w-20 rounded-full bg-[#d21937] ' href="/"> DAHA</a>
                </div>
                <div className='banner-right relative w-[50%] h-full cursor-pointer'>
                    <img className='w-full h-full absolute' src="https://st3.myideasoft.com/idea/dt/57/myassets/products/568/img-6338s-min.jpg?revision=1558707168" alt="" />
                    <h2 className='text-slate-200 absolute top-10 left-8 text-xl font-bold'>Yönetici Masa Seti</h2>
                    <a className='absolute top-20 left-16 text-slate-200 text-center py-2 w-20 rounded-full bg-[#d21937] ' href="/"> DAHA</a>
                </div>
            </div>
        </div>
    )
}

export default BannerUrunleri
