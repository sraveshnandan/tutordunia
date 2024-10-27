
"use client"
import { CustomInput } from '@/components'
import Link from 'next/link'
import React, { FC, FormEvent, useState } from 'react'

interface SignUpFormProp {
    onSubmit: (e: any) => void
}

const StudentSignUpform: FC<SignUpFormProp> = ({
    onSubmit
}) => {
    const [payload, setpayload] = useState({
        full_name: "",
        email: "",
        phone_number: ""
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(payload)
    }
    return (
        <div className='bg-white flex flex-col w-full p-2 z-10'>
            <span className='text-center text-xl text-text font-semibold'>Sign Up to Book a free Demo Class</span>
            <form onSubmit={handleSubmit} className='w-[90%] flex flex-col items-center self-center my-2'>
                <CustomInput
                    label='Full Name'
                    value={payload.full_name}
                    onChange={(e) => setpayload(prev => ({ ...prev, full_name: e.target.value }))}
                    placeholder='Full name'
                />
                <CustomInput
                    label='Email'
                    type='email'
                    required
                    value={payload.email}
                    onChange={(e) => setpayload(prev => ({ ...prev, email: e.target.value }))}
                    placeholder='Email address'
                />
                <CustomInput
                    label='Phone Number'
                    required
                    value={payload.phone_number}
                    onChange={(e) => setpayload(prev => ({ ...prev, phone_number: e.target.value }))}
                    placeholder='+91 '
                />
                <button type='submit' className='w-fit bg-primary px-4 py-2 my-4 self-center text-white mx-auto rounded-md'>Continue</button>
            </form>
            <span className='text-sm font-medium my-4 text-center'>By Signing up, you agree to our <Link className='text-primary underline' href={"/terms-of-use"}>Terms of Use</Link> and <Link className='text-primary underline' href={"/privacy-policy"}>Privacy Policy</Link></span>
        </div>
    )
}

export default StudentSignUpform