// // import React from "react";
// // import {
// //   FaFlask,
// //   FaDatabase,
// //   FaPenNib,
// //   FaCalendarAlt,
// //   FaUsers,
// //   FaLaptopCode,
// //   FaArrowRight,
// //   FaHandsHelping,
// //   FaGraduationCap,
// //   FaLightbulb,
// //   FaHandshake,
// //   FaCheckCircle,
// //   FaUserCheck,
// // } from "react-icons/fa";

// // const opportunities = [
// //   {
// //     icon: FaFlask,
// //     title: "Research Support",
// //     description:
// //       "Work alongside NIRI's research teams on active studies, from early-stage literature reviews to field research design. Volunteers help conduct surveys, assist with interviews and focus groups, and support the analysis that feeds into NIRI's published research and policy work.",
// //   },
// //   {
// //     icon: FaDatabase,
// //     title: "Data & Documentation",
// //     description:
// //       "Help keep research accurate and organized by supporting data collection and entry, cleaning datasets, and maintaining consistent records. Volunteers also assist with archiving research materials and preparing documentation that other teams and partners rely on.",
// //   },
// //   {
// //     icon: FaPenNib,
// //     title: "Communication & Content",
// //     description:
// //       "Shape how NIRI's work reaches the public by contributing to articles, reports, and awareness materials in plain, accessible language. This includes writing and editing content, drafting social media posts, and supporting outreach campaigns that share research findings with wider audiences.",
// //   },
// //   {
// //     icon: FaCalendarAlt,
// //     title: "Events & Programs",
// //     description:
// //       "Help bring NIRI's programs to life by supporting the planning and on-the-ground running of workshops, seminars, and training sessions. Responsibilities can include coordinating logistics, registering participants, and assisting speakers and facilitators throughout the event.",
// //   },
// //   {
// //     icon: FaUsers,
// //     title: "Community Engagement",
// //     description:
// //       "Build direct connections between NIRI and the communities it works with by taking part in outreach visits, awareness sessions, and local initiatives. Volunteers help gather community feedback and support stakeholder engagement that shapes how projects are designed and delivered.",
// //   },
// //   {
// //     icon: FaLaptopCode,
// //     title: "Technology & Creative Support",
// //     description:
// //       "Lend practical technical and creative skills to NIRI's day-to-day work, from maintaining and updating the website to designing graphics for reports and campaigns. Volunteers with backgrounds in photography, video, or general documentation are also welcome to contribute.",
// //   },
// // ];

// // const volunteerBenefits = [
// //   {
// //     icon: FaGraduationCap,
// //     title: "Practical Experience",
// //     description:
// //       "Move beyond theory by working directly on live research projects, community programs, and events, gaining hands-on exposure to how a research organization operates day to day.",
// //   },
// //   {
// //     icon: FaLightbulb,
// //     title: "Learn & Develop",
// //     description:
// //       "Sharpen research, writing, data, and communication skills under the guidance of experienced staff, while also building teamwork, coordination, and leadership abilities along the way.",
// //   },
// //   {
// //     icon: FaHandshake,
// //     title: "Build Connections",
// //     description:
// //       "Work alongside researchers, academics, and fellow volunteers, and engage directly with community members and stakeholders, building relationships that can support your future studies or career.",
// //   },
// //   {
// //     icon: FaUserCheck,
// //     title: "Make an Impact",
// //     description:
// //       "See how your time and skills translate into tangible outcomes, whether that's a completed dataset, a published report, or a community program that reaches the people who need it most.",
// //   },
// // ];

// // function VolunteerCard({ icon: Icon, title, description, onLearnMore }) {
// //   return (
// //     <div
// //       role="button"
// //       tabIndex={0}
// //       onClick={onLearnMore}
// //       onKeyDown={(e) => {
// //         if (e.key === "Enter" || e.key === " ") {
// //           e.preventDefault();
// //           onLearnMore?.();
// //         }
// //       }}
// //       className="group flex h-full cursor-pointer flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
// //     >
// //       <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 ring-1 ring-amber-100">
// //         <Icon
// //           className="h-6 w-6 text-amber-500"
// //           aria-hidden="true"
// //         />
// //       </div>

// //       <h3 className="mb-3 text-lg font-semibold text-slate-900">
// //         {title}
// //       </h3>

// //       <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500">
// //         {description}
// //       </p>

// //       <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-colors duration-300 group-hover:text-amber-600">
// //         Learn More
// //         <FaArrowRight
// //           className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
// //           aria-hidden="true"
// //         />
// //       </span>
// //     </div>
// //   );
// // }

// // function InfoCard({ icon: Icon, title, description }) {
// //   return (
// //     <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
// //       <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
// //         <Icon className="h-5 w-5 text-amber-500" aria-hidden="true" />
// //       </div>

// //       <h3 className="mb-2 text-base font-semibold text-[#0B1F3A]">
// //         {title}
// //       </h3>

// //       <p className="text-sm leading-relaxed text-slate-500">
// //         {description}
// //       </p>
// //     </div>
// //   );
// // }

