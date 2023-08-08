import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormProps {
  onSubmit: (data: FormData) => boolean;
}

export interface FormData {
  email: string;
  password: string;
}

const Login: React.FC<FormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (onSubmit(formData)) {
      navigate("/");
    }else {
      console.log("password or something went wrong")
    }
  }
  // console.log(formData)
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Sign in to your account
        </h2>
      </div>
      <form
        className="mt-8 space-y-6"
        action="#"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px ">
          <div className=" mb-5">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="appearance-none rounded-md relative block
            w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900 
            focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              onChange={handleInputChange}
              value={formData.password}
              className="appearance-none rounded-md relative block
            w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900 
            focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
            border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-white"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-blueD2 hover:text-blueDH ml-2"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center
          py-2 px-4 border border-transparent text-sm font-medium
          rounded-md text-white bg-blueD2 hover:bg-blueDH
          focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
