import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-200 py-12 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-blue-800 text-center">Privacy Policy</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800 space-y-4">
                        <p>
                            At Tutor Dunia, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>

                    </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-800">Information We Collect</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800">
                        <p>
                            We collect personal information that you provide to us, such as your name, email address, and any other information you choose to provide when you:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Create an account</li>
                            <li>Book a tutoring session</li>
                            <li>Communicate with us</li>
                            <li>Participate in surveys or promotions</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-800">How We Use Your Information</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800">
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process your requests and transactions</li>
                            <li>Communicate with you about our services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-800">Information Sharing and Disclosure</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800">
                        <p>
                            We do not sell or rent your personal information to third parties. We may share your information with:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Tutors to facilitate your learning sessions</li>
                            <li>Service providers who perform services on our behalf</li>
                            <li>Law enforcement or other governmental agencies, as required by law</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-800">Your Rights and Choices</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800">
                        <p>You have the right to:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Access, correct, or delete your personal information</li>
                            <li>Object to or restrict certain processing of your information</li>
                            <li>Data portability</li>
                            <li>Withdraw your consent at any time</li>
                        </ul>
                        <p className="mt-4">
                            To exercise these rights, please contact us at privacy@tutordunia.com.
                        </p>
                    </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/70 shadow-xl border border-blue-200">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-800">Contact Us</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-800">
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="mt-2">
                            Email: privacy@tutordunia.com<br />
                            Address: 123 Education Street, Learning City, 12345, India
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}