import { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const CalendlyWidget = ({ isOpen, onClose, url }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const retryCountRef = useRef(0);

  useEffect(() => {
    if (isOpen && url) {
      // Reset retry count when opening
      retryCountRef.current = 0;
      
      // Check if Calendly script is already loaded
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      
      const maxRetries = 50; // 5 seconds max wait time
      
      const checkAndSetLoaded = () => {
        // Check if window.Calendly is available
        if (window.Calendly) {
          setIsLoaded(true);
        } else if (retryCountRef.current < maxRetries) {
          retryCountRef.current++;
          // Retry after a short delay
          setTimeout(checkAndSetLoaded, 100);
        } else {
          console.error("Calendly script failed to load after multiple retries");
          setIsLoaded(false);
        }
      };
      
      if (!existingScript) {
        // Dynamically load Calendly script only when needed
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => {
          checkAndSetLoaded();
        };
        script.onerror = () => {
          console.error("Failed to load Calendly script");
          setIsLoaded(false);
        };
        document.body.appendChild(script);

        // Load Calendly CSS
        const existingLink = document.querySelector(
          'link[href="https://assets.calendly.com/assets/external/widget.css"]'
        );
        if (!existingLink) {
          const link = document.createElement("link");
          link.href = "https://assets.calendly.com/assets/external/widget.css";
          link.rel = "stylesheet";
          document.head.appendChild(link);
        }
      } else {
        // Script already exists, check if Calendly is available
        checkAndSetLoaded();
      }
    } else {
      setIsLoaded(false);
    }
  }, [isOpen, url]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-label="Close calendar"
      />
      
      {/* Modal Container */}
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] m-4 bg-white rounded-lg overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 text-black bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close calendar"
        >
          <Icon icon="material-symbols:close" width={24} height={24} />
        </button>

        {/* Calendly Widget */}
        <div className="relative w-full h-full">
          {/* Always render the widget div so Calendly can detect it */}
          <div
            className="calendly-inline-widget"
            data-url={url}
            style={{ minWidth: "320px", height: "100%" }}
          />
          {/* Loading overlay */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="text-center">
                <div className="mb-4">
                  <Icon
                    icon="svg-spinners:ring-resize"
                    width={48}
                    height={48}
                    className="mx-auto text-black"
                  />
                </div>
                <p className="text-lg font-light text-black">Loading calendar...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendlyWidget;
