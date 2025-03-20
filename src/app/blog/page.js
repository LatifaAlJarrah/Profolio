import Image from "next/image";

// Dummy data for reusability
const educationalArticles = [
  {
    title: "How to Choose the Right Template for Your Website",
    img: "/assets/blog/blog-one.jpeg",
  },
  {
    title:
      "Best Practices for Creating a Professional Website Using Ready-Made Templates",
    img: "/assets/blog/blog-two.jpeg",
  },
  {
    title: "The Importance of Responsive Design and Why It Matters",
    img: "/assets/blog/blog-three.jpeg",
  },
  {
    title: "SEO Guide for Websites Built with Ready-Made Templates",
    img: "/assets/blog/blog-four.jpeg",
  },
];

const blogUpdates = [
  {
    title: "Restaurant Website",
    img: "/assets/cover-resturant.png",
    label: "NEW",
  },
  {
    title: "Dental Clinic Website",
    img: "/assets/cover-dental.png",
    label: "NEW",
  },
  { title: "Startup Website", img: "/assets/cover-company.png" },
];

const BlogSection = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="h-[600px] relative flex">
        <Image
          src="/assets/blog/blog-hero.jpeg"
          fill
          alt="Hero background"
          className="rounded-br-[300px]"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-br-[300px]"></div>
        <div className="flex flex-col items-start justify-center text-white z-10 font-sedan pl-5 lg:pl-20">
          <h1 className="text-2xl sm:text-2xl lg:text-5xl font-bold text-justify w-1/2">
            Everything You Need to Build a Professional{" "}
            <span className="text-primary">Website</span> – Tips, Templates, and
            Creative Ideas
          </h1>
          <p className="mt-4 text-xl text-[#BEBEBE] text-justify w-2/3">
            Discover the latest tips and best practices for creating
            professional websites with ease. Explore articles on design,
            performance optimization, and using ready-made templates to make
            your website more attractive and effective!
          </p>
        </div>
      </header>

      {/* Educational Articles Section */}
      <section className="mt-10 px-20 lg:px-0 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Educational Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {educationalArticles.map((article, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg h-[400px]"
            >
              <Image
                src={article.img}
                alt={article.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute bottom-0 text-white p-2 w-full text-center">
                <p className="text-lg font-roboto">{article.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Updates & Announcements */}
      <section className="mt-10 px-20 lg:px-0 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Blog Updates & Announcements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogUpdates.map((update, index) => {
            return (
              <div key={index} className="text-center">
                <div className="relative rounded-lg overflow-hidden shadow-lg h-[200px]">
                  <Image
                    src={update.img}
                    alt={update.title}
                    fill
                    className="object-cover"
                  />
                  {update.label && <div className="new-badge">NEW</div>}
                </div>
                <h4 className="mt-2 text-lg font-roboto">{update.title}</h4>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mt-10 px-20 lg:px-0 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">How It Works?</h2>
        <div className="flex justify-center">
          <div className="bg-[#F3F3F3] w-full lg:w-1/2 h-[500px] flex items-center justify-center rounded-md mb-10">
            <button className="text-[#828282] border-[10px] border-[#828282] p-3 text-3xl">
              ▶
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
