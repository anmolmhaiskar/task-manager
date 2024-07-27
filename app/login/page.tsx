"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Login from "../components/client/Login";

function LoginForm() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-purple-50 to-violetGaze-300">
      <div className="w-full mt-10 max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="p-6">
          <div>
            <h1 className="text-2xl text-black font-bold text-center mb-4">
              Welcome to <span className="text-indigo-700">Workflo</span>!
            </h1>
            <Login />
            <div className="text-center mt-4 text-sm">
              <p className="text-gray-500">
                Don&apos;t have an account? Create a{" "}
                <Link href={"/signup"} className="text-blue-600">
                  new account.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
