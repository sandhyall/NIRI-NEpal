import React, { useState } from "react";
import {
  FaFlask,
  FaBookOpen,
  FaClipboardList,
  FaDatabase,
  FaChartBar,
  FaFileAlt,
  FaSearch,
  FaLightbulb,
  FaHandshake,
  FaCheckCircle,
  FaUserGraduate,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaUpload,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

/* ---------------------------------------------------------------------- */
/*  Static Content                                                        */
/* ---------------------------------------------------------------------- */

const whoCanApply = [
  "Undergraduate students",
  "Graduate students",
  "Recent graduates",
  "Students from relevant academic disciplines",
  "Individuals interested in research and evidence-based development",
];

const internshipAreas = [
  {
    icon: FaFlask,
    title: "Research Assistance",
    description:
      "Support researchers in ongoing research activities, project preparation, and related tasks.",
  },
  {
    icon: FaBookOpen,
    title: "Literature Review",
    description:
      "Assist in identifying, reviewing, organizing, and summarizing relevant academic and research literature.",
  },
  {
    icon: FaClipboardList,
    title: "Data Collection",
    description:
      "Support surveys, interviews, fieldwork, and other research data collection activities.",
  },
  {
    icon: FaDatabase,
    title: "Data Management",
    description:
      "Assist with organizing, documenting, and maintaining research data and project materials.",
  },
  {
    icon: FaChartBar,
    title: "Data Analysis",
    description:
      "Support data preparation, basic analysis, visualization, and interpretation under appropriate guidance.",
  },
  {
    icon: FaFileAlt,
    title: "Report & Documentation",
    description:
      "Assist in preparing research reports, presentations, documentation, and other project materials.",
  },
];

const internshipGains = [
  {
    icon: FaFlask,
    title: "Practical Research Experience",
    description:
      "Gain hands-on experience by participating in real research-related activities.",
  },
  {
    icon: FaLightbulb,
    title: "Professional Skills",
    description:
      "Develop communication, teamwork, analytical thinking, documentation, and time-management skills.",
  },
  {
    icon: FaSearch,
    title: "Research Exposure",
    description:
      "Learn how research projects are planned, conducted, documented, and communicated.",
  },
  {
    icon: FaHandshake,
    title: "Networking & Collaboration",
    description:
      "Build professional connections by working with researchers, professionals, and other interns.",
  },
];

const internshipProcess = [
  {
    number: "01",
    title: "Submit Application",
    text: "Complete the internship application with your academic background, interests, skills, and relevant experience.",
  },
  {
    number: "02",
    title: "Application Review",
    text: "The NIRI team reviews applications based on available opportunities and project requirements.",
  },
  {
    number: "03",
    title: "Interview / Discussion",
    text: "Shortlisted applicants may be contacted for an interview or further discussion.",
  },
  {
    number: "04",
    title: "Internship Placement",
    text: "Selected interns may be assigned to suitable research projects or activities based on their interests, skills, and NIRI's current needs.",
  },
];

const expectations = [
  "Professionalism and responsibility",
  "Commitment to assigned tasks",
  "Willingness to learn",
  "Good communication and teamwork",
  "Respect for research ethics",
  "Time management",
  "A positive and collaborative attitude",
];

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  university: "",
  program: "",
  academicLevel: "",
  fieldOfStudy: "",
  graduationYear: "",
  areaOfInterest: "",
  duration: "",
  availability: "",
  priorExperience: "",
  motivation: "",
  researchInterests: "",
  skillsContribution: "",
  cv: null,
  coverLetter: null,
};

/* ---------------------------------------------------------------------- */
/*  Reusable UI Components                                                */
/* ---------------------------------------------------------------------- */

function IconCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50/85 transition-colors duration-300 group-hover:bg-blue-600">
        <Icon className="h-6 w-6 text-blue-600 transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
      </div>
      <h3 className="mb-3 text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}

function ChecklistCard({ items }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
        >
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
            <FaCheckCircle className="h-4 w-4 text-blue-600" aria-hidden="true" />
          </div>
          <span className="text-sm font-semibold text-slate-800">{item}</span>
        </div>
      ))}
    </div>
  );
}

