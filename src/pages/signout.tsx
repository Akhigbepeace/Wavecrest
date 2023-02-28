import React, { useEffect } from "react";
import { signOut } from "next-auth/react";

const SignOut = () => {
  useEffect(() => {
    signOut({ callbackUrl: "/home" });
  }, []);
  return <div>Signing Out...</div>;
};

export default SignOut;
