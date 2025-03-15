"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  { metric: "Projects", value: "100", postfix: "+" },
  { prefix: "~", metric: "Users", value: "100000" },
  { metric: "Awards", value: "7" },
  { metric: "Years", value: "5" },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index} // ✅ مفتاح فريد للعنصر الرئيسي
            className="flex flex-col items-center justify-center my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                key={`animated-${index}`} // ✅ Use `index` as a fallback key
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (index + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
// "use client";  +++++++++++++++ tsx ++++===
// import React, { memo } from "react";
// import dynamic from "next/dynamic";

// const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
//   ssr: false,
// });

// // Define a TypeScript type for achievements
// interface Achievement {
//   metric: string;
//   value: number;
//   prefix?: string;
//   postfix?: string;
// }

// // Memoized Achievement Item to prevent unnecessary re-renders
// const AchievementItem = memo(
//   ({ achievement }: { achievement: Achievement }) => {
//     return (
//       <div
//         className="flex flex-col items-center justify-center my-4 sm:my-0"
//       >
//         <h2 className="text-white text-4xl font-bold flex flex-row">
//           {achievement.prefix}
//           <AnimatedNumbers
//             key={achievement.metric} // ✅ Added unique key here
//             includeComma
//             animateToNumber={achievement.value}
//             locale="en-US"
//             className="text-white text-4xl font-bold"
//           />
//           {achievement.postfix}
//         </h2>
//         <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
//       </div>
//     );
//   }
// );

// // Add a display name for debugging
// AchievementItem.displayName = "AchievementItem";

// // Achievement data
// const achievementsList: Achievement[] = [
//   { metric: "Projects", value: 100, postfix: "+" },
//   { prefix: "~", metric: "Users", value: 100000 },
//   { metric: "Awards", value: 7 },
//   { metric: "Years", value: 5 },
// ];

// const AchievementsSection = () => {
//   return (
//     <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//       <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
//         {achievementsList.map((achievement) => (
//           <AchievementItem key={achievement.metric} achievement={achievement} /> // ✅ Unique key
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AchievementsSection;
