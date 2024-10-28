import { create } from "zustand";

interface IUser {
    fullName: string;
    setFullName: (name: string) => void;
}

const useTestUser = create<IUser>((set) => ({
    fullName: "",
    setFullName: (name: string) => set({ fullName: name }),
}));

export default useTestUser;