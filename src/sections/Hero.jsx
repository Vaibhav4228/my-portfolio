import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const buttonRef = useRef(null);
  const text = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`;

  useGSAP(() => {
    if (buttonRef.current) {
      gsap.from(buttonRef.current, {
        y: 50,
        opacity: 0,
        delay: 1,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle={"404 No Bugs Found"}
        title={"Vaibhav Sharma"}
        text={text}
        textColor={"text-black"}
      />
      <div className="px-10 pb-16">
        <Link
          ref={buttonRef}
          to="hire"
          smooth
          offset={-100}
          duration={1000}
          className="inline-block px-8 py-4 text-sm font-light tracking-widest text-white uppercase transition-all duration-300 bg-black rounded-full hover:bg-black/80"
        >
          Hire Me
        </Link>
      </div>
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;