import React from "react";

import TrueFocus from "@/components/ui/TrueFocus";
import MenuBar from "../MenuBar/MenuBar";
import BlurText from "@/components/ui/BlurText";
import { MacbookScrollDemo } from "@/components/MackBookAll";
import ContactForm from "../ContactForm/ContactForm";
import SlideInView from "@/components/ui/slideIn";
import FuzzyText from "@/components/ui/fuzzy";

const MyStory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-whitegray-800 via-gray-300 to-gray-800">
      <div className="flex shadow-2xl justify-center md:justify-end p-2 sm:p-4">
        <MenuBar />
      </div>

      {/* Wrapper for content layout */}
      <div className="flex flex-col lg:flex-row justify-between p-4 gap-6">
        {/* Macbook Scroll Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <MacbookScrollDemo />
        </div>

        {/* Text and Interaction Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 p-4">
          <TrueFocus
            sentence="Failure ➡️ Developer"
            manualMode={false}
            blurAmount={10}
            borderColor="#00D8FF"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />

          <BlurText
            text={`From Failing Grades to Full-Stack Success 🚀

I was never a top student—barely passing school with minimal marks. During my 2nd PUC exams, I felt confident, especially in Business Studies. But when results came in, I had failed in the one subject I thought I’d nailed. At the time, I was working as a delivery boy. I felt crushed. When I told my dad, expecting disappointment, he simply said, “You’re not done yet — rise again.” That moment changed everything.

Motivated by his belief in me, I studied harder and passed. I joined BCom at Nandi Institute of Management & Science, not knowing what I really wanted—just following the crowd. College life was fun, but I knew something was missing. I started exploring career options and stumbled upon NxtWave’s CCBP 4.0 program in full-stack web development.

Coming from a non-tech background, it wasn’t easy. I struggled—but I never gave up. Through consistent effort, I built skills in both frontend and backend development.

Now, I’ve built:

A Spotify Clone

A full-featured E-Commerce Platform

An AI Trip Planner

An AI Interview Scheduler

A real client website

From nearly failing school to becoming a full-stack developer—this is my story of grit, growth, and self-belief. If I can do it, anyone can.
`}
            delay={50}
            animateBy="words"
            direction="top"
            className="text-md pl-2 md:pl-6 lg:text-white pt-4 text-gray-700 font-serif max-w-full"
          />

          {/* Slide in and Fuzzy Text */}
          <div className="mt-10 lg:mt-52">
            <SlideInView />
            <div className="flex justify-center bg-black h-[300px] rounded-2xl mt-6 w-full">
              <FuzzyText />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStory;
