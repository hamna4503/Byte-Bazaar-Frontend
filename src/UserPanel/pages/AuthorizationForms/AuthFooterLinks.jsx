import React from "react";
import { Link } from "react-router-dom";

export default function AuthFooterLinks({isLoginForm}){
  return (
    <>
      <div className="text-center">
        <a
          className="inline-block text-sm align-baseline hover:text-blue-800 text-Purple"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <div className="mt-2 text-center">
        {
            !isLoginForm? 
            <Link
          className="inline-block text-sm text-Purple align-baseline hover:text-blue-800"
          to="/bytebazaar/login"
        >
          Already have an account? Login!
        </Link>
        :

        <Link
          className="inline-block text-sm text-Purple align-baseline hover:text-blue-800"
          to="/bytebazaar/signup"
        >
           Don't have an account? Signup!
        </Link>
        }
      </div>
    </>
  );
};


