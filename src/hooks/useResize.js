import { useState, useEffect } from "react";

function useResize() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 450;
  const isTablet = !isMobile && width <= 768;
  const isDesktop = !isMobile && !isTablet;

  return {isMobile, isTablet, isDesktop, screenWidth: width}
}

export default useResize;