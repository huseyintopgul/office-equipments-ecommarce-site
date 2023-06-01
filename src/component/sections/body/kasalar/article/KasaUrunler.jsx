import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Urun from '../../../../UrunDetay/Urun';

const KasaUrunler = () => {
    const { cartItems } = useSelector((store) => store.cart);

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
                        {
                            cartItems.map((item) => {
                                return <Urun key={item.id} {...item} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KasaUrunler
