import React from "react";
import { FaEnvelope, FaGraduationCap } from "react-icons/fa";

const investigatorsData = [
  {
    id: 1,
    name: "Dr. Aayush Sharma",
    role: "Lead Senior Researcher",
    expertise: [
      "Public Policy",
      "Economic Development",
      "Quantitative Analysis",
    ],
    bio: "Dr. Sharma has over 10 years of experience leading social science research projects and socio-economic impact assessments across South Asia.",
    email: "aayush.sharma@example.com",
    status: "Active Fellow",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Pooja Thapa, PhD",
    role: "Senior Research Fellow",
    expertise: ["Migration Studies", "Gender Dynamics", "Qualitative Research"],
    bio: "Specializing in qualitative methodologies, Pooja focuses her research on community resilience, labor migration patterns, and local governance.",
    email: "pooja.thapa@example.com",
    status: "Active Fellow",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Rohan Koirala",
    role: "Data & Social Science Analyst",
    expertise: ["Data Science", "Statistical Modeling", "Survey Design"],
    bio: "Rohan bridges the gap between traditional social sciences and modern data analytics, managing large-scale survey pipelines and data modeling.",
    email: "rohan.koirala@example.com",
    status: "On Leave",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
];

const FALLBACK_IMAGE =
  "https://placehold.co/500x400/e5e7eb/6b7280?text=No+Photo";

const CurrentInvestigators = () => {
  return (
    <div className="bg-[#FAF7F0] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2027] mb-4">
          Current Investigators
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Meet the dedicated researchers, academics, and experts driving
          innovative social science research and impactful field studies.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {investigatorsData.map((person) => (
          <div
            key={person.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="h-56 w-full overflow-hidden bg-gray-200">
                <img
                  src={person.image}
                  alt={person.name || "Investigator photo"}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_IMAGE;
                  }}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold text-amber-700 mb-3">
                  {person.role}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {person.bio}
                </p>

                <div className="mb-4">
                  <div className="flex items-center text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    <FaGraduationCap className="mr-1.5 text-amber-700" />
                    Areas of Expertise
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {person.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-amber-50 text-amber-900 text-xs px-2.5 py-1 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
              <a
                href={`mailto:${person.email}`}
                aria-label={`Email ${person.name}`}
                className="inline-flex items-center text-sm text-gray-700 hover:text-amber-800 transition-colors"
              >
                <FaEnvelope className="mr-2 text-gray-400" />
                <span>Contact</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentInvestigators;
