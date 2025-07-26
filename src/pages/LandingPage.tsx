import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-[#f0f7ff] via-[#dfeaff] to-[#e3ecff] flex items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a3066] mb-4">
          Explore. Discover. Read.
        </h1>
        <p className="text-lg md:text-xl text-[#546681] mb-8">
          <span className="font-semibold text-[#484dff]">Book Explorer</span> helps you search books by title, author, or ISBN using the Google Books API.
          Save your favorites and dive into details — all in one place.
        </p>

        <button
          onClick={() => navigate("/explore")}
          className="bg-[#484dff] hover:bg-[#1a3066] text-white px-8 py-3 rounded-xl text-lg font-medium transition-all shadow-md"
        >
          🔍 Start Exploring
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
