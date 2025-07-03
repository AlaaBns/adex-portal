// src/components/AgentCard.jsx
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function AgentCard({ agent }) {
  const { name, role, photo, email, whatsapp } = agent;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 transform hover:scale-105">
      <img
        src={photo}
        alt={name}
        className="w-28 h-28 rounded-full object-cover mb-4"
      />
      <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
      <p className="text-gray-600 mb-4">{role}</p>
      <div className="flex space-x-4 text-gray-600">
        {email && (
          <a
            href={`mailto:${email}`}
            className="hover:text-gray-900"
            aria-label={`Email ${name}`}
          >
            <FaEnvelope size={20} />
          </a>
        )}
        {typeof whatsapp === "string" && whatsapp.trim() !== "" && (
          <a
            href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-600"
            aria-label={`WhatsApp ${name}`}
          >
            <FaWhatsapp size={20} />
          </a>
        )}
      </div>
    </div>
  );
}
