import {
  FaUniversity,
  FaSchool,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

const educationData = [
  {
    title: "HSC (Higher Secondary)",
    sub: "Gujarat Board",
    year: "Passed with 64%",
    icon: <FaSchool className="text-3xl text-yellow-600" />,
  },
  {
    title: "Bachelor of Commerce (B.Com)",
    sub: "Shree Narayanaguru College, Gujarat University",
    year: "Completed in 2023",
    icon: <FaUniversity className="text-3xl text-yellow-600" />,
  },
  {
    title: "Full Stack Development",
    sub: "Red & White Multimedia",
    year: "Completed in 2025",
    icon: <FaLaptopCode className="text-3xl text-yellow-600" />,
  },

  {
    title: "M.Sc. IT",
    sub: "Department of Computer Science, Gujarat University",
    year: "Ongoing",
    icon: <FaGraduationCap className="text-3xl text-yellow-600" />,
  },
];

const Education = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-10">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition"
            >
              {/* Splash Icon */}
              <div className="w-16 h-16 bg-yellow-300/30 rounded-full flex items-center justify-center relative">
                <div className="absolute w-16 h-16 bg-purple-300 rounded-full blur-sm -z-10"></div>
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-blue-600">
                  {item.title}
                </h3>
                <p className="text-gray-700 mt-1">{item.sub}</p>
                <p className="text-sm text-gray-500">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
