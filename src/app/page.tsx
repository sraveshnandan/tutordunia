"use client"
import { FeatureSection, HeroSection, HowToSection, ReviewsSection } from "@/components";
import { AppAxios } from "@/services/api/config";
import { FetchUserProfile } from "@/services/auth.services";
import { useUser } from "@/state/zustand/useUser";
import { useEffect } from "react";

export default function Home() {
  const { access_token, setAccessToken, setRefreshToken, setUser } = useUser()
  const fetchUser = async () => {
    const pr = await AppAxios.get("/user/profile");
    console.log(pr)
    const data = await FetchUserProfile(access_token as any);
    const { user, access_token: a_token, refresh_token } = data;
    setAccessToken(a_token);
    setRefreshToken(refresh_token);
    setUser(user)
  }

  useEffect(() => {
    if (access_token) {
      fetchUser()
    }
  }, [access_token])

  return (
    <>
      <HeroSection />
      <FeatureSection />
      <HowToSection />
      <ReviewsSection />
    </>
  );
}
