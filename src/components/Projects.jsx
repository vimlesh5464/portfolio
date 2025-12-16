const projects = [
  {
    title: "Text Document Classification (Naive Bayes)",
    description:
      "A Machine Learning project that classifies text documents using Naive Bayes. Includes data preprocessing, TF-IDF vectorization, model training, and evaluation.",
    github:
      "https://github.com/vimlesh5464/machine-learning-project/tree/main/Classification%20of%20Text%20Documents%20using%20Naive%20Bayes",
    demo: null,
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "A complete ML pipeline detecting fraudulent transactions using Logistic Regression & Random Forest with class imbalance handling and evaluation metrics.",
    github:
      "https://github.com/vimlesh5464/machine-learning-project/tree/main/Credit%20Card%20Fraud%20Detection",
    demo: null,
  },
  {
    title: "Fake News Classifier (NLP)",
    description:
      "NLP-based Fake News Detection system using TF-IDF and Passive Aggressive Classifier. Processes real-world news datasets and predicts authenticity.",
    github:
      "https://github.com/vimlesh5464/machine-learning-project/tree/main/FakeNewsClassifier",
    demo: null,
  },
  {
    title: "Academic score Pradiction",
    description:
      "A collection of machine learning model implementations including preprocessing, model selection, training, hyperparameter tuning, and performance analysis.",
    github:
      "https://github.com/vimlesh5464/machine-learning-project/tree/main/MLProject",
    demo: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">AI & ML Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex gap-4 justify-center">
                <a
                  href={project.github}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                {/* Show demo button only if demo link exists */}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="text-green-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
