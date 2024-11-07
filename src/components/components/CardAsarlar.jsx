import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { PiShareFatBold } from "react-icons/pi";
import { BiSolidLike, BiLike } from "react-icons/bi";
import { saveAs } from "file-saver";
import { DataService } from "../../config/dataService";
import { endpoints } from "../../config/endpoints";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function CardAsarlar({ apiData, type, url }) {
  console.log(url);
  const navigate = useNavigate();
  const [Type, setType] = useState();
  useEffect(() => {
    setType(type);
  }, [type]);
  // const onDownload = async (data) => {
  //   if (localStorage.getItem("JADIDLAR_TOKEN")) {
  //     console.log(type);
  //     switch (type) {
  //       case "asar":
  //         {
  //           const response = await DataService.get(
  //             endpoints.asardownloadById(data.id)
  //           );
  //           saveAs(response.path, data.title);
  //           // console.log("Bu data yukla", data);
  //         }
  //         break;
  //       // case "turkiston_asar":
  //       //   {
  //       //     const response = await DataService.get(
  //       //       endpoints.asardownloadById(data.id)
  //       //     );
  //       //     saveAs(response.file, data.title);
  //       //   }
  //       //   break;
  //     }

  //     // const aElement = document.createElement("a");
  //     // aElement.setAttribute("download", data.title);
  //     // const href = data.file;
  //     // aElement.href = href;
  //     // aElement.setAttribute("target", "_blank");
  //     // aElement.click();
  //   } else {
  //     navigate("/login");
  //   }
  // };
  const ToLogin = async (data) => {
    if (localStorage.getItem("JADIDLAR_TOKEN")) {
      try {
        const response = await DataService.get(
          endpoints.fileDownloadId(url, data.id)
        );
        const aElement = document.createElement("a");
        aElement.setAttribute("download", data.title);
        const href = response.path;
        aElement.href = href;
        aElement.setAttribute("target", "_blank");
        aElement.click();
      } catch (err) {
        toast.error(err?.error);
      }
      // saveAs(response.path, data.title);

      // console.log("Bu data yukla", data);

      // case "turkiston_asar":
      //   {
      //     const response = await DataService.get(
      //       endpoints.asardownloadById(data.id)
      //     );
      //     saveAs(response.file, data.title);
      //   }
      //   break;

      // const aElement = document.createElement("a");
      // aElement.setAttribute("download", data.title);
      // const href = data.file;
      // aElement.href = href;
      // aElement.setAttribute("target", "_blank");
      // aElement.click();
    } else {
      navigate("/kirish");
    }
  };
  const ToLoginShare = async (data) => {
    if (localStorage.getItem("JADIDLAR_TOKEN")) {
      try {
        const response = await DataService.get(
          endpoints.fileDownloadId(url, data.id)
        );
        const href = response.path;
        window.open(
          `https://telegram.me/share/url?url=${encodeURIComponent(href)}`,
          "_blank"
        );
      } catch (err) {
        toast.error(err?.error);
      }
    } else {
      navigate("/kirish");
    }
  };

  // Call handleClick function when the component is mounted

  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  //handlaLikes

  const isLoggedIn = localStorage.getItem("JADIDLAR_TOKEN");

  // Function to handle click event
  const handleClick = (e) => {
    // If logged in, prevent default behavior
    if (isLoggedIn) {
      // Optionally, you can redirect the user to the link without opening in a new tab
      // window.location.href = e.currentTarget.href;
    }
  };
  return (
    <div className="card-body">
      <div className="cards">
        {apiData?.map((data) => (
          <div className="card card1" key={data.id + 1}>
            <div className="icon_item">
              <i onClick={() => ToLogin(data)}>
                <FiDownload />
              </i>
              <br />
              <i onClick={() => ToLoginShare(data)}>
                <PiShareFatBold />
              </i>
              <br />
              {/* like */}
              {/* <i>
                {like ? (
                  <BiSolidLike onClick={handleLikes} />
                ) : (
                  <BiLike onClick={handleLikes} />
                )}
              </i> */}
            </div>

            <div className="container2 br">
              <img src={data.image} alt="las vegas" />
            </div>

            <div className="details">
              <h4 style={{ cursor: "pointer" }} onClick={() => ToLogin(data)}>
                {data.jadid_fullname}
                {data.jadid_fullname ? "." : ""}
              </h4>

              <h4
                dangerouslySetInnerHTML={{
                  __html: data.title.replace(/\r\n/g, "<br>"),
                }}
                style={{ cursor: "pointer" }}
                onClick={() => ToLogin(data)}
              ></h4>
              {(data?.brYear || data?.dyYear) && (
                <p>
                  ({data.brYear} - {data.dyYear})
                </p>
              )}
            </div>

            {/* <span>
              <BiSolidLike />
              {count}
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
}
