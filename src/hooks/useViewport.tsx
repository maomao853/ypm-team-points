import React from "react";

// Hook
// https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
export function useViewport() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width;
};