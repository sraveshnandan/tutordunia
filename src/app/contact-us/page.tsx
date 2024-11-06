import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Page = () => {
    return (
        <main className="flex-1 py-12 bg-sky-50 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8">
                    Contact Us
                </h1>
                <div className="grid gap-6 lg:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Get in Touch</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">First name</label>
                                        <Input id="first-name" placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Last name</label>
                                        <Input id="last-name" placeholder="Doe" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                    <Input id="email" placeholder="johndoe@example.com" type="email" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                    <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message here" required />
                                </div>
                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <Mail className="h-6 w-6 text-primary" />
                                <span>support@tutordunia.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="h-6 w-6 text-primary" />
                                <span>+91 91261 26126</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <MapPin className="h-6 w-6 text-primary" />
                                <span>1st & 2nd floor, Boring Rd, Patna, Bihar 800001</span>
                            </div>
                            <div className="pt-4">
                                <h3 className="font-semibold mb-2">Office Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}

export default Page