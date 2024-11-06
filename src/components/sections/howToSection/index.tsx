import Title from '@/components/ui/title'
import { HowTOData } from '@/constants'
import { Calendar, MessageCircle, Search, Star } from 'lucide-react'
import React from 'react'

const HowToSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-24">
              How It Works
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <Search className="h-12 w-12 text-indigo-600" />
                <h3 className="text-xl font-bold">1. Find a Tutor</h3>
                <p className="text-gray-500">Search our extensive database of qualified tutors.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Calendar className="h-12 w-12 text-indigo-600" />
                <h3 className="text-xl font-bold">2. Book a Session</h3>
                <p className="text-gray-500">Choose a time that fits your schedule.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <MessageCircle className="h-12 w-12 text-indigo-600" />
                <h3 className="text-xl font-bold">3. Start Learning</h3>
                <p className="text-gray-500">Connect with your tutor via our online platform.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Star className="h-12 w-12 text-indigo-600" />
                <h3 className="text-xl font-bold">4. Rate & Review</h3>
                <p className="text-gray-500">Share your experience to help others.</p>
              </div>
            </div>
          </div>
        </section>
    )
}

export default HowToSection