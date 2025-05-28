const projects = [
  {
    title: "AirBin",
    description: "Full-stack LeetCode clone with Docker-based code execution.",
    github: "https://github.com/vimlesh5464/absd",
    demo: "https://leetcode-clone-demo.netlify.app",
  },
  {
    title: "AI Dashboard",
    description: "Admin dashboard with AI assistant and analytics.",
    github: "https://github.com/vimlesh5464",
    demo: "https://ai-dashboard-vimlesh.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-4 justify-center">
                <a href={project.github} className="text-blue-600 hover:underline">GitHub</a>
                <a href={project.demo} className="text-green-600 hover:underline">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
