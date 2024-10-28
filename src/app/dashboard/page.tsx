"use client"
import { useUser } from "@/state/zustand/useUser"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashBoardPage = () => {
    const { user } = useUser();
    const router = useRouter()
    useEffect(() => {
        if (!user) {
            return router.replace("/")
        }
    }, [])
    return (
        <div className="w-full">

        </div>
    )
}

export default DashBoardPage