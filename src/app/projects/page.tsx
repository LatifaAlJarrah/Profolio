import Image from "next/image";
import Link from "next/link";
import { TiPlus } from "react-icons/ti";


import { auth } from "@/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";


const projects = [
  {
    name: "Restaurant Website",
    source: "/assets/resturant-cover.png",
    alt: "Restaurant Website",
  },
  {
    name: "Dental Clinic Website",
    source: "/assets/dental-cover.png",
    alt: "Dental Clinic Website",
  },
];

export default async function Page() {
  const session = await auth();

  const user = await db.user.findUnique({
    where: { email: session.user.email },
  });

  if (user && !user.password) {
    redirect("/set-password"); // أول مرة بعد تسجيل جوجل
  }

  return (
    <>
      {session && (
        <section className="container mx-auto p-6">
          {/* New Project */}
          <div className="p-6 rounded-lg">
            <h3 className="text-[32px] font-medium mb-4 font-roboto">New</h3>
            <Link
              href="/templates"
              className="border-2 border-solid border-gray-300 rounded-lg p-12 flex justify-center items-center cursor-pointer hover:border-gray-500 w-1/2 lg:w-1/4"
            >
              <span className="text-8xl font-bold text-primary rounded-lg">
                <TiPlus />
              </span>
            </Link>
          </div>

          <div className="border border-gray-300"></div>

          {/* Your Projects */}
          <div className="mt-6">
            <h3 className="text-[32px] font-medium mb-4 font-roboto">
              Your Projects
            </h3>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {projects.map((project, index) => {
                return (
                  <div key={index} className="">
                    <div className="bg-gray-100 rounded-lg shadow-md relative w-[350px] h-[250px]">
                      <Image
                        src={project.source}
                        alt={project.alt}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="mt-2 text-lg font-roboto">{project.name}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

// export default Page;
