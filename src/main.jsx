import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimationContextWrapper } from "./context/animation";
import "./index.css";

const Root = () => {
  useEffect(() => {
    const isInstagramBrowser = () => {
      return /Instagram/.test(navigator.userAgent);
    };

    const isIOS = () => {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    };

    const redirectToSafari = () => {
      // Get just the origin (base URL) of your site
      const baseURL = window.location.origin;
      window.location.href = `x-web-search://?${encodeURIComponent(baseURL)}`;
    };

    if (isInstagramBrowser() && isIOS()) {
      redirectToSafari();
    }
  }, []);

  return (
    <React.StrictMode>
      <AnimationContextWrapper>
        <Router>
          <App />
        </Router>
      </AnimationContextWrapper>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);