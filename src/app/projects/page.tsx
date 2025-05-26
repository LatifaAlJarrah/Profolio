import Link from "next/link";
import { TiPlus } from "react-icons/ti";
import { auth } from "@/auth";
import UserTemplates from "@/app/components/UserTemplates";

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

  return (
    <>
      {session ? (
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

          {/* User Templates Component */}
          <UserTemplates fallbackProjects={projects} />
        </section>
      ) : (
        <p className="text-center text-lg">
          Please log in to view your templates.
        </p>
      )}
    </>
  );
}
