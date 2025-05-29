import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Import Link

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center bg-amber-50 text-center"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-blue-400">
          Welcome to My Portfolio
        </h1>
        <h2 className="text-4xl md:text-5xl mb-2">Hi, I'm Vimlesh 👋</h2>

        <p className="text-xl md:text-2xl mb-6 font-medium">
          MERN Stack Developer | Problem Solver
        </p>

        <p className="text-lg mb-4">
          I’m a passionate developer who builds full-stack web apps using modern technologies like
          <span className="text-black"> React, Node.js, Express,</span> and
          <span className="text-black"> MongoDB</span>.
        </p>

        <p className="text-lg mb-6">
          I love building scalable applications, solving DSA problems, and exploring AI/ML. Let's
          connect and build something amazing together!
        </p>

        {/* Buttons */}
        <div className="space-x-4">
          <Link
            to="/projects"
            className="border px-6 py-3 rounded hover:bg-blue-700 hover:text-white transition"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf" // ✅ External/download link can stay as <a>
            className="border px-6 py-3 rounded hover:bg-blue-600 hover:text-white transition"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
