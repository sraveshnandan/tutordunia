import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Book, GraduationCap, School } from 'lucide-react'

const categories = [
    {
        title: "Class 6-8 Tuition",
        icon: BookOpen,
        description: "Foundation building for middle school students.",
    },
    {
        title: "Class 9-10 Tuition",
        icon: Book,
        description: "Preparation for board exams and competitive tests.",
    },
    {
        title: "Class 11-12 Science",
        icon: GraduationCap,
        description: "Advanced science and math for college preparation.",
    },
    {
        title: "Class 11-12 Commerce",
        icon: School,
        description: "Business studies and economics for future leaders.",
    },
]

export default function CategorySection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-50">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Tutoring Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <Card
                            key={index}
                            className="group overflow-hidden transition-all duration-300 ease-in-out transform cursor-pointer hover:-translate-y-2"
                        >
                            <CardContent className="p-6 flex flex-col items-center text-center h-full justify-between">
                                <div className="mb-4 p-4 rounded-full bg-sky-100 group-hover:bg-gradient-to-br group-hover:from-sky-400 group-hover:to-blue-600 transition-all duration-300">
                                    <category.icon className="h-10 w-10 text-sky-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                                <div className="w-full h-1 bg-gradient-to-r from-sky-300 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                            </CardContent>
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/50 to-blue-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}