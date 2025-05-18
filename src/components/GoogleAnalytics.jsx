import React, { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    const trackingID = import.meta.env.VITE_GA_TRACKING_ID;

    if (!trackingID) {
      console.warn("Google Analytics tracking ID is missing.");
      return;
    }

    // Dynamically add the gtag script to the <head>
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`;
    document.head.appendChild(script);

    // Add inline configuration script
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingID}');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return null;
};

export default GoogleAnalytics;
