import React, { useState, useEffect } from "react";
import { BeatLoader } from 'react-spinners';

export default function WelcomeScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="welcome-screen bg-gradient-to-r from-indigo-950 via-teal-600 to-indigo-950 background-animate">
          <h1 className="text-cyberpunk bg-slate-100 animate-bounce rounded-3xl px-10 py-2 md:text-3xl text-xl font-bold drop-shadow-xl">BEM-VINDO AO MEU SITE</h1>
          <div className="flex mt-4">
            <BeatLoader color={"#FC427B"} className="m-auto p-3" loading={true} height={4} />
          </div>
        </div>
      ) : (
        <div className="content">
        </div>
      )}
    </div>
  );
}
