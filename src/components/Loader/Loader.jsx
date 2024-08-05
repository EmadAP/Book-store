import React from "react";
// import LoadingIcons from "react-loading-icons";
import LoaderImg from "../../assets/findBook/loader.svg";

const Loader = () => {
  return (
    <div className="py-[100px] flex items-center justify-center ">
      {/* <LoadingIcons.Bars alt="loader" className="w-[120px] " /> */}
      <img src={LoaderImg} alt="loader" className="w-[189px] " />
    </div>
  );
};

export default Loader;
