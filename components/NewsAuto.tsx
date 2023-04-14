import React, { useState, useEffect } from "react";
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
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      if (location) {
        setIsLoading(true);
        const { latitude, longitude } = location as { latitude: number; longitude: number };
        const countryCodeUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
        try {
          const response = await axios.get(countryCodeUrl);
          const countryCode = response.data.countryCode;
          const apiUrl = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY_1}&pageSize=10`;
          const articlesResponse = await axios.get(apiUrl);
          setArticles(articlesResponse.data.articles);
        } catch (error) {
          console.error(error);
        }
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, [location]);

  return (
    <>
    <div className="max-w-2xl xl:max-w-3xl mx-auto mt-12 md:mt-24">
    <h1 className="text-cyan-400 text-center text-xl md:text-3xl">Welcome to NewsApp!</h1>
      
      {!location && <p className="text-center mt-8">Downloading location...</p>}

      {isLoading && <p className="text-center mt-8">Loading...</p>}

      {articles.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mt-8 mb-8 text-center text-cyan-400">Top Headlines</h2>
          <ul>
            {articles.map((article) => (
              <li key={article.url} className="mb-6 bg-white shadow-lg rounded-xl">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <div className="grid md:flex items-center justify-center mb-2">
                    {article.urlToImage && (
                      <img src={article.urlToImage} alt={article.title} className="md:w-96 md:h-72 mr-4 object-cover rounded-xl" />
                    )}
                    <div className="flex flex-col justify-between px-2">
                      <div>
                        <h3 className="text-lg md:text-xl xl:text-2xl font-bold mb-2 mt-2 text-gray-400">{article.title}</h3>
                        <p className="text-gray-600 text-sm xl:text-lg">{article.description}</p>
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
        location && !isLoading && <p className="text-center mt-8">There are no articles to display.</p>
        )}
      </div>
      </>
    );
};

export default NewsHeadlines;