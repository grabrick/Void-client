import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const StarParticles = () => {
  const [initalSpeed, setInitialSpeed] = useState(60)
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);

  useEffect(() => {
    setTimeout(() => {
        setInitialSpeed(2)
    }, 1000)
  }, [])

  return (
    <Particles
      id="tsparticles"
      options={{
        // background: {
        //   color: {
        //     value: "#252525", // Цвет фона, на котором будут звезды
        //   },
        // },
        fpsLimit: 144,
        interactivity: {
          detectsOn: "canvas",
          events: {
            // Вы можете добавить интерактивные события, если нужно
          },
        },
        particles: {
          number: {
            value: 250, // Количество звезд
          },
          color: {
            value: "#fff", // Цвет звезд
          },
          shape: {
            type: "star", // Форма частицы - звезда
          },
          opacity: {
            value: 1, // Прозрачность звезд
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 }, // Размеры звезд
          },
          move: {
            enable: true,
            speed: initalSpeed, // Скорость движения звезд
            direction: "bottom", // Направление движения вниз
          },
        },
        detectRetina: true,
      }}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default StarParticles;
