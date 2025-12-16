import React from "react";

const Home = () => {
  const tools = [
    { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", link: "https://git-scm.com/" },
    { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", link: "https://www.python.org" },
    { name: "TensorFlow", icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg", link: "https://www.tensorflow.org" },
    { name: "PyTorch", icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg", link: "https://pytorch.org/" },
    { name: "Scikit-Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", link: "https://scikit-learn.org/" },
  ];

  const funFacts = [
    "I love wrestling with datasets until they reveal insights.",
    "Experimenting with AI models is my weekend hobby.",
    "Always learning new ML techniques.",
  ];

  return (
    <div className="w-full font-sans bg-gray-50 overflow-hidden">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
        {/* Floating Bubbles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`absolute w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-bounce-slow`} style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 90}%` }} />
          ))}
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Text */}
          <div className="md:flex-1 text-center md:text-left mt-10 md:mt-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-400">Vimlesh Gupta</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-6 max-w-md">
              Exploring <strong>Machine Learning</strong>, <strong>AI</strong>, and <strong>Generative AI</strong>. I build models and dashboards that solve real-world problems.
            </p>
            <a href="#tools" className="inline-block bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold transition">
              Explore Tools
            </a>
          </div>

          {/* Illustration */}
          <div className="md:flex-1 flex justify-center">
            <img
              src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
              alt="AI illustration"
              className="w-72 md:w-96 rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="relative -mt-32 z-10 max-w-7xl mx-auto px-6 md:px-20 space-y-24">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">🛠 Tools & Technologies</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
            {tools.map((tool, idx) => (
              <a key={idx} href={tool.link} target="_blank" rel="noreferrer" className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform">
                <img src={tool.icon} alt={tool.name} className="w-16 h-16 mb-2" />
                <span className="text-gray-800 font-medium">{tool.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">⚡ Fun Facts</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {funFacts.map((fact, idx) => (
              <li key={idx}>{fact}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;

