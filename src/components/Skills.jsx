const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind", "Git", "GitHub", "C++", "DSA",
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-gray-100 py-3 rounded text-sm font-semibold">{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
