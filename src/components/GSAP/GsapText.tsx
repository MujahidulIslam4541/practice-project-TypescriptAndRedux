import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const GsapText = () => {
  useGSAP(() => {
    // Title animation
    gsap.fromTo(
      "#text",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: "#text",
          start: "top 90%", // scroll এ 90% এ আসলে animate হবে
        },
      }
    );

    // Paragraph animation (multiple + stagger)
    gsap.fromTo(
      ".pera",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".pera",
          start: "top 95%",
        },
      }
    );
  });

  return (
    <div className="max-w-2xl mx-auto mt-32 p-6 text-center">
      <h2
        id="text"
        className="text-4xl font-bold text-black mb-4 opacity-0"
      >
        This is GSAP Text
      </h2>

      <p className="text-lg text-black leading-relaxed pera opacity-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis
        numquam illum deserunt totam animi quidem eligendi ducimus. Ex ullam
        vitae architecto earum incidunt vel, perferendis hic magnam officia iure!
      </p>
    </div>
  );
};

export default GsapText;
