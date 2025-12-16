import articles from "./articleData";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Articles</h1>

      {articles.map((article) => (
        <div key={article.id} className="mb-6 border-b pb-4">
          <h2 className="text-xl font-semibold">{article.title}</h2>
          <p className="text-gray-600">{article.summary}</p>

          <Link
            to={`/blog/${article.id}`}
            className="text-blue-600 hover:underline"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
