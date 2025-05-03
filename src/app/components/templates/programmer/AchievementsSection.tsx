"use client";
import React from "react";
import CountUp from "react-countup";

interface Achievement {
  number: number;
  text: string;
}

interface StatsProps {
  ourAchievements?: Achievement[];
}

const Stats: React.FC<StatsProps> = ({ ourAchievements = [] }) => {
  // تعيين قيمة افتراضية لـ ourAchievements لتجنب التحقق المتكرر من undefined
  const renderAchievement = (item: Achievement, index: number) => {
    // تحديد عرض النص بناءً على طوله لتحسين التخطيط
    const textWidthClass =
      item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]";

    return (
      <div
        key={index}
        className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
      >
        <CountUp
          end={item.number}
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
        <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none">
          {ourAchievements.map(renderAchievement)}
        </div>
      </div>
    </section>
  );
};

export default Stats;
// "use client";
// import React from "react";
// import CountUp from "react-countup";

// interface Achievement {
//   number: number;
//   text: string;
// }

// interface StatsProps {
//   ourAchievements?: Achievement[];
// }

// const Stats: React.FC<StatsProps> = ({ ourAchievements }) => {
//   return (
//     <section className="mt-10 pb-12 xl:pt-0 xl:pb-0">
//       <div className="container mx-auto sm:border-[#33353F] sm:border rounded-md px-12 py-8">
//         <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none">
//           {ourAchievements?.map((item, index) => (
//             <div
//               key={index}
//               className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
//             >
//               <CountUp
//                 end={item.number}
//                 duration={5}
//                 delay={2}
//                 className="text-4xl xl:text-6xl font-extrabold text-white/80"
//               />
//               <p
//                 className={`${
//                   item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
//                 } leading-snug text-white/80`}
//               >
//                 {item.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;
