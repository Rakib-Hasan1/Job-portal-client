import React, { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import SignInLottie from "../../assets/lotties/SignIn-animation.json.json";
import Lottie from "lottie-react";
import SocialLogin from "../Shared/SocialLogin";

const SignIn = () => {
  const { SignInUser } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    SignInUser(email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "300px" }}
            animationData={SignInLottie}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter your password"
              />
              <button className="btn btn-neutral mt-4">Sign In</button>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
