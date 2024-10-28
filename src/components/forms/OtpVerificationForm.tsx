"use client"
import { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
import Link from 'next/link';
import OtpInput from './OtpInput';
import { RegisterUser, VerifyOtpToMobile } from '@/services/auth.services';
import toast from 'react-hot-toast';
import { EyeClosed, EyeIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/state/zustand/useUser';

interface OTPVerificationProps {
    phone_number: string,
    setLoading: Dispatch<SetStateAction<boolean>>;
    verification_id: number,
    setOtpVerified: Dispatch<SetStateAction<boolean>>;
    otpVerified: boolean;
    payload: Object
}

const OtpVerificationForm: FC<OTPVerificationProps> = ({ phone_number, setLoading, verification_id, setOtpVerified, otpVerified, payload }) => {

    const router = useRouter();
    const { setUser, setAccessToken, setRefreshToken } = useUser()
    const [otp, setOtp] = useState(['', '', '', '']);
    const [password, setpassword] = useState<string>("");
    const [confirmPassword, setconfirmPassword] = useState<string>("");
    const [show, setshow] = useState<boolean>(false)


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (otpVerified) {
            await handleRegistation()
        } else {
            await handleOTPVerify()
        }
    }

    // for otp resend option 
    const handleOTPResend = async () => {

    }

    // for otp verification 
    const handleOTPVerify = async () => {
        setLoading(true)
        try {
            const formatedOtp = Number(otp.join(""));
            const verify_res = await VerifyOtpToMobile(Number(phone_number), formatedOtp, verification_id);
            if (verify_res.success) {
                toast.success("Otp Verified successfully.");
                setOtpVerified(true)
            }
        } catch (error) {
            return toast.error("Something went wrong.")
        } finally {
            setLoading(false)
        }
    }


    // final registration 

    const handleRegistation = async () => {
        setLoading(true)
        try {
            if (password.toString() !== confirmPassword.toString()) {
                return toast.error("Password does'nt matched.")
            }
            const newpayload = { ...payload, password };

            const createAccountRes = await RegisterUser(newpayload);
            if (!createAccountRes.success) {
                return toast.error("Unable to create new account.")
            }
            const newUser = createAccountRes?.user;
            const { user, access_token, refresh_token } = createAccountRes;
            setUser(user);
            setAccessToken(access_token);
            setRefreshToken(refresh_token)
            router.replace("/dashboard");
        } catch (error) {
            return toast.error("Something went wrong.")
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className='bg-white flex flex-col w-full p-2 z-10'>
            <span className='text-center text-2xl text-text font-semibold'>Verify your Phone Number</span>
            <form onSubmit={handleSubmit} className='w-[90%] flex flex-col items-center self-center my-2'>
                <div className='my-8 w-full'>

                    {otpVerified ? (
                        <div className='flex flex-col gap-2'>
                            <label className='text-md font-semibold mb-1' htmlFor="pass">Password</label>
                            <div className='flex flex-row p-1 rounded-md border-[1px]   items-center'>
                                <input
                                    className='p-2 flex-grow outline-none border-none'
                                    type={!show ? "text" : "password"}
                                    id='pass'
                                    minLength={6}
                                    required
                                    onChange={(data) => setpassword(data.target.value)}
                                    value={password}
                                    placeholder='Enter your Password'
                                />
                                {
                                    show ? <EyeClosed onClick={() => setshow(prev => !prev)} /> : <EyeIcon onClick={() => setshow(prev => !prev)} />
                                }
                            </div>
                            <label className='text-md font-semibold mb-1' htmlFor="pass2">Confirm Password</label>
                            <div className='flex flex-row p-1 rounded-md border-[1px]   items-center'>
                                <input
                                    className='p-2 flex-grow outline-none border-none'
                                    type={!show ? "text" : "password"}
                                    id='pass2'
                                    minLength={6}
                                    required
                                    onChange={(data) => setconfirmPassword(data.target.value)}
                                    value={confirmPassword}
                                    placeholder='Confirm your Password'
                                />
                                {
                                    show ? <EyeClosed onClick={() => setshow(prev => !prev)} /> : <EyeIcon onClick={() => setshow(prev => !prev)} />
                                }
                            </div>
                        </div>


                    ) : (
                        <div className='w-full items-center flex flex-col'>
                            <label htmlFor="" className='text-text mb-2'>Enter OTP</label>
                            <OtpInput sendOTp={setOtp} />
                        </div>
                    )}
                </div>
                <button type='submit' className={`w-fit ${otpVerified ? "bg-green" : "bg-primary"} px-4 py-2 my-4 self-center text-white mx-auto rounded-md`}>{otpVerified ? "Create Account" : "Verify"}</button>
            </form>
            <span className='text-sm font-medium my-4 text-center'>By Signing up, you agree to our <Link className='text-primary underline' href={"/terms-of-use"}>Terms of Use</Link> and <Link className='text-primary underline' href={"/privacy-policy"}>Privacy Policy</Link></span>
        </div>
    )
}

export default OtpVerificationForm