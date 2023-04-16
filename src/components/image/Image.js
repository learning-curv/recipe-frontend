import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./Image.module.css";
import useImageResize from "../../hooks/useImageResize";

import LoadingSpinner from "../loading-spinner/LoadingSpinner"

function LoadingBlock() {
  return (
    <div
      className={classes["loading-block"]}
    >
      <LoadingSpinner />
    </div>
  );
}

function Image({ src, alt, parentDimensions }) {
  console.log(1);
  const { resizedDimensions, imageLoaded } = useImageResize(
    src,
    parentDimensions
  );

  console.log(resizedDimensions);

  return (
    <>
      {imageLoaded ? (
        <div className={classes["image-container"]}>
          <img
            className={classes["background-image"]}
            style={{
              width: parentDimensions.width,
              height: parentDimensions.height,
            }}
            src={src}
          />
          <img
            className={classes["image"]}
            style={{
              width: resizedDimensions.width,
              height: resizedDimensions.height,
              transform: `rotate(${resizedDimensions.rotation}deg)`
            }}
            src={src}
            alt={alt}
          />
        </div>
      ) : (
        <LoadingBlock />
      )}
    </>
  );
}

export default Image;
