"use client";
import DashboardScreen from "@/pages/DashboardScreen";
import SigninScreen from "@/pages/SigninScreen";
import { useSession } from "next-auth/react";
import React from "react";
import { MoonLoader } from "react-spinners";

const page = () => {
  const session = useSession();

  if (session.status === "loading") {
    return (
      <div className="flex  h-[100vh] justify-center items-center">
        <MoonLoader color="#4285F4" />
      </div>
    );
  }
  if (session.status === "authenticated") {
    return (
      <div className="py-2 lg:px-10 lg:py-10">
        <DashboardScreen />
      </div>
    );
  }
  if (session.status === "unauthenticated") {
    return <SigninScreen />;
  }

  return <SigninScreen />;
};

export default page;
