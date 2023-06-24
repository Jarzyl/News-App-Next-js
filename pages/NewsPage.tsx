import { useState, useEffect } from "react";
import { ArticleData } from "@/components/News/types";
import Layout from "@/components/Layout/Layout";
import CustomHead from "@/components/Layout/CustomHead";

function Article({ article }: { article: ArticleData }) {
  return (
    <div className="mb-8 bg-white shadow-lg rounded-xl">
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <div className="grid md:flex items-center justify-center">
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              className="md:w-96 md:h-72 object-cover rounded-xl"
            />
          )}
          <div className="flex flex-col justify-between px-5 py-3">
            <div>
              <h3 className="text-base xl:text-xl font-bold mb-2 text-black">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm xl:text-base">
                {article.description}
              </p>
            </div>
            <p className="text-sm xl:text-base text-gray-400 mt-2">
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function NewsPage() {
  const [articleData, setArticleData] = useState<ArticleData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Articles.json");
        const data: ArticleData[] = await response.json();
        setArticleData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <CustomHead title="News App | News" icon="news.png" />
      <Layout>
        <div className="max-w-2xl xl:max-w-3xl mx-auto px-5 mt-6 mb-16 md:mt-10 md:px-0">
          {articleData.length > 0 ? (
            <>
              <h1 className="text-gray-500 text-center text-xl md:text-3xl mt-10">
                Stay up to date with our general news!
              </h1>

              <h2 className="text-2xl md:text-3xl mt-6 md:mt-10 mb-8 text-center text-black">
                Top Headlines
              </h2>
              {articleData.map((article, index) => (
                <Article key={index} article={article} />
              ))}
            </>
          ) : (
            <p className="text-center mt-8 text-gray-400">
              No search results...
            </p>
          )}
        </div>
      </Layout>
    </>
  );
}