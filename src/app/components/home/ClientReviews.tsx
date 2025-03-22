import React from "react";
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
    <section className="py-10 text-center px-4 mb-6">
      <h2 className="text-2xl font-bold mb-6">What Our Clients Say ?</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16">
        {clients.map((client, index) => (
          <div key={index} className="relative">
            <div className="absolute inset-0 bg-primary rounded-lg transform rotate-6 -z-10"></div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm max-h-sm relative z-10 h-[400px]">
              <Image
                src={client.image}
                alt={client.name}
                width={80}
                height={80}
                className="rounded-full mx-auto w-auto"
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