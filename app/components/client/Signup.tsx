"use client";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      setFormData({ name: "", email: "", password: "" });
      const response = await axios.post("/api/login", {
        email: formData.email,
        password: formData.password,
      });

      router.push("/dashboard");
    } catch (error) {
      setError("Login failed!  Error: " + error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-gray-300 focus:shadow-outline"
            placeholder="Full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-gray-300 focus:shadow-outline"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="mb-4 relative">
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-gray-300 focus:shadow-outline"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-3 text-gray-500"
          >
            {isPasswordVisible ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full bg-violetGaze-700 hover:bg-indigo-800 text-white py-2 rounded-md"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
