import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !instructions) {
      setError("All fields are required");
      return;
    }

    if (ingredients.split(",").length < 2) {
      setError("Please provide at least two ingredients separated by commas");
      return;
    }

    setError("");
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        Add New Recipe
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg shadow-md"
      >
        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}

        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full p-3 mb-4 rounded border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Ingredients (comma separated)"
          className="w-full p-3 mb-4 rounded border"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <textarea
          placeholder="Preparation Steps"
          className="w-full p-3 mb-4 rounded border"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
