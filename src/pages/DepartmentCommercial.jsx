import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChartLine } from "react-icons/fa";
import AgentCard from "../components/AgentCard";

const agents = [
  {
    id: 1,
    name: "Alice Smith",
    role: "Sales Manager",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "alice.smith@adex.com",
    whatsapp: "+1234567890",
  },
  {
    id: 2,
    name: "Bob Johnson",
    role: "Business Developer",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    email: "bob.johnson@adex.com",
    whatsapp: "+1234567891",
  },
  {
    id: 3,
    name: "Carol Davis",
    role: "Account Executive",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    email: "carol.davis@adex.com",
    whatsapp: "+1234567892",
  },
];

const services = [
  "Lead Generation",
  "Client Relationship Management",
  "Sales Strategy & Analysis",
];

export default function DepartmentCommercial() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center" data-aos="fade-down">
        <div className="text-5xl text-purple-600 mb-4">
          <FaChartLine />
        </div>
        <h1 className="text-4xl font-bold text-purple-800 mb-4">
          Commercial Department
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Our Commercial team drives sales, builds strategic partnerships, and
          grows the business through innovative solutions.
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105 group"
          >
            <div className="text-2xl font-semibold text-purple-700 mb-2">
              {service}
            </div>
            <p className="text-gray-600 text-sm group-hover:text-gray-800 transition duration-300">
              Description of {service.toLowerCase()} provided by the commercial
              team.
            </p>
          </div>
        ))}
      </div>

      <section className="max-w-6xl mx-auto mt-20">
        <h3
          className="text-3xl font-semibold text-purple-700 mb-8 text-center"
          data-aos="fade-right"
        >
          Meet Our Commercial Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>
    </div>
  );
}
