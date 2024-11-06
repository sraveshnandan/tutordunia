"use client"
import { Button } from '@/components/ui/button'
import { BookOpen, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const path = usePathname()
    useEffect(() => {
        setIsMenuOpen(prev => !prev)
    }, [path])
    return (
        <>
            <header className="px-4 lg:px-6 h-16 flex items-center border-b">
                <Link className="flex items-center justify-center" href="/">
                    <BookOpen className="h-6 w-6 text-indigo-600" />
                    <span className="ml-2 text-2xl font-bold text-gray-900">Tutor Dunia</span>
                </Link>
                <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#">
                        Find Tutors
                    </Link>
                    <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="/sign-up?mode=teacher">
                        Become a Tutor
                    </Link>
                    <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="/how-it-works">
                        How It Works
                    </Link>
                    <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#">
                        Subjects
                    </Link>
                </nav>
                <div className="md:ml-4 hidden md:flex gap-2">
                    <Link href={"/sign-in"}><Button variant="outline">Log In</Button></Link>
                    <Link href={"/sign-up"}><Button>Sign Up</Button></Link>
                </div>
                <Button
                    variant="ghost"
                    className="ml-auto md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </header>
            {isMenuOpen && (
                <div className="md:hidden z-50 absolute w-full bg-white border-b">
                    <nav className="flex flex-col p-4">
                        <Link className="py-2 text-sm font-medium hover:text-indigo-600 transition-colors" href="#">
                            Find Tutors
                        </Link>
                        <Link className="py-2 text-sm font-medium hover:text-indigo-600 transition-colors" href="/sign-up?mode=teacher">
                            Become a Tutor
                        </Link>
                        <Link className="py-2 text-sm font-medium hover:text-indigo-600 transition-colors" href="/how-it-works">
                            How It Works
                        </Link>
                        <Link className="py-2 text-sm font-medium hover:text-indigo-600 transition-colors" href="#">
                            Subjects
                        </Link>
                        <Link href={"/sign-in"} ><Button className="mt-4 w-full" variant="outline">Log In</Button></Link>
                        <Link href={"/sign-up"}><Button className="mt-2 w-full">Sign Up</Button></Link>
                    </nav>
                </div>
            )}
        </>
    )
}

export default NavBar