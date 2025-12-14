import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Full Stack Developer | MERN • Spring Boot • React • C++ & DSA | Hyderabad, Telangana, India`;

  const aboutText = `CURRENT ROLE
I'm a Full Stack Developer and current Product Engineering Intern at EffiGO, where I focus on building high-performance backend systems using Spring MVC, Spring Boot, and Maven. My work centers around optimizing product workflows and contributing to scalable, production-ready solutions.

PROFESSIONAL SUMMARY
I'm passionate about creating clean, modular architectures that are easy to scale and maintain. I have hands-on experience building and deploying SaaS applications using the MERN stack, integrating features like user authentication, payment systems (Stripe), AI-based tools, and real-time dashboards.

KEY EXPERIENCE
At Andes, I developed scalable backend systems for product-focused applications, integrated APIs to optimize data flow (improving application performance by 20%), and collaborated with cross-functional teams to enhance product features.

At CS FOR ALL, I assisted in designing algorithms for efficient problem-solving in educational tools, contributing to real-time, scalable platforms that enhanced end-user experience.

At DevTown, I built and deployed responsive web applications using React.js and Node.js, streamlined state management with Redux, and leveraged Tailwind CSS to create adaptive and visually appealing designs.

CORE SKILLS
Backend: Spring Boot, Node.js, Express, REST APIs
Frontend: React.js, TypeScript, Tailwind CSS
Databases: MongoDB, MySQL
DevOps: Docker, Git, CI/CD
Languages: JavaScript, Java, C++, Python

EDUCATION
Currently pursuing a B.Tech in Computer Science from Rungta College of Engineering & Technology. I enjoy working in fast-paced environments where I can learn, build, and contribute to meaningful products. I'm passionate about problem-solving, team-driven development, and turning complex challenges into simple, elegant code.`;

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
      <div className="flex flex-col items-center justify-between gap-8 px-10 pb-12 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
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