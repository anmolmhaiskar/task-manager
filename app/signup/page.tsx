"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import Signup from "../components/client/Signup";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post("/api/login", { email, password });

      router.push("/dashboard");
    } catch (error) {
      setError("Login failed!  Error: " + error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-purple-50 to-violetGaze-300">
      <div className="w-full mt-10 max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h1 className="text-2xl text-black font-bold text-center mb-4">
            Welcome to <span className="text-indigo-700">Workflo</span>!
          </h1>
          <Signup />
          <div className="text-center mt-4 text-sm">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link href={"/login"} className="text-blue-600">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
