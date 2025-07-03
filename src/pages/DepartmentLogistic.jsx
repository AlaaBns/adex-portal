// src/pages/DepartmentLogistic.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTruck, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const agents = [
  {
    id: 1,
    name: "John Doe",
    role: "Fleet Manager",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
    email: "john.doe@adex.com",
    whatsapp: "+1234567893",
  },
  {
    id: 2,
    name: "Emma Brown",
    role: "Logistics Coordinator",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    email: "emma.brown@adex.com",
    whatsapp: "+1234567894",
  },
];

const services = ["Fleet Tracking", "Delivery Planning", "Vehicle Maintenance"];

export default function DepartmentLogistic() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 py-16 px-6">
      {/* Intro */}
      <div className="max-w-5xl mx-auto text-center" data-aos="fade-down">
        <div className="text-5xl text-indigo-600 mb-4">
          <FaTruck />
        </div>
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">
          Logistic Department
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          The Logistic team manages transportation, delivery operations, and
          fleet optimization to ensure smooth service flow.
        </p>
      </div>

      {/* Services */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105 group"
          >
            <div className="text-2xl font-semibold text-indigo-700 mb-2">
              {service}
            </div>
            <p className="text-gray-600 text-sm group-hover:text-gray-800 transition duration-300">
              Description of {service.toLowerCase()} as handled by the logistics
              team.
            </p>
          </div>
        ))}
      </div>

      {/* Agents */}
      <section className="max-w-6xl mx-auto mt-20">
        <h3
          className="text-3xl font-semibold text-indigo-700 mb-8 text-center"
          data-aos="fade-right"
        >
          Meet Our Logistics Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {agents.map(({ id, name, role, photo, email, whatsapp }) => (
            <div
              key={id}
              data-aos="fade-up"
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
            >
              <img
                src={photo}
                alt={name}
                className="w-28 h-28 rounded-full object-cover mb-4"
              />
              <h4 className="text-xl font-semibold text-indigo-800">{name}</h4>
              <p className="text-indigo-600 mb-4">{role}</p>
              <div className="flex space-x-4 text-indigo-600">
                <a
                  href={`mailto:${email}`}
                  className="hover:text-indigo-900"
                  aria-label={`Email ${name}`}
                >
                  <FaEnvelope size={20} />
                </a>
                <a
                  href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-600"
                  aria-label={`WhatsApp ${name}`}
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
