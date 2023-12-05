import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { AuthService } from "@/services/auth/auth.services";
import m from "./About.module.scss";
import Reveal from "../UI/Reveal/Reveal";
import SlicedReveal from "../UI/Reveal/SlicedReveal";
import { motion } from "framer-motion";
import StarParticles from "../UI/StarParticles/StarParticles";

const About = () => {
  const router = useRouter();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [scrollAnimationCompleted, setScrollAnimationCompleted] =
    useState(false);

  const submit = () => {
    const userData = Cookies.get("user");
    if (userData) {
      let parsedData = JSON.parse(userData);
      AuthService.changeUserRole(parsedData._id, "user").then((res) => {
        if (res.status === 200) {
          router.push("/market");
        }
      });
    }
  };

  const onClickHandler = () => {
    setButtonClicked(true);
  };

  return (
    <div className={m.container}>
      {!buttonClicked && (
        <>
          <Reveal slideColor={"#252525"}>
            <h1 className={m.title}>
              Need the best glider for your application?
            </h1>
          </Reveal>
          <SlicedReveal duration={0.5} delay={0.25}>
            <button className={m.button} onClick={() => onClickHandler()}>
              Yes
            </button>
          </SlicedReveal>
        </>
      )}

      {buttonClicked && (
        <>
          <motion.div
            initial={{ translateY: "-100%" }}
            animate={{ translateY: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            onAnimationComplete={() => setScrollAnimationCompleted(true)}
            className={m.backgroundRoller}
          >
            <StarParticles />
          </motion.div>

          {scrollAnimationCompleted && (
            <div className={m.infoContainer}>
              <div className={m.firstBlock}>
                <SlicedReveal duration={0.1} delay={0.1}>
                  <h1 className={m.aboutTitle}>Welcome to Void</h1>
                </SlicedReveal>
                <div className={m.titleWrapper}>
                  <Reveal slideColor="#fff">
                    <h1 className={m.aboutDesc}>
                      Your all-in-one assistant for planning and organizing your
                      daily life. Our app is designed to meet the diverse needs
                      of users and offers a holistic approach to managing tasks
                      in different areas of life.
                    </h1>
                  </Reveal>
                </div>
              </div>
              <div className={m.secondBlock}>
                <div className={m.sportsWrapper}>
                  <SlicedReveal delay={1} duration={1}>
                    <>
                      <Reveal slideColor={"#fff"}>
                        <h1 className={m.category}>Sports:</h1>
                      </Reveal>
                      <SlicedReveal delay={0.5} duration={0.5}>
                        <p className={m.sportDesc}>
                          Set sporting goals, track your progress and keep track
                          of your training regularity. Whether {`you're`}{" "}
                          training for a marathon or exercising daily, our app
                          will help you stay in shape.
                        </p>
                      </SlicedReveal>
                    </>
                  </SlicedReveal>
                </div>
                <div className={m.sportsWrapper}>
                  <SlicedReveal delay={1.5} duration={1.5}>
                    <>
                      <Reveal slideColor={"#fff"}>
                        <h1 className={m.category}>Work:</h1>
                      </Reveal>
                      <SlicedReveal delay={0.5} duration={0.5}>
                        <p className={m.sportDesc}>
                          Manage your work tasks easier with goal setting, task
                          prioritization and deadline tracking. Everything to
                          increase your productivity and efficiency at work.
                        </p>
                      </SlicedReveal>
                    </>
                  </SlicedReveal>
                </div>
                <div className={m.sportsWrapper}>
                  <SlicedReveal delay={2} duration={2}>
                    <>
                      <Reveal slideColor={"#fff"}>
                        <h1 className={m.category}>Study:</h1>
                      </Reveal>
                      <SlicedReveal delay={0.5} duration={0.5}>
                        <p className={m.sportDesc}>
                          Plan your studies, mark important exam dates and
                          coursework deadlines. Our app will help you organize
                          your study process and achieve academic success.
                        </p>
                      </SlicedReveal>
                    </>
                  </SlicedReveal>
                </div>
                <div className={m.sportsWrapper}>
                  <SlicedReveal delay={2.5} duration={2.5}>
                    <>
                      <Reveal slideColor={"#fff"}>
                        <h1 className={m.category}>Personal use:</h1>
                      </Reveal>
                      <SlicedReveal delay={0.5} duration={0.5}>
                        <p className={m.sportDesc}>
                          From personal appointments to household chores, plan
                          your day with convenience. Our customized settings
                          help you organize your personal time efficiently and
                          enjoyably.
                        </p>
                      </SlicedReveal>
                    </>
                  </SlicedReveal>
                </div>
              </div>
              <div className={m.thirdBlock}>
                <SlicedReveal delay={0.5} duration={0.5}>
                  <button className={m.acceptBtn} onClick={() => submit()}>
                    Accept
                  </button>
                </SlicedReveal>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default About;
