import React from "react";
import AuthForm from "../../assets/images/authorization/auth-form.png";

export default function AuthFormImage(){
    return (
      <>
        <div className="w-full h-full lg:w-5/12 hidden lg:block bg-gray-400 dark:bg-gray-800 overflow-hidden">
          <img
            src={AuthForm}
            className="w-full h-full object-cover rounded-l-lg"
            alt="AuthForm"
          />
        </div>
      </>
    );
}