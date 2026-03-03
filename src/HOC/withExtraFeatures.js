// withExtraFeatures.jsx
import { useState, useEffect } from "react";

const withExtraFeatures = (WrappedComponent) => {
  return (props) => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }, []);

    const handleClick = () => {
      console.log(`Restaurant clicked: ${props.name}`);
    };

    return (
      <div className="relative" onClick={handleClick}>
        {props.isPromoted && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            PROMOTED
          </span>
        )}

        {!isOnline && (
          <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-10 text-red-500 font-bold">
            Offline
          </div>
        )}

        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withExtraFeatures;