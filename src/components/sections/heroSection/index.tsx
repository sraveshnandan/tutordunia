import React from 'react'
import SearchBar from './SearchBar'
import { Stats } from '@/constants'
import Image from 'next/image'
import hero from "@/assets/images/hero_bg.png"

const HeroSection = () => {
    return (
        <div className='bg-secondry w-full flex flex-col items-center justify-center  md:flex-row  lg:p-12 p-4'>
            {/* left  */}
            <div className='w-full flex flex-col items-start justify-center  h-[250px] md:w-[70%]'>
                <span className='text-2xl font-semibold'>Join Live Online Classess with Best Tutors</span>
                <div className='flex flex-col w-full'>
                    <SearchBar />
                    <div className='flex w-[90%] lg:w-[70%] flex-row gap-4 items-start justify-start'>
                        {Stats.map((item, index) => (
                            <div key={index} className="flex items-center flex-row">
                                <span className='text-black text-md font-semibold'>{item.number}+</span>
                                <span className='text-gray-400 text-sm font-semibold'>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* right  */}
            <div className='w-full md:w-1/2 md:-m-16 -m-0 h-[250px] md:ml-8 flex items-center justify-center bg-white  md:rounded-l-md lg:rounded-sm rounded-md overflow-hidden'>
                <Image src={hero} alt='hero' />
            </div>
        </div>
    )
}

export default HeroSection