// // export default function VolunteerOpportunities({
// //   onApply,
// //   onLearnMore,
// // }) {
// //   return (
// //     <section
// //       id="volunteer"
// //       aria-labelledby="volunteer-heading"
// //       className="bg-slate-50 px-6 py-20 sm:px-10 lg:px-16"
// //     >
// //       <div className="mx-auto max-w-6xl">

// //         {/* ================= HEADER ================= */}
// //         <div className="mx-auto mb-14 max-w-2xl text-center">
// //           <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
// //             Volunteer With NIRI
// //           </span>

// //           <h2
// //             id="volunteer-heading"
// //             className="mt-3 text-3xl font-bold text-[#0B1F3A] sm:text-4xl"
// //           >
// //             How Can You Contribute?
// //           </h2>

// //           <p className="mt-4 text-base leading-relaxed text-slate-500">
// //             Share your time, skills, and ideas to support meaningful
// //             research and community initiatives in Nepal.
// //           </p>
// //         </div>

// //         {/* ================= OPPORTUNITIES ================= */}
// //         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
// //           {opportunities.map((opportunity) => (
// //             <VolunteerCard
// //               key={opportunity.title}
// //               icon={opportunity.icon}
// //               title={opportunity.title}
// //               description={opportunity.description}
// //               onLearnMore={() =>
// //                 onLearnMore?.(opportunity.title)
// //               }
// //             />
// //           ))}
// //         </div>

// //         {/* ================= WHY VOLUNTEER ================= */}
// //         <div className="mt-24">
// //           <div className="mx-auto mb-12 max-w-2xl text-center">
// //             <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
// //               Why Volunteer?
// //             </span>

// //             <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A]">
// //               Grow While Making a Difference
// //             </h2>

// //             <p className="mt-4 text-base leading-relaxed text-slate-500">
// //               Volunteering provides an opportunity to contribute to
// //               meaningful initiatives while developing valuable personal
// //               and professional skills.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
// //             {volunteerBenefits.map((benefit) => (
// //               <InfoCard
// //                 key={benefit.title}
// //                 icon={benefit.icon}
// //                 title={benefit.title}
// //                 description={benefit.description}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* ================= WHO CAN VOLUNTEER ================= */}
// //         <div className="mt-24 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

// //           <div>
// //             <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
// //               Who Can Volunteer?
// //             </span>

// //             <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A]">
// //               Everyone Can Contribute
// //             </h2>

// //             <p className="mt-5 leading-relaxed text-slate-500">
// //               NIRI welcomes individuals who are interested in
// //               research, innovation, community engagement, and
// //               contributing to positive change.
// //             </p>
// //           </div>

// //           <div className="space-y-4">
// //             {[
// //               "Students and recent graduates",
// //               "Researchers and academics",
// //               "Professionals with relevant skills",
// //               "Community members and volunteers",
// //             ].map((item) => (
// //               <div
// //                 key={item}
// //                 className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
// //               >
// //                 <FaCheckCircle
// //                   className="h-5 w-5 flex-shrink-0 text-amber-500"
// //                   aria-hidden="true"
// //                 />

// //                 <span className="text-sm font-medium text-slate-700">
// //                   {item}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* ================= HOW IT WORKS ================= */}
// //         <div className="mt-24">
// //           <div className="mx-auto mb-12 max-w-2xl text-center">
// //             <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
// //               Simple Process
// //             </span>

// //             <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A]">
// //               How It Works
// //             </h2>
// //           </div>

// //           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
// //             {[
// //               {
// //                 number: "01",
// //                 title: "Apply",
// //                 text: "Submit your volunteer application and share your interests and skills.",
// //               },
// //               {
// //                 number: "02",
// //                 title: "Review",
// //                 text: "The NIRI team reviews applications based on current opportunities.",
// //               },
// //               {
// //                 number: "03",
// //                 title: "Connect",
// //                 text: "Shortlisted applicants are contacted for further discussion.",
// //               },
// //               {
// //                 number: "04",
// //                 title: "Contribute",
// //                 text: "Selected volunteers support relevant projects and activities.",
// //               },
// //             ].map((step) => (
// //               <div
// //                 key={step.number}
// //                 className="relative rounded-xl border border-slate-200 bg-white p-7 shadow-sm"
// //               >
// //                 <span className="text-3xl font-bold text-amber-500">
// //                   {step.number}
// //                 </span>

// //                 <h3 className="mt-4 text-lg font-semibold text-[#0B1F3A]">
// //                   {step.title}
// //                 </h3>

// //                 <p className="mt-2 text-sm leading-relaxed text-slate-500">
// //                   {step.text}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* ================= APPLY CTA ================= */}
// //         <div className="mt-20 rounded-2xl bg-[#0B1F3A] px-6 py-12 text-center sm:px-12">
// //           <FaHandsHelping className="mx-auto h-8 w-8 text-amber-400" />

// //           <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
// //             Ready to Make a Difference?
// //           </h2>

