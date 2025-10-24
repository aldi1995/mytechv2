import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";
import LazyImage from "./LazyImage";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Website Development",
    "App Development",
    "System Integration",
    "UI/UX Design",
  ];

  const projects = [
    {
  title: "Remotely.id",
  description:
    "An integrated digital platform for remote work management that includes HRMS, project management, payroll, attendance, and team communication — all in one dashboard. Designed to boost productivity, transparency, and collaboration across industries.",
  image: "/remotely.jpg",
  category: "Web Platform",
  technologies: [
    "Next.js",
    "Node.js",
    "Express.js",
    "TypeScript",
    "MongoDB",
    "Tailwind CSS",
    "Vercel",
    "REST API",
  ],
  metrics: [
    { label: "Team Productivity", value: "+35%" },
    { label: "Data Efficiency", value: "99.9%" },
  ],
},
{
  title: "E-Canteen Bina Persada School",
  description:
    "A modern web app for digitizing school canteen systems. Features include student balance top-ups, lunch vouchers, transaction reports, and service automation for operational efficiency and better user experience.",
  image: "/ekantin.png",
  category: "Web Apps",
  technologies: [
    "Laravel 11",
    "Inertia.js",
    "Vue 3",
    "Tailwind CSS",
    "MySQL",
    "REST API",
  ],
  metrics: [
    { label: "Transaction Speed", value: "+40%" },
    { label: "Operational Efficiency", value: "+30%" },
  ],
},
{
  title: "Jalin Sehat",
  description:
    "A SaaS-based hospital registration app that allows patients to register online, view doctor schedules, and manage health data securely and quickly.",
  image: "/jalinsehat.jpg",
  category: "Mobile & Web App",
  technologies: [
    "React Native",
    "Next.js",
    "Supabase",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
  ],
  metrics: [
    { label: "Online Registrations", value: "+50%" },
    { label: "User Satisfaction", value: "98%" },
  ],
},
{
  title: "Learning Hands",
  description:
    "An interactive preschool website combining game-based learning with educational activities, interactive stories, and resources for parents.",
  image: "/learninghands.png",
  category: "Education Website",
  technologies: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma ORM",
    "Tailwind CSS",
    "Docker",
  ],
  metrics: [
    { label: "Children Engagement", value: "+60%" },
    { label: "System Availability", value: "99%" },
  ],
},
{
  title: "Fazar",
  description:
    "An e-commerce website with product catalog, order management, and payment integration. Focused on performance, security, and an optimized user experience.",
  image: "/fazar.png",
  category: "E-Commerce Website",
  technologies: [
    "Next.js",
    "Stripe API",
    "TypeScript",
    "MongoDB",
    "Tailwind CSS",
    "Cloudflare",
  ],
  metrics: [
    { label: "Load Speed", value: "<2s" },
    { label: "Successful Transactions", value: "99%" },
  ],
},
{
  title: "Chatting Apps | ChatMe!",
  description:
    "A real-time web-based chat app supporting text, image, video, and voice messages. Uses JWT authentication and WebSocket for instant communication.",
  image: "/chatz.jpg",
  category: "Communication App",
  technologies: [
    "Next.js",
    "Node.js",
    "Socket.IO",
    "MongoDB",
    "JWT Auth",
    "Tailwind CSS",
  ],
  metrics: [
    { label: "Real-time Messages", value: "Instant <1s" },
    { label: "Server Uptime", value: "99.8%" },
  ],
},
{
  title: "Wedding Organizer Website",
  description:
    "An online platform helping couples plan weddings. Features vendor catalogs, portfolios, and digital budgeting tools.",
  image: "/wedding.jpg",
  category: "Service Website",
  technologies: [
    "Next.js",
    "Supabase",
    "Tailwind CSS",
    "Prisma ORM",
    "TypeScript",
    "Vercel",
  ],
  metrics: [
    { label: "Registered Vendors", value: "50+" },
    { label: "User Satisfaction", value: "97%" },
  ],
},
{
  title: "Bina Persada International School Website",
  description:
    "Official school website providing academic information, activities, and online registration.",
  image: "/bp.jpg",
  category: "School Website",
  technologies: [
    "Next.js",
    "Sanity CMS",
    "Tailwind CSS",
    "Vercel",
    "TypeScript",
  ],
  metrics: [
    { label: "Registered Students", value: "100+" },
    { label: "User Satisfaction", value: "97%" },
  ],
},
{
  title: "LBH Inayah Filia Website",
  description:
    "An online legal consultation platform featuring service forms, law articles, and client management.",
  image: "/if.png",
  category: "Legal First Aid Website",
  technologies: [
    "Next.js",
    "Supabase",
    "Tailwind CSS",
    "Prisma ORM",
    "TypeScript",
    "Vercel",
  ],
  metrics: [
    { label: "Clients Assisted", value: "50+" },
    { label: "User Satisfaction", value: "97%" },
  ],
},
{
  title: "GSK Bandung Church Official Website",
  description:
    "Official website for GSK Bandung Church providing worship schedules and community services.",
  image: "/gsk.png",
  category: "Church Website",
  technologies: [
    "Next.js",
    "Firebase",
    "Tailwind CSS",
    "Vercel",
    "TypeScript",
  ],
  metrics: [
    { label: "Registered Members", value: "50+" },
    { label: "User Satisfaction", value: "97%" },
  ],
},
{
  title: "7Lung NGO Official Website",
  description:
    "Official website for 7Lung NGO providing information about missions, programs, and activities. Includes annual reports, photo galleries, and donation forms to support humanitarian goals.",
  image: "/7l.png",
  category: "NGO Foundation Website",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Stripe API",
    "Vercel Hosting"
  ],
  metrics: [
    { label: "Registered Volunteers", value: "50+" },
    { label: "User Satisfaction", value: "97%" }
  ]
},
{
  title: "Natural Disaster Monitoring and Reporting Website",
  description:
    "A web app for real-time natural disaster monitoring and reporting. Features interactive maps, notifications, and live status reports to assist disaster response coordination.",
  image: "/bp.png",
  category: "Disaster Management Website",
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Leaflet Map API",
    "Socket.io"
  ],
  metrics: [
    { label: "Disasters Handled", value: "50+" },
    { label: "Response Success", value: "97%" }
  ]
},
{
  title: "Casavia Estate Website",
  description:
    "Official Casavia Estate website providing property listings, facilities, and contact forms to assist potential buyers.",
  image: "/ce.png",
  category: "Real Estate Website",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Strapi CMS",
    "Cloudinary",
    "Vercel"
  ],
  metrics: [
    { label: "Property Sales", value: "500+" },
    { label: "User Satisfaction", value: "97%" }
  ]
},
{
  title: "Inayah Filia Crowdfunding Platform",
  description:
    "A crowdfunding platform supporting social and humanitarian projects initiated by LBH Inayah Filia. Allows users to create campaigns, share stories, and track donation progress transparently.",
  image: "/donasi.png",
  category: "Crowdfunding Website",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Stripe API",
    "Vercel Hosting"
  ],
  metrics: [
    { label: "Active Volunteers", value: "50+" },
    { label: "User Satisfaction", value: "97%" }
  ]
},
{
  title: "Online Learning Platform",
  description:
    "An online education website providing interactive courses, video tutorials, and quizzes. Includes course management, progress tracking, and completion certificates.",
  image: "/edu.png",
  category: "Education Website",
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Auth",
    "Tailwind CSS"
  ],
  metrics: [
    { label: "Students", value: "100+" },
    { label: "Courses Available", value: "97%" }
  ]
},
{
  title: "GSK Inventory Management App",
  description:
    "A web-based inventory management system for GSK Church to manage assets and equipment efficiently.",
  image: "/inv_gsk.png",
  category: "Inventory Management App",
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Vercel"
  ],
  metrics: [
    { label: "Items Tracked", value: "100+" },
    { label: "User Satisfaction", value: "97%" }
  ]
},
{
  title: "Free Online Legal Consultation Website",
  description:
    "An online legal consultation platform offering free services, legal articles, and educational resources to help the public understand their rights.",
  image: "/kh.png",
  category: "Legal Consultation Website",
  technologies: [
    "Next.js",
    "Supabase",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL"
  ],
  metrics: [
    { label: "Cases Handled", value: "50+" },
    { label: "User Satisfaction", value: "97%" }
  ]
},
{
  title: "LBH Anak Indonesia Website",
  description:
    "Official website for LBH Anak Indonesia providing legal aid services, advocacy programs, and educational resources for child protection.",
  image: "/lbhai.png",
  category: "Legal Aid Website",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Vercel Hosting",
    "PostgreSQL"
  ],
  metrics: [
    { label: "Child Cases Resolved", value: "50+" },
    { label: "User Satisfaction", value: "97%" }
  ]
},
{
  title: "M-Plus Event Organizer Company Profile Website",
  description:
    "Official website for M-Plus Event Organizer providing service details, event portfolios, and client testimonials.",
  image: "/mplus.png",
  category: "Company Profile Website",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Strapi CMS",
    "Cloudinary",
    "Vercel"
  ],
  metrics: [
    { label: "Successful Events", value: "50+" },
    { label: "Client Satisfaction", value: "97%" }
  ]
},
{
  title: "MY-Law Official Website",
  description:
    "Official website for MY-Law featuring legal services, lawyer profiles, legal articles, and contact forms for client assistance.",
  image: "/mylaw.png",
  category: "Law Firm Website",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Vercel Hosting"
  ],
  metrics: [
    { label: "Cases Solved", value: "50+" },
    { label: "Client Satisfaction", value: "97%" }
  ]
},
{
  title: "SMP Lab Malang Website",
  description:
    "Official website for SMP Lab Malang providing academic programs, extracurricular activities, facilities, and student admissions.",
  image: "/smplab.png",
  category: "School Website",
  technologies: [
    "React.js",
    "Firebase",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Cloud Hosting"
  ],
  metrics: [
    { label: "Registered Students", value: "500+" },
    { label: "Parent Satisfaction", value: "97%" }
  ]
},
{
  title: "Online Music Streaming Website",
  description:
    "A web app for online music streaming featuring song search, playlists, and personalized recommendations.",
  image: "/music.png",
  category: "Music Streaming Website",
  technologies: [
    "React.js",
    "Firebase",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Cloud Hosting"
  ],
  metrics: [
    { label: "Available Tracks", value: "500+" },
    { label: "User Satisfaction", value: "97%" }
  ]
},
{
  title: "Kury’n Travel & Car Rental Website",
  description:
    "Official website for Kury’n Travel, offering travel and car rental services with route information and online booking.",
  image: "/kuryn.png",
  category: "Travel Agency Website",
  technologies: [
    "PHP",
    "MySQL",
    "Laravel",
    "Bootstrap",
    "Cloud Hosting"
  ],
  metrics: [
    { label: "Available Cars", value: "50+" },
    { label: "User Satisfaction", value: "97%" }
  ]
},
{
  title: "7Lung Volunteer Registration Website",
  description:
    "Volunteer registration platform for NGO 7Lung that simplifies registration and data management for volunteers.",
  image: "/reg.png",
  category: "Volunteer Registration Website",
  technologies: [
    "React.js",
    "Firebase",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Cloud Hosting"
  ],
  metrics: [
    { label: "Registered Members", value: "100+" },
    { label: "Official Volunteers", value: "97%" }
  ]
},
{
  title: "Web-based Disaster Reporting Platform",
  description:
    "A real-time disaster reporting web app featuring an interactive map, notifications, and live condition reports.",
  image: "/report.png",
  category: "Disaster Reporting Website",
  technologies: [
    "React.js",
    "Firebase",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Cloud Hosting"
  ],
  metrics: [
    { label: "Reports Logged", value: "100+" },
    { label: "Response Accuracy", value: "97%" }
  ]
},
{
  title: "Restaurant POS Web App",
  description:
    "A web-based POS (Point of Sale) system for restaurants to manage orders, inventory, and sales reports efficiently.",
  image: "/resto.png",
  category: "Restaurant POS Web App",
  technologies: [
    "React.js",
    "Firebase",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Cloud Hosting"
  ],
  metrics: [
    { label: "Restaurants Helped", value: "500+" },
    { label: "User Satisfaction", value: "97%" }
  ]
}

  ];

  return (
    <section className="relative py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-200 dark:bg-sky-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-200 dark:bg-cyan-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group mb-8">
            <span className="text-sm font-medium">Our Portfolio</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-6xl">
            Showcasing
            <span className="block mt-2 bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Our Works
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Discover how we help businesses transform digitally through
            innovative, scalable, and results-driven technology solutions.
          </p>
        </div>

        {/* Category filter */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-slate-600 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project list */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {projects
            .filter(
              (project) =>
                activeFilter === "All" || project.category === activeFilter
            )
            .map((project) => (
              <div
                key={project.title}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Project image */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-4">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="text-white">
                            <div className="text-sm opacity-75">
                              {metric.label}
                            </div>
                            <div className="text-lg font-bold">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-50 dark:bg-slate-700 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <Code size={14} />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
