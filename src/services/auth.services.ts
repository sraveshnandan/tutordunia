import { api, AppAxios } from "./api/config";

export const SendOtpToMobile = async (phone_number: number) => {
    try {
        const res = await api.post(`/send-otp`, { phone_number });
        return res?.data?.otp_res
    } catch (error: any) {
        console.log("send otp err", JSON.stringify(error.response, null, 1));
        throw new Error(error?.response?.data?.message ? error?.response?.data?.message : error.message)
    }
}

export const VerifyOtpToMobile = async (phone_number: number, otp: number, verification_id: number) => {
    try {
        const res = await api.post("/verify-otp", { phone_number, otp, verification_id });
        return res.data
    } catch (error: any) {
        console.log("verify otp err", JSON.stringify(error.response, null, 1));
        throw new Error(error?.response?.data?.message ? error?.response?.data?.message : error.message)
    }
}

export const RegisterUser = async (payload: any) => {
    try {
        const res = await api.post("/user/sign-up", { ...payload });
        return res.data
    } catch (error: any) {
        console.log("register user err", JSON.stringify(error.response, null, 1));
        throw new Error(error?.response?.data?.message ? error?.response?.data?.message : error.message)
    }
}


export const FetchUserProfile = async () => {
    try {
        const res = await AppAxios.get("/user/profile");
        return res.data
    } catch (error: any) {
        console.log("fetch profile err", JSON.stringify(error));
        throw new Error(error?.response?.data?.message ? error?.response?.data?.message : error.message)
    }
};

export const RefreshToken = async () => {
    try {
        const res = await AppAxios.get("/user/profile");
        return res.data
    } catch (error: any) {
        console.log("verify otp err", JSON.stringify(error.response, null, 1));
        throw new Error(error?.response?.data?.message ? error?.response?.data?.message : error.message)
    }
};


export const LoginUser = async (phone_number: number, password: string) => {
    try {
        const res = await api.post("/user/sign-in", { phone_number, password });
        return res.data
    } catch (error: any) {
        console.log("verify otp err", JSON.stringify(error.response, null, 1));
        throw new Error(error?.response?.data?.message ? error?.response?.data?.message : error.message)
    }
}




