import m from "./Setting.module.scss";
import EditPen from "@/assets/icons/EditPenW.svg";
import Image from "next/image";
import SlicedReveal from "@/components/UI/Reveal/SlicedReveal";

const Setting = () => {
  return (
    <SlicedReveal delay={0.5} duration={0.5}>
      <div className={m.container}>
        {/* <div className={m.content}> */}
          <h1 className={m.title}>Coming soon...</h1>
        {/* </div> */}
      </div>
    </SlicedReveal>
  );
};

export default Setting;
