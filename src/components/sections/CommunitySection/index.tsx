import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import React from 'react'

const CommunitySection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Join Our Community of Learners
                        </h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl">
                            Whether you're a student looking to excel in your studies or a professional aiming to upgrade your skills,
                            Tutor Dunia has the perfect tutor for you.
                        </p>
                        <ul className="grid gap-4">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-indigo-600" />
                                <span>Access to expert tutors across various subjects</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-indigo-600" />
                                <span>Flexible scheduling to fit your lifestyle</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-indigo-600" />
                                <span>Interactive online learning environment</span>
                            </li>
                        </ul>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button>Join Community</Button>
                            <Button variant="outline">Learn More</Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-full h-[300px] sm:h-[400px] bg-gray-300 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommunitySection