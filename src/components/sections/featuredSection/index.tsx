"use client"
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                    Our Top-Rated Tutors
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((tutor) => (
                        <div key={tutor} className="flex flex-col items-center space-y-2 bg-white p-6 rounded-lg shadow-md">
                            <div className="w-24 h-24 rounded-full bg-gray-300" />
                            <h3 className="text-xl font-bold">Tutor Name</h3>
                            <p className="text-sm text-gray-500">Subject Expertise</p>
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <Button variant="outline">View Profile</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
