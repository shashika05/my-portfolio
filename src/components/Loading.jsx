import React from "react";
import Lottie from "lottie-react";
import loadingJson from "../assets/loading.json";

function Loading() {
  return (
    <div
      style={{
        flex: 1,
        // backgroundImage: `url(${Background})`,
        alignItems: "center",
        justifyContent: "center",
        width: "100px",
        height: "100px",
        marginTop: "200px",
        marginInline: "auto",
      }}
    >
      <Lottie animationData={loadingJson} />
      <h5
        style={{
          textAlign: "center",
          fontFamily: "Montserrat",
          marginTop: "2px",
        }}
      >
        Loading...
      </h5>
    </div>
  );
}

export default Loading;
