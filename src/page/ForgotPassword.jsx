import React, { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill } from "react-icons/pi";
import axios from "axios";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { FaEye, FaEyeSlash, FaHome, FaKeycdn } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { InputMask } from "primereact/inputmask";
import { FcGoogle } from "react-icons/fc";
import SEO from "../components/Seo";
import { useForm } from "react-hook-form";

export default function ForgotPassword() {
  //Google integrating

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const response = await DataService.post(
          endpoints.loginWithGoogle,
          codeResponse
        );
      } catch (err) {
        console.log(err);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [value1, setValue1] = useState(null);
  const [error, setError] = useState("");
  const validationRules = {
    email: { required: true, errorMessage: "Email ni kiriting" },
    password: {
      required: true,
      errorMessage: "Parolni kiriting",
    },
    error: {
      errorMessage: "Berilgan hisob maʻlumotlari bilan faol hisob topilmadi:(",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSave = async () => {
    try {
      const response = await DataService.post(endpoints.login, {
        email: state.email,
        password: state.password,
        password2: state.password2,
      });
      localStorage.setItem("JADIDLAR_TOKEN", response?.access);
      toast.success("Muaffaqiyatli bajarildi!");
      navigate("/");
      setError("");
    } catch (e) {
      setError(validationRules.error.errorMessage);
    }
  };
  return (
    <div className="login-container">
      <SEO title={"Parolni unutish"} description={""} />
      <div className="border-div"></div>
      <div className="border-div1"></div>
      <div className="border-div2"></div>
      <div className="login-cont-item">
        <h1 className="login-h1">Parolni unutdingizmi?</h1>
        <div className="step_con">
          <div className="step_body">
            <div className="step_main">
              <span className="step">
                <span className="step_img">
                  <PiNumberCircleOneFill className="step_icon" />
                </span>
                <span className="step_text_body">
                  <span className="step_text">Emailni kiriting</span>
                </span>
              </span>
            </div>
            <div className="step_main">
              <div className="step_line">
                <span></span>
              </div>
              <span className="step">
                <span className="step_img dis">
                  <PiNumberCircleTwoFill className="step_icon" />
                </span>
                <span className="step_text_body">
                  <span className="step_text">Parol yaratish</span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <form className="forgot_ps" onSubmit={handleSubmit(onSave)}>
          <div className="forgot_ps_input">
            <label>Email</label>
            <br />
            <br />
            <div>
              <input
                {...register("email", { required: true })}
                className="form_input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
            </div>

            {errors?.email && (
              <span className="error_info">
                {validationRules.email.errorMessage}
              </span>
            )}
            {error?.email && (
              <span className="error_info">
                {validationRules.emer.errorMessage}
              </span>
            )}
          </div>
          <p className="error">{error}</p>
          {/* {profile ? (
            <div>
              <img src={profile.picture} alt="user image" />
              <h3>User Logged in</h3>
              <p>Name: {profile.name}</p>
              <p>Email Address: {profile.email}</p>
              <br />
              <br />
              <button onClick={logOut}>Log out</button>
            </div>
          ) : (
            <button onClick={login}>Sign in with Google 🚀 </button>
          )} */}

          <button className="forgot_ps_bt" type="submit">
            Kodni yuborish
          </button>
        </form>
      </div>
    </div>
  );
}
