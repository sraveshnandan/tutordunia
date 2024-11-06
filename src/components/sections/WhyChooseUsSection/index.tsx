import { BookOpen, Calendar, Search } from 'lucide-react'
import React from 'react'

const WhyChooseUsSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                    Why Choose Tutor Dunia?
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                        <Search className="h-10 w-10 text-indigo-600" />
                        <h3 className="text-xl font-bold">Find Your Perfect Tutor</h3>
                        <p className="text-center text-gray-500">
                            Search and filter tutors based on subject, expertise, and availability.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                        <Calendar className="h-10 w-10 text-indigo-600" />
                        <h3 className="text-xl font-bold">Book Sessions Easily</h3>
                        <p className="text-center text-gray-500">
                            Schedule one-on-one sessions at times that work best for you.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                        <BookOpen className="h-10 w-10 text-indigo-600" />
                        <h3 className="text-xl font-bold">Learn Interactively</h3>
                        <p className="text-center text-gray-500">
                            Engage in personalized learning experiences with live video sessions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUsSection