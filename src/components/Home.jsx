import React from "react";

const Home = () => {
  const tools = [
    { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", link: "https://git-scm.com/" },
    { name: "Pandas", icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg", link: "https://pandas.pydata.org/" },
    { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg", link: "https://www.postgresql.org" },
    { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", link: "https://www.python.org" },
    { name: "PyTorch", icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg", link: "https://pytorch.org/" },
    { name: "Scikit-Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", link: "https://scikit-learn.org/" },
    { name: "Seaborn", icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg", link: "https://seaborn.pydata.org/" },
    { name: "Selenium", icon: "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg", link: "https://www.selenium.dev" },
    { name: "TensorFlow", icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg", link: "https://www.tensorflow.org" },
  ];

  const projects = [
    { title: "Generative AI Models", desc: "AI models for text, image, and data generation", link: "#" },
    { title: "ML Models", desc: "Predictive models using PyTorch & TensorFlow", link: "#" },
    { title: "Data Visualizer", desc: "Interactive dashboards for exploring datasets", link: "#" },
    { title: "Python Automation Scripts", desc: "Automating workflows with Python", link: "#" },
  ];

  const funFacts = [
    "I love wrestling with datasets until they reveal insights.",
    "Experimenting with AI models is my weekend hobby.",
    "Always learning new ML techniques.",
  ];

  return (
    <div className="w-full bg-gray-100">

      {/* Hero Section */}
      <div className="relative w-full h-screen bg-black">
        <img
          src="https://www.jagannath.org/blog/wp-content/uploads/2021/02/Picture1.png"
          alt="AI Banner"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
          <div className="text-center md:text-left md:flex-1 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi 👋, I'm <span className="text-blue-400">Vimlesh Gupta</span>
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Exploring <strong>Machine Learning</strong>, <strong>AI</strong>, and <strong>Generative AI</strong>.
            </p>
            <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              View Projects
            </a>
          </div>
          <div className="md:flex-1 mt-8 md:mt-0 flex justify-center">
            <img
              src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
              alt="AI Animation"
              className="w-[280px] md:w-[350px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto -mt-32 relative z-10 p-6 md:p-10 bg-white rounded-xl shadow-lg">

        {/* What I Work On */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">What I Work On</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Machine Learning Algorithms (Regression, Classification, Clustering)</li>
            <li>Deep Learning (CNN, RNN, LSTM, Transformers)</li>
            <li>Natural Language Processing (LLMs, Embeddings, Text Classification)</li>
            <li>Computer Vision (Image Recognition, Object Detection)</li>
            <li>Model Training, Evaluation & Deployment</li>
            <li>Python, NumPy, Pandas, Scikit-Learn, TensorFlow, PyTorch</li>
          </ul>
        </div>

        {/* Tools & Technologies */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">🛠 Tools & Technologies</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <a key={index} href={tool.link} target="_blank" rel="noreferrer" className="flex flex-col items-center hover:scale-110 transition transform">
                <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-2" />
                <span className="text-gray-700 text-sm">{tool.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div id="projects" className="mt-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">🌟 Featured Projects</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
            {projects.map((proj, index) => (
              <a key={index} href={proj.link} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{proj.title}</h3>
                <p className="text-gray-700">{proj.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">⚡ Fun Facts</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {funFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex gap-6">
          <a href="https://www.linkedin.com/in/vimlesh-gupta-663618208/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" className="w-8 hover:scale-110 transition" />
          </a>
          <a href="https://www.instagram.com/vimlesh5464/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="Instagram" className="w-8 hover:scale-110 transition" />
          </a>
          <a href="https://www.kaggle.com/vimleshgupta123" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/kaggle.svg" alt="Kaggle" className="w-8 hover:scale-110 transition" />
          </a>
          <a href="https://leetcode.com/u/VimleshGupta/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="LeetCode" className="w-8 hover:scale-110 transition" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Home;
