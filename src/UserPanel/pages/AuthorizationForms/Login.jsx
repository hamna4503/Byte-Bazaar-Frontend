import React from "react";
import AuthFormButtons from "./AuthFormButtons";
import AuthFooterLinks from "./AuthFooterLinks";
import AuthHeader from "./AuthHeader";
import AuthFormFields from "./AuthFormFields";
import AuthFormImage from "./AuthFormImage";

export default function Login() {
  return (
    <>
      <div className="h-full bg-Purple">
        {/* Container */}
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            {/* Row */}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <AuthFormImage />

              <div className="w-full lg:w-7/12 p-8 rounded-lg lg:rounded-l-none bg-white">
                <AuthHeader isLoginForm={true}/>

                <form className="px-8 pt-6 pb-2 mb-4 rounded">
                  <AuthFormFields isLoginForm={true}/>
                  <AuthFormButtons isLoginForm={true}/>
                  <AuthFooterLinks isLoginForm={true}/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
