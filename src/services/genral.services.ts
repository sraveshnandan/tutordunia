import { api } from "./api/config";

export const GetCategories = async () => {
    try {
        const res = await api.get("/category");
        return res.data;
    } catch (error: any) {
        console.log("err while fetching all category", error?.response?.data?.message);
        throw new Error(error?.response?.data?.message ? error?.response?.data?.message : error.message)

    }
}