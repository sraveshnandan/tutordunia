
"use client"
import { Images } from '@/constants'
import React, { Dispatch, FC, SetStateAction } from 'react'

const AccountType: FC<{ setmode: Dispatch<SetStateAction<string | null>> }> = ({ setmode }) => {
    const handleBtnClick = (data: string) => {
        setmode(data)
    }
    return (
        <div className='md:w-[70%] w-[90%] z-10 overflow-hidden rounded-md bg-white'>
            <div className='w-full bg-[#00d59d] py-4 h-[20%] text-center text-white text-3xl font-semibold  '>
                <span>What are you looking for?</span>
            </div>

            <div className='flex bg-white flex-col gap-3 p-8 md:flex-row'>
                <div className='w-full md:w-1/2 flex-col flex items-center justify-center'>
                    <div className='w-40 h-40 overflow-hidden flex items-center justify-center rounded-md'>
                        <img src={Images.teacher} alt='profile' className='rounded-md' />
                    </div>
                    <span className='text-lg font-semibold'>I am looking to Teach</span>
                    <button className='bg-primary px-4 py-1 mt-4 rounded-md text-white text-md font-semibold' onClick={() => handleBtnClick("teacher")}>Create your Profile</button>
                </div>
                <div className='w-full md:w-1/2 flex-col flex items-center justify-center'>
                    <div className='w-40 h-40 overflow-hidden rounded-md'>
                        <img src={Images.student} alt='profile' className='rounded-md' />
                    </div>
                    <span className='text-lg font-semibold'>I am looking to Learn</span>
                    <button className='bg-primary px-4 py-1 mt-4 rounded-md text-white text-md font-semibold' onClick={() => handleBtnClick("student")}>Create your Profile</button>
                </div>
            </div>
        </div>
    )
}

export default AccountType