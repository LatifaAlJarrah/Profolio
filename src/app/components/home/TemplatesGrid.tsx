// const templates = new Array(8).fill(null); // Simulating 8 template placeholders

// export default function TemplatesGrid() {
//   return (
//     <section className="px-12 py-8">
//       <h2 className="text-2xl font-semibold">Templates</h2>
//       <div className="grid grid-cols-4 gap-6 mt-6">
//         {templates.map((_, index) => (
//           <div
//             key={index}
//             className="h-40 bg-lightGray rounded-md shadow-md flex items-center justify-center"
//           >
//             <p className="text-charcoalGray text-sm">Template {index + 1}</p>
//           </div>
//         ))}
//       </div>
//       <button className="mt-6 px-6 py-2 text-white block mx-auto bg-primary w-[159px] h-[45px] rounded-lg text-xl">
//         Show More
//       </button>
//     </section>
//   );
// }
const templates = new Array(8).fill(null); // Simulating 8 template placeholders

export default function TemplatesGrid() {
  return (
    <section className="px-4 md:px-12 py-8">
      <h2 className="text-2xl font-semibold">Templates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {templates.map((_, index) => (
          <div
            key={index}
            className="h-40 bg-lightGray rounded-md shadow-md flex items-center justify-center"
          >
            <p className="text-charcoalGray text-sm">Template {index + 1}</p>
          </div>
        ))}
      </div>
      <button className="mt-6 px-6 py-2 text-white block mx-auto bg-primary w-[159px] h-[45px] rounded-lg text-xl">
        Show More
      </button>
    </section>
  );
}