import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-200 py-12 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-blue-800 text-center">Terms of Service</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800 space-y-4">
                        <p>
                            Welcome to Tutor Dunia. By using our website and services, you agree to comply with and be bound by the following terms and conditions of use.
                        </p>

                    </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-800">1. Acceptance of Terms</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800">
                        <p>
                            By accessing or using Tutor Dunia, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
                        </p>
                    </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-800">2. User Accounts</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800">
                        <p>
                            To use certain features of Tutor Dunia, you may be required to create an account. You are responsible for:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Maintaining the confidentiality of your account and password</li>
                            <li>Restricting access to your computer and account</li>
                            <li>Accepting responsibility for all activities that occur under your account or password</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-800">3. Service Description</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800">
                        <p>
                            Tutor Dunia provides an online platform connecting students with tutors. We do not guarantee the quality of tutoring services provided by individual tutors. Users are encouraged to review tutor profiles and ratings before booking sessions.
                        </p>
                    </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-800">4. User Conduct</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800">
                        <p>
                            You agree to use Tutor Dunia for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Harassment or intimidation of other users</li>
                            <li>Posting or transmitting any unlawful, threatening, or libelous material</li>
                            <li>Attempting to gain unauthorized access to our systems or other user accounts</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-800">5. Intellectual Property</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800">
                        <p>
                            The content on Tutor Dunia, including text, graphics, logos, and software, is the property of Tutor Dunia or its content suppliers and is protected by copyright laws. Users may not:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Reproduce, distribute, or publicly display any content from the site without permission</li>
                            <li>Modify or create derivative works based on the site content</li>
                            <li>Use any content for commercial purposes without our express consent</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-800">6. Changes to Terms</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800">
                        <p>
                            We reserve the right to modify these terms at any time. Your continued use of Tutor Dunia after changes are posted constitutes your acceptance of the modified terms.
                        </p>
                    </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-800">Contact Us</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800">
                        <p>
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <p className="mt-2">
                            Email: terms@tutordunia.com<br />
                            Address: 123 Education Street, Learning City, 12345, India
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}