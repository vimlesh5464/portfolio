import { useParams } from "react-router-dom";
import articles from "./articleData";

const ArticleDetail = () => {
  const { id } = useParams();

  const article = articles.find(
    (item) => item.id === Number(id)
  );

  if (!article) {
    return <h2 className="text-center mt-10">Article not found</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-gray-500 mb-6">{article.date}</p>

      {/* 👇 LONG CONTENT SHOW HERE */}
      <div className="whitespace-pre-line text-lg leading-relaxed">
        {article.content}
      </div>
    </div>
  );
};

export default ArticleDetail;
