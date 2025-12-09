import GsapScrollingTrigger from "./GSAPScrollingTrigger";
// import GsapScrolltrigger from "./GsapScrolltrigger";
import GsapStagger from "./Gsapstagger";
import GsapTo from "./GsapTo";

const GSAP = () => {
  return (
    <>
      <GsapTo></GsapTo>
      <GsapStagger></GsapStagger>
      <GsapScrollingTrigger></GsapScrollingTrigger>
      {/* <GsapScrolltrigger></GsapScrolltrigger> */}
    </>
  );
};

export default GSAP;
