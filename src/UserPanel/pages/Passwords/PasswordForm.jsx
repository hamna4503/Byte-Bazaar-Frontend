import { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import BLogo from "../../assets/images/navbar/bytelogo.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function PasswordForm({ isForgetPswd }) {
  const [forgetPswd, setForgetPswd] = useState({
    email: "",
  });

  const [resetPswd, setResetPswd] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    if (isForgetPswd) {
      setForgetPswd({ ...forgetPswd, [input.name]: input.value });
    } else {
      setResetPswd({ ...resetPswd, [input.name]: input.value });
    }
  };

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForgetPswdSubmit = async (e) => {
    e.preventDefault();
    console.log(forgetPswd);
    try {
      const url = "http://localhost:6005/api/forgotPassword";
      const { data: res } = await axios.post(url, forgetPswd);
    //   navigate("/bytebazaar/login");
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

  
 const handleResetPswdSubmit = async (e) => {
   e.preventDefault();
   try {
     console.log("Building connection...");
     const url = "http://localhost:6005/api/resetPassword";
     const { data: res } = await axios.post(url, resetPswd);
     console.log(res.message);
     toast.success("Password reset successfully");
     navigate("/bytebazaar/login");
   } catch (err) {
     console.error("Error resetting password:", err);
     toast.error("ERROR");
     if (
       err.response &&
       err.response.status >= 400 &&
       err.response.status <= 500
     ) {
       toast.error(`${err.response.status}: ${err.response.data.message}`);
     } else {
       toast.error("Failed to reset password");
     }
   }
 };

   



  return (
    <>
      <form
        className="px-8 pt-6 pb-2 mb-4 rounded"
        onSubmit={isForgetPswd ? handleForgetPswdSubmit : handleResetPswdSubmit}
      >
        <div className="font-mono flex items-center justify-center mb-9">
          <img
            width={40}
            height={40}
            className="rounded-full mr-1 lg:block hidden"
            src={BLogo}
            alt="avatar-img"
          />
          <span className="text-sm font-bold text-Purple lg:block hidden">
            ByteBazaar
          </span>
        </div>

        <div className="pb-9 text-2xl text-center text-black">
          {isForgetPswd ? (
            <h3 className="pt-16"> Forgot Password? </h3>
          ) : (
            <h3>Reset Password!</h3>
          )}
        </div>

        {isForgetPswd && (
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="off"
              required
              onChange={handleChange}
              value={forgetPswd.email}
            />
          </div>
        )}

        {!isForgetPswd && (
          <div className="md:mr-2 md:mb-4">
            <input
              className="w-full px-3 py-2 mb-8 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="off"
              required
              onChange={handleChange}
              value={resetPswd.email}
            />

            <input
              className="w-full px-3 py-2 mb-8 text-sm leading-tight text-gray-700 dark:text-black border border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="off"
              required
              onChange={handleChange}
              value={resetPswd.password}
            />

            <input
              className="w-full px-3 py-2 mb-5 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              autoComplete="off"
              required
              onChange={handleChange}
              value={resetPswd.confirmPassword}
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-center gap-8 align-center py-4 flex-wrap mb-0">
          <button
            className="w-70 text-sm px-12 py-1.5 font text-white shadow-sm rounded-lg focus:outline-none focus:shadow-outline bg-Purple"
            type="submit"
          >
            {isForgetPswd ? "Send" : "Reset"}
          </button>
        </div>


          <div className="mt-6 mb-3 text-center">
            <Link
              className="inline-block text-sm text-Purple align-baseline hover:text-blue-800"
              to="/bytebazaar/signup"
            >
              Don't have an account? Signup!
            </Link>
          </div>

      </form>
    </>
  );
}

