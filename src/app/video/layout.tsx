import type { Metadata } from 'next';
import React, { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
    title: "Tutor Dunia",
    description: "Generated by create next app",
};

const VideoCallLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body
                className={`antialiased text-text bg-[#f7f7f7] w-full  mx-auto`}
            >
                {children}
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </body>
        </html>
    )
}

export default VideoCallLayout