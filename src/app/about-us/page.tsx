import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-200 py-12 px-4">
            <div className="max-w-6xl mx-auto space-y-12">
                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-blue-800 text-center">About Tutor Dunia</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800 space-y-4">
                        <p>
                            Tutor Dunia is a revolutionary online learning platform that connects students with expert tutors across a wide range of subjects. Our mission is to make quality education accessible to everyone, anywhere, anytime.
                        </p>
                        <p>
                            Founded in 2023, Tutor Dunia has quickly grown to become a trusted resource for students of all ages. We believe that personalized, one-on-one instruction is key to academic success, and our platform is designed to facilitate these connections seamlessly.
                        </p>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-blue-800">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent className="text-blue-800">
                            <p>
                                At Tutor Dunia, our mission is to democratize education by providing accessible, high-quality tutoring services to students worldwide. We strive to create a learning environment that fosters growth, curiosity, and academic excellence.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-blue-800">Our Vision</CardTitle>
                        </CardHeader>
                        <CardContent className="text-blue-800">
                            <p>
                                We envision a world where every student has the opportunity to reach their full potential through personalized education. Tutor Dunia aims to be the leading global platform for connecting learners with expert tutors, breaking down barriers to education.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-800">Our Team</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800">
                        <p>
                            Our team of dedicated professionals works tirelessly to ensure that every student on Tutor Dunia receives the highest quality education. We carefully vet all our tutors, ensuring they have the knowledge, experience, and teaching skills necessary to help our students excel.
                        </p>
                        {/* <div className="mt-8 flex justify-center">
                            <Image src="/placeholder.svg?height=300&width=500" alt="Tutor Dunia Team" width={500} height={300} className="rounded-lg shadow-lg" />
                        </div> */}
                    </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-800">Join Us</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800">
                        <p>
                            At Tutor Dunia, we're not just about academic achievement. We're about fostering a love for learning, building confidence, and helping students reach their full potential. Whether you're struggling with a difficult subject, preparing for an important exam, or simply want to expand your knowledge, Tutor Dunia is here to support you on your educational journey.
                        </p>
                        <p className="mt-4">
                            Join us today and experience the Tutor Dunia difference. Your path to academic success starts here!
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}