"use client"
import { CustomInput, Loader } from "@/components"
import { LoginUser } from "@/services/auth.services";
import { useUser } from "@/state/zustand/useUser";
import { EyeClosed, EyeIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"
import toast from "react-hot-toast";

const SignInPage = () => {
    const { setUser, setAccessToken, setRefreshToken } = useUser();
    const router = useRouter()
    const [paload, setpaload] = useState({
        phone_number: "",
        password: ""
    });
    const [show, setshow] = useState<boolean>(false);
    const [loading, setloading] = useState<boolean>(false)


    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const loginRes = await LoginUser(Number(paload.phone_number), paload.password);
            const { user, access_token, refresh_token } = loginRes
            setUser(loginRes?.user);
            console.log(loginRes)
            setAccessToken(access_token);
            setRefreshToken(refresh_token);
            toast.success("Login Successfull.");
            return router.replace("/")
        } catch (error: any) {
            return toast.error(error.message)
        } finally {
            setloading(false)
        }
    }
    return (
        <div className='w-full h-[100dvh] flex items-center justify-center'>

            {loading && <Loader />}
            <div className="bg-gray-200 text-center w-[90%] md:w-[35%] p-4  rounded-md">
                <div className="bg-[#00d59d] rounded-md text-center w-full py-4">
                    <span className="text-xl text-white w-full">Login to your Account</span>
                </div>

                <form onSubmit={handleFormSubmit} className="p-4 text-start flex flex-col gap-4">
                    <CustomInput
                        value={paload.phone_number}
                        onChange={(e) => setpaload(prev => ({ ...prev, phone_number: e.target.value }))}
                        label="Phone No. (without +91)"
                        required
                        placeholder="Enter your phone number"
                    />
                    <label htmlFor="pass">Enter Password</label>
                    <div className='flex flex-row p-1 bg-white rounded-md border-[1px]   items-center'>
                        <input
                            className='p-2 flex-grow outline-none border-none'
                            type={!show ? "text" : "password"}
                            id='pass'
                            minLength={6}
                            required
                            onChange={(data) => setpaload(prev => ({ ...prev, password: data.target.value.trim() }))}
                            value={paload.password}
                            placeholder='Enter your Password'
                        />
                        {
                            show ? <EyeClosed onClick={() => setshow(prev => !prev)} /> : <EyeIcon onClick={() => setshow(prev => !prev)} />
                        }
                    </div>
                    <button className='bg-primary px-4 py-3 mt-4 rounded-md text-white text-md font-semibold'>Login</button>
                </form>
                <div className="flex flex-col">
                    <span className='text-sm font-medium my-4 text-center'>By Signing up, you agree to our <Link className='text-primary underline' href={"/terms-of-use"}>Terms of Use</Link> and <Link className='text-primary underline' href={"/privacy-policy"}>Privacy Policy</Link></span>

                    <span>New User ? <Link className='text-primary underline' href={"/sign-up"}>Sign Up Now</Link> ! It's FREE!</span>
                </div>
            </div>
        </div>
    )
}

export default SignInPage