import Title from '@/components/ui/title'
import { HowTOData } from '@/constants'
import React from 'react'

const HowToSection = () => {
    return (
        <div className='flex flex-col gap-4 my-12'>
            <Title title='How Tutor Dunia Works?' />
            <div className='w-full my-8 grid md:grid-cols-3 grid-cols-1 content-center'>
                {HowTOData.map((item, index) => {
                    const Icon = item.Icon
                    return (
                        <div className='flex gap-2 my-4 flex-col items-center justify-center' key={index}>
                            <div className='w-20 h-20 bg-primary cursor-pointer shadow-md shadow-secondry hover:scale-110 duration-500 rounded-full flex items-center justify-center'> <Icon color='#fff' /></div>

                            <span className='text-lg font-semibold'>{item.title}</span>
                            <span className='text-sm font-semibold text-gray-400'>{item.desc}</span>
                        </div>
                    )
                })}
            </div>

            <button className='bg-primary w-fit self-center px-5 py-3 rounded-md cursor-pointer text-white font-medium'>Get Started</button>
        </div>
    )
}

export default HowToSection