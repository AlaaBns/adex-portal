// src/pages/Home.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaChartLine, FaTruck, FaUsers, FaHeadset } from "react-icons/fa";
import AgentCard from "../components/AgentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const departments = [
    {
      name: "Commercial",
      icon: <FaChartLine className="text-3xl text-purple-600" />,
      path: "/departments/commercial",
      color: "from-purple-100 to-purple-900",
    },
    {
      name: "Logistic",
      icon: <FaTruck className="text-3xl text-indigo-600" />,
      path: "/departments/logistic",
      color: "from-indigo-100 to-indigo-700",
    },
    {
      name: "Management",
      icon: <FaUsers className="text-3xl text-orange-600" />,
      path: "/departments/management",
      color: "from-orange-100 to-orange-700",
    },
    {
      name: "Client Service",
      icon: <FaHeadset className="text-3xl text-pink-600" />,
      path: "/departments/client-service",
      color: "from-pink-100 to-pink-700",
    },
  ];

  const featuredAgents = [
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
      name: "John Doe",
      role: "Fleet Manager",
      photo: "https://randomuser.me/api/portraits/men/11.jpg",
      email: "john.doe@adex.com",
      whatsapp: "+1234567893",
    },
    {
      id: 3,
      name: "Jessica Green",
      role: "Client Support",
      photo: "https://randomuser.me/api/portraits/women/12.jpg",
      email: "jessica.green@adex.com",
      whatsapp: "+1234567897",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 pb-20">
      {/* Hero Section */}
      <div
        className="text-center pt-20 px-4 max-w-3xl mx-auto"
        data-aos="fade-down"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to Adex Portal
        </h1>
        <h2 className="text-gray-600 text-lg">
          Explore our departments and meet the team driving Adex forward.
        </h2>
      </div>

      {/* Department Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-32 max-w-6xl mx-auto px-6">
        {departments.map((dept, i) => (
          <Link
            to={dept.path}
            key={i}
            className={`bg-gradient-to-br ${dept.color} rounded-2xl shadow-lg p-6 flex flex-col items-center text-center text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
          >
            <div className="mb-4">{dept.icon}</div>
            <h3 className="text-xl font-semibold">{dept.name}</h3>
          </Link>
        ))}
      </div>

      {/* Featured Agent Carousel */}
      <section className="max-w-6xl mx-auto mt-24 px-6">
        <h2
          className="text-3xl font-semibold text-center text-gray-800 mb-10"
          data-aos="fade-up"
        >
          Featured Agents
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-6"
        >
          {featuredAgents.map((agent, i) => (
            <SwiperSlide key={agent.id}>
              <div data-aos="fade-up" data-aos-delay={i * 100}>
                <AgentCard agent={agent} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="text-center mt-8">
        <Link
          to="/agents"
          className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow hover:scale-105 transition-transform"
          data-aos="zoom-in"
        >
          View All Agents
        </Link>
      </div>
    </div>
  );
}
