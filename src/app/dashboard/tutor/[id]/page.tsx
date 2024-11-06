import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, DollarSign, Star, BookOpen, GraduationCap, Award } from 'lucide-react'

// Mock data for a tutor
const tutor = {
    id: 1,
    name: "Dr. Amit Kumar",
    subjects: ["Mathematics", "Physics"],
    classes: ["11", "12"],
    rating: 4.8,
    bio: "Dr. Amit Kumar is an experienced educator with over 10 years of teaching experience. He specializes in Mathematics and Physics for higher secondary students.",
    education: "Ph.D. in Applied Mathematics from IIT Delhi",
    experience: "10+ years of teaching experience",
    pricing: {
        individual: 800,
        group: 500
    },
    availability: [
        { day: "Monday", time: "4:00 PM - 8:00 PM" },
        { day: "Wednesday", time: "4:00 PM - 8:00 PM" },
        { day: "Saturday", time: "10:00 AM - 6:00 PM" },
    ]
}

export default function TutorDetailsPage({ params }: { params: { id: string } }) {
    // In a real application, you would fetch the tutor data based on the ID
    // For this example, we're using the mock data

    return (
        <div className="container mx-auto px-4 py-8">
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl">{tutor.name}</CardTitle>
                    <div className="flex items-center mt-2">
                        <Star className="w-5 h-5 text-yellow-400 mr-1" />
                        <span className="font-semibold">{tutor.rating}</span>
                        <span className="text-gray-600 ml-2">(120 reviews)</span>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700 mb-4">{tutor.bio}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <h3 className="font-semibold mb-2 flex items-center">
                                <BookOpen className="w-5 h-5 mr-2" />
                                Subjects
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {tutor.subjects.map(subject => (
                                    <Badge key={subject} variant="secondary">{subject}</Badge>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2 flex items-center">
                                <GraduationCap className="w-5 h-5 mr-2" />
                                Classes
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {tutor.classes.map(cls => (
                                    <Badge key={cls} variant="outline">Class {cls}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <h3 className="font-semibold mb-2 flex items-center">
                                <Award className="w-5 h-5 mr-2" />
                                Education
                            </h3>
                            <p>{tutor.education}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2 flex items-center">
                                <Clock className="w-5 h-5 mr-2" />
                                Experience
                            </h3>
                            <p>{tutor.experience}</p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2 flex items-center">
                            <DollarSign className="w-5 h-5 mr-2" />
                            Pricing (per hour)
                        </h3>
                        <p>Individual Sessions: ₹{tutor.pricing.individual}</p>
                        <p>Group Sessions: ₹{tutor.pricing.group}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2 flex items-center">
                            <Calendar className="w-5 h-5 mr-2" />
                            Availability
                        </h3>
                        <ul>
                            {tutor.availability.map((slot, index) => (
                                <li key={index}>{slot.day}: {slot.time}</li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>
            <div className="flex justify-center">
                <Button size="lg">Book a Session</Button>
            </div>
        </div>
    )
}