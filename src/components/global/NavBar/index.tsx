"use client"
import Image from 'next/image';
import Logo from "@/assets/images/logo.png";
import Link from 'next/link';
import { NavMenu } from '@/constants';
import MobileMenu from './MobileMenu';
import { useUser } from '@/state/zustand/useUser';
import Avatar from '@/components/ui/Avatar';

const NavBar = () => {
    const { user, access_token } = useUser();
    return (
        <>
            <nav className='flex p-2 flex-row items-center  justify-between'>
                {/* logo  */}
                <Link href={"/"} className='cursor-pointer'>
                    <Image alt='logo' className='scale-110 hover:hue-rotate-60 duration-500' src={Logo} width={150} height={80} />
                </Link>

                {/* menu secton  */}
                <div className='md:flex hidden flex-row items-center gap-4 font-medium'>

                    {NavMenu.map((item, index) => (
                        <Link key={index} className='hover:text-primary hover:-translate-y-1 duration-500' href={item.url}>{item.name}</Link>
                    ))}
                </div>
                {user ? (
                    <div className='flex flex-row items-center'>
                        <Avatar user={user} />
                        <MobileMenu />
                    </div>
                ) :
                    <div className='flex flex-row items-center  gap-1'>
                        <Link className='px-2 py-1 md:flex hidden duration-300 text-primary hover:border-primary hover:border-b-2' href={"/sign-up"}>Sign up</Link>
                        <hr className='w-4 bg-text h-full rotate-90 md:flex hidden' />
                        <Link className='px-2 py-1 duration-300 text-primary hover:border-primary hover:border-b-2' href={"/sign-in"}>Login</Link>
                        <MobileMenu />
                    </div >
                }
            </nav >
        </>
    )
}

export default NavBar