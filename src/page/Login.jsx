import React, { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
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

export default function Login() {
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
  const [state, setState] = useState({ phone: "", password: "" });
  const [value1, setValue1] = useState(null);
  const [error, setError] = useState("");
  const validationRules = {
    phone: { required: true, errorMessage: "Telefon raqamni kiriting" },
    erph: { errorMessage: "Bu maydon noyob boʻlishi kerak" },
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
        phone: "+998" + state.phone,
        password: state.password,
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
      <SEO title={"Kirish"} description={""} />
      <div className="border-div"></div>
      <div className="border-div1"></div>
      <div className="border-div2"></div>
      <div className="login-cont-item">
        <h1 className="login-h1">KIRISH</h1>
        <form className="login" onSubmit={handleSubmit(onSave)}>
          <div className="login-div">
            <label htmlFor="phone">Telefon raqam</label>
            <br />
            <br />
            <div className="input_password">
              <span>+998</span>

              <div>
                <InputMask
                  style={{ color: "#000" }}
                  value={value1}
                  onChange={(e) => {
                    setValue1(e.value);
                    console.log(e.value);
                    setState({ ...state, phone: e.value });
                  }}
                  mask="(99)-999-99-99"
                >
                  {(inputProps) => (
                    <input
                      {...register("phone", { required: true })}
                      {...inputProps}
                    />
                  )}
                </InputMask>
              </div>
            </div>
            {errors?.phone && (
              <span className="error_info">
                {validationRules.phone.errorMessage}
              </span>
            )}
          </div>

          <div className="login-div" style={{ marginTop: "20px" }}>
            <label htmlFor="password">Oʻron</label>
            <br />
            <br />
            <div className="input_password">
              <input
                {...register("password", { required: true })}
                type={eye ? "text" : "password"}
                name="password"
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
              />
              <button type="button" onClick={() => setEye(!eye)}>
                {!eye ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors?.password && (
              <span className="error_info">
                {validationRules.password.errorMessage}
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

          <button className="lg-btn" type="submit">
            Kirish
          </button>
          {/* Google */}
          {/* <div className="social-buttons">
            <button
              type="button"
              className="social-button google"
              style={{ width: "100%", fontSize: "14.5px" }}
              onClick={login}
            >
              <span className="sc_logo">
                <FcGoogle />
              </span>
              <span className="sc_text">Google o'rqali kirish</span>
            </button>
          </div> */}
          <div className="login_bottom">
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "5px",
              }}
            >
              <FaHome style={{ fontSize: "20px" }} /> qaytish{" "}
            </Link>
            {/* <Link to="/parolni_unutish">Parolni unutdingizmi?</Link> */}
            <Link
              to="/roʻyxatdan_oʻtish"
              style={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              Hozir ro'yxatdan o'tish{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
