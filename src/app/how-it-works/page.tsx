import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Headphones, MessageSquare, Search, Shield, Star, Video } from 'lucide-react'
import Link from 'next/link'

const Page = () => {
    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50">
                <div className="container px-4 md:px-6">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 text-center">
                        How Tutor Dunia Works
                    </h1>
                    <p className="text-xl text-gray-600 text-center max-w-[800px] mx-auto">
                        Discover how easy it is to connect with expert tutors and start your learning journey with Tutor Dunia.
                    </p>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                        The Learning Process
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader>
                                <Search className="h-10 w-10 text-indigo-600 mb-2" />
                                <CardTitle>1. Find a Tutor</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Search our extensive database of qualified tutors. Filter by subject, expertise, availability, and price to find your perfect match.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Calendar className="h-10 w-10 text-indigo-600 mb-2" />
                                <CardTitle>2. Book a Session</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Choose a time that fits your schedule. Our flexible booking system allows you to select from available slots or request custom times.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Video className="h-10 w-10 text-indigo-600 mb-2" />
                                <CardTitle>3. Start Learning</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Connect with your tutor via our secure online platform. Enjoy interactive lessons with screen sharing, whiteboard, and more.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Star className="h-10 w-10 text-indigo-600 mb-2" />
                                <CardTitle>4. Rate & Review</CardTitle>
                            </CardHeader>
                            <CardContent>
                                After your session, provide feedback and rate your tutor. Your reviews help maintain high-quality standards and assist other learners.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                        Key Features
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center text-center">
                            <Shield className="h-12 w-12 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Verified Tutors</h3>
                            <p className="text-gray-600">All our tutors undergo a rigorous vetting process to ensure quality and expertise.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <MessageSquare className="h-12 w-12 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Instant Messaging</h3>
                            <p className="text-gray-600">Communicate with your tutor before and after sessions to maximize your learning.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Headphones className="h-12 w-12 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                            <p className="text-gray-600">Our dedicated support team is always ready to assist you with any questions or issues.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                        Getting Started
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">For Students</h3>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Create your free account</li>
                                <li>Complete your profile and specify your learning goals</li>
                                <li>Browse tutors and read reviews</li>
                                <li>Book your first session</li>
                                <li>Prepare for your lesson and start learning!</li>
                            </ol>
                            <Link href={"/sign-up?mode=student"}><Button className="mt-6">Sign Up as a Student</Button></Link>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">For Tutors</h3>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Apply to become a tutor</li>
                                <li>Complete the vetting process</li>
                                <li>Set up your profile and availability</li>
                                <li>Start accepting bookings</li>
                                <li>Conduct sessions and grow your student base</li>
                            </ol>
                            <Link href={"/sign-up?mode=teacher"}>
                                <Button className="mt-6" variant="outline">Apply as a Tutor</Button></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-600 text-white">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        Ready to Start Your Learning Journey?
                    </h2>
                    <p className="text-xl mb-8 max-w-[600px] mx-auto">
                        Join Tutor Dunia today and experience the power of personalized, one-on-one tutoring.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="secondary">Find a Tutor</Button>
                        <Link href={"/sign-up?mode=teacher"}>
                            <Button variant="outline" className="bg-white text-indigo-600 hover:bg-gray-100">
                                Become a Tutor
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page