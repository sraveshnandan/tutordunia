import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-1 py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
                        Frequently Asked Questions
                    </h1>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How does Tutor Dunia work?</AccordionTrigger>
                            <AccordionContent>
                                Tutor Dunia connects students with expert tutors for one-on-one online learning sessions. You can search for tutors based on subject, expertise, and availability, book sessions that fit your schedule, and engage in interactive learning through our online platform.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How much does it cost to use Tutor Dunia?</AccordionTrigger>
                            <AccordionContent>
                                Tutor rates vary depending on the tutor's experience and the subject. You can see each tutor's hourly rate on their profile. There's no subscription fee to use Tutor Dunia - you only pay for the sessions you book.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>What subjects are available on Tutor Dunia?</AccordionTrigger>
                            <AccordionContent>
                                Tutor Dunia offers a wide range of subjects including mathematics, sciences, languages, humanities, test preparation, and more. You can use our search feature to find tutors for specific subjects or topics you need help with.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>How do I become a tutor on Tutor Dunia?</AccordionTrigger>
                            <AccordionContent>
                                To become a tutor, you need to apply through our website. We'll review your qualifications and experience. If approved, you can create your profile, set your rates, and start accepting students. We look for tutors with strong academic backgrounds and teaching experience.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Is Tutor Dunia available worldwide?</AccordionTrigger>
                            <AccordionContent>
                                Yes, Tutor Dunia is available globally. Since all tutoring sessions are conducted online, you can connect with tutors and students from around the world. This allows for a diverse learning experience and access to a wide range of expertise.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>What if I'm not satisfied with my tutoring session?</AccordionTrigger>
                            <AccordionContent>
                                We strive to ensure high-quality tutoring experiences. If you're not satisfied with a session, please contact our support team within 24 hours of the session. We'll review your case and may offer a refund or a free replacement session, depending on the circumstances.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="mt-12  text-center">
                        <p className="text-lg mb-4">Didn't find the answer you were looking for?</p>
                        <Link href={"/contact-us"}>
                            <Button variant={"default"} >Contact Support</Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}