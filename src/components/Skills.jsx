const skills = {
  ml: [
    "Python", 
    "NumPy", 
    "Pandas", 
    "Matplotlib", 
    "Scikit-Learn", 
    "TensorFlow", 
    "PyTorch", 
    "OpenCV", 
    "NLP (NLTK)"
  ],
  aiConcepts: [
    "Machine Learning",
    "Deep Learning",
    "Neural Networks",
    "Natural Language Processing",
    "Data Preprocessing",
    "Model Training & Evaluation"
  ],
  frontend: [
    "HTML", 
    "CSS", 
    "JavaScript", 
    "React", 
    "Tailwind CSS"
  ],
  other: [
    "Git", 
    "GitHub", 
    "C++", 
    "DSA", 
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10">Skills & Tech Stack</h2>

        {/* Machine Learning */}
        <h3 className="text-xl font-semibold mb-4">Machine Learning & AI</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
          {skills.ml.map((skill, idx) => (
            <div key={idx} className="bg-gray-100 py-3 rounded text-sm font-semibold">
              {skill}
            </div>
          ))}
        </div>

        {/* AI Concepts */}
        <h3 className="text-xl font-semibold mb-4">AI Concepts</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
          {skills.aiConcepts.map((skill, idx) => (
            <div key={idx} className="bg-gray-100 py-3 rounded text-sm font-semibold">
              {skill}
            </div>
          ))}
        </div>

        {/* Frontend */}
        <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
          {skills.frontend.map((skill, idx) => (
            <div key={idx} className="bg-gray-100 py-3 rounded text-sm font-semibold">
              {skill}
            </div>
          ))}
        </div>

        {/* Other Skills */}
        <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.other.map((skill, idx) => (
            <div key={idx} className="bg-gray-100 py-3 rounded text-sm font-semibold">
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
