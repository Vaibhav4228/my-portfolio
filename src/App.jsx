import React, { useEffect, useState, Suspense, lazy } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import { useProgress } from "@react-three/drei";

// Lazy load heavy components for better performance
const About = lazy(() => import("./sections/About"));
const Works = lazy(() => import("./sections/Works"));
const HireMe = lazy(() => import("./sections/HireMe"));
const ContactSummary = lazy(() => import("./sections/ContactSummary"));
const ContactForm = lazy(() => import("./sections/ContactForm"));
const Contact = lazy(() => import("./sections/Contact"));

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <div className="mb-4 text-xl font-light tracking-widest text-black animate-pulse">
                  Loading...
                </div>
              </div>
            </div>
          }
        >
          <About />
          <Works />
          <HireMe />
          <ContactSummary />
          <ContactForm />
          <Contact />
        </Suspense>
      </div>
    </ReactLenis>
  );
};

export default App;