function FormField({ label, htmlFor, required, hint, children }) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-xs font-bold uppercase tracking-wider text-slate-700"
      >
        {label}
        {required && <span className="ml-1 text-blue-600">*</span>}
        {hint && <span className="ml-1 font-normal lowercase text-slate-400">({hint})</span>}
      </label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 px-4 text-sm text-slate-800 placeholder:text-slate-400 transition-all duration-200 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-600/10";

/* ---------------------------------------------------------------------- */
/*  Main Component                                                        */
/* ---------------------------------------------------------------------- */

export default function ResearchInternship({ onSubmitApplication }) {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    const value = e.target.type === "file" ? e.target.files?.[0] ?? null : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitApplication?.(form);
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-slate-900 px-6 py-28 text-center sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 backdrop-blur-md">
            <FaShieldAlt className="h-3.5 w-3.5" /> Internship Program
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Research Internship <span className="text-blue-500">at NIRI</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Gain practical research experience while contributing to meaningful research, innovation, and community initiatives in Nepal.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#internship-application"
              className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-700/30 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
            >
              Apply for Research Internship
              <FaArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        
        {/* ================= ABOUT SECTION ================= */}
        <section className="mx-auto max-w-3xl py-24 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">About the Internship</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Learn Through Research. Contribute Through Experience.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            NIRI offers opportunities for students and early-career individuals to gain practical exposure to research and project-related activities. Interns can develop their academic and professional skills while contributing to ongoing research, documentation, data collection, and organizational initiatives.
          </p>
        </section>

        {/* ================= WHO CAN APPLY ================= */}
        <section className="pb-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Eligibility</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Who Can Apply?</h2>
            <p className="mt-3 text-base text-slate-600">The Research Internship is suitable for:</p>
          </div>
          <ChecklistCard items={whoCanApply} />
        </section>

        {/* ================= AREAS OF INTERNSHIP ================= */}
        <section className="pb-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Focus Areas</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Areas of Internship</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {internshipAreas.map((area) => (
              <IconCard key={area.title} icon={area.icon} title={area.title} description={area.description} />
            ))}
          </div>
        </section>

        {/* ================= WHAT YOU WILL GAIN ================= */}
        <section className="pb-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Benefits</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">What Will You Gain?</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {internshipGains.map((gain) => (
              <IconCard key={gain.title} icon={gain.icon} title={gain.title} description={gain.description} />
            ))}
          </div>
        </section>

        {/* ================= INTERNSHIP PROCESS ================= */}
        <section className="pb-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Simple Process</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Internship Process</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {internshipProcess.map((step) => (
              <div key={step.number} className="relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                <span className="text-3xl font-black text-blue-600/30">{step.number}</span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= EXPECTATIONS ================= */}
        <section className="pb-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Our Expectations</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">What We Expect From Interns</h2>
            <p className="mt-3 text-base text-slate-600">We expect interns to demonstrate:</p>
          </div>
          <ChecklistCard items={expectations} />
        </section>

        {/* ================= APPLICATION FORM ================= */}
        <section id="internship-application" className="scroll-mt-12 pb-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Internship Application</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Interested in Joining NIRI as a Research Intern?</h2>
            <p className="mt-3 text-base text-slate-600">
              If you are interested in gaining practical research experience and contributing to meaningful initiatives, we invite you to submit your application.
            </p>
          </div>

          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-12">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 ring-8 ring-blue-50/50">
                  <FaCheckCircle className="h-10 w-10 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Application Submitted</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-slate-600">
                  Thank you for applying to NIRI's Research Internship Program. Our team will review your application and contact you if there is a suitable opportunity.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-10">
                
                {/* Personal Information */}
                <fieldset className="space-y-5">
                  <legend className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                    Personal Information
                  </legend>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField label="Full Name" htmlFor="fullName" required>
                      <div className="relative">
                        <FaUser className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={form.fullName}
                          onChange={handleChange("fullName")}
                          className={`${inputClasses} pl-11`}
                          placeholder="Your full name"
                        />
                      </div>
                    </FormField>

                    <FormField label="Email Address" htmlFor="email" required>
                      <div className="relative">
                        <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange("email")}
                          className={`${inputClasses} pl-11`}
                          placeholder="you@example.com"
                        />
                      </div>
                    </FormField>

                    <FormField label="Phone Number" htmlFor="phone" hint="optional">
                      <div className="relative">
                        <FaPhoneAlt className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange("phone")}
                          className={`${inputClasses} pl-11`}
                          placeholder="98XXXXXXXX"
                        />
                      </div>
                    </FormField>

                    <FormField label="Location" htmlFor="location" hint="optional">
                      <input
                        id="location"
                        type="text"
                        value={form.location}
                        onChange={handleChange("location")}
                        className={inputClasses}
                        placeholder="City, District"
                      />
                    </FormField>
                  </div>
                </fieldset>

                {/* Academic Information */}
                <fieldset className="space-y-5 pt-4">
                  <legend className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                    Academic Information
                  </legend>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField label="University / College" htmlFor="university" required>
                      <div className="relative">
                        <FaUserGraduate className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                        <input
                          id="university"
                          type="text"
                          required
                          value={form.university}
                          onChange={handleChange("university")}
                          className={`${inputClasses} pl-11`}
                          placeholder="Institution name"
                        />
                      </div>
                    </FormField>

                    <FormField label="Program / Degree" htmlFor="program" required>
                      <input
                        id="program"
                        type="text"
                        required
                        value={form.program}
                        onChange={handleChange("program")}
                        className={inputClasses}
                        placeholder="e.g. BSc Public Health"
                      />
                    </FormField>

                    <FormField label="Academic Level" htmlFor="academicLevel" required>
                      <select
                        id="academicLevel"
                        required
                        value={form.academicLevel}
                        onChange={handleChange("academicLevel")}
                        className={inputClasses}
                      >
                        <option value="">Select level</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Recent Graduate">Recent Graduate</option>
                        <option value="Other">Other</option>
                      </select>
                    </FormField>

                    <FormField label="Field of Study" htmlFor="fieldOfStudy" hint="optional">
                      <input
                        id="fieldOfStudy"
                        type="text"
                        value={form.fieldOfStudy}
                        onChange={handleChange("fieldOfStudy")}
                        className={inputClasses}
                        placeholder="e.g. Development Studies"
                      />
                    </FormField>

                    <FormField label="Expected Graduation Year" htmlFor="graduationYear" hint="optional">
                      <input
                        id="graduationYear"
                        type="text"
                        value={form.graduationYear}
                        onChange={handleChange("graduationYear")}
                        className={inputClasses}
                        placeholder="e.g. 2027"
                      />
                    </FormField>
                  </div>
                </fieldset>

                {/* Internship Preferences */}
                <fieldset className="space-y-5 pt-4">
                  <legend className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                    Internship Preferences
                  </legend>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField label="Area of Interest" htmlFor="areaOfInterest" required>
                      <select
                        id="areaOfInterest"
                        required
                        value={form.areaOfInterest}
                        onChange={handleChange("areaOfInterest")}
                        className={inputClasses}
                      >
                        <option value="">Select an area</option>
                        {internshipAreas.map((area) => (
                          <option key={area.title} value={area.title}>
                            {area.title}
                          </option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label="Preferred Internship Duration" htmlFor="duration" hint="optional">
                      <select
                        id="duration"
                        value={form.duration}
                        onChange={handleChange("duration")}
                        className={inputClasses}
                      >
                        <option value="">Select duration</option>
                        <option value="1 month">1 month</option>
                        <option value="3 months">3 months</option>
                        <option value="6 months">6 months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </FormField>

                    <FormField label="Availability" htmlFor="availability" hint="optional">
                      <select
                        id="availability"
                        value={form.availability}
                        onChange={handleChange("availability")}
                        className={inputClasses}
                      >
                        <option value="">Select availability</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </FormField>

                    <FormField label="Previous Research Experience" htmlFor="priorExperience" hint="optional">
                      <input
                        id="priorExperience"
                        type="text"
                        value={form.priorExperience}
                        onChange={handleChange("priorExperience")}
                        className={inputClasses}
                        placeholder="Briefly describe, if any"
                      />
                    </FormField>
                  </div>
                </fieldset>

                {/* Motivation & Background */}
                <fieldset className="space-y-5 pt-4">
                  <legend className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                    Motivation & Details
                  </legend>
                  <div className="space-y-5">
                    <FormField label="Why are you interested in an internship at NIRI?" htmlFor="motivation" required>
                      <textarea
                        id="motivation"
                        required
                        rows={4}
                        value={form.motivation}
                        onChange={handleChange("motivation")}
                        className={`${inputClasses} resize-none`}
                        placeholder="Share your motivation for applying"
                      />
                    </FormField>

                    <FormField label="What research areas are you interested in?" htmlFor="researchInterests" hint="optional">
                      <textarea
                        id="researchInterests"
                        rows={3}
                        value={form.researchInterests}
                        onChange={handleChange("researchInterests")}
                        className={`${inputClasses} resize-none`}
                        placeholder="e.g. public health, education, governance"
                      />
                    </FormField>

                    <FormField label="What skills can you contribute?" htmlFor="skillsContribution" hint="optional">
                      <textarea
                        id="skillsContribution"
                        rows={3}
                        value={form.skillsContribution}
                        onChange={handleChange("skillsContribution")}
                        className={`${inputClasses} resize-none`}
                        placeholder="e.g. data analysis, writing, design"
                      />
                    </FormField>
                  </div>
                </fieldset>

                {/* Documents */}
                <fieldset className="space-y-5 pt-4">
                  <legend className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                    Supporting Documents
                  </legend>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField label="CV / Resume" htmlFor="cv" hint="optional">
                      <label
                        htmlFor="cv"
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border border-dashed px-4 py-3.5 text-sm transition-all duration-200 ${
                          form.cv
                            ? "border-blue-600 bg-blue-50/50 font-medium text-blue-900"
                            : "border-slate-300 bg-slate-50/50 text-slate-500 hover:border-blue-400 hover:text-slate-700"
                        }`}
                      >
                        <FaUpload className={`h-4 w-4 ${form.cv ? "text-blue-600" : "text-slate-400"}`} aria-hidden="true" />
                        <span className="truncate">{form.cv ? form.cv.name : "Upload CV / Resume"}</span>
                      </label>
                      <input id="cv" type="file" accept=".pdf,.doc,.docx" onChange={handleChange("cv")} className="hidden" />
                    </FormField>

                    <FormField label="Cover Letter" htmlFor="coverLetter" hint="optional">
                      <label
                        htmlFor="coverLetter"
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border border-dashed px-4 py-3.5 text-sm transition-all duration-200 ${
                          form.coverLetter
                            ? "border-blue-600 bg-blue-50/50 font-medium text-blue-900"
                            : "border-slate-300 bg-slate-50/50 text-slate-500 hover:border-blue-400 hover:text-slate-700"
                        }`}
                      >
                        <FaUpload className={`h-4 w-4 ${form.coverLetter ? "text-blue-600" : "text-slate-400"}`} aria-hidden="true" />
                        <span className="truncate">{form.coverLetter ? form.coverLetter.name : "Upload Cover Letter"}</span>
                      </label>
                      <input id="coverLetter" type="file" accept=".pdf,.doc,.docx" onChange={handleChange("coverLetter")} className="hidden" />
                    </FormField>
                  </div>
                </fieldset>

                <div className="pt-4 flex justify-center">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:bg-slate-800 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-slate-900/20 sm:w-auto"
                  >
                    <FaPaperPlane className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                    Submit Internship Application
                  </button>
                </div>
              </form>
            )}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-slate-400">
            Internship opportunities are subject to availability and the requirements of NIRI's ongoing research projects and programs. Submission of an application does not guarantee internship placement.
          </p>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="pb-20">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 opacity-90" />
            <div className="relative z-10 mx-auto max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Interested in Research?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Learn, contribute, and grow through practical research experience at NIRI.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="#internship-application"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-sm transition-all duration-300 hover:bg-blue-50 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                >
                  Apply for Research Internship
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}