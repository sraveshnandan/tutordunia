"use client"
import { useState } from 'react';
import AccountType from './AccountType';
import { Loader, OtpVerificationForm, StudentSignUpForm } from '@/components';
import { SendOtpToMobile } from '@/services/auth.services';
import toast from 'react-hot-toast';

const SignUpPage = () => {

    const [mode, setMode] = useState<string | null>(null);
    const [otpVerified, setotpVerified] = useState<boolean>(false);
    const [loading, setloading] = useState<boolean>(false);
    const [step, setstep] = useState<number>(0);
    const [payload, setPayload] = useState({
        full_name: "",
        email: "",
        phone_number: ""
    });
    const [verificationId, setVerificationId] = useState<string>("")

    // form submit action 
    const handelFormSubmit = async (data: any) => {
        setPayload(data);
        console.log(payload)
        try {
            const phone = Number(data.phone_number)
            //    sending otp to phone number 
            try {
                const otpRes = await SendOtpToMobile(phone);
                setVerificationId(otpRes?.data?.verificationId);
                setPayload(data)
                setstep(1);
                console.log("payload", payload)
            } catch (error) {
                return toast.error("Unable to send Otp.")
            }

        } catch (error) {
            return toast.error("Something went wrong.")
        } finally { setloading(false); }
    };

   

    return (
        <div className='w-full h-[100dvh] flex items-center justify-center'>
            {loading && <Loader />}
            {!mode ? (
                <AccountType setmode={setMode} />
            ) : mode === "teacher" ? (
                <div className='bg-red-600 p-12 z-50'>
                    <span>Sign Up as a Tutor</span>
                </div>
            ) : (
                <div className='bg-white rounded-md shadow-md shadow-black/10 flex flex-col md:w-[50%] w-[90%] p-2 z-10'>
                    {
                        step === 0 ? <StudentSignUpForm onSubmit={handelFormSubmit} /> : <OtpVerificationForm otpVerified={otpVerified} setOtpVerified={setotpVerified} verification_id={Number(verificationId)} setLoading={setloading} phone_number={payload.phone_number} payload={payload} />
                    }
                </div>
            )}
        </div>
    )
}

export default SignUpPage;
