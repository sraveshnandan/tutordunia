import { api } from "./api/config"
export const GetTutors = async () => {
    try {
        const res = await api.get("/tutors");
        return res.data
    } catch (error: any) {
        console.log("send otp err", JSON.stringify(error.response, null, 1));
        throw new Error(error?.response?.data?.message ? error?.response?.data?.message : error.message)
    }
}