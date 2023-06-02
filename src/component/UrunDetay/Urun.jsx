import { useDispatch } from 'react-redux';
import { increase } from '../../redux/CartSlice';

const Urun = ({ id, title, price, img, discaount, oldP, quantity }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="relative md:w-[45%] lg:w-[18%] sm:h-[400px] md:h-auto flex flex-col md:my-7 2xl:my-16 items-center text-center">
                <div className='sm:h-[250px] md:h-auto'>
                    <img className='h-full w-full' src={img} alt="" />
                </div>
                <div className="mt-3 mx-4 font-medium">
                    <h2>{title}</h2>
                </div>
                <div className="font-bold  my-2">
                    <del className='hidden text-slate-300 font-normal '>{oldP} ₺</del>
                    <span className='text-[#d21937]'>{price} ₺</span>
                </div>
                <div onClick={() => { dispatch(increase(id)) }} className="urun-button bg-[#d21937] hover:bg-[#6d0315] my-1 w-30 h-10 text-white py-2 px-4 rounded-full cursor-pointer">
                    <button >Sepete Ekle</button>
                </div>
                <div className='hidden indirim absolute hover:scale-150 left-0 top-0 text-center text-xs xs:flex items-center justify-center bg-[#d21937] text-white rounded-full w-[40px] h-[40px]'>
                    <span>%{discaount}</span>
                </div>
            </div>
        </>
    )
}

export default Urun
