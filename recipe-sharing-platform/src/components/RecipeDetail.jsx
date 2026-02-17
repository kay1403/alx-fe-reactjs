import { useParams } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p className="text-center mt-10">Recipe not found</p>;
  }

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {recipe.title}
      </h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full rounded-lg mb-6"
      />

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">
          Ingredients
        </h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">
          Instructions
        </h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
