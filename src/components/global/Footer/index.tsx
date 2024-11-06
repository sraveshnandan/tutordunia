import { Globe, MessageCircle, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12 md:py-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Tutor Dunia</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">For Students</h3>
                        <ul className="space-y-2">
                            <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Safety</Link></li>
                            <li><Link href="/FAQs" className="hover:text-white transition-colors">FAQs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">For Tutors</h3>
                        <ul className="space-y-2">
                            <li><Link href="/sign-up?mode=teacher" className="hover:text-white transition-colors">Become a Tutor</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Tutor Resources</Link></li>
                            <li><Link href="#" className="hover:text-white  transition-colors">Community Guidelines</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Success Stories</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <ul className="space-y-2">
                            <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
                            <li className="flex space-x-4 mt-4">
                                <Link href="#" className="hover:text-white transition-colors"><Users className="h-6 w-6" /></Link>
                                <Link href="#" className="hover:text-white transition-colors"><MessageCircle className="h-6 w-6" /></Link>
                                <Link href="#" className="hover:text-white transition-colors"><Globe className="h-6 w-6" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm">© 2024 Tutor Dunia. All rights reserved.</p>
                    <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
                        <Link className="text-sm hover:text-white transition-colors" href="/terms-of-services">
                            Terms of Service
                        </Link>
                        <Link className="text-sm hover:text-white transition-colors" href="/privacy-policy">
                            Privacy Policy
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer