import { useContext } from "react";
import { NewsContext } from "../Context/NewsContext";
import { Link } from "react-router-dom";

const categories = [
  { name: "Technology", value: "technology" },
  { name: "Business", value: "business" },
  { name: "Sports", value: "sports" },
  { name: "Finance", value: "finance" },
  { name: "Politics", value: "politics" },
  { name: "Health", value: "health" },
];

const Home = () => {
  const { setCategory } = useContext(NewsContext);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-250 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Global News Hub</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          Stay updated with real-time news from around the world. Search,
          explore and read verified headlines across every major category.
        </p>

        <Link to="/tranding_news">
          <button className="mt-8 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:scale-105 transition">
            Explore Latest News
          </button>
        </Link>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.value}
              to="/tranding_news"
              onClick={() => setCategory(cat.value)}
              className="bg-white shadow rounded-xl p-6 text-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition"
            >
              <p className="text-lg font-semibold text-gray-800">{cat.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className=" text-black  py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <i className="ri-search-line text-3xl pb-5"></i>
            <h3 className="text-xl font-semibold mb-2">Live Search</h3>
            <p className="text-gray-600 text-xs">
              Instantly find news on any topic using our real-time API powered
              search.
            </p>
          </div>

          <div>
            <i className="ri-check-line text-3xl pb-5"></i>
            <h3 className="text-xl font-semibold mb-2">Verified Sources</h3>
            <p className="text-gray-600 text-xs">
              News collected from trusted publishers across the world.
            </p>
          </div>

          <div>
            <i className="ri-filter-fill text-3xl pb-5"></i>
            <h3 className="text-xl font-semibold mb-2">Category Filters</h3>
            <p className="text-gray-600 text-xs">
              Easily switch between sports, tech, business, politics and more.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-600 rounded-lg h-10 text-gray-300 text-center py-8">
        <p>
          © {new Date().getFullYear()} Global News Hub. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Home;
