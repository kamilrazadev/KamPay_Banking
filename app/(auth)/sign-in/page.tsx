import AuthForm from "@/components/AuthForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign In | KamPay Banking",
  description: "An ultimate modern banking platform for everyone",
};

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;
