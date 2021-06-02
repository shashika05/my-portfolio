import React from "react";
import Lottie from "lottie-react";
import loadingJson from "../assets/loading.json";

function Loading() {
  return (
    <div
      // className="flex-1 mb-100 h-25"
      style={{
        flex: 1,
        // backgroundImage: `url(${Background})`,
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
        height: "600px",
        marginTop: "150px",
        marginInline: "auto",
      }}
    >
      <Lottie animationData={loadingJson} />
      <h3
        className="text-center mt-2 text-xl"
        // style={{
        //   textAlign: "center",
        //   fontFamily: "Montserrat",
        //   marginTop: "2px",
        // }}
      >
        Loading...
      </h3>
    </div>
  );
}

export default Loading;
