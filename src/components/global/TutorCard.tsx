import { Briefcase, IndianRupee, Star, TvIcon, Verified } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import tutorImage from "@/assets/images/tutor.jpg";
import Link from 'next/link';

interface CardProp {
    tutor: any,
}

const TutorCard: FC<CardProp> = ({ tutor }) => {


    return (
        <div className='w-[80%] md:w-full p-3 relative min-h-[200px] hover:shadow-md hover:shadow-black/10 flex flex-col  bg-gray-200 rounded-md'>
            <div className='flex h-1/2  flex-row items-center'>
                <Image className='rounded-md' src={tutor?.avtar?.url || tutorImage} alt='tutor' width={100} height={100} />
                <div className='flex-grow gap-1   h-full ml-2 flex flex-col'>
                    <span className='text-md font-semibold'>{tutor.name}</span>

                    {tutor.is_verified && (
                        <span className='text-xs text-green-600 gap-1 font-semibold flex flex-row items-center'> <Verified color={"green"} size={15} />Verified</span>
                    )}

                    <span className='text-xs text-gray-400 gap-1 font-semibold flex flex-row items-center'> <TvIcon size={15} />Online Class</span>

                    <div className='flex flex-row items-start gap-2'>
                        <span className='text-xs text-gray-400 gap-1 font-semibold flex flex-row items-center'> <Briefcase size={15} /> {tutor.exp} yrs of Exp</span>
                        <span className='text-xs text-gray-400 gap-1 font-semibold flex flex-row items-center'> <IndianRupee size={15} /> {tutor.hourly_rate} per hour</span>
                    </div>

                </div>
            </div>
            <div className='w-full flex-grow mt-2  '>
                <span className='text-gray-500 text-xs'>''{tutor.bio}''</span>
                <div className='w-full px-4  left-0  absolute bottom-2 justify-between  items-center flex flex-row'>
                    <div className='flex items-center flex-row'>
                        {[1, 2, 3, 4, 5].map((index) => (
                            <Star key={index} size={15} color={"green"} />
                        ))}
                        <span className='ml-2 text-gray-600'>{tutor.ratings}</span>
                    </div>
                    <Link href={`/dashboard/search?id=${tutor?._id}`} className='bg-primary cursor-pointer hover:scale-105 duration-500 rounded-md text-white px-5 py-2 font-medium text-sm'>Book Demo</Link>
                </div>
            </div>
        </div>
    )
}

export default TutorCard