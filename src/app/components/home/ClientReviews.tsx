// import Image from "next/image";
// import { Sophia, John } from "@/app/assets/images";

// const clients = [
//   {
//     name: "John Smith",
//     role: "Business Man",
//     feedback:
//       "As a businessman, time is my most valuable asset. Your website has greatly helped me save the time and effort I would have needed to create designs from scratch. Thanks to the ready-made templates, I was able to complete many marketing and advertising tasks quickly and efficiently.",
//     image: John,
//   },
//   {
//     name: "Sophia Garcia",
//     role: "Content Creator",
//     feedback:
//       "These templates have been a game-changer! I built my makeup website in no time, despite having no programming background. It's been a major source of income for me, and I couldn't be happier with this website. Thank you!",
//     image: Sophia,
//   },
// ];

// const ClientReviews = () => {
//   return (
//     <section className="py-10 text-center">
//       <h2 className="text-2xl font-bold mb-6">What Our Clients Say ?</h2>
//       <div className="flex justify-evenly space-x-4">
//         {clients.map((client, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-lg shadow-lg max-w-sm"
//           >
//             <Image
//               src={client.image}
//               alt={client.name}
//               className="rounded-full mx-auto"
//               width={136}
//               height={136}
//             />
//             <h3 className="font-bold mt-4">{client.name}</h3>
//             <p className="text-sm text-gray-500">{client.role}</p>
//             <p className="mt-2">{client.feedback}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ClientReviews;
import Image from "next/image";
import { Sophia, John } from "@/app/assets/images";

const clients = [
  {
    name: "John Smith",
    role: "Business Man",
    feedback:
      "As a businessman, time is my most valuable asset. Your website has greatly helped me save the time and effort I would have needed to create designs from scratch. Thanks to the ready-made templates, I was able to complete many marketing and advertising tasks quickly and efficiently.",
    image: John,
  },
  {
    name: "Sophia Garcia",
    role: "Content Creator",
    feedback:
      "These templates have been a game-changer! I built my makeup website in no time, despite having no programming background. It's been a major source of income for me, and I couldn't be happier with this website. Thank you!",
    image: Sophia,
  },
];

const ClientReviews = () => {
  return (
    <section className="py-10 text-center">
      <h2 className="text-2xl font-bold mb-6">What Our Clients Say ?</h2>
      <div className="flex justify-center space-x-16">
        {clients.map((client, index) => (
          <div key={index} className="relative">
            <div className="absolute inset-0 bg-primary rounded-lg transform rotate-6 w-full h-full -z-10"></div>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm relative z-10">
              <Image
                src={client.image}
                alt={client.name}
                className="rounded-full mx-auto"
                width={80}
                height={80}
              />
              <h3 className="font-bold mt-4">{client.name}</h3>
              <p className="text-sm text-gray-500">{client.role}</p>
              <p className="mt-2">{client.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;
