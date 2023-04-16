import { useState, useEffect } from "react";

function useImageResize(src, parentDimensions) {
  const [imageDimensions, setImageDimensions] = useState(null);
  const [resizedDimensions, setResizedDimensions] = useState(null);

  const onLoad = ({ target }) => {
    setImageDimensions({
      width: target.naturalWidth,
      height: target.naturalHeight,
    });
  };

  const resizeImage = async () => {
    const whRatio = imageDimensions
      ? imageDimensions.width / imageDimensions.height
      : 0;
    const hwRatio = imageDimensions
      ? imageDimensions.height / imageDimensions.width
      : 0;

    if (whRatio * parentDimensions.height > parentDimensions.width) {
      if (whRatio > 1.5) {
        setResizedDimensions({
          width: parentDimensions.height,
          height: "auto",
          rotation: 90,
        });
      } else {
        setResizedDimensions({
          width: parentDimensions.width,
          height: hwRatio * parentDimensions.width,
          rotation: 0,
        });
      }
    } else if (hwRatio * parentDimensions.width > parentDimensions.height) {
      setResizedDimensions({
        width: whRatio * parentDimensions.height,
        height: parentDimensions.height,
        rotation: 0,
      });
    }
  };

  useEffect(() => {
    async function resize() {
      let img = new Image();
      img.onload = onLoad;
      img.src = src;

      await resizeImage();
    }

    resize();
  }, [
    src,
    parentDimensions.width,
    parentDimensions.height,
    imageDimensions?.width,
    imageDimensions?.height,
  ]);

  console.log(resizedDimensions);

  return { resizedDimensions, imageLoaded: !!resizedDimensions };
}

export default useImageResize;
