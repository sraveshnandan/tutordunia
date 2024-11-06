import React from 'react'
import SearchBar from './SearchBar'
import { Stats } from '@/constants'
import Image from 'next/image'
import hero from "@/assets/images/hero_bg.png"
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/Input'

const HeroSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-indigo-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Learn from the Best, Anytime, Anywhere
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                            Connect with expert tutors for personalized one-on-one sessions tailored to your learning needs.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <form className="flex space-x-2">
                            <Input className="max-w-lg flex-1" placeholder="What do you want to learn?" type="text" />
                            <Button type="submit">
                                <Search className="mr-2 h-4 w-4" />
                                Search
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection