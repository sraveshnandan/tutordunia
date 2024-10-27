"use client"
import { NavMenu } from '@/constants';
import { useEffect, useState } from 'react';
import Logo from "@/assets/images/logo.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from "lucide-react"
import { useUser } from '@/state/zustand/useUser';
import toast from 'react-hot-toast';

const MobileMenu = () => {
    const router = useRouter()
    const { user, logout } = useUser()
    const [menuToggle, setmenuToggle] = useState<boolean>(false);
    const [showMenu, setshowMenu] = useState<boolean>(false);
    const [route, setroute] = useState(NavMenu[0].url)
    const handleBtnClick = () => {
        setmenuToggle(prev => !prev);
        setshowMenu(prev => !prev)
    }


    const handlelogout = () => {
        logout();
        toast.success("Logged out Successfully.");
        return router.replace("/")
    }

    useEffect(() => {
        setmenuToggle(prev => !prev);
        setshowMenu(prev => !prev)
    }, [route])
    return (
        <div className='flex flex-col md:hidden  ml-2'>
            {
                !menuToggle ? (
                    <Menu onClick={handleBtnClick} />
                ) : (
                    <X onClick={handleBtnClick} className="text-red-600" />
                )
            }
            {showMenu && (
                <div className='flex absolute z-50 top-0 bg-transparent/10 backdrop-blur-md min-h-[100dvh] w-[76%] shadow-md shadow-black/40 right-0  flex-col items-start p-4 gap-4 font-medium'>
                    <button className='bg-white rounded-full p-2 absolute top-2 right-2' onClick={() => {
                        setmenuToggle(false);
                        setshowMenu(false)
                    }}><X /></button>
                    <Image src={Logo} alt='logo' width={150} height={80} className='scale-125' />
                    <div className='mt-4 w-full h-full   flex flex-col gap-4'>
                        {user && (<Link onClick={() => setroute("/dashboard")} href={"/dashboard"} className='hover:text-primary text-xl border-b-[2px] border-b-primary/40 pb-2 flex-grow  hover:-translate-y-1 duration-500' >DashBoard</Link>)}
                        {NavMenu.map((item, index) => (
                            <Link onClick={() => setroute(item.url)} href={item.url} key={index} className='hover:text-primary text-xl border-b-[2px] border-b-primary/40 pb-2 flex-grow  hover:-translate-y-1 duration-500' >{item.name}</Link>
                        ))}

                        {user ? (
                            <div className='mt-12'>
                                <button className='py-2 mt-4 self-center  w-full  items-center justify-center border-[2px] border-red-600 text-lg rounded-full flex duration-300 text-primary' onClick={handlelogout}>Log Out</button>
                            </div>
                        ) : <div className='mt-12'>
                            <Link className='py-2 mt-4 self-center  w-full  items-center justify-center border-[2px] border-primary text-lg rounded-full flex duration-300 text-primary' onClick={handleBtnClick} href={"/sign-in"}>Login</Link>
                            <Link onClick={handleBtnClick} className='py-3 mt-2 text-lg self-center  w-full  items-center justify-center bg-white rounded-full flex duration-300 text-primary' href={"/sign-up"}>Sign up</Link>
                        </div>}
                    </div>
                </div>
            )}
        </div>
    )
}

export default MobileMenu