import Education from "./Education";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <main className="mt-24 font-serif">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-wide">
                Pratham <span className="text-orange-800">Gehlot</span>
              </h2>
              <p className="text-xl font-semibold uppercase text-orange-800 tracking-widest">
                Full-Stack Developer
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed tracking-wide">
                <span className="uppercase text-4xl text-orange-800 font-bold">
                  I
                </span>{" "}
                build modern, scalable web applications using the MERN stack —
                React for dynamic frontends, Node.js and Express for robust
                APIs, and MongoDB for flexible NoSQL data management. My design
                approach is powered by Tailwind CSS for fast and responsive UI
                development. I love solving complex backend problems, optimizing
                performance, and crafting intuitive user experiences that make
                an impact.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <img
                  src="src/assets/main-img.jpeg"
                  alt="Pratham Gehlot"
                  className="w-full rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Skills />
      <Education />
    </>
  );
};

export default Home;
