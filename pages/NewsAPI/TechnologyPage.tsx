import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";
import NewsBar from "@/components/Layout/Navbars/NewsBar";

type Props = {};

type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
};

const TechnologyHeadlines: React.FC<Props> = () => {
  const [search, setSearch] = useState<string>("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  async function getCountryCode(countryName: string): Promise<string | null> {
    try {
      const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
      const data = await response.json();
      if (data.length > 0) {
        return data[0].alpha2Code;
      } else {
        console.error(`The country code for the country could not be found ${countryName}`);
        return null;
      }
    } catch (error) {
      console.error(`There was an error retrieving the country code for the country ${countryName}: ${error}`);
      return null;
    }
  }
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const countryCode = await getCountryCode(search);
    if (countryCode) {
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=technology&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY_1}`;
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data.articles)
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
        alert('An error occurred while fetching articles.');
      }
    } else {
      setArticles([]);
      setSearch('');
      alert(`Country "${search}" not found. Please enter a valid country name.`);
    }
    setIsLoading(false);
  };

  return (
    <>
        <Head>
          <title>News App | Technology</title>
          <meta name="description" content="Generated by create next app"/>
          <link rel="icon" type="image/jpg" href="news.png"/>
        </Head>
        <NewsBar/>
        <h1 className="text-cyan-400 text-center text-xl md:text-3xl mt-16">Stay up to date with our technology news!</h1>
        <div className="mt-16 flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name of the country"
          value={search}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-2xl p-2 mr-2 focus:outline-none text-xl text-gray-400"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Loading..." : "Search"}
        </button>
      </form>
      </div>
    <div className="max-w-2xl xl:max-w-3xl mx-auto px-5 md:px-0">
      {articles.length > 0 ? (
        <>
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-8 text-center text-cyan-400">Top Headlines</h2>
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
        <p className="text-center mt-8 text-gray-400">No search results...</p>
      )}
    </div>
    </>
  );
};

export default TechnologyHeadlines;
