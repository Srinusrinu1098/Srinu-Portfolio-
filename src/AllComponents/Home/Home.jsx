import React, { useEffect, useState } from "react";
import MenuBar from "../MenuBar/MenuBar";
import BlurText from "@/components/ui/BlurText";

const Home = () => {
  const skills = [
    "Full Stack Dev",
    "MERN Pro",
    "AI Builder",
    "Creative Thinker",
  ];

  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="relative">
      <div
        className="w-full min-h-[200vh] bg-cover bg-center bg-no-repeat font-sans"
        style={{ backgroundImage: "url('/Srinus.png')" }}
      >
        {/* Menu */}
        <div className="flex justify-center  w-full md:justify-end p-2 sm:p-4">
          <MenuBar />
        </div>

        {/* Greeting */}
        <div className="absolute top-20 sm:top-24 left-4 sm:left-8 text-2xl sm:text-3xl md:text-3xl  font-medium font-serif text-white bg-clip-text  animate-slide-in-left">
          <p className="text-center">
            Hello, my name is Srinivasulu <br /> You can call me SRINU ❤️
          </p>
        </div>

        {/* Skill Rotation */}
        <div className="lg:absolute right-4 sm:right-8 mt-[30%]  lg:mt-[1%] sm:top-[20%] lg:top-[18%] text-lg sm:text-2xl md:text-4xl font-bold text-gray-700 bg-clip-text  animate-slide-in-right text-end">
          <span className="font-serif text-sm text-gray-500 block sm:inline mr-2 lg:text-3xl">
            i'm {skills[currentSkill]}
          </span>
        </div>

        {/* About Text */}
        <div className="mt-[40%] sm:mt-[35%] max-w-xl px-4 sm:px-8">
          <BlurText
            text="I'm a full-stack web developer with a passion for creating smooth, interactive, and responsive digital experiences. I specialize in building modern front-end interfaces, efficient back-end systems, and bringing websites to life with animations that feel intuitive and engaging. From concept to deployment, I focus on clean code, performance, and user-centered design. Let’s turn ideas into seamless, dynamic web solutions.!"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-md text-gray-100 font-serif text-bol"
          />
        </div>

        <div className="flex justify-end px-4 mt-10">
          <BlurText
            text="As a full-stack developer, I craft seamless web experiences from the ground up. Whether it's designing intuitive front-end interfaces or building robust back-end systems, I enjoy bringing ideas to life through code. My work blends functionality with design, performance with creativity. Every line of code I write aims to create responsive, interactive, and impactful digital solutions tailored to real-world needs. Let’s build something exceptional—pixel by pixel, logic by logic."
            delay={150}
            animateBy="words"
            direction="top"
            className="max-w-md text-right text-md text-gray-500 font-serif font-bold"
          />
        </div>

        {/* Custom Animations */}
        <style>{`
          @keyframes slide-in-left {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes slide-in-right {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes fade {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .animate-slide-in-left {
            animation: slide-in-left 1.5s ease-out forwards;
          }

          .animate-slide-in-right {
            animation: slide-in-right 1.5s ease-out forwards;
          }

          .animate-fade {
            animation: fade 1s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Home;
