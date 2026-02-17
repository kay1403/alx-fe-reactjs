import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <p className="text-center mt-10 text-lg">
        Recipe not found
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6">
        {recipe.title}
      </h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full rounded-lg mb-6"
      />

      <div className="bg-gray-100 p-4 rounded-lg mb-6 shadow-md">
        <h2 className="text-xl font-semibold mb-3">
          Ingredients
        </h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3">
          Preparation Steps
        </h2>
        <p className="leading-relaxed">
          {recipe.instructions}
        </p>
      </div>
    </div>
  );
}

export default RecipeDetail;