// //           <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
// //             Share your skills, ideas, and time with NIRI and contribute
// //             to meaningful research and community initiatives.
// //           </p>

// //           <div className="mt-7 flex justify-center">
// //             <button
// //               type="button"
// //               onClick={onApply}
// //               className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-[#0B1F3A] shadow-sm transition-all duration-300 hover:bg-amber-50 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 sm:w-auto"
// //             >
// //               <FaHandsHelping className="h-4 w-4 text-amber-500" />
// //               Apply as a Volunteer
// //             </button>
// //           </div>
// //         </div>

// //         {/* ================= NOTE ================= */}
// //         <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-slate-400">
// //           Volunteer opportunities may vary depending on NIRI's ongoing
// //           projects, programs, and organizational needs.
// //         </p>

// //       </div>
// //     </section>
// //   );
// // }

// import React, { useState } from "react";
// import {
//   FaFlask,
//   FaDatabase,
//   FaPenNib,
//   FaCalendarAlt,
//   FaUsers,
//   FaLaptopCode,
//   FaArrowRight,
//   FaHandsHelping,
//   FaGraduationCap,
//   FaLightbulb,
//   FaHandshake,
//   FaCheckCircle,
//   FaUserCheck,
//   FaTimes,
//   FaUser,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaPaperPlane,
// } from "react-icons/fa";

// const opportunities = [
//   {
//     icon: FaFlask,
//     title: "Research Support",
//     description:
//       "Work alongside NIRI's research teams on active studies, from early-stage literature reviews to field research design. Volunteers help conduct surveys, assist with interviews and focus groups, and support the analysis that feeds into NIRI's published research and policy work.",
//   },
//   {
//     icon: FaDatabase,
//     title: "Data & Documentation",
//     description:
//       "Help keep research accurate and organized by supporting data collection and entry, cleaning datasets, and maintaining consistent records. Volunteers also assist with archiving research materials and preparing documentation that other teams and partners rely on.",
//   },
//   {
//     icon: FaPenNib,
//     title: "Communication & Content",
//     description:
//       "Shape how NIRI's work reaches the public by contributing to articles, reports, and awareness materials in plain, accessible language. This includes writing and editing content, drafting social media posts, and supporting outreach campaigns that share research findings with wider audiences.",
//   },
//   {
//     icon: FaCalendarAlt,
//     title: "Events & Programs",
//     description:
//       "Help bring NIRI's programs to life by supporting the planning and on-the-ground running of workshops, seminars, and training sessions. Responsibilities can include coordinating logistics, registering participants, and assisting speakers and facilitators throughout the event.",
//   },
//   {
//     icon: FaUsers,
//     title: "Community Engagement",
//     description:
//       "Build direct connections between NIRI and the communities it works with by taking part in outreach visits, awareness sessions, and local initiatives. Volunteers help gather community feedback and support stakeholder engagement that shapes how projects are designed and delivered.",
//   },
//   {
//     icon: FaLaptopCode,
//     title: "Technology & Creative Support",
//     description:
//       "Lend practical technical and creative skills to NIRI's day-to-day work, from maintaining and updating the website to designing graphics for reports and campaigns. Volunteers with backgrounds in photography, video, or general documentation are also welcome to contribute.",
//   },
// ];

// const volunteerBenefits = [
//   {
//     icon: FaGraduationCap,
//     title: "Practical Experience",
//     description:
//       "Move beyond theory by working directly on live research projects, community programs, and events, gaining hands-on exposure to how a research organization operates day to day.",
//   },
//   {
//     icon: FaLightbulb,
//     title: "Learn & Develop",
//     description:
//       "Sharpen research, writing, data, and communication skills under the guidance of experienced staff, while also building teamwork, coordination, and leadership abilities along the way.",
//   },
//   {
//     icon: FaHandshake,
//     title: "Build Connections",
//     description:
//       "Work alongside researchers, academics, and fellow volunteers, and engage directly with community members and stakeholders, building relationships that can support your future studies or career.",
//   },
//   {
//     icon: FaUserCheck,
//     title: "Make an Impact",
//     description:
//       "See how your time and skills translate into tangible outcomes, whether that's a completed dataset, a published report, or a community program that reaches the people who need it most.",
//   },
// ];

// function VolunteerCard({ icon: Icon, title, description, onLearnMore }) {
//   return (
//     <div
//       role="button"
//       tabIndex={0}
//       onClick={onLearnMore}
//       onKeyDown={(e) => {
//         if (e.key === "Enter" || e.key === " ") {
//           e.preventDefault();
//           onLearnMore?.();
//         }
//       }}
//       className="group flex h-full cursor-pointer flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
//     >
//       <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 ring-1 ring-amber-100">
//         <Icon
//           className="h-6 w-6 text-amber-500"
//           aria-hidden="true"
//         />
//       </div>

//       <h3 className="mb-3 text-lg font-semibold text-slate-900">
//         {title}
//       </h3>

//       <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500">
//         {description}
//       </p>

//       <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-colors duration-300 group-hover:text-amber-600">
//         Learn More
//         <FaArrowRight
//           className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
//           aria-hidden="true"
//         />
//       </span>
//     </div>
//   );
// }

