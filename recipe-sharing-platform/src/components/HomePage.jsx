import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 hover:scale-105 transition-transform"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">
              {recipe.title}
            </h2>
            <p className="text-gray-600 mt-2">
              {recipe.summary}
            </p>

            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 mt-4 inline-block hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

