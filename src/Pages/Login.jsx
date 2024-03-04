import { useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
  };

  return (
    <div className="bg-[#3EB049] h-screen  max-w-full md:flex items-center justify-center">
      <div className="bg-[#FFFFFF] px-16 py-12 lg:w-[38%] h-full md:h-auto  md:rounded-2xl">
        <h1 className="text-[#2A3547] text-3xl font-bold mb-16">
          Welcome to DAS
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="username" className="mb-1 text-gray-700">
            Username
          </label>
          <Input type="text" id="username" />
          <label htmlFor="password" className="mb-1 text-gray-700">
            Password
          </label>
          <Input type="password" id="password" />
          <div className="mb-10 flex items-center text-gray-700">
            <input
              type="checkbox"
              id="checkbox"
              required
              className="accent-[#3EB049]  w-5 h-5 mr-2 cursor-pointer"
            />{" "}
            Remember this device
          </div>
          <Button name="Sign In" loading={loading} />
        </form>
      </div>
    </div>
  );
}
