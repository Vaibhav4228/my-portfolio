
import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState, useMemo, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Works = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const text = `Featured projects that have been meticulously
  crafted with passion to drive
  results and impact.`;

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return projects;
    return projects.filter((project) => project.category === activeTab);
  }, [activeTab]);

  // Reset overlay refs when tab changes
  useGSAP(() => {
    overlayRefs.current = [];
    setCurrentIndex(null);
  }, [activeTab]);

  // Ensure projects are visible immediately on tab change
  useEffect(() => {
    const projectElements = document.querySelectorAll("#project");
    projectElements.forEach((el) => {
      if (el) {
        gsap.set(el, { opacity: 1, y: 0 });
      }
    });
  }, [filteredProjects]);

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
    
    // Set initial state to visible to prevent delay
    gsap.set("#project", { opacity: 1, y: 0 });
    
    // Only animate if not already visible
    const projectElements = document.querySelectorAll("#project");
    projectElements.forEach((el, index) => {
      if (el && window.getComputedStyle(el).opacity === "0") {
        gsap.from(el, {
          y: 100,
          opacity: 0,
          delay: 0.2,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { 
            trigger: el,
            start: "top 85%",
          },
        });
      }
    });
  }, [filteredProjects]);

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

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "genai", label: "Gen AI" },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setCurrentIndex(null);
    
    // Kill any existing animations
    gsap.killTweensOf("#project");
    
    // Immediately show projects, then animate them in smoothly
    const projectElements = document.querySelectorAll("#project");
    projectElements.forEach((el, index) => {
      if (el) {
        // Set initial state
        gsap.set(el, { opacity: 0, y: 30 });
        // Animate in immediately without delay
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.05,
          ease: "power2.out",
        });
      }
    });
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

      <div className="flex flex-wrap justify-center gap-4 px-10 mb-8 mt-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-6 py-2 text-sm font-light tracking-wider uppercase transition-all duration-300 border rounded-full ${
              activeTab === tab.id
                ? "bg-black text-white border-black"
                : "bg-transparent text-black border-black/30 hover:border-black/60"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-3 py-6 cursor-pointer group md:gap-0"
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
          {currentIndex !== null && filteredProjects[currentIndex] && (
            <img
              src={filteredProjects[currentIndex].image}
              alt={filteredProjects[currentIndex].name}
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
