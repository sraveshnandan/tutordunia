// components/CustomInput.tsx
import React from 'react';

interface CustomInputProps {
    label?: string;
    type?: string;
    value: string;
    required?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
    label,
    type = 'text',
    value,
    required = false,
    onChange,
    placeholder,
    className,
}) => {
    return (
        <div className={`flex flex-col mt-4 w-full ${className}`}>
            {label && <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 transition"
            />
        </div>
    );
};

export default CustomInput;
