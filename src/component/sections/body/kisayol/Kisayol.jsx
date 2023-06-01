import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsWhatsapp, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { SiTiktok } from 'react-icons/si';

const Kısayol = () => {
    return (
        <div className='hidden lg:block fixed top-[50%] -translate-y-[50%] right-0 text-slate-200 my-7'>
            <ul className='flex flex-col justify-center items-center text-2xl'>

                <li className='ekran-kısayol w-11 h-10 flex justify-center items-center bg-[#3B5998] hover:rotate-12'>
                    <Link to="/facebook"> <FaFacebookF /> </Link>
                </li>

                <li className='ekran-kısayol w-11 h-10 flex justify-center items-center bg-[#DD2A7B] hover:-rotate-12'>
                    <Link to="/instagram"> <FiInstagram /> </Link>
                </li>

                <li className='ekran-kısayol w-11 h-10 flex justify-center items-center bg-[#4dc247] hover:rotate-12'>
                    <Link to="/whatsapp"> <BsWhatsapp /> </Link>
                </li>

                <li className='ekran-kısayol w-11 h-10 flex justify-center items-center bg-[#000000] hover:-rotate-12'>
                    <Link to="/tiktok"> <SiTiktok /> </Link>
                </li>

                <li className='ekran-kısayol w-11 h-10 flex justify-center items-center bg-[#0077B5] hover:rotate-12'>
                    <Link to="/linkedin"> <BsLinkedin /> </Link>
                </li>

                <li className='ekran-kısayol w-11 h-10 flex justify-center items-center bg-[#08a0e9] hover:-rotate-12'>
                    <Link to="/twitter"> <BsTwitter /> </Link>
                </li>


            </ul>
        </div>
    )
}

export default Kısayol