// function InfoCard({ icon: Icon, title, description }) {
//   return (
//     <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
//       <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
//         <Icon className="h-5 w-5 text-amber-500" aria-hidden="true" />
//       </div>

//       <h3 className="mb-2 text-base font-semibold text-[#0B1F3A]">
//         {title}
//       </h3>

//       <p className="text-sm leading-relaxed text-slate-500">
//         {description}
//       </p>
//     </div>
//   );
// }

// const initialFormState = {
//   name: "",
//   email: "",
//   phone: "",
//   interest: "",
//   availability: "",
//   message: "",
// };

// /**
//  * VolunteerApplyModal
//  * A focused, professional application form presented in a modal dialog.
//  */
// function VolunteerApplyModal({ isOpen, onClose, onSubmit }) {
//   const [form, setForm] = useState(initialFormState);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   if (!isOpen) return null;

//   const handleChange = (field) => (e) => {
//     setForm((prev) => ({ ...prev, [field]: e.target.value }));
//     setErrors((prev) => ({ ...prev, [field]: undefined }));
//   };

//   const validate = () => {
//     const nextErrors = {};
//     if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
//     if (!form.email.trim()) {
//       nextErrors.email = "Please enter your email address.";
//     } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
//       nextErrors.email = "Please enter a valid email address.";
//     }
//     if (!form.interest) nextErrors.interest = "Please select an area of interest.";
//     return nextErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const nextErrors = validate();
//     if (Object.keys(nextErrors).length > 0) {
//       setErrors(nextErrors);
//       return;
//     }
//     onSubmit?.(form);
//     setSubmitted(true);
//   };

//   const handleClose = () => {
//     onClose?.();
//     // Reset after the close animation/tick so content doesn't flash while closing.
//     setTimeout(() => {
//       setForm(initialFormState);
//       setErrors({});
//       setSubmitted(false);
//     }, 200);
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 py-8"
//       onClick={handleClose}
//     >
//       <div
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="apply-modal-heading"
//         onClick={(e) => e.stopPropagation()}
//         className="max-h-full w-full max-w-lg overflow-y-auto rounded-xl bg-white shadow-xl"
//       >
//         {/* Header */}
//         <div className="flex items-start justify-between border-b border-slate-100 px-7 py-6">
//           <div>
//             <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
//               Volunteer Application
//             </span>
//             <h3
//               id="apply-modal-heading"
//               className="mt-1 text-xl font-bold text-[#0B1F3A]"
//             >
//               Apply as a Volunteer
//             </h3>
//           </div>
//           <button
//             type="button"
//             onClick={handleClose}
//             aria-label="Close application form"
//             className="rounded-md p-1.5 text-slate-400 transition-colors duration-200 hover:bg-slate-50 hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
//           >
//             <FaTimes className="h-4 w-4" aria-hidden="true" />
//           </button>
//         </div>

//         {submitted ? (
//           // Success state
//           <div className="flex flex-col items-center px-7 py-12 text-center">
//             <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 ring-1 ring-amber-100">
//               <FaCheckCircle className="h-6 w-6 text-amber-500" aria-hidden="true" />
//             </div>
//             <h4 className="text-lg font-semibold text-[#0B1F3A]">
//               Application Received
//             </h4>
//             <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
//               Thank you for your interest in volunteering with NIRI. Our team
//               will review your application and reach out if there is a
//               suitable match.
//             </p>
//             <button
//               type="button"
//               onClick={handleClose}
//               className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#0B1F3A] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#132a4d] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
//             >
//               Close
//             </button>
//           </div>
//         ) : (
//           // Form state
//           <form onSubmit={handleSubmit} noValidate className="px-7 py-6">
//             <p className="mb-6 text-sm leading-relaxed text-slate-500">
//               Tell us a little about yourself and where you would like to
//               contribute. We will get back to you within a few business days.
//             </p>

//             <div className="space-y-5">
//               {/* Full name */}
//               <div>
//                 <label
//                   htmlFor="volunteer-name"
//                   className="mb-1.5 block text-sm font-medium text-slate-700"
//                 >
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <FaUser
//                     className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
//                     aria-hidden="true"
//                   />
//                   <input
//                     id="volunteer-name"
//                     type="text"
//                     value={form.name}
//                     onChange={handleChange("name")}
//                     aria-invalid={Boolean(errors.name)}
//                     aria-describedby={errors.name ? "volunteer-name-error" : undefined}
//                     className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
//                     placeholder="Your full name"
//                   />
//                 </div>
//                 {errors.name && (
//                   <p id="volunteer-name-error" className="mt-1.5 text-xs text-red-500">
//                     {errors.name}
//                   </p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <label
//                   htmlFor="volunteer-email"
//                   className="mb-1.5 block text-sm font-medium text-slate-700"
//                 >
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <FaEnvelope
//                     className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
//                     aria-hidden="true"
//                   />
//                   <input
//                     id="volunteer-email"
//                     type="email"
//                     value={form.email}
//                     onChange={handleChange("email")}
//                     aria-invalid={Boolean(errors.email)}
//                     aria-describedby={errors.email ? "volunteer-email-error" : undefined}
//                     className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
//                     placeholder="you@example.com"
//                   />
//                 </div>
//                 {errors.email && (
//                   <p id="volunteer-email-error" className="mt-1.5 text-xs text-red-500">
//                     {errors.email}
//                   </p>
//                 )}
//               </div>

