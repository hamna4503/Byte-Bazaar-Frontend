import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AuthFormFields({ isLoginForm }) {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    if (isLoginForm) {
      setLoginData({ ...loginData, [input.name]: input.value });
    } else {
      setSignupData({ ...signupData, [input.name]: input.value });
    }
  };

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    console.log(signupData);
    try {
      const url = "http://localhost:8080/api/signup";
      const { data: res } = await axios.post(url, signupData);
      navigate("/bytebazaar/login");
      console.log(res.message);
    } catch (err) {
      if (
        err.response &&
        err.response.status >= 400 &&
        err.response.status <= 500
      ) {
        setError(err.response.data.message);
      }
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    try {
      const url = "http://localhost:8080/api/login";
      const { data: res } = await axios.post(url, loginData);
      const token = res.data;
      document.cookie = `authToken=${token}; Secure; HttpOnly; SameSite=Strict`;
      navigate("/");
      // window.location.href = "/";
      console.log(res.message);
    } catch (err) {
      if (
        err.response &&
        err.response.status >= 400 &&
        err.response.status <= 500
      ) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <>
      <form
        className="px-8 pt-6 pb-2 mb-4 rounded"
        onSubmit={isLoginForm ? handleLoginSubmit : handleSignupSubmit}
      >
        {/* <form className="px-8 pt-6 pb-2 mb-4 rounded" onSubmit={handleSubmit}> */}
        {/* SIGNUP */}
        {!isLoginForm && (
          <>
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <input
                  className="mb-4 w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  value={signupData.firstName}
                />
              </div>
              <div className="md:ml-2">
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  value={signupData.lastName}
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
                required
                onChange={handleChange}
                value={signupData.email}
              />
            </div>

            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  value={signupData.password}
                />
              </div>

              <div className="md:ml-2">
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  value={signupData.confirmPassword}
                />
              </div>
            </div>
          </>
        )}

        {/* LOGIN FORM  */}
        {isLoginForm && (
          <div className="my-3 md:mr-2 md:mb-4">
            <div className="mb-6">
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
                required
                onChange={handleChange}
                value={loginData.email}
              />
            </div>

            <input
              className="w-full px-3 py-2 mb-6 text-sm leading-tight text-gray-700 dark:text-black border border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="off"
              required
              onChange={handleChange}
              value={loginData.password}
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-center gap-8 align-center py-4 flex-wrap mb-0">
          <button
            className="w-70 text-sm px-12 py-1.5 font text-white shadow-sm rounded-lg focus:outline-none focus:shadow-outline bg-Purple"
            type="submit"
          >
            {!isLoginForm ? "Register" : "Login"}
          </button>

          <span className="font-bold text-black">OR</span>

          <button className="w-70 max-w-xs text-sm font text-white shadow-sm rounded-lg px-3 py-1.5 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline bg-Purple">
            <svg className="w-4" viewBox="0 0 533.5 544.3">
              <path
                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                fill="#4285f4"
              />
              <path
                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                fill="#34a853"
              />
              <path
                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                fill="#fbbc04"
              />
              <path
                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                fill="#ea4335"
              />
            </svg>
            <span className="ml-4">
              {!isLoginForm ? "Sign Up with Google" : "Login with Google"}
            </span>
          </button>
        </div>
      </form>
    </>
  );
}
