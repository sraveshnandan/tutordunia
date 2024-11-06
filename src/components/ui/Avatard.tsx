import { getRandomRgbColor } from '@/utils/helpers'
import Image from 'next/image';
import Link from 'next/link'
import React, { FC } from 'react'

const Avatard: FC<{ user?: Record<string, any> }> = ({ user }) => {
    const col = getRandomRgbColor();
    return (
        <Link href={"/dashboard"} style={{ backgroundColor: col }} className={`w-10 p-1  items-center justify-center border-[1px] h-10 rounded-full  flex`}>
            {user?.avatar?.url ? (
                <Image src={user.avatar.url} alt='avatar' width={50} height={50} />
            ) : (
                <span className='text-white text-lg font-semibold'>{user?.full_name[0]}</span>
            )
            }
        </Link>
    )
}

export default Avatard