//               {/* Phone */}
//               <div>
//                 <label
//                   htmlFor="volunteer-phone"
//                   className="mb-1.5 block text-sm font-medium text-slate-700"
//                 >
//                   Phone Number{" "}
//                   <span className="font-normal text-slate-400">(optional)</span>
//                 </label>
//                 <div className="relative">
//                   <FaPhoneAlt
//                     className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
//                     aria-hidden="true"
//                   />
//                   <input
//                     id="volunteer-phone"
//                     type="tel"
//                     value={form.phone}
//                     onChange={handleChange("phone")}
//                     className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
//                     placeholder="98XXXXXXXX"
//                   />
//                 </div>
//               </div>

//               {/* Area of interest */}
//               <div>
//                 <label
//                   htmlFor="volunteer-interest"
//                   className="mb-1.5 block text-sm font-medium text-slate-700"
//                 >
//                   Area of Interest
//                 </label>
//                 <select
//                   id="volunteer-interest"
//                   value={form.interest}
//                   onChange={handleChange("interest")}
//                   aria-invalid={Boolean(errors.interest)}
//                   aria-describedby={errors.interest ? "volunteer-interest-error" : undefined}
//                   className="w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-sm text-slate-800 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
//                 >
//                   <option value="">Select an area</option>
//                   {opportunities.map((opportunity) => (
//                     <option key={opportunity.title} value={opportunity.title}>
//                       {opportunity.title}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.interest && (
//                   <p id="volunteer-interest-error" className="mt-1.5 text-xs text-red-500">
//                     {errors.interest}
//                   </p>
//                 )}
//               </div>

//               {/* Availability */}
//               <div>
//                 <label
//                   htmlFor="volunteer-availability"
//                   className="mb-1.5 block text-sm font-medium text-slate-700"
//                 >
//                   Availability{" "}
//                   <span className="font-normal text-slate-400">(optional)</span>
//                 </label>
//                 <select
//                   id="volunteer-availability"
//                   value={form.availability}
//                   onChange={handleChange("availability")}
//                   className="w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-sm text-slate-800 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
//                 >
//                   <option value="">Select availability</option>
//                   <option value="Weekdays">Weekdays</option>
//                   <option value="Weekends">Weekends</option>
//                   <option value="Flexible">Flexible</option>
//                 </select>
//               </div>

//               {/* Message */}
//               <div>
//                 <label
//                   htmlFor="volunteer-message"
//                   className="mb-1.5 block text-sm font-medium text-slate-700"
//                 >
//                   Why do you want to volunteer with NIRI?{" "}
//                   <span className="font-normal text-slate-400">(optional)</span>
//                 </label>
//                 <textarea
//                   id="volunteer-message"
//                   rows={4}
//                   value={form.message}
//                   onChange={handleChange("message")}
//                   className="w-full resize-none rounded-lg border border-slate-200 py-2.5 px-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
//                   placeholder="Share a little about your background, skills, or motivation"
//                 />
//               </div>
//             </div>

