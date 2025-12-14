import { useRef, useState, useEffect } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { pricingTiers, projectPackages } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-scroll";
import CalendlyWidget from "../components/CalendlyWidget";

const CALENDLY_URL = "https://calendly.com/vaibhavsharma88890/lets-connect-to-resolve-your-problem";

const HireMe = () => {
  const text = `Transparent pricing, flexible packages.
    Choose what works best for your project
    and budget. Let's build something amazing together.`;
  
  const pricingRefs = useRef([]);
  const packageRefs = useRef([]);
  const [flippedCards, setFlippedCards] = useState({});
  const cardFrontRefs = useRef({});
  const cardBackRefs = useRef({});
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [allPackagesFlipped, setAllPackagesFlipped] = useState(false);

  // Ensure all cards are visible on mount and initialize card flip states
  useEffect(() => {
    const ensureVisibility = () => {
      pricingRefs.current.forEach((el) => {
        if (el) {
          gsap.set(el, { opacity: 1, y: 0 });
        }
      });
      packageRefs.current.forEach((el) => {
        if (el) {
          gsap.set(el, { opacity: 1, x: 0 });
        }
      });
    };
    
    // Initialize all card front and back sides properly (all start unflipped)
    const initializeCards = () => {
      pricingTiers.forEach((tier) => {
        const cardKey = `tier-${tier.id}`;
        const frontEl = cardFrontRefs.current[cardKey];
        const backEl = cardBackRefs.current[cardKey];
        
        if (frontEl) {
          gsap.set(frontEl, {
            rotationY: 0,
            opacity: 1,
            transformStyle: "preserve-3d",
          });
        }
        if (backEl) {
          gsap.set(backEl, {
            rotationY: -180,
            opacity: 0,
            transformStyle: "preserve-3d",
          });
        }
      });
      
      projectPackages.forEach((pkg) => {
        const cardKey = `package-${pkg.id}`;
        const frontEl = cardFrontRefs.current[cardKey];
        const backEl = cardBackRefs.current[cardKey];
        
        if (frontEl) {
          gsap.set(frontEl, {
            rotationY: 0,
            opacity: 1,
            transformStyle: "preserve-3d",
          });
        }
        if (backEl) {
          gsap.set(backEl, {
            rotationY: -180,
            opacity: 0,
            transformStyle: "preserve-3d",
          });
        }
        // Initialize flipped state
        setFlippedCards((prev) => ({
          ...prev,
          [cardKey]: false,
        }));
      });
    };
    
    ensureVisibility();
    // Initialize cards after a short delay to ensure refs are set
    const initTimeout = setTimeout(initializeCards, 100);
    // Fallback: ensure visibility after animations should have completed
    const timeout = setTimeout(ensureVisibility, 1500);
    
    return () => {
      clearTimeout(initTimeout);
      clearTimeout(timeout);
    };
  }, []);

  useGSAP(() => {
    pricingRefs.current.forEach((el, index) => {
      if (!el) return;
      // Set initial state to visible
      gsap.set(el, { opacity: 1, y: 0 });
      gsap.from(el, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        duration: 0.8,
        ease: "power2.out",
      });
    });

    packageRefs.current.forEach((el, index) => {
      if (!el) return;
      // Set initial state to visible
      gsap.set(el, { opacity: 1, x: 0 });
      gsap.from(el, {
        x: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, []);

  const handleCardFlip = (cardId, type) => {
    const cardKey = `${type}-${cardId}`;
    const isFlipped = flippedCards[cardKey] || false;
    const frontEl = cardFrontRefs.current[cardKey];
    const backEl = cardBackRefs.current[cardKey];

    if (!frontEl || !backEl) return;

    if (!isFlipped) {
      // Flip to show INR
      gsap.to(frontEl, {
        rotationY: 180,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        transformStyle: "preserve-3d",
      });
      gsap.to(backEl, {
        rotationY: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        transformStyle: "preserve-3d",
      });
    } else {
      // Flip back to show USD
      gsap.to(backEl, {
        rotationY: -180,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        transformStyle: "preserve-3d",
      });
      gsap.to(frontEl, {
        rotationY: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        transformStyle: "preserve-3d",
      });
    }

    setFlippedCards((prev) => ({
      ...prev,
      [cardKey]: !isFlipped,
    }));
  };

  const handleFlipAllPackages = () => {
    const newFlippedState = !allPackagesFlipped;
    setAllPackagesFlipped(newFlippedState);

    projectPackages.forEach((pkg) => {
      const cardKey = `package-${pkg.id}`;
      const frontEl = cardFrontRefs.current[cardKey];
      const backEl = cardBackRefs.current[cardKey];

      if (!frontEl || !backEl) return;

      if (newFlippedState) {
        // Flip all to show INR
        gsap.to(frontEl, {
          rotationY: 180,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          transformStyle: "preserve-3d",
        });
        gsap.to(backEl, {
          rotationY: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
          transformStyle: "preserve-3d",
        });
      } else {
        // Flip all back to show USD
        gsap.to(backEl, {
          rotationY: -180,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          transformStyle: "preserve-3d",
        });
        gsap.to(frontEl, {
          rotationY: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
          transformStyle: "preserve-3d",
        });
      }

      setFlippedCards((prev) => ({
        ...prev,
        [cardKey]: newFlippedState,
      }));
    });
  };

  return (
    <section id="hire" className="min-h-screen bg-white">
      <AnimatedHeaderSection
        subTitle={"Investment in Excellence"}
        title={"Hire Me"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

      {/* Hourly Rates Section */}
      <div className="px-10 py-12">
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-light tracking-wider text-black uppercase lg:text-4xl">
            Hourly Rates
          </h2>
          <div className="flex items-center gap-2 text-sm font-light tracking-widest text-black/60 uppercase">
            <Icon icon="material-symbols:swap-horiz" width={20} height={20} />
            <span>Click card to view Indian prices</span>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => {
            const cardKey = `tier-${tier.id}`;
            const isFlipped = flippedCards[cardKey] || false;
            
            return (
              <div
                key={tier.id}
                className="relative"
                style={{ perspective: "1000px" }}
              >
                {/* Most Popular Badge - positioned relative to grid item, not card */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 px-4 py-1.5 text-xs font-light tracking-widest text-black bg-white rounded-full uppercase shadow-md">
                    Most Popular
                  </div>
                )}
                <div
                  ref={(el) => {
                    if (el) {
                      pricingRefs.current[index] = el;
                      // Ensure card is visible initially
                      gsap.set(el, { opacity: 1, y: 0 });
                    }
                  }}
                  className={`relative border-2 rounded-lg transition-all duration-300 cursor-pointer group overflow-hidden ${
                    tier.popular
                      ? "border-black bg-black text-white scale-105 shadow-lg"
                      : "border-black/30 bg-white text-black hover:border-black/60"
                  }`}
                  style={{ opacity: 1, minHeight: "500px" }}
                  onClick={() => handleCardFlip(tier.id, "tier")}
                  title="Click to view Indian prices"
                >
                
                {/* Click indicator */}
                <div className={`absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  tier.popular ? "text-white/60" : "text-black/40"
                }`}>
                  <Icon icon="material-symbols:swap-horiz" width={20} height={20} />
                </div>
                
                {/* Card Container with 3D transform */}
                <div className="relative h-full" style={{ transformStyle: "preserve-3d" }}>
                  {/* Front Side (USD) */}
                  <div
                    ref={(el) => {
                      if (el) {
                        cardFrontRefs.current[cardKey] = el;
                        // Initialize front side - visible and not rotated
                        if (!isFlipped) {
                          gsap.set(el, { 
                            rotationY: 0, 
                            opacity: 1,
                            transformStyle: "preserve-3d"
                          });
                        } else {
                          gsap.set(el, { 
                            rotationY: 180, 
                            opacity: 0,
                            transformStyle: "preserve-3d"
                          });
                        }
                      }
                    }}
                    className={`flex flex-col p-8 h-full ${tier.popular ? 'pt-10' : ''}`}
                    style={{
                      backfaceVisibility: "hidden",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="mb-4">
                      <h3 className="mb-2 text-2xl font-light uppercase lg:text-3xl">
                        {tier.name}
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-light lg:text-5xl">
                          {tier.price}
                        </span>
                        <span className={`text-sm lg:text-base ${
                          tier.popular ? "text-white/60" : "text-black/60"
                        }`}>
                          /{tier.period}
                        </span>
                      </div>
                      <p className={`mt-2 text-sm lg:text-base ${
                        tier.popular ? "text-white/80" : "text-black/60"
                      }`}>
                        {tier.description}
                      </p>
                    </div>
                    <div className="flex-1 mt-6 space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm lg:text-base"
                        >
                          <Icon
                            icon="material-symbols:check-circle"
                            className={`flex-shrink-0 mt-0.5 ${
                              tier.popular ? "text-white" : "text-black"
                            }`}
                            width={20}
                            height={20}
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="contact"
                      smooth
                      offset={-100}
                      duration={1000}
                      onClick={(e) => e.stopPropagation()}
                      className={`mt-8 px-6 py-3 text-center text-sm font-light tracking-widest uppercase transition-all duration-300 border-2 rounded-full ${
                        tier.popular
                          ? "bg-white text-black border-white hover:bg-black hover:text-white hover:border-white"
                          : "bg-transparent text-black border-black hover:bg-black hover:text-white"
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>

                  {/* Back Side (INR) */}
                  <div
                    ref={(el) => {
                      if (el) {
                        cardBackRefs.current[cardKey] = el;
                        // Initialize back side - hidden and rotated
                        if (!isFlipped) {
                          gsap.set(el, { 
                            rotationY: -180, 
                            opacity: 0,
                            transformStyle: "preserve-3d"
                          });
                        } else {
                          gsap.set(el, { 
                            rotationY: 0, 
                            opacity: 1,
                            transformStyle: "preserve-3d"
                          });
                        }
                      }
                    }}
                    className="absolute inset-0 flex flex-col p-8 h-full"
                    style={{
                      backfaceVisibility: "hidden",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon
                          icon="twemoji:flag-india"
                          width={24}
                          height={24}
                        />
                        <h3 className="text-2xl font-light uppercase lg:text-3xl">
                          {tier.name}
                        </h3>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-light lg:text-5xl">
                          {tier.priceINR}
                        </span>
                        <span className={`text-sm lg:text-base ${
                          tier.popular ? "text-white/60" : "text-black/60"
                        }`}>
                          /{tier.period}
                        </span>
                      </div>
                      <p className={`mt-2 text-sm lg:text-base ${
                        tier.popular ? "text-white/80" : "text-black/60"
                      }`}>
                        {tier.description}
                      </p>
                    </div>
                    <div className="flex-1 mt-6 space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm lg:text-base"
                        >
                          <Icon
                            icon="material-symbols:check-circle"
                            className={`flex-shrink-0 mt-0.5 ${
                              tier.popular ? "text-white" : "text-black"
                            }`}
                            width={20}
                            height={20}
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="contact"
                      smooth
                      offset={-100}
                      duration={1000}
                      onClick={(e) => e.stopPropagation()}
                      className={`mt-8 px-6 py-3 text-center text-sm font-light tracking-widest uppercase transition-all duration-300 border-2 rounded-full ${
                        tier.popular
                          ? "bg-white text-black border-white hover:bg-black hover:text-white hover:border-white"
                          : "bg-transparent text-black border-black hover:bg-black hover:text-white"
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project-Based Packages Section */}
      <div className="px-10 py-12 bg-black">
        <div className="flex flex-col gap-4 mb-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-light tracking-wider text-white uppercase lg:text-4xl">
            Project Packages
          </h2>
          <button
            onClick={handleFlipAllPackages}
            className="flex items-center gap-2 px-4 py-2 text-sm font-light tracking-widest text-white uppercase border-2 border-white/60 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            <Icon icon="material-symbols:swap-horiz" width={20} height={20} />
            <span>{allPackagesFlipped ? "View USD Prices" : "View Indian Prices"}</span>
          </button>
        </div>
        <p className="mb-8 text-lg text-white/60 lg:text-xl">
          Fixed-price packages for common project types
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {projectPackages.map((pkg, index) => {
            const cardKey = `package-${pkg.id}`;
            const isFlipped = allPackagesFlipped;
            
            return (
              <div
                key={pkg.id}
                ref={(el) => (packageRefs.current[index] = el)}
                className="relative border-2 border-white/30 rounded-lg bg-black/50 backdrop-blur-sm hover:border-white/60 transition-all duration-300 overflow-hidden"
                style={{ perspective: "1000px", minHeight: "400px" }}
              >
                
                {/* Card Container with 3D transform */}
                <div className="relative h-full" style={{ transformStyle: "preserve-3d" }}>
                  {/* Front Side (USD) */}
                  <div
                    ref={(el) => {
                      if (el) {
                        cardFrontRefs.current[cardKey] = el;
                        // Initialize front side based on allPackagesFlipped state
                        if (!allPackagesFlipped) {
                          gsap.set(el, { 
                            rotationY: 0, 
                            opacity: 1,
                            transformStyle: "preserve-3d"
                          });
                        } else {
                          gsap.set(el, { 
                            rotationY: 180, 
                            opacity: 0,
                            transformStyle: "preserve-3d"
                          });
                        }
                      }
                    }}
                    className="p-6 h-full"
                    style={{
                      backfaceVisibility: "hidden",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-light text-white uppercase lg:text-3xl">
                          {pkg.name}
                        </h3>
                        <span className="px-3 py-1 text-xs font-light tracking-widest text-black bg-white rounded-full uppercase flex-shrink-0 ml-2">
                          {pkg.duration}
                        </span>
                      </div>
                      <p className="text-xl font-light text-white/80 lg:text-2xl">
                        {pkg.price}
                      </p>
                    </div>
                    <div className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm text-white/80 lg:text-base"
                        >
                          <Icon
                            icon="material-symbols:check-circle"
                            className="flex-shrink-0 mt-0.5 text-white"
                            width={18}
                            height={18}
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="contact"
                      smooth
                      offset={-100}
                      duration={1000}
                      className="inline-block mt-6 px-6 py-3 text-sm font-light tracking-widest text-white uppercase transition-all duration-300 border-2 border-white rounded-full hover:bg-white hover:text-black text-center"
                    >
                      Request Quote
                    </Link>
                  </div>

                  {/* Back Side (INR) */}
                  <div
                    ref={(el) => {
                      if (el) {
                        cardBackRefs.current[cardKey] = el;
                        // Initialize back side based on allPackagesFlipped state
                        if (!allPackagesFlipped) {
                          gsap.set(el, { 
                            rotationY: -180, 
                            opacity: 0,
                            transformStyle: "preserve-3d"
                          });
                        } else {
                          gsap.set(el, { 
                            rotationY: 0, 
                            opacity: 1,
                            transformStyle: "preserve-3d"
                          });
                        }
                      }
                    }}
                    className="absolute inset-0 p-6 h-full"
                    style={{
                      backfaceVisibility: "hidden",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon
                            icon="twemoji:flag-india"
                            width={24}
                            height={24}
                          />
                          <h3 className="text-2xl font-light text-white uppercase lg:text-3xl">
                            {pkg.name}
                          </h3>
                        </div>
                        <span className="px-3 py-1 text-xs font-light tracking-widest text-black bg-white rounded-full uppercase flex-shrink-0 ml-2">
                          {pkg.duration}
                        </span>
                      </div>
                      <p className="text-xl font-light text-white/80 lg:text-2xl">
                        {pkg.priceINR}
                      </p>
                    </div>
                    <div className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm text-white/80 lg:text-base"
                        >
                          <Icon
                            icon="material-symbols:check-circle"
                            className="flex-shrink-0 mt-0.5 text-white"
                            width={18}
                            height={18}
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="contact"
                      smooth
                      offset={-100}
                      duration={1000}
                      className="inline-block mt-6 px-6 py-3 text-sm font-light tracking-widest text-white uppercase transition-all duration-300 border-2 border-white rounded-full hover:bg-white hover:text-black text-center"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Info */}
      <div className="px-10 py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="mb-4 text-2xl font-light tracking-wider text-black uppercase lg:text-3xl">
            Need Something Custom?
          </h3>
          <p className="mb-6 text-lg text-black/60 lg:text-xl">
            Every project is unique. Let's discuss your specific requirements
            and create a tailored solution that fits your needs and budget.
          </p>
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="inline-block px-8 py-4 text-sm font-light tracking-widest text-white uppercase transition-all duration-300 bg-black rounded-full hover:bg-black/80"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>

      {/* Calendly Widget */}
      <CalendlyWidget
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url={CALENDLY_URL}
      />
    </section>
  );
};

export default HireMe;
