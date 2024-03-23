import AuthFormImage from "../AuthorizationForms/AuthFormImage";
import PasswordForm from "./PasswordForm";

export default function ForgotPassword() {
  return (
    <>
      <div className="h-full bg-Purple">
        <div className="flex justify-center items-center px-6 py-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg">
            <AuthFormImage />
            <div className="w-full lg:w-7/12 p-6 bg-white">
              <PasswordForm isForgetPswd={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
