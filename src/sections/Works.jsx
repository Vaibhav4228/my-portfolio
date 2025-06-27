
import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Works = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const text = `Featured projects that have been meticulously
  crafted with passion to drive
  results and impact.`;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });
    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: { trigger: "#project" },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);
    const el = overlayRefs.current[index];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);
    const el = overlayRefs.current[index];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-4 py-8 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
          
            <div
              ref={(el) => (overlayRefs.current[index] = el)}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
            />

         
            <div className="flex justify-between items-center px-10 transition-all duration-500 md:group-hover:px-12">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[26px] lg:text-[32px] leading-none text-black md:group-hover:text-white"
              >
                {project.name}
                <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
              </a>
            </div>

        
            <p
              className="px-10 text-base lg:text-lg text-black/80 md:group-hover:text-white/80 transition-colors duration-500"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

       
            <div className="w-full h-px bg-black/50 md:group-hover:bg-white/50 transition-colors duration-500 px-10" />

          
            <div className="flex flex-wrap px-10 gap-4 text-xs uppercase leading-loose md:text-sm">
              {project.frameworks.map((fw) => (
                <span
                  key={fw.id}
                  className="px-2 py-1 border border-black/50 rounded text-black/70 md:group-hover:border-white/50 md:group-hover:text-white transition-all duration-500"
                >
                  {fw.name}
                </span>
              ))}
            </div>

          
            <div className="relative flex items-center justify-center px-10 md:hidden h-[300px]">
              <img
                src={project.bgImage}
                alt={`${project.name} background`}
                className="object-cover w-full h-full rounded-md brightness-50"
              />
              <img
                src={project.image}
                alt={project.name}
                className="absolute w-48 h-auto rounded-xl"
              />
            </div>
          </div>
        ))}

        <div
          ref={previewRef}
          className="fixed -top-1/3 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[700px] md:block hidden opacity-0"
        >
          {currentIndex !== null && (
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].name}
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
