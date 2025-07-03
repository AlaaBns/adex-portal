// src/pages/DepartmentClientService.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHeadset, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const agents = [
  {
    id: 1,
    name: "Jessica Green",
    role: "Client Support Lead",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    email: "jessica.green@adex.com",
    whatsapp: "+1234567897",
  },
  {
    id: 2,
    name: "Mark White",
    role: "Customer Service Rep",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    email: "mark.white@adex.com",
    whatsapp: "+1234567898",
  },
];

const services = ["Customer Support", "Follow-up Calls", "Issue Resolution"];

export default function DepartmentClientService() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-16 px-6">
      {/* Intro */}
      <div className="max-w-5xl mx-auto text-center" data-aos="fade-down">
        <div className="text-5xl text-pink-600 mb-4">
          <FaHeadset />
        </div>
        <h1 className="text-4xl font-bold text-pink-800 mb-4">
          Client Service Department
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Focused on delivering excellent customer support, solving issues, and
          improving client satisfaction.
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
            <div className="text-2xl font-semibold text-pink-700 mb-2">
              {service}
            </div>
            <p className="text-gray-600 text-sm group-hover:text-gray-800 transition duration-300">
              Overview of {service.toLowerCase()} process within the service
              team.
            </p>
          </div>
        ))}
      </div>

      {/* Agents */}
      <section className="max-w-6xl mx-auto mt-20">
        <h3
          className="text-3xl font-semibold text-pink-700 mb-8 text-center"
          data-aos="fade-right"
        >
          Meet Our Client Service Team
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
              <h4 className="text-xl font-semibold text-pink-800">{name}</h4>
              <p className="text-pink-600 mb-4">{role}</p>
              <div className="flex space-x-4 text-pink-600">
                <a
                  href={`mailto:${email}`}
                  className="hover:text-pink-900"
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
