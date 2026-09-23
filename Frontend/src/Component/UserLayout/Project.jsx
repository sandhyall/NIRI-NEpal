import React from 'react';
import { FaProjectDiagram, FaMapMarkerAlt, FaCheckCircle, FaSpinner, FaHourglassHalf } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "Socio-Economic Impact of Rural Migration",
    status: "Active",
    category: "Social Sciences & Demographics",
    location: "Bagmati & Gandaki Provinces",
    description: "Investigating the shifting demographic patterns, labor trends, and socio-economic effects of youth migration on rural households.",
    metrics: "1,200+ Households Surveyed"
  },
  {
    id: 2,
    title: "Local Governance & Public Policy Index",
    status: "Ongoing",
    category: "Policy Research",
    location: "National Level",
    description: "Evaluating municipal service delivery, transparency frameworks, and citizen participation across various local administrative units.",
    metrics: "45 Municipalities Covered"
  },
  {
    id: 3,
    title: "Community Resilience & Climate Adaptation Study",
    status: "Completed",
    category: "Environmental Sociology",
    location: "Hilly & Mountainous Regions",
    description: "Assessing local adaptation mechanisms and community vulnerabilities against changing environmental conditions and resource access.",
    metrics: "Published in Policy Brief Q1"
  }
];


const STATUS_STYLES = {
  Active: {
    classes: 'bg-green-50 text-green-700',
    icon: <FaSpinner className="animate-spin mr-1 text-[10px]" />
  },
  Ongoing: {
    classes: 'bg-amber-50 text-amber-700',
    icon: <FaHourglassHalf className="mr-1 text-[10px]" />
  },
  Completed: {
    classes: 'bg-blue-50 text-blue-700',
    icon: <FaCheckCircle className="mr-1 text-[10px]" />
  }
};

const DEFAULT_STATUS_STYLE = {
  classes: 'bg-gray-100 text-gray-600',
  icon: null
};

const Projects = () => {
  return (
    <div className="bg-[#FAF7F0] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full text-amber-800 mb-4">
          <FaProjectDiagram className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2027] mb-4">
          Our Projects & Research
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Discover our ongoing field studies, academic initiatives, and data-driven projects focused on societal development in Nepal.
        </p>
      </div>

  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => {
        
          const statusStyle = STATUS_STYLES[project.status] || DEFAULT_STATUS_STYLE;

          return (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between p-6"
            >
              <div>
             
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-900">
                    {project.category}
                  </span>
                  <span
                    className={`inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full ${statusStyle.classes}`}
                  >
                    {statusStyle.icon}
                    {project.status}
                  </span>
                </div>
            
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
              </div>
            
              <div className="border-t border-gray-100 pt-4 mt-4 space-y-2 text-xs text-gray-500">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-amber-700 mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="font-semibold text-gray-700 bg-gray-50 p-2 rounded">
                  Key Milestone: {project.metrics}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;