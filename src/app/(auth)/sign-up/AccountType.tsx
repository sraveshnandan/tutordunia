"use client"
import { Button } from '@/components/ui/button'
import { Images } from '@/constants'
import { Dispatch, FC, SetStateAction } from 'react'

const AccountType: FC<{ setmode: Dispatch<SetStateAction<string | null>> }> = ({ setmode }) => {
    const handleBtnClick = (data: string) => {
        setmode(data)
    }
    return (
        <div className='md:w-[70%] w-[90%] z-10 overflow-hidden rounded-md bg-black'>
            <div className='w-full bg-[#00d59d] py-4 h-[20%] text-center text-white text-3xl font-semibold  '>
                <span>What are you looking for?</span>
            </div>

            <div className='flex bg-white flex-col gap-3 p-8 md:flex-row'>
                <div className='w-full md:w-1/2 flex-col flex items-center justify-center'>
                    <div className='w-40 h-40 overflow-hidden flex items-center justify-center rounded-md'>
                        <img src={Images.teacher} alt='profile' className='rounded-md' />
                    </div>
                    <span className='text-lg font-semibold'>I am looking to Teach</span>
                    <Button className='w-fit' onClick={() => handleBtnClick("teacher")}>Create your Profile</Button>
                </div>
                <div className='w-full md:w-1/2 flex-col flex items-center justify-center'>
                    <div className='w-40 h-40 overflow-hidden rounded-md'>
                        <img src={Images.student} alt='profile' className='rounded-md' />
                    </div>
                    <span className='text-lg font-semibold'>I am looking to Learn</span>
                    <Button variant={"default"} className='w-fit' onClick={() => handleBtnClick("student")}>Create your Profile</Button>
                </div>
            </div>
        </div>
    )
}

export default AccountType