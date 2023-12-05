import Reveal from "@/components/UI/Reveal/Reveal";
import m from "./UserInfo.module.scss";
import EditPen from "@/assets/icons/EditPenW.svg";
import Image from "next/image";
import SlicedReveal from "@/components/UI/Reveal/SlicedReveal";

const UserInfo = () => {
  return (
    <SlicedReveal delay={0.5} duration={0.5}>
      <div className={m.container}>
        <div className={m.funcBar}>
          <button className={m.editBtn}>
            <Image
              className={m.editIcons}
              width={24}
              height={24}
              src={EditPen}
              alt=""
            />
            <p className={m.editText}>Edit</p>
          </button>
        </div>
        <div className={m.content}>
          <div className={m.nameContainer}>
            <div className={m.nameWrapper}>
              <Reveal slideColor={"#252525"}>
                <span className={m.shadowTitle}>First Name</span>
              </Reveal>
              <p className={m.name}>Arut</p>
            </div>
            <div className={m.nameWrapper}>
              <Reveal slideColor={"#252525"}>
                <span className={m.shadowTitle}>Last Name</span>
              </Reveal>
              <p className={m.name}>Erborjalib</p>
            </div>
          </div>

          <div className={m.personalContainer}>
            <div className={m.nameWrapper}>
              <Reveal slideColor={"#252525"}>
                <span className={m.shadowTitle}>Gender</span>
              </Reveal>
              <p className={m.name}>Male</p>
            </div>
            <div className={m.nameWrapper}>
              <Reveal slideColor={"#252525"}>
                <span className={m.shadowTitle}>Location</span>
              </Reveal>
              <p className={m.name}>New York</p>
            </div>
            <div className={m.nameWrapper}>
              <Reveal slideColor={"#252525"}>
                <span className={m.shadowTitle}>Mac address</span>
              </Reveal>
              <p className={m.name}>128.0.0.282:5505</p>
            </div>
            <div className={m.nameWrapper}>
              <Reveal slideColor={"#252525"}>
                <span className={m.shadowTitle}>Phone</span>
              </Reveal>
              <p className={m.name}>{`+7(723)555-55-55`}</p>
            </div>
            <div className={m.nameWrapper}>
              <Reveal slideColor={"#252525"}>
                <span className={m.shadowTitle}>Age</span>
              </Reveal>
              <p className={m.name}>27</p>
            </div>
          </div>
        </div>
      </div>
    </SlicedReveal>
  );
};

export default UserInfo;
