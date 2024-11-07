import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import BackToTop from "./components/components/BackToTop.jsx";

import App from "./App.jsx";
import "./assets/style/__main.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import "./config/i18next.js";
import ReactModal from "react-modal";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <GoogleOAuthProvider clientId="726739578070-oj58bsj3ihds91dmr16c7kapg96k6u49.apps.googleusercontent.com">
    <BrowserRouter>
      <Provider store={store}>
        <div className="app_img">
          <div className="background_overlay">
            <App />
          </div>
        </div>
        <BackToTop />
      </Provider>
    </BrowserRouter>
  </GoogleOAuthProvider>
  // {/* </React.StrictMode> */}
);
