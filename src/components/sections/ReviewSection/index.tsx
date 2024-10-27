import Title from '@/components/ui/title'
import { Reviews } from '@/constants'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Tutor from "@/assets/images/tutor_group.png"
import Link from 'next/link'
const ReviewsSection = () => {
    return (
        <div className='flex bg-secondry lg:-mx-64 lg:px-64 py-4 flex-col my-8'>
            <Title title='Recent Reviews from Students' />
            <div className='grid my-8 place-content-center place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {Reviews.map((item, index) => (
                    <div className='bg-white my-4 w-[80%] p-4 rounded-md' key={index}>
                        <div className='flex flex-row  gap-4'>
                            <Image src={item.image} alt='review' width={60} height={60} className='rounded-md shadow-sm shadow-black/50' />
                            <div className='flex flex-col'>
                                <span className='text-lg font-semibold'>{item.name}</span>
                                <div className='flex '>
                                    {
                                        [1, 2, 3, 4, 5].map((index) => (
                                            <StarIcon size={12} color='green' key={index} />
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                        <span className='text-sm mt-2 line-clamp-2 font-medium'>{item.message}</span>
                    </div>
                ))}

            </div>

            {/* teact section  */}
            <div className='flex px-4 flex-col-reverse my-12 md:flex-row'>
                {/* left section  */}
                <div className='flex flex-col  items-start justify-start w-full md:w-[60%]'>
                    <span className='text-xl font-semibold'>Looking to Teach?</span>
                    <span className='mt-2'>Join TutorDunia and connect with  students on the platform. Create a strong profile and grow your network</span>

                    <Link href={"/sign-up"} className='bg-primary w-fit mt-8 px-5 py-2 rounded-md cursor-pointer text-white font-medium'>Sign up as Tutor</Link>
                </div>
                <div className='w-full md:w-[40%] h-full flex md:items-end items-center justify-center md:justify-end overflow-hidden mb-12 md:mb-0'>
                    <Image src={Tutor} alt='tutors' width={220} height={220} />
                </div>


            </div>
        </div>
    )
}

export default ReviewsSection