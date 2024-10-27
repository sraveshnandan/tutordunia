import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
    user: Record<string, any> | null;
    access_token: string | null;
    refresh_token: string | null;
    setUser: (data: Record<string, any> | null) => void;
    setAccessToken: (token: string | null) => void;
    setRefreshToken: (token: string | null) => void;
    logout: () => void
}

export const useUser = create<UserStore>()(
    persist((set) => ({
        user: null,
        access_token: null,
        refresh_token: null,
        setUser: (data: any) => set({ user: data }), // Directly set user
        setAccessToken: (token: any) => set({ access_token: token }), // Directly set access token
        setRefreshToken: (token: any) => set({ refresh_token: token }), // Directly set refresh token
        logout: () => set({ user: null, access_token: null, refresh_token: null })
    }),
        {
            name: "user-store"
        })
);
