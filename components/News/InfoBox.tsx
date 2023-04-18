import { useState, useEffect } from "react";

function InfoBox() {
  const [showInfoBox, setShowInfoBox] = useState(true);

  const handleClose = () => {
    setShowInfoBox(false);
    localStorage.setItem("showInfoBox", "false");
  };

  useEffect(() => {
    const show = localStorage.getItem("showInfoBox");
    setShowInfoBox(show !== "false");
  }, []);

  return showInfoBox ? (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
      <div className="bg-black/70 absolute inset-0"></div>
      <div className="bg-white rounded-lg z-10 p-8 max-w-md mx-auto relative">
        <p className="text-gray-500 text-center font-bold">
          The news are static because the API provider does not provide a free service for non-development work. Due to the fact that this is a project for research purposes, it makes no sense to buy the service for production purposes.
        </p>
        <div className="items-center flex justify-center">
          <button className="bg-cyan-400 text-gray-700 py-2 px-4 rounded mt-4 mx-auto" onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default InfoBox;
