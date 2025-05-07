"use client";
import React from "react";
import CountUp from "react-countup";

interface Achievement {
  value?: string | undefined;
  label?: string | undefined;
  number?: number | undefined;
  text?: string | undefined;
}

interface StatsProps {
  ourAchievements?: Achievement[];
}

const Stats: React.FC<StatsProps> = ({ ourAchievements = [] }) => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none">
          {ourAchievements.map((item, index) => {
            const displayValue = item.value || item.number?.toString() || "0";
            const displayLabel = item.label || item.text || "No Label";

            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={parseInt(displayValue) || 0}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    displayLabel.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {displayLabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;