// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AuthHeader from "../AuthorizationForms/AuthHeader";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function OTPVerification() {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     const searchParams = new URLSearchParams(window.location.search);
//     const emailParam = searchParams.get("email");
//     if (emailParam) {
//       setEmail(emailParam);
//     }
//   }, []);

//   const handleInputChange = (index, value) => {
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//   };

//   const handleVerify = async () => {
//     const enteredOtp = otp.join(""); // Combine the OTP digits
//     console.log("Entered OTP:", enteredOtp);

//     try {
//       const response = await axios.post(
//         "http://localhost:6005/api/user-otp-verification",
//         { userOTP: enteredOtp, recipientEmail: email }
//       );
//       console.log("Verification response:", response.data);
//       toast.success('OTP verified successfully!', {
//       onClose: () => {
//         window.location.href = 'http://localhost:5173/bytebazaar/reset-password';
//       },});
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//     }
//   };

//   const handleResendOTP = async () => {
//     console.log("I am sending req to backend");
//     console.log(email);
//     try {
//       const response = await axios.post(
//         "http://localhost:6005/api/resend-otp",
//         { recipientEmail: email }
//       );
//       console.log("Resend OTP response:", response.data);

//     } catch (error) {
//       console.error("Error resending OTP:", error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-Purple">
//       <div className="max-w-md w-full mx-auto p-6 bg-white rounded shadow-md">
//         <form className="px-4 py-6">
//           <AuthHeader isOTP={true} />
//           <div className="flex justify-center gap-2 mb-6">
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                 type="text"
//                 maxLength="1"
//                 pattern="[0-9]"
//                 inputMode="numeric"
//                 autoComplete="one-time-code"
//                 value={digit}
//                 onChange={(e) => handleInputChange(index, e.target.value)}
//                 required
//               />
//             ))}
//           </div>
//           <div className="flex items-center justify-center">
//             <button
//               className="bg-Purple hover:bg-purple-400 text-white py-2 px-6 rounded focus:outline-none focus:shadow-outline"
//               type="button"
//               onClick={handleVerify}
//             >
//               Verify
//             </button>
//             <a
//               className="inline-block align-baseline text-Purple hover:text-teal-800 ml-4"
//               href="#"
//               onClick={handleResendOTP}
//             >
//               Resend OTP
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthHeader from "../AuthorizationForms/AuthHeader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, []);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join(""); // Combine the OTP digits
    console.log("Entered OTP:", enteredOtp);

    try {
      const response = await axios.post(
        "http://localhost:6005/api/user-otp-verification",
        { userOTP: enteredOtp, recipientEmail: email }
      );
      console.log("Verification response:", response.data);
      toast.success(`OTP verified successfully` || `${response.data}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        draggable: false,
        closeOnClick: false,
        theme: "colored",
        transition: toast.flip,
        onClose: () => {
          window.location.href =
            "http://localhost:5173/bytebazaar/reset-password";
        },
      });
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error( `${
          error.response.data || "An error occurred in verifying OTP"
        }`,
        {
          autoClose: 5000,
          hideProgressBar: true,
          draggable: false,
          closeOnClick: false,
          theme: "colored",
          transition: toast.flip,
        }
      );
    }
  };

  const handleResendOTP = async () => {
    console.log("sending req to the server");
    console.log(email);
    try {
      const response = await axios.post(
        "http://localhost:6005/api/resend-otp",
        { recipientEmail: email }
      );
      console.log("Resend OTP response:", response.data);
      toast.success(`OTP resent successfully`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        draggable: false,
        closeOnClick: false,
        theme: "colored",
        transition: toast.flip,
      });
    } catch (error) {
      console.error("Error resending OTP:", error);
      toast.error(
        `Error resending OTP`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          draggable: false,
          closeOnClick: false,
          theme: "colored",
          transition: toast.flip,
        }
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-Purple">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded shadow-md">
        <form className="px-4 py-6">
          <AuthHeader isOTP={true} />
          <div className="flex justify-center gap-2 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                type="text"
                maxLength="1"
                pattern="[0-9]"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                required
              />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-Purple hover:bg-purple-400 text-white py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleVerify}
            >
              Verify
            </button>
            <a
              className="inline-block align-baseline text-Purple hover:text-teal-800 ml-4"
              href="#"
              onClick={handleResendOTP}
            >
              Resend OTP
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
