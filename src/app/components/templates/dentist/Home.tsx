// import React from "react";

// import Navbar from "./Navbar";
// import Header from "./Header";

// import Image from "next/image";
// import { BackgroundDentelle } from "@/app/assets/images";

// const Home = () => {
//   return (
//     <div className="relative h-[690px]">
//       <Image
//         src={BackgroundDentelle}
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="absolute top-0 left-0 -z-10"
//       />
//       <Navbar />
//       <Header />
//     </div>
//   );
// };

// export default Home;
import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import ContactUs from "./ContactUs";
import AboutMe from "./AboutMe";
import Services from "./Services";

import Image from "next/image";
import { BackgroundDentelle } from "@/app/assets/images";

const Home = () => {
  return (
    <div className="relative h-[690px]">
      <Image
        src={BackgroundDentelle}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 -z-10"
      />
      <Navbar />
      <Header />
      <ContactUs />
      <AboutMe />
      <Services />
    </div>
  );
};

export default Home;
