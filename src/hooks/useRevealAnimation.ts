import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const useRevealAnimation = () => {
  const revealRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!revealRef.current) return;

    const elements = gsap.utils.toArray<HTMLElement>(
      revealRef.current.querySelectorAll(".reveal")
    );

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 80,
          opacity: 0,
          scale: 0.85,
          borderRadius: "30px",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          borderRadius: "10px",
          duration: 1.4,
          ease: "power3.out",

          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 40%",
            scrub: 1.5, 
          },
        }
      );
    });
  }, []);

  return revealRef;
};
