import GsapScrollingTrigger from "./GSAPScrollingTrigger";
// import GsapScrolltrigger from "./GsapScrolltrigger";
import GsapStagger from "./Gsapstagger";
import GsapText from "./GsapText";
import GsapTo from "./GsapTo";

const GSAP = () => {
  return (
    <>
      <GsapTo></GsapTo>
      <GsapStagger></GsapStagger>
      <GsapScrollingTrigger></GsapScrollingTrigger>
      <GsapText></GsapText>
      {/* <GsapScrolltrigger></GsapScrolltrigger> */}
    </>
  );
};

export default GSAP;
