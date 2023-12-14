import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; 
import './styles/cookies.css'; 

const CookiesConsent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("user-consent");
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("user-consent", "accepted", { expires: 1 });
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="cookie-consent-popup">
      <p>
        We use cookies to improve your experience. By using our site, you agree
        to our use of cookies.
      </p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default CookiesConsent;
