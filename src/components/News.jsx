import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { getTopHeadlines } from "./Api_file";
import "./News.css";
import { NewsContext } from "../Context/NewsContext";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
// Constants
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800";
const DEFAULT_AUTHOR = "Unknown Author";
const NEWS_LIMIT = 12;

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [input, setinput] = useState("");
  const { category } = useContext(NewsContext);

  useEffect(() => {
    fetchNews(category || "global");
  }, [category]);

  const fetchNews = async (query = "global") => {
    try {
      setLoading(true);
      const data = await getTopHeadlines(query);
      setNews(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Failed to load news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = () => {
    return new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading latest news...</h2>
      </div>
    );
  }

  const formsumbit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      fetchNews(input);
    }
    console.log("Search value:", input);
    setinput("");
  };

  if (error) {
    return (
      <div className="error-container">
        <div className="alert alert-danger">
          <h4>Error!</h4>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={fetchNews}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-8 bg-gray-50 min-h-screen ">
      {/* Search */}
      <div className="flex items-center text-black justify-between p-5">
        <div className="flex  items-center justify-between">
          <Link
            to="/"
            className="flex flex-col items-center justify-center text-black hover:text-blue-600 transition"
          >
            <i className="ri-home-3-line text-3xl"></i>
            <span className="text-xs mt-1">Home</span>
          </Link>
        </div>
        <form onSubmit={formsumbit} className="flex gap-4 ">
          <input
            type="text"
            placeholder="Search news (technology, sports, business...)"
            value={input}
            onChange={(e) => setinput(e.target.value)}
            className="w-full md:w-[420px] px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500 text-black"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-10 mb-12 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-3">Today's Top Headlines</h1>
        <p className="text-lg opacity-90 mb-4">
          Stay informed with the latest news
        </p>
        <div className="inline-block px-6 py-2 bg-white/20 rounded-full text-sm font-medium">
          {formatDate()}
        </div>
      </div>

      {/* News Grid */}
      <div className="  grid grid-cols-3 gap-4">
        {news.slice(0, NEWS_LIMIT).map((article, index) => (
          <div
            key={article.url || index}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="h-[220px] bg-gray-200 overflow-hidden">
              <img
                src={article.urlToImage || DEFAULT_IMAGE}
                alt={article.title}
                onError={(e) => (e.target.src = DEFAULT_IMAGE)}
                className="w-full h-full object-contain hover:scale-105 transition"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col    min-h-[340px]">
              <div className="flex justify-between text-sm text-gray-500 border-b pb-3 mb-3">
                <span className="truncate max-w-[140px]">
                  {article.author || DEFAULT_AUTHOR}
                </span>
                {article.publishedAt && (
                  <span>
                    {new Date(article.publishedAt).toLocaleDateString("en-IN")}
                  </span>
                )}
              </div>

              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[48px]">
                {article.title}
              </h3>

              <p className="text-gray-600 text-sm line-clamp-3">
                {article.description || "No description available"}
              </p>

              <div className="mt-auto pt-4">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {news.length === 0 && (
        <div className="text-center text-gray-500 text-lg mt-16">
          No news articles available.
        </div>
      )}
    </div>
  );
};

export default News;
