// GsapScrollTrigger.tsx
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const GsapScrollingTrigger: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!scrollRef.current) return;

      const boxes = gsap.utils.toArray<HTMLDivElement>(
        scrollRef.current.children as any
      );

      boxes.forEach((box, i) => {
        gsap.to(box, {
          x: 120 * (i + 2),
          rotation: 360,
          borderRadius: "100%",
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef }
  );

  return (
    <div
      ref={scrollRef}
      className="h-[200vh] flex flex-col items-center justify-center gap-10 pt-48"
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <div
          key={n}
          className="w-32 h-32 bg-blue-500"
        />
      ))}
    </div>
  );
};

export default GsapScrollingTrigger;
