import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `I’m Vaibhav Sharma, a  Full-Stack & DevOps Engineer with of driving high-impact solutions—architecting microservices for 5K+ daily users with 99.9% uptime, slashing deployment times by 70%, and accelerating page loads by 40%.`;

  const aboutText = `At Effigo Global, I built and deployed Spring Boot microservices with PostgreSQL, boosting backend throughput by 35%, automating CI/CD pipelines to cut release cycles by 50%, and reducing operational costs by 20% via AWS ETL services.
At Andes, I engineered a real-time alerting system using Node.js, RabbitMQ & WebSockets—processing 100K+ events/hr at 99.5% reliability and reducing system downtime by 50%.
At Devtown, I crafted responsive React & Node.js applications, achieving a 30% bundle-size reduction, 40% faster render speeds, and a 25% lift in user retention.

Outside work, I Love to do Problem solving & contribute to 10+ open-source repos, and run infrastructure-as-code with Terraform—ensuring 95% pipeline success and zero downtime deployments.`;

  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpeg"
          alt="Vaibhav Sharma"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;