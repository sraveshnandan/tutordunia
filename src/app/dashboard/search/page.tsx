'use client'

import { useEffect, useState } from 'react'
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { TutorsData as tutors } from '@/constants'



export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedClass, setSelectedClass] = useState('')
    const [selectedSubject, setSelectedSubject] = useState('Maths');
    const [filtredData, setfiltredData] = useState(tutors)

    useEffect(() => {
        if (searchTerm.length > 3) {
            const filtered = tutors.filter(tutor => tutor.name.toLowerCase().includes(searchTerm.toLowerCase()))
            setfiltredData(filtered)
        } else {
            setfiltredData(tutors)
        }
    }, [searchTerm])


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Find Your Perfect Tutor</h1>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-grow">
                    <Input
                        type="text"
                        placeholder="Search tutors..."
                        value={searchTerm}
                        onChange={(e: any) => setSearchTerm(e.target.value)}
                        className="w-full"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtredData.map(tutor => (
                    <Card key={tutor.id} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{tutor.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="flex items-center mb-2">
                                <BookOpen className="w-4 h-4 mr-2" />
                                <span className="text-sm text-gray-600">Subjects:</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {tutor.subjects.map(subject => (
                                    <Badge key={subject} variant="secondary">{subject}</Badge>
                                ))}
                            </div>
                            <div className="flex items-center mb-2">
                                <GraduationCap className="w-4 h-4 mr-2" />
                                <span className="text-sm text-gray-600">Classes:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {tutor.classes.map(cls => (
                                    <Badge key={cls} variant="outline">Class {cls}</Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                            <div className="text-sm text-gray-600">Rating: {tutor.rating}/5</div>
                            <Button asChild>
                                <Link href={`/dashboard/tutor/${tutor.id}`}>View Profile</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}