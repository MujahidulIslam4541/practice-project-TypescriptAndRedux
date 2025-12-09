import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {

  const boxes = [
    { id: 1, color: "bg-blue-700" },
    { id: 2, color: "bg-blue-600" },
    { id: 3, color: "bg-blue-500" },
    { id: 4, color: "bg-blue-400" },
    { id: 5, color: "bg-blue-300" },
    { id: 6, color: "bg-blue-200" },
  ];

  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      rotation: 360,
      borderRadius: "10%",
      duration: 1,
      yoyo: true,
      repeat: 1,
      stagger: {
        amount: 1.5,
        ease: "circ.inOut",
        from: "center",
      },
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="grid grid-cols-6 gap-6">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`w-32 h-64 rounded-lg shadow-xl stagger-box ${box.color}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GsapStagger;