//             <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
//               <button
//                 type="button"
//                 onClick={handleClose}
//                 className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0B1F3A] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-[#132a4d] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
//               >
//                 <FaPaperPlane className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
//                 Submit Application
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default function VolunteerOpportunities({
//   onApply,
//   onLearnMore,
// }) {
//   const [isApplyOpen, setIsApplyOpen] = useState(false);
//   return (
//     <section
//       id="volunteer"
//       aria-labelledby="volunteer-heading"
//       className="bg-slate-50 px-6 py-20 sm:px-10 lg:px-16"
//     >
//       <div className="mx-auto max-w-6xl">

//         {/* ================= HEADER ================= */}
//         <div className="mx-auto mb-14 max-w-2xl text-center">
//           <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
//             Volunteer With NIRI
//           </span>

//           <h2
//             id="volunteer-heading"
//             className="mt-3 text-3xl font-bold text-[#0B1F3A] sm:text-4xl"
//           >
//             How Can You Contribute?
//           </h2>

//           <p className="mt-4 text-base leading-relaxed text-slate-500">
//             Share your time, skills, and ideas to support meaningful
//             research and community initiatives in Nepal.
//           </p>
//         </div>

//         {/* ================= OPPORTUNITIES ================= */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {opportunities.map((opportunity) => (
//             <VolunteerCard
//               key={opportunity.title}
//               icon={opportunity.icon}
//               title={opportunity.title}
//               description={opportunity.description}
//               onLearnMore={() =>
//                 onLearnMore?.(opportunity.title)
//               }
//             />
//           ))}
//         </div>

//         {/* ================= WHY VOLUNTEER ================= */}
//         <div className="mt-24">
//           <div className="mx-auto mb-12 max-w-2xl text-center">
//             <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
//               Why Volunteer?
//             </span>

//             <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A]">
//               Grow While Making a Difference
//             </h2>

//             <p className="mt-4 text-base leading-relaxed text-slate-500">
//               Volunteering provides an opportunity to contribute to
//               meaningful initiatives while developing valuable personal
//               and professional skills.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {volunteerBenefits.map((benefit) => (
//               <InfoCard
//                 key={benefit.title}
//                 icon={benefit.icon}
//                 title={benefit.title}
//                 description={benefit.description}
//               />
//             ))}
//           </div>
//         </div>

//         {/* ================= WHO CAN VOLUNTEER ================= */}
//         <div className="mt-24 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

//           <div>
//             <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
//               Who Can Volunteer?
//             </span>

//             <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A]">
//               Everyone Can Contribute
//             </h2>

//             <p className="mt-5 leading-relaxed text-slate-500">
//               NIRI welcomes individuals who are interested in
//               research, innovation, community engagement, and
//               contributing to positive change.
//             </p>
//           </div>

//           <div className="space-y-4">
//             {[
//               "Students and recent graduates",
//               "Researchers and academics",
//               "Professionals with relevant skills",
//               "Community members and volunteers",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
//               >
//                 <FaCheckCircle
//                   className="h-5 w-5 flex-shrink-0 text-amber-500"
//                   aria-hidden="true"
//                 />

//                 <span className="text-sm font-medium text-slate-700">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-24">
//           <div className="mx-auto mb-12 max-w-2xl text-center">
//             <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
//               Simple Process
//             </span>

//             <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A]">
//               How It Works
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               {
//                 number: "01",
//                 title: "Apply",
//                 text: "Submit your volunteer application and share your interests and skills.",
//               },
//               {
//                 number: "02",
//                 title: "Review",
//                 text: "The NIRI team reviews applications based on current opportunities.",
//               },
//               {
//                 number: "03",
//                 title: "Connect",
//                 text: "Shortlisted applicants are contacted for further discussion.",
//               },
//               {
//                 number: "04",
//                 title: "Contribute",
//                 text: "Selected volunteers support relevant projects and activities.",
//               },
//             ].map((step) => (
//               <div
//                 key={step.number}
//                 className="relative rounded-xl border border-slate-200 bg-white p-7 shadow-sm"
//               >
//                 <span className="text-3xl font-bold text-amber-500">
//                   {step.number}
//                 </span>

//                 <h3 className="mt-4 text-lg font-semibold text-[#0B1F3A]">
//                   {step.title}
//                 </h3>

//                 <p className="mt-2 text-sm leading-relaxed text-slate-500">
//                   {step.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

     
//         <div className="mt-20 rounded-2xl bg-[#0B1F3A] px-6 py-12 text-center sm:px-12">
//           <FaHandsHelping className="mx-auto h-8 w-8 text-amber-400" />

//           <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
//             Ready to Make a Difference?
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
//             Share your skills, ideas, and time with NIRI and contribute
//             to meaningful research and community initiatives.
//           </p>

//           <div className="mt-7 flex justify-center">
//             <button
//               type="button"
//               onClick={() => setIsApplyOpen(true)}
//               className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-[#0B1F3A] shadow-sm transition-all duration-300 hover:bg-amber-50 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 sm:w-auto"
//             >
//               <FaHandsHelping className="h-4 w-4 text-amber-500" />
//               Apply as a Volunteer
//             </button>
//           </div>
//         </div>

     
//         <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-slate-400">
//           Volunteer opportunities may vary depending on NIRI's ongoing
//           projects, programs, and organizational needs.
//         </p>

//       </div>

//       <VolunteerApplyModal
//         isOpen={isApplyOpen}
//         onClose={() => setIsApplyOpen(false)}
//         onSubmit={(formData) => onApply?.(formData)}
//       />
//     </section>
//   );
// }

import React, { useState } from "react";
import {
  FaFlask,
  FaDatabase,
  FaPenNib,
  FaCalendarAlt,
  FaUsers,
  FaLaptopCode,
  FaArrowRight,
  FaHandsHelping,
  FaGraduationCap,
  FaLightbulb,
  FaHandshake,
  FaCheckCircle,
  FaUserCheck,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

const opportunities = [
  {
    icon: FaFlask,
    title: "Research Support",
    description:
      "Work alongside NIRI's research teams on active studies, from early-stage literature reviews to field research design. Volunteers help conduct surveys, assist with interviews and focus groups, and support the analysis that feeds into NIRI's published research and policy work.",
  },
  {
    icon: FaDatabase,
    title: "Data & Documentation",
    description:
      "Help keep research accurate and organized by supporting data collection and entry, cleaning datasets, and maintaining consistent records. Volunteers also assist with archiving research materials and preparing documentation that other teams and partners rely on.",
  },
  {
    icon: FaPenNib,
    title: "Communication & Content",
    description:
      "Shape how NIRI's work reaches the public by contributing to articles, reports, and awareness materials in plain, accessible language. This includes writing and editing content, drafting social media posts, and supporting outreach campaigns that share research findings with wider audiences.",
  },
  {
    icon: FaCalendarAlt,
    title: "Events & Programs",
    description:
      "Help bring NIRI's programs to life by supporting the planning and on-the-ground running of workshops, seminars, and training sessions. Responsibilities can include coordinating logistics, registering participants, and assisting speakers and facilitators throughout the event.",
  },
  {
    icon: FaUsers,
    title: "Community Engagement",
    description:
      "Build direct connections between NIRI and the communities it works with by taking part in outreach visits, awareness sessions, and local initiatives. Volunteers help gather community feedback and support stakeholder engagement that shapes how projects are designed and delivered.",
  },
  {
    icon: FaLaptopCode,
    title: "Technology & Creative Support",
    description:
      "Lend practical technical and creative skills to NIRI's day-to-day work, from maintaining and updating the website to designing graphics for reports and campaigns. Volunteers with backgrounds in photography, video, or general documentation are also welcome to contribute.",
  },
];

const volunteerBenefits = [
  {
    icon: FaGraduationCap,
    title: "Practical Experience",
    description:
      "Move beyond theory by working directly on live research projects, community programs, and events, gaining hands-on exposure to how a research organization operates day to day.",
  },
  {
    icon: FaLightbulb,
    title: "Learn & Develop",
    description:
      "Sharpen research, writing, data, and communication skills under the guidance of experienced staff, while also building teamwork, coordination, and leadership abilities along the way.",
  },
  {
    icon: FaHandshake,
    title: "Build Connections",
    description:
      "Work alongside researchers, academics, and fellow volunteers, and engage directly with community members and stakeholders, building relationships that can support your future studies or career.",
  },
  {
    icon: FaUserCheck,
    title: "Make an Impact",
    description:
      "See how your time and skills translate into tangible outcomes, whether that's a completed dataset, a published report, or a community program that reaches the people who need it most.",
  },
];

function VolunteerCard({ icon: Icon, title, description, onLearnMore }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onLearnMore}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onLearnMore?.();
        }
      }}
      className="group flex h-full cursor-pointer flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 ring-1 ring-amber-100">
        <Icon
          className="h-6 w-6 text-amber-600"
          aria-hidden="true"
        />
      </div>

      <h3 className="mb-3 text-lg font-semibold text-[#0B1F3A]">
        {title}
      </h3>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#0B1F3A] transition-colors duration-300 group-hover:text-amber-600">
        Apply for this role
        <FaArrowRight
          className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </div>
  );
}

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  availability: "",
  message: "",
};

