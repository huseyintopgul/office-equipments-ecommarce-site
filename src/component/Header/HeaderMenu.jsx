import { Link, Outlet } from 'react-router-dom';
import { IoLogoWhatsapp } from 'react-icons/io';
import { TbWorld } from 'react-icons/tb';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineDown, AiOutlineRight, AiOutlineHeart } from 'react-icons/ai';
import { MdCompareArrows } from 'react-icons/md';
import { BsBasket } from 'react-icons/bs';

const HeaderMenu = () => {

    return (
        <div className='w-full justify-center '>
            <div className='flex firt-menu items-center justify-around bg-[#d21937] text-white h-[40px] text-sm'>
                <div>
                    <ul className='flex space-x-5 items-center'>
                        <li className='border-r-[1px] pr-3'>
                            <Link to="/hakkimizda">HAKKIMIZDA</Link>
                        </li>
                        <li className='border-r-[1px] pr-3'>
                            <Link to="/magazalarimiz">MAĞAZALARIMIZ</Link>
                        </li>
                        <li className='border-r-[1px] pr-3'>
                            <Link to="/kosullar">KOŞULLAR</Link>
                        </li>
                        <li className='border-r-[1px] pr-3'>
                            <Link to="/urunler">ÜRÜNLER</Link>
                        </li>
                        <li className=' border-r-[1px] pr-3'>
                            <Link to="/kurumsal">KURUMSAL</Link>
                        </li>
                        <li className='px-r3'>
                            <Link to="/cikis">ÇIKIŞ</Link>
                        </li>
                    </ul>
                </div>
                <div className='cursor-pointer flex flex-row'>
                    <ul className='flex space-x-5 items-center'>
                        <li className='border-r-[1px] pr-3 flex items-center space-x-1 whitespace-no-wrap'>
                            <IoLogoWhatsapp />
                            <span>+90 (558) 558 58 58</span>
                        </li>
                        <li className='flex items-center space-x-2 border-r-[1px] pr-3 '>
                            <TbWorld size={'20px'} />
                            <span>EN</span>
                        </li>
                    </ul>
                    <input type="button"
                        name='login-register'
                        value="GİRİŞ / KAYIT"
                        className='cursor-pointer pl-4'
                    />
                </div>
            </div>
            <div className='second-menu flex justify-center'>
                <div className='flex w-[80%]  h-28 border-b-2 justify-center space-x-5 items-center px-5'>
                    <div className='logo'>
                        <Link to={'/'}>
                            <h2 className="text-2xl font-bold md:text-4xl inline-block px-4">LOGO</h2>
                        </Link>
                    </div>
                    <div className='dropdown inline-block relative'>
                        <button className="dropdow-button bg-[#d21937] text-white w-[250px] h-14 space-x-2 font-semibold py-2 px-4 inline-flex items-center">
                            <span><GiHamburgerMenu size={'20px'} /></span>
                            <span>KATALOG</span>
                            <span className='pl-24'><AiOutlineDown /></span>
                        </button>
                        <ul className='dropdown-content absolute hidden bg-white text-gray-700 pt-1 z-50'>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white-mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='dropdown w-[250px] border-2'>
                                <span className='flex flex-row items-center justify-between hover:bg-gray-200 bg-slate-100 text-slate-800 whitespace-no-wrap'>
                                    <a className='hover:text-red-700 py-2 px-4 block w-[95%] ' href="/">Kategori </a>
                                    <AiOutlineRight />
                                </span>
                                <ul className='dropdown-content absolute hidden text-gray-700 pl-5 ml-[230px] bg-white -mt-10'>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                    <li className=" hover:bg-gray-200 bg-slate-100 text-slate-800  hover:text-red-700 py-2 border-2  w-[250px] px-4 block whitespace-no-wrap">
                                        <a href="/">Kategori Detay</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <form className='w-[450px]'>
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" class="block w-full h-14 p-4 pl-10 text-sm border    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required></input>
                        </div>
                    </form>
                    <div className='header-icons flex space-x-7'>
                        <div className='relative flex border border-gray-400 rounded-[50%] border-double w-14 h-14 items-center justify-center cursor-pointer'>
                            <MdCompareArrows size={'30px'} />
                            <div className='absolute flex items-center justify-center border border-gray-400 bg-white rounded-[50%] w-5 h-5  top-[-3px] right-[-3px] text-md text-red-600'>0</div>
                        </div>
                        <div className='relative flex border border-gray-400 rounded-[50%] border-double w-14 h-14 items-center justify-center cursor-pointer'>
                            <AiOutlineHeart size={'25px'} />
                            <div className='absolute flex items-center justify-center border border-gray-400 bg-white rounded-[50%] w-5 h-5  top-[-3px] right-[-3px] text-md text-red-600'>0</div>
                        </div>
                        <div className='relative flex border border-gray-400 rounded-[50%] border-double w-14 h-14 items-center justify-center cursor-pointer'>
                            <BsBasket size={'25px'} />
                            <div className='absolute flex items-center justify-center border border-gray-400 bg-white rounded-[50%] w-5 h-5  top-[-3px] right-[-3px] text-md text-red-600'>0</div>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    )
}

export default HeaderMenu;




