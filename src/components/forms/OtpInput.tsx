"use client"
import { Dispatch, FC, SetStateAction, useState } from 'react';

const OtpInput: FC<{ sendOTp: Dispatch<SetStateAction<string[]>> }> = ({sendOTp}) => {

    const [otp, setOtp] = useState(['', '', '', '']);

    const handleChange = (value: any, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = value;

        if (value && index < 3) {
            const nextInput = document.getElementById(`otp-input-${index + 1}`);
            if (nextInput) nextInput.focus();
        } else if (!value && index > 0) {
            const prevInput = document.getElementById(`otp-input-${index - 1}`);
            if (prevInput) prevInput.focus();
        }

        setOtp(newOtp);
        sendOTp(newOtp)
    };

    return (
        <div className="flex space-x-2">
            {otp.map((digit, index) => (
                <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    className="w-12 h-12 text-center text-2xl border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            ))}
        </div>
    );
};

export default OtpInput;
