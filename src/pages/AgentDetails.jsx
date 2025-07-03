// src/pages/AgentDetails.jsx
import { useParams } from "react-router-dom";
import {
  commercialAgents,
  logisticAgents,
  managementAgents,
  clientServiceAgents,
} from "../data/agents";

const allAgents = [
  ...commercialAgents,
  ...logisticAgents,
  ...managementAgents,
  ...clientServiceAgents,
];

export default function AgentDetails() {
  const { id } = useParams();
  const agent = allAgents.find((a) => a.id === parseInt(id));

  if (!agent) {
    return (
      <p className="text-center text-orange-500 mt-20">Agent not found.</p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 text-center">
      <img
        src={agent.image}
        alt={agent.name}
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-bold text-indigo-700">{agent.name}</h2>
      <p className="text-gray-600">{agent.role}</p>
      <p className="text-indigo-500 mt-2">{agent.email}</p>
    </div>
  );
}
