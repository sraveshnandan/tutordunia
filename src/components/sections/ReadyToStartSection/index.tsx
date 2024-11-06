import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const ReadyToStartSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-600">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center text-white">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Ready to Start Learning?
                        </h2>
                        <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl">
                            Join Tutor Dunia today and take the first step towards achieving your learning goals.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Link href={"/sign-up"}>
                            <Button>Sign Up Now</Button>
                        </Link>
                        <Button variant="outline" className="bg-white text-indigo-600 hover:bg-gray-100">
                            Browse Tutors
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReadyToStartSection