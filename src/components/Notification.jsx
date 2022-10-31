import React from "react";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notification({ status }) {
  const style = {
    height: "30px",
    width: "300px",
  };
  if (status === "succes") {
    style.bakground = "blue";
  }
  if (status === "info") {
    style.bakground = "light";
  } 
  else {
    style.bakground = "red";
  }

  return (
    <div>
      <ToastContainer
        autoClose={2000}
        // style={{ width: "400px", height: "50px" }}
        toastStyle={style}
        theme="colored"
        newestOnTop={true}
      />
    </div>
  );
}

export default Notification;
