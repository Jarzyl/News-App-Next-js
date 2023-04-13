import React, { useState } from "react";
import axios from "axios";

type Props = {};

type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
};

const NewsHeadlines: React.FC<Props> = () => {
  const [search, setSearch] = useState<string>("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${search}&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY_1}`;
    try {
      const response = await axios.get(apiUrl);
      setArticles(response.data.articles);
      console.log(articles)
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-24">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Wpisz nazwę kraju"
          value={search}
          onChange={handleSearchChange}
          className="border border-gray-400 p-2 mr-2"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Ładowanie..." : "Szukaj"}
        </button>
      </form>

      {articles.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mt-8 mb-8 text-center">Top Headlines</h2>
          <ul>
            {articles.map((article) => (
              <li key={article.url} className="mb-6 bg-gray-300 rounded-xl">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <div className="grid md:flex items-center justify-center mb-2">
                    {article.urlToImage && (
                      <img src={article.urlToImage} alt={article.title} className="md:w-96 md:h-72 mr-4 object-cover rounded-xl" />
                    )}
                    <div className="flex flex-col justify-between px-2">
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold mb-2 mt-2">{article.title}</h3>
                        <p className="text-gray-600 text-sm md:text-lg">{article.description}</p>
                      </div>
                      <p className="text-sm md:text-lg text-gray-400 mt-2 pb-3">{new Date(article.publishedAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-center mt-8">Brak wyników wyszukiwania</p>
      )}
    </div>
  );
};

export default NewsHeadlines;