function VolunteerApplyModal({ isOpen, onClose, onSubmit, selectedInterest }) {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (selectedInterest) {
      setForm((prev) => ({ ...prev, interest: selectedInterest }));
    }
  }, [selectedInterest, isOpen]);

  if (!isOpen) return null;

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.interest) nextErrors.interest = "Please select an area of interest.";
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    onSubmit?.(form);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose?.();
    setTimeout(() => {
      setForm(initialFormState);
      setErrors({});
      setSubmitted(false);
    }, 200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 py-8 backdrop-blur-xs"
      onClick={handleClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="apply-modal-heading"
        onClick={(e) => e.stopPropagation()}
        className="max-h-full w-full max-w-lg overflow-y-auto rounded-xl bg-white shadow-xl"
      >
        <div className="flex items-start justify-between border-b border-slate-100 px-7 py-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Volunteer Application
            </span>
            <h3
              id="apply-modal-heading"
              className="mt-1 text-xl font-bold text-[#0B1F3A]"
            >
              Apply as a Volunteer
            </h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close application form"
            className="rounded-md p-1.5 text-slate-400 transition-colors duration-200 hover:bg-slate-50 hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <FaTimes className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center px-7 py-12 text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 ring-1 ring-amber-100">
              <FaCheckCircle className="h-6 w-6 text-amber-600" aria-hidden="true" />
            </div>
            <h4 className="text-lg font-semibold text-[#0B1F3A]">
              Application Received
            </h4>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
              Thank you for your interest in volunteering with NIRI. Our team
              will review your application and reach out if there is a
              suitable match.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#0B1F3A] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#132a4d] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="px-7 py-6">
            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              Tell us a little about yourself and where you would like to
              contribute. We will get back to you within a few business days.
            </p>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="volunteer-name"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>
                <div className="relative">
                  <FaUser
                    className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    id="volunteer-name"
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "volunteer-name-error" : undefined}
                    className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder="Your full name"
                  />
                </div>
                {errors.name && (
                  <p id="volunteer-name-error" className="mt-1.5 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="volunteer-email"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope
                    className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    id="volunteer-email"
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "volunteer-email-error" : undefined}
                    className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <p id="volunteer-email-error" className="mt-1.5 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="volunteer-phone"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Phone Number{" "}
                  <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <div className="relative">
                  <FaPhoneAlt
                    className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    id="volunteer-phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder="98XXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="volunteer-interest"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Area of Interest
                </label>
                <select
                  id="volunteer-interest"
                  value={form.interest}
                  onChange={handleChange("interest")}
                  aria-invalid={Boolean(errors.interest)}
                  aria-describedby={errors.interest ? "volunteer-interest-error" : undefined}
                  className="w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-sm text-slate-800 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  <option value="">Select an area</option>
                  {opportunities.map((opportunity) => (
                    <option key={opportunity.title} value={opportunity.title}>
                      {opportunity.title}
                    </option>
                  ))}
                </select>
                {errors.interest && (
                  <p id="volunteer-interest-error" className="mt-1.5 text-xs text-red-500">
                    {errors.interest}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="volunteer-availability"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Availability{" "}
                  <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <select
                  id="volunteer-availability"
                  value={form.availability}
                  onChange={handleChange("availability")}
                  className="w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-sm text-slate-800 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  <option value="">Select availability</option>
                  <option value="Weekdays">Weekdays</option>
                  <option value="Weekends">Weekends</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="volunteer-message"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Why do you want to volunteer with NIRI?{" "}
                  <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <textarea
                  id="volunteer-message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  className="w-full resize-none rounded-lg border border-slate-200 py-2.5 px-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  placeholder="Share a little about your background, skills, or motivation"
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0B1F3A] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-[#132a4d] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                <FaPaperPlane className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function VolunteerOpportunities({ onApply }) {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("");

  const handleOpenModal = (interest = "") => {
    setSelectedInterest(interest);
    setIsApplyOpen(true);
  };

  return (
    <section
      id="volunteer"
      aria-labelledby="volunteer-heading"
      className="bg-slate-50 px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
            Volunteer With NIRI
          </span>

          <h2
            id="volunteer-heading"
            className="mt-3 text-3xl font-bold text-[#0B1F3A] sm:text-4xl"
          >
            How Can You Contribute?
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Share your time, skills, and ideas to support meaningful
            research and community initiatives in Nepal.
          </p>
        </div>

        {/* ================= OPPORTUNITIES ================= */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <VolunteerCard
              key={opportunity.title}
              icon={opportunity.icon}
              title={opportunity.title}
              description={opportunity.description}
              onLearnMore={() => handleOpenModal(opportunity.title)}
            />
          ))}
        </div>

        {/* ================= WHY VOLUNTEER ================= */}
        <div className="mt-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Why Volunteer?
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A]">
              Grow While Making a Difference
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Volunteering provides an opportunity to contribute to
              meaningful initiatives while developing valuable personal
              and professional skills.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {volunteerBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
                  <benefit.icon className="h-5 w-5 text-amber-600" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-[#0B1F3A]">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= WHO CAN VOLUNTEER ================= */}
        <div className="mt-24 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Who Can Volunteer?
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A]">
              Everyone Can Contribute
            </h2>

            <p className="mt-5 leading-relaxed text-slate-600">
              NIRI welcomes individuals who are interested in
              research, innovation, community engagement, and
              contributing to positive change.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Students and recent graduates",
              "Researchers and academics",
              "Professionals with relevant skills",
              "Community members and volunteers",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaCheckCircle
                  className="h-5 w-5 flex-shrink-0 text-amber-600"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= HOW IT WORKS ================= */}
        <div className="mt-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Simple Process
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A]">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Apply",
                text: "Submit your volunteer application and share your interests and skills.",
              },
              {
                number: "02",
                title: "Review",
                text: "The NIRI team reviews applications based on current opportunities.",
              },
              {
                number: "03",
                title: "Connect",
                text: "Shortlisted applicants are contacted for further discussion.",
              },
              {
                number: "04",
                title: "Contribute",
                text: "Selected volunteers support relevant projects and activities.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="relative rounded-xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span className="text-3xl font-bold text-amber-600">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-[#0B1F3A]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      
        {/* ================= CTA ================= */}
        <div className="mt-20 rounded-2xl bg-[#0B1F3A] px-6 py-12 text-center sm:px-12 shadow-md">
          <FaHandsHelping className="mx-auto h-8 w-8 text-amber-400" />

          <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
            Ready to Make a Difference?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
            Share your skills, ideas, and time with NIRI and contribute
            to meaningful research and community initiatives.
          </p>

          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={() => handleOpenModal("")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-[#0B1F3A] shadow-sm transition-all duration-300 hover:bg-amber-50 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 sm:w-auto"
            >
              <FaHandsHelping className="h-4 w-4 text-amber-600" />
              Apply as a Volunteer
            </button>
          </div>
        </div>
      
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-slate-500">
          Volunteer opportunities may vary depending on NIRI's ongoing
          projects, programs, and organizational needs.
        </p>

      </div>

      <VolunteerApplyModal
        isOpen={isApplyOpen}
        selectedInterest={selectedInterest}
        onClose={() => setIsApplyOpen(false)}
        onSubmit={(formData) => onApply?.(formData)}
      />
    </section>
  );
}