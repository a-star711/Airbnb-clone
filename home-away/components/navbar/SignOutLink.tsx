"use client";

import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "You have been signed out" });
  };

  return (
    <SignInButton forceRedirectUrl="/">
      <button className="w-full text-left" onClick={handleLogout}>
        Logout
      </button>
    </SignInButton>
  );
}

export default SignOutLink;
