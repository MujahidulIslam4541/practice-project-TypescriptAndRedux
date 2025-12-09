import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTo = () => {
  // Box 1 - From top with rotation
  useGSAP(() => {
    gsap.to("#box6", {
      keyframes: [
        { x: 200, duration: 0.5 },
        { y: 200, duration: 0.5 },
        { scale: 1.5, duration: 0.4 },
        { rotate: 180, duration: 0.8 },
        { x: 0, y: 0, scale: 1, duration: 0.6 },
      ],
      ease: "power4.out",
    });
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#box4", {
      x: -400,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
      .to("#box4", {
        rotate: 360,
        duration: 1,
      })
      .to("#box4", {
        duration: 0.6,
      });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#box3",
      { y: 300, opacity: 0, scale: 0.5 }, // start
      { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "bounce.out" } // end
    );
  }, []);

  useGSAP(() => {
    gsap.to("#box2", {
      x: 200,
      scale: 1,
      rotation: 45,
      duration: 1.4,
      ease: "power2.out",
    });
  }, []);

  useGSAP(() => {
    gsap.from("#box1", {
      y: -500,
      opacity: 0,
      rotate: 360,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  useGSAP(() => {
    gsap.from("#box5", {
      scale: 0,
      opacity: 0,
      duration: 1.3,
      ease: "elastic.out(1, 0.3)",
      repeat: 0,
    });
  }, []);

  return (
    <div className="flex items-center justify-center p-8 my-10">
      <div className="grid grid-cols-3 gap-8">
        {/* Box 1 */}
        <div
          className="w-40 h-32 bg-blue-500 rounded-lg shadow-xl"
          id="box1"
        ></div>

        {/* Box 2 */}
        <div
          className="w-40 h-32 bg-pink-500 rounded-lg shadow-xl"
          id="box2"
        ></div>

        {/* Box 3 */}
        <div
          className="w-40 h-32 bg-purple-500 rounded-lg shadow-xl"
          id="box3"
        ></div>

        {/* Box 4 */}
        <div
          className="w-40 h-32 bg-green-500 rounded-lg shadow-xl"
          id="box4"
        ></div>

        {/* Box 5 */}
        <div
          className="w-40 h-32 bg-orange-500 rounded-lg shadow-xl"
          id="box5"
        ></div>

        {/* Box 6 */}
        <div
          className="w-40 h-32 bg-red-500 rounded-lg shadow-xl"
          id="box6"
        ></div>
      </div>
    </div>
  );
};

export default GsapTo;
