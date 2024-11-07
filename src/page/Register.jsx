import React, { useState } from "react";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { FaEye, FaEyeSlash, FaKeycdn } from "react-icons/fa";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { InputMask } from "primereact/inputmask";
import { useForm } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import SEO from "../components/Seo";
import { useGoogleLogin } from "@react-oauth/google";

export default function Register() {
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

  const validationRules = {
    full_name: { required: true, errorMessage: "F.I.SH ni kiriting" },
    phone: { required: true, errorMessage: "Telefon raqamni kiriting" },
    erph: { errorMessage: "Bu maydon noyob boʻlishi kerak" },
    email: { required: true, errorMessage: "Email ni kiriting" },
    emer: { errorMessage: "Bu maydon noyob boʻlishi kerak" },
    password: {
      required: true,
      errorMessage: "Parolni kiriting",
    },
    password2: {
      required: true,
      errorMessage: "Parolni tasdiqlang",
    },
  };

  const [value1, setValue1] = useState(null);

  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [state, setState] = useState({
    phone: "",
    password: "",
    full_name: "",
    email: "",
    password2: "",
  });
  const [error, setError] = useState();
  const onSave = async () => {
    try {
      console.log("nimber", state.phone);
      const response = await DataService.post(endpoints.register, {
        phone: "+998" + state.phone,
        full_name: state.full_name,
        email: state.email,
        password: state.password,
        password2: state.password2,
      });
      localStorage.setItem("JADIDLAR_TOKEN", response?.access);
      console.log(response);

      toast.success("Muaffaqiyatli bajarildi!");
      navigate("/");
      setError("");
    } catch (e) {
      setError(e);
      // console.log(e, "eoror");
      toast.error("Malumotingizni to'liq kritmadingiz !");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Do something with the form data
  };

  return (
    <div className="login-container">
      <SEO title={"Roʻyxatdan oʻtish"} description={""} />
      <div className="border-div"></div>
      <div className="border-div1"></div>
      <div className="border-div2"></div>

      <section className="register_container">
        <header>Roʻyxatdan oʻtish</header>
        <form className="form" onSubmit={handleSubmit(onSave)}>
          <div className="input-box">
            <label>F.I.SH</label>
            <input
              {...register("full_name", { required: true })}
              className="form_input"
              type="text"
              name="full_name"
              onChange={(e) =>
                setState({ ...state, full_name: e.target.value })
              }
            />
          </div>

          {errors?.full_name && (
            <span className="error_info">
              {validationRules.full_name.errorMessage}
            </span>
          )}
          <div className="column">
            <div className="input-box phone_number">
              <label>Telefon raqam</label>
              <div className="num_div">
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
              {error?.phone && (
                <span className="error_info">
                  {validationRules.erph.errorMessage}
                </span>
              )}
            </div>

            <div className="input-box">
              <label>Email</label>
              <div>
                <input
                  {...register("email", { required: true })}
                  className="form_input"
                  type="email"
                  name="email"
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
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
          </div>
          <div className="column">
            <div className="input-box">
              <label>Oʻron</label>
              <div className="pass_div">
                <input
                  {...register("password", { required: true })}
                  style={{ color: "#000" }}
                  type={eye ? "text" : "password"}
                  name="password"
                  onChange={(e) =>
                    setState({ ...state, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setEye(!eye)}
                  className="eye_button"
                >
                  {!eye ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              {errors?.password && (
                <span className="error_info">
                  {validationRules.password.errorMessage}
                </span>
              )}
            </div>
            <div className="input-box">
              <label>Oʻronni tasdiqlash</label>
              <div className="pass_div">
                <input
                  {...register("password2", { required: true })}
                  type={eye ? "text" : "password"}
                  name="password2"
                  style={{ color: "#000" }}
                  onChange={(e) =>
                    setState({ ...state, password2: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setEye(!eye)}
                  className="eye_button"
                >
                  {!eye ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              {errors?.password2 && (
                <span className="error_info">
                  {validationRules.password2.errorMessage}
                </span>
              )}
            </div>
          </div>
          {/* <p className="error">{error}</p> */}

          <button className="rg_btn" type="submit">
            Roʻyxatdan oʻtish
          </button>
          {/* Google  */}
          {/* <div className="social-buttons">
            <button
              type="button"
              className="social-button google"
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
            <Link
              to="/kirish"
              style={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              Hisobingiz bormi ?
            </Link>
          </div>
        </form>

        {/* <p className="error">{error}</p> */}
      </section>
    </div>
  );
}
