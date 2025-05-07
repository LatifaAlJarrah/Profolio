"use client";
import React from "react";
import CountUp from "react-countup";

interface Achievement {
  icon?: string | undefined;
  value?: string | undefined;
  label?: string | undefined;
  uploadedIcon?: undefined;
  number?: number | undefined;
  text?: string | undefined;
}

interface StatsProps {
  ourAchievements?: Achievement[];
}

const Stats: React.FC<StatsProps> = ({ ourAchievements = [] }) => {
  const renderAchievement = (item: Achievement, index: number) => {
    const displayText = item.text || item.label || "Achievement";
    const textWidthClass =
      displayText.length < 15 ? "max-w-[100px]" : "max-w-[150px]";
    return (
      <div
        key={index}
        className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
      >
        <CountUp
          end={item.number || 0}
          duration={5}
          delay={2}
          className="text-4xl xl:text-6xl font-extrabold text-white/80"
        />
        <p className={`leading-snug text-white/80 ${textWidthClass}`}>
          {item.text}
        </p>
      </div>
    );
  };

  return (
    <section className="mt-10 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto sm:border-[#33353F] sm:border rounded-md px-12 py-8">
        {ourAchievements.length > 0 ? (
          <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none">
            {ourAchievements.map(renderAchievement)}
          </div>
        ) : (
          <p className="text-white/80 text-center">
            No achievements to display.
          </p>
        )}
      </div>
    </section>
  );
};

export default Stats;
