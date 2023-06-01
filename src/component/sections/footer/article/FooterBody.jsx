import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsWhatsapp, BsTwitter, BsLinkedin, BsArrowUpCircleFill } from 'react-icons/bs';
import { SiTiktok } from 'react-icons/si';

const FooterBody = () => {

    const clickTop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
          });
    };

    return (
        <div className='h-auto flex justify-center relative items-center bg-black/95'>
            <div className='w-[80%] 2xl:w-[50%] my-5 relative flex  flex-col md:flex-row items-start md:justify-between py-12 text-slate-200'>
                <div className='footer-left w-full md:w-[30%] flex flex-col justify-center items-center text-center'>
                    <div className=' text-5xl w-[50%] pb-5 font-bold border-b'>
                        LOGO
                    </div>
                    <div className='sosyalMedia text-slate-200 my-7'>
                        <ul className='flex justify-center items-center text-xl'>
                            <li>
                                <Link to="/facebook"> <FaFacebookF /> </Link>
                            </li>

                            <li className='mx-2'>
                                <Link to="/instagram"> <FiInstagram /> </Link>
                            </li>

                            <li>
                                <Link to="/whatsapp"> <BsWhatsapp /> </Link>
                            </li>

                            <li className='mx-2'>
                                <Link to="/tiktok"> <SiTiktok /> </Link>
                            </li>

                            <li>
                                <Link to="/linkedin"> <BsLinkedin /> </Link>
                            </li>

                            <li className='ml-2'>
                                <Link to="/twitter"> <BsTwitter /> </Link>
                            </li>


                        </ul>
                    </div>
                </div>
                <div className='footer-middle flex align-middle text-center w-full md:w-[25%]'>
                    <div className='sosyalMedia w-full md:w-[250px] text-gray-400 text-lg'>
                        <ul className='justify-center items-center'>
                            <li>
                                <Link to="/hakkimizda"> Hakkımızda </Link>
                            </li>

                            <li className='my-2'>
                                <Link to="/Magazalarimiz"> Mağazalarımız </Link>
                            </li>

                            <li>
                                <Link to="/kurumsal"> Kurumsal </Link>
                            </li>

                            <li className='my-2'>
                                <Link to="/kariyer"> Kariyer </Link>
                            </li>

                            <li>
                                <Link to="/teslimat"> Teslimat </Link>
                            </li>

                            <li className='my-2'>
                                <Link to="/iade"> İade ve Değişimler </Link>
                            </li>

                            <li>
                                <Link to="/sss"> Sorular ve Cevaplar </Link>
                            </li>

                            <li className='mt-2'>
                                <Link to="/sikayet"> Şikayet ve Öneriler </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer-right w-full md:w-[25%] my-8'>
                    <form action="" className='flex flex-col justify-start'>
                        <input className='w-full md:w-[250px] h-10 pl-5  rounded-full bg-transparent border border-gray-400 mb-4 outline-none hover:border-fuchsia-100'
                            type="email"
                            name="abone"
                            placeholder='E-posta adresiniz'
                        />
                        <input className='bg-[#d21937] w-full md:w-28 h-10 rounded-full' type="button" value="Abone Ol" />
                    </form>
                </div>
            </div>
            <div onClick={clickTop}
                className='absolute bottom-30 right-10 text-slate-200 text-[50px] cursor-pointer hover:scale-[1.2]'>
                <BsArrowUpCircleFill />
            </div>
        </div>
    )
}
export default FooterBody
