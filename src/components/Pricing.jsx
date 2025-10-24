import React, { useState } from "react";
import { CheckCircle2, Star, ArrowUpRight, Phone } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const formatPrice = (monthly, yearly) => (isYearly ? yearly : monthly);

  const handleContact = (plan) => {
    if (plan.monthly === "Contact Us") {
      const message = `Hello MyTech Indonesia! I'm interested in the ${plan.name} package. Please provide more information.`;
      window.open(
        `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    } else {
      setSelectedPlan(plan.name);
      setOpenForm(true);
    }
  };

  const categories = [
    {
      category: "Enterprise Solutions",
      tagline: "For internal systems & large-scale business needs",
      plans: [
        {
          name: "Basic Enterprise",
          monthly: "$310",
          yearly: "$3,100",
          gradient: "from-blue-600 to-sky-500",
          features: [
            "Internal company dashboard",
            "Local database integration",
            "Basic user management",
            "3 months of technical support",
          ],
        },
        {
          name: "Advanced Enterprise",
          monthly: "$750",
          yearly: "$6,900",
          gradient: "from-sky-600 to-blue-600",
          popular: true,
          features: [
            "External API integration",
            "Automated reporting (PDF/Excel)",
            "Role-based access control",
            "6 months priority support",
          ],
        },
        {
          name: "Custom Enterprise",
          monthly: "Contact Us",
          yearly: "Contact Us",
          gradient: "from-blue-700 to-cyan-500",
          features: [
            "ERP/CRM/HRMS integration",
            "Scalable architecture",
            "SLA 99.9% uptime",
            "Annual maintenance & 24/7 support",
          ],
        },
      ],
    },
    {
      category: "Website Development",
      tagline: "Modern digital solutions for your business and brand",
      plans: [
        {
          name: "Basic Website",
          monthly: "$125",
          yearly: "$1,250",
          gradient: "from-green-600 to-emerald-500",
          features: [
            "Professional landing page",
            "Basic SEO optimization",
            "Responsive design for all devices",
            "Free domain for 1 year",
          ],
        },
        {
          name: "Business Website",
          monthly: "$215",
          yearly: "$2,100",
          gradient: "from-emerald-600 to-green-600",
          popular: true,
          features: [
            "Multi-page (Home, About, Services, Contact)",
            "WhatsApp & Maps integration",
            "Dynamic contact form",
            "6 months technical support",
          ],
        },
        {
          name: "E-Commerce Pro",
          monthly: "$375",
          yearly: "$3,700",
          gradient: "from-teal-600 to-green-500",
          features: [
            "Product catalog & shopping cart system",
            "Payment integration (Midtrans/Xendit)",
            "Admin dashboard & sales report",
            "12 months priority support",
          ],
        },
      ],
    },
    {
      category: "Mobile App Development",
      tagline: "Android & iOS apps to expand your business reach",
      plans: [
        {
          name: "Starter App",
          monthly: "$500",
          yearly: "$4,700",
          gradient: "from-purple-600 to-indigo-500",
          features: [
            "Android app (Play Store ready)",
            "Basic user authentication",
            "Simple push notifications",
            "3 months bugfix support",
          ],
        },
        {
          name: "Pro App",
          monthly: "$940",
          yearly: "$8,750",
          gradient: "from-indigo-600 to-violet-600",
          popular: true,
          features: [
            "Android & iOS (Cross-platform Flutter/React Native)",
            "Cloud database & API integration",
            "Professional UI/UX design",
            "6 months priority technical support",
          ],
        },
        {
          name: "Custom App",
          monthly: "Contact Us",
          yearly: "Contact Us",
          gradient: "from-violet-700 to-purple-500",
          features: [
            "Complex backend system integration",
            "Multi-environment deployment",
            "Annual maintenance",
            "Advanced features & scaling consultation",
          ],
        },
      ],
    },
    {
      category: "IT Consulting & Maintenance",
      tagline: "Professional system consulting and maintenance services",
      plans: [
        {
          name: "Consult Basic",
          monthly: "$95",
          yearly: "$940",
          gradient: "from-orange-600 to-amber-500",
          features: [
            "System needs analysis",
            "Digital solution recommendations",
            "Monthly consulting report",
            "1 month technical support",
          ],
        },
        {
          name: "Consult Pro",
          monthly: "$185",
          yearly: "$1,800",
          gradient: "from-amber-600 to-orange-600",
          popular: true,
          features: [
            "System development assistance",
            "Application performance optimization",
            "Security & data audit",
            "3 months priority support",
          ],
        },
        {
          name: "Dedicated Support",
          monthly: "Contact Us",
          yearly: "Contact Us",
          gradient: "from-orange-700 to-yellow-500",
          features: [
            "Dedicated IT team for your company",
            "24/7 system monitoring",
            "Routine consulting & upgrades",
            "Professional SLA agreement",
          ],
        },
      ],
    },
  ];

  return (
    <section className="relative py-28 bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-blue-600 text-white shadow-lg mb-6">
          <span className="text-sm font-medium">Pricing Packages</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>

        <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
          Choose the Package That{" "}
          <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
            Fits Your Needs
          </span>
        </h2>
        <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
          Flexible pricing — transparent and customizable.
        </p>

        {/* Toggle Monthly / Yearly */}
        <div className="mt-8 flex justify-center items-center gap-3">
          <span
            className={`text-sm font-medium ${
              !isYearly
                ? "text-blue-600 dark:text-blue-400"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <div className="w-12 h-6 bg-slate-300 dark:bg-slate-600 rounded-full transition-colors duration-300 peer-checked:bg-blue-600"></div>
            <div className="absolute left-[2px] top-[2px] w-5 h-5 bg-white dark:bg-slate-200 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
          </label>
          <span
            className={`text-sm font-medium ${
              isYearly
                ? "text-blue-600 dark:text-blue-400"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            Yearly{" "}
            <span className="ml-1 text-xs text-green-500">(Save 20%)</span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="space-y-24 max-w-7xl mx-auto px-6">
        {categories.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              {cat.category}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-10">
              {cat.tagline}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {cat.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white dark:bg-slate-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all p-10 border-t-8 ${
                    plan.popular
                      ? "border-blue-500 scale-105"
                      : "border-slate-100 dark:border-slate-700 hover:-translate-y-1"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 right-6 flex items-center gap-1 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow">
                      <Star className="w-4 h-4" /> Most Popular
                    </div>
                  )}
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {plan.name}
                  </h4>
                  <p className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    {formatPrice(plan.monthly, plan.yearly)}
                    <span className="text-base font-normal text-slate-500 dark:text-slate-400">
                      {plan.monthly !== "Contact Us" &&
                        (isYearly ? "/year" : "/month")}
                    </span>
                  </p>
                  <ul className="space-y-3 mb-8 text-slate-600 dark:text-slate-300">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />{" "}
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleContact(plan)}
                    className={`w-full py-3 rounded-xl font-medium transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:opacity-90"
                        : "border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                    }`}
                  >
                    {plan.monthly === "Contact Us"
                      ? "Contact via WhatsApp"
                      : "Consult This Package"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-28 max-w-3xl mx-auto text-center">
        <div className="bg-slate-900 dark:bg-slate-800 text-white rounded-3xl p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-sky-500/10" />
          <div className="relative space-y-6">
            <h3 className="text-3xl font-bold">Need a Custom Offer?</h3>
            <p className="text-slate-400">
              Let us help you design the most efficient solution for your
              business.
            </p>
            <button
              onClick={() => setOpenForm(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-blue-600 text-slate-900 dark:text-white font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" /> Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {openForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-4 right-4 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Consultation for {selectedPlan && `(${selectedPlan})`}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We will contact you soon.");
                setOpenForm(false);
              }}
              className="space-y-5"
            >
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border border-slate-300 dark:border-slate-600 bg-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border border-slate-300 dark:border-slate-600 bg-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
              <input
                type="tel"
                placeholder="WhatsApp Number"
                className="w-full border border-slate-300 dark:border-slate-600 bg-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
              <textarea
                placeholder="Your message or business needs..."
                rows="4"
                className="w-full border border-slate-300 dark:border-slate-600 bg-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold hover:opacity-90 transition-all"
              >
                Send Consultation Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
