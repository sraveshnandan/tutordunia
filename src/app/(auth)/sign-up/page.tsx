"use client";
import { useState, Suspense } from 'react';
import AccountType from './AccountType';
import { Loader, OtpVerificationForm, StudentSignUpForm, TutorRegistrationForm } from '@/components';
import { SendOtpToMobile } from '@/services/auth.services';
import toast from 'react-hot-toast';

const SignUpPage = () => {
    const [mode, setMode] = useState<string | null>(null);
    const [otpVerified, setOtpVerified] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [step, setStep] = useState<number>(0);
    const [payload, setPayload] = useState({
        full_name: "",
        email: "",
        phone_number: ""
    });
    const [verificationId, setVerificationId] = useState<string>("");

    const handleFormSubmit = async (data: any) => {
        setLoading(true);
        setPayload(data);
        try {
            const phone = Number(data.phone_number);
            const otpRes = await SendOtpToMobile(phone);
            setVerificationId(otpRes?.data?.verificationId);
            setStep(1);
        } catch (error) {
            toast.error("Unable to send OTP.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Suspense fallback={<Loader />}>
            <div className='w-full h-[100dvh] flex items-center justify-center'>
                {loading && <Loader />}
                {!mode ? (
                    <AccountType setmode={setMode} />
                ) : mode === "teacher" ? (
                    <div className='w-full'><TutorRegistrationForm setLoading={setLoading} /></div>
                ) : (
                    <div className='bg-white rounded-md shadow-md shadow-black/10 flex flex-col md:w-[50%] w-[90%] p-2 z-10'>
                        {
                            step === 0 ?
                                <StudentSignUpForm onSubmit={handleFormSubmit} /> :
                                <OtpVerificationForm
                                    otpVerified={otpVerified}
                                    setOtpVerified={setOtpVerified}
                                    verification_id={Number(verificationId)}
                                    setLoading={setLoading}
                                    phone_number={payload.phone_number}
                                    payload={payload}
                                />
                        }
                    </div>
                )}
            </div>
        </Suspense>
    );
};

export default SignUpPage;
