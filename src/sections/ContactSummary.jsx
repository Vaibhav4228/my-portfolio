// src/sections/ContactSummary.jsx
import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = ["Innovation", "Precision", "Trust", "Collaboration", "Excellence"];
  const hireItems = Array(10).fill("HIRE ME");

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} className="text-gold" />

      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Let’s build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          web application <span className="text-gold">together</span> “
        </p>
      </div>

      <div className="text-center space-y-4 px-6">
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-gold">
          Interested in hiring me? Download my resume:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://drive.google.com/uc?export=download&id=1t1KTSRlzflYcm54G5pkS0hbo4Fw3nu1K"
            download="Vaibhav_Sharma_Java_Developer.pdf"
            className="px-6 py-3 bg-gold text-dark rounded-full hover:bg-opacity-90 transition"
          >
            Java Developer Resume
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=10xGUbuj-DbabsF1A9dtoDPuBHI1CixM6"
            download="Vaibhav_Resume_MERN.pdf"
            className="px-6 py-3 bg-gold text-dark rounded-full hover:bg-opacity-90 transition"
          >
            MERN Stack Resume
          </a>
        </div>
      </div>

      <Marquee items={hireItems} reverse className="text-gold bg-transparent" />
    </section>
  );
};

export default ContactSummary;
