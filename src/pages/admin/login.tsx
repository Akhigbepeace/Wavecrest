import { useRouter } from "next/router";
import React, {
  FormEvent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { signIn } from "next-auth/react";
import LoginLayout from "components/layouts/loginLayout";

const Login = () => {
  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const retrievePath = () => {
      if (router.query.error === "CredentialsSignin") {
        setErrorMsg("Credentials is invalid");
        router.replace("/admin/login");
      }
    };

    retrievePath();
  }, [router]);

  const handleChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInput((input) => ({
      ...input,
      [name]: value,
    }));
    setErrorMsg("");
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!input.email || !input.password) {
        alert("Missing required fields...");
        return;
      }
      signIn("credentials", {
        ...input,
        callbackUrl: "/admin/home",
      });
    },
    [input]
  );

  return (
    <LoginLayout
      error={errorMsg}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
};

export default Login;
