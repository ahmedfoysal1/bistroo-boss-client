import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpUser, updateUserProfile } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    signUpUser(data.email, data.password).then((result) => {
      const signUp = result.user;
      console.log(signUp);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                icon: "success",
                title: "Done",
                text: "Profile update",
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error.message));
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                className="input"
                placeholder="Type Your Name"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
              <label className="label">Photo URL</label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                className="input"
                placeholder="Photo URL"
              />
              {errors.photoURL && (
                <span className="text-red-600">photo URL is required</span>
              )}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.name && (
                <span className="text-red-600">Email is required</span>
              )}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}/,
                })}
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase,One Lowercase,One Number,One
                  Special characters
                </p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <input
                className="btn btn-neutral mt-4"
                type="submit"
                value="Sign up"
              />
              <SocialLogin></SocialLogin>
              <p>
                <small>
                  Already Have an account?{" "}
                  <Link className="text-blue-500" to={"/login"}>
                    Login
                  </Link>
                </small>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
