import React, { useState } from "react";
import Loader from "react-js-loader";

const ImageViewer = ({ src, style }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setIsError(true);
  };
  return (
    <>
      <div className="image-loader">
        {isLoading && <Loader type="box-rectangular" bgColor={"#872ff7"} title={"Loading"} color={"#FFFFFF"} size={35} />}
        <img
          src={isError ? "./assets/images/defaultImage.png" : src || "./assets/images/defaultImage.png"}
          width={100}
          height={121}
          style={{ ...style, display: isLoading ? "none" : "block" }}
          // src={src}
          // alt={alt}
          // style={{ display: isLoading || isError ? "none" : "block" }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
      {/* <img src={src || "./assets/images/partDefaultImage.png"} width={100} height={121} style={{ ...style }} /> */}
    </>
  );
};

export default ImageViewer;
