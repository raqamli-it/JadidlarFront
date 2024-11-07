import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/components/Loading";
import HeaderHome from "./components/HeaderHome";
import { endpoints } from "./config/endpoints";
import { DataService } from "./config/dataService";
import { useDispatch, useSelector } from "react-redux";
import { getBanner } from "./redux/reduser/banner";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(false);
  const [navclass, setnavClass] = useState("is-sticky");
  const lang = useSelector((state) => state.langReducer.value);
  //
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });
  const scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass("");
    } else {
      setnavClass("is-sticky");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await DataService.get(endpoints.slider);
      dispatch(getBanner(res));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };
  const fetchDataDispatch = async () => {
    const res = await DataService.get(endpoints.slider);
    dispatch(getBanner(res));
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchDataDispatch();
  }, [lang]);
  return (
    <div className="bg bg_img">
      {window.location.pathname == "/" ? (
        <div className={navclass}>
          <HeaderHome />
        </div>
      ) : (
        <Header />
      )}

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <main className={window.location.pathname == "/" ? "" : "top_dis"}>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
