'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, BookOpen, Settings, LogOut } from "lucide-react"

// Mock data for demonstration
const studentData = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
    enrolledSessions: [
        { id: 1, title: "Advanced Mathematics", date: "2023-06-15", time: "14:00" },
        { id: 2, title: "English Literature", date: "2023-06-17", time: "10:00" },
        { id: 3, title: "Physics 101", date: "2023-06-20", time: "16:00" },
    ]
}

const tutorData = {
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
    upcomingSessions: [
        { id: 1, title: "Calculus for Beginners", date: "2023-06-16", time: "15:00" },
        { id: 2, title: "Creative Writing Workshop", date: "2023-06-18", time: "11:00" },
        { id: 3, title: "Chemistry Fundamentals", date: "2023-06-21", time: "13:00" },
    ]
}

export default function Dashboard() {
    const [userType, setUserType] = useState<'student' | 'tutor'>('student')

    const renderSessions = (sessions: any) => (
        <div className="space-y-4">
            {sessions.map((session: any) => (
                <Card key={session.id}>
                    <CardHeader>
                        <CardTitle>{session.title}</CardTitle>
                        <CardDescription>{session.date} at {session.time}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button variant="outline">View Details</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )

    const renderDashboard = () => {
        const data = userType === 'student' ? studentData : tutorData
        return (
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <div className="flex items-center space-x-4">
                            <Avatar className="w-20 h-20">
                                <AvatarImage src={data.avatar} alt={data.name} />
                                <AvatarFallback>{data.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle>{data.name}</CardTitle>
                                <CardDescription>{data.email}</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex space-x-4">
                            <Button variant="outline">
                                <Settings className="mr-2 h-4 w-4" />
                                Edit Profile
                            </Button>
                            <Button variant="outline">
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{userType === 'student' ? 'Enrolled Sessions' : 'Upcoming Sessions'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {renderSessions(userType === 'student' ? data?.enrolledSessions as any : data?.upcomingSessions as any)}
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="container mx-auto p-6">
            <Tabs defaultValue="student" className="space-y-6">
                <TabsList>
                    <TabsTrigger value="student" onClick={() => setUserType('student')}>Student Dashboard</TabsTrigger>
                    <TabsTrigger value="tutor" onClick={() => setUserType('tutor')}>Tutor Dashboard</TabsTrigger>
                </TabsList>
                <TabsContent value="student">
                    {renderDashboard()}
                </TabsContent>
                <TabsContent value="tutor">
                    {renderDashboard()}
                </TabsContent>
            </Tabs>
        </div>
    )
}