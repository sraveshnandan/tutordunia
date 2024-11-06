'use client'

import { useState, useCallback, FC, Dispatch, SetStateAction } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CheckCircle2, Loader2, ChevronLeft, ChevronRight } from 'lucide-react'
import toast from 'react-hot-toast'

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)

const schema = z.object({
    fullName: z.string().min(2, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    address: z.string().min(5, 'Address is required'),
    phone: z.string().regex(phoneRegex, 'Invalid phone number'),
    qualification: z.string().min(2, 'Qualification is required'),
    bio: z.string().min(50, 'Bio should be at least 50 characters long'),
    category: z.string().min(1, 'Category is required'),
    subject: z.string().min(1, 'Subject is required'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
})

const TutorRegistrationForm: FC<{ setLoading: Dispatch<SetStateAction<boolean>> }> = ({ setLoading }) => {
    const [step, setStep] = useState(1)
    const [otpDialogOpen, setOtpDialogOpen] = useState(false)
    const [otp, setOtp] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [certificatePreview, setCertificatePreview] = useState(null)
    const [profilePicPreview, setProfilePicPreview] = useState(null)
    const [demoVideoPreviews, setDemoVideoPreviews] = useState([])

    const { register, handleSubmit, control, formState: { errors }, watch } = useForm({
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data: any) => {
        try {
            setIsSubmitting(true)
            console.log(data)
            setIsSubmitting(false)
            setIsSuccess(true)
        } catch (error: any) {
            return toast.error(error.message)
        } finally {
            setIsSubmitting(false);

        }
    }

    const verifyOtp = () => {
        // Simulate OTP verification
        if (otp === '1234') {
            setOtpDialogOpen(false)
            setStep(2)
        } else {
            alert('Invalid OTP')
        }
    }

    const handleFileChange = useCallback((event: any, setPreview: any) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }, [])

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" {...register('fullName')} />
                                {errors.fullName && <p className="text-red-500 text-sm">{errors?.fullName?.message as any}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" {...register('email')} />
                                {errors.email && <p className="text-red-500 text-sm">{errors?.email?.message as any}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Input id="address" {...register('address')} />
                                {errors.address && <p className="text-red-500 text-sm">{errors?.address?.message as any}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" {...register('phone')} />
                                {errors.phone && <p className="text-red-500 text-sm">{errors?.phone?.message as any}</p>}
                            </div>
                            <Button onClick={() => setOtpDialogOpen(true)}>Verify Phone Number</Button>
                        </div>
                        <Dialog open={otpDialogOpen} onOpenChange={setOtpDialogOpen}>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Enter OTP</DialogTitle>
                                    <DialogDescription>
                                        We've sent a one-time password to your phone. Please enter it below.
                                    </DialogDescription>
                                </DialogHeader>
                                <Input
                                    value={otp}
                                    onChange={(e: any) => setOtp(e.target.value)}
                                    placeholder="Enter OTP"
                                />
                                <Button onClick={verifyOtp}>Verify OTP</Button>
                            </DialogContent>
                        </Dialog>
                    </>
                )
            case 2:
                return (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="qualification">Qualification</Label>
                            <Input id="qualification" {...register('qualification')} />
                            {errors.qualification && <p className="text-red-500 text-sm">{errors?.qualification?.message as any}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="certificate">Qualification Certificate</Label>
                            <Input
                                id="certificate"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e: any) => handleFileChange(e, setCertificatePreview)}
                            />
                            {certificatePreview && (
                                <div className="mt-2 w-24 h-24 relative">
                                    <img src={certificatePreview} alt="Certificate preview" className="w-full h-full object-cover rounded" />
                                </div>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="profilePic">Profile Picture</Label>
                            <Input
                                id="profilePic"
                                type="file"
                                accept="image/*"
                                onChange={(e: any) => handleFileChange(e, setProfilePicPreview)}
                            />
                            {profilePicPreview && (
                                <div className="mt-2 w-24 h-24 relative">
                                    <img src={profilePicPreview} alt="Profile picture preview" className="w-full h-full object-cover rounded-full" />
                                </div>
                            )}
                        </div>
                    </div>
                )
            case 3:
                return (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea id="bio" {...register('bio')} />
                            {errors.bio && <p className="text-red-500 text-sm">{errors?.bio?.message as any}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Controller
                                name="category"
                                control={control}
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="academic">Academic</SelectItem>
                                            <SelectItem value="language">Language</SelectItem>
                                            <SelectItem value="professional">Professional Skills</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.category && <p className="text-red-500 text-sm">{errors?.category?.message as any}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Controller
                                name="subject"
                                control={control}
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a subject" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="math">Mathematics</SelectItem>
                                            <SelectItem value="science">Science</SelectItem>
                                            <SelectItem value="english">English</SelectItem>
                                            <SelectItem value="programming">Programming</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.subject && <p className="text-red-500 text-sm">{errors?.subject?.message as any}</p>}
                        </div>
                    </div>
                )
            case 4:
                return (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" {...register('password')} />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message as any}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input id="confirmPassword" type="password" {...register('confirmPassword')} />
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message as any}</p>}
                        </div>
                        <Button type="submit" disabled={isSubmitting} className="w-full">
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                'Create Account'
                            )}
                        </Button>
                    </div>
                )
            default:
                return null
        }
    }

    if (isSuccess) {
        return (
            <Card className="w-full max-w-md mx-auto mt-8">
                <CardContent className="flex flex-col items-center justify-center p-6">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
                    <CardTitle className="text-2xl font-bold text-center mb-2">Registration Successful!</CardTitle>
                    <p className="text-center text-gray-600">
                        Your tutor account has been created. You can now log in and start teaching.
                    </p>
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="min-h-screen w-full overflow-hidden relative flex items-center justify-center text-text">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-4 my-8">
                <Card className="backdrop-blur-sm bg-white/30">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold  text-center">Tutor Registration - Step {step} of 4</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {renderStep()}
                        <div className="flex justify-between mt-6">
                            {step > 1 && (
                                <Button type="button" onClick={() => setStep(step - 1)} variant="outline">
                                    <ChevronLeft className="mr-2 h-4 w-4" />
                                    Back
                                </Button>
                            )}
                            {step < 4 && (
                                <Button type="button" onClick={() => setStep(step + 1)} className="ml-auto">
                                    Next
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    )
}


export default TutorRegistrationForm