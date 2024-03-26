import AuthFooterLinks from "../../../UserPanel/pages/AuthorizationForms/AuthFooterLinks";
import AuthFormFields from "../../../UserPanel/pages/AuthorizationForms/AuthFormFields";
import AuthFormImage from "../../../UserPanel/pages/AuthorizationForms/AuthFormImage";
import AuthHeader from "../../../UserPanel/pages/AuthorizationForms/AuthHeader";


export default function AdminLogin() {
  return (
    <>
      <div className="h-full bg-Purple">
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg">
              <AuthFormImage />
              <div className="w-full lg:w-7/12 pt-20 px-8 bg-white">
                <AuthHeader isLoginForm={true} isAdmin={true}/>
                <AuthFormFields isLoginForm={true} isAdmin={true}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
