import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!title) {
      newErrors.title = "Title is required";
    }

    if (!ingredients) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "At least two ingredients required";
    }

    if (!steps) {
      newErrors.steps = "Preparation steps are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Recipe submitted successfully!");
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add New Recipe
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg shadow-lg"
      >
        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full p-3 mb-2 rounded border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && (
          <p className="text-red-500 mb-2">{errors.title}</p>
        )}

        <textarea
          placeholder="Ingredients (comma separated)"
          className="w-full p-3 mb-2 rounded border"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        {errors.ingredients && (
          <p className="text-red-500 mb-2">{errors.ingredients}</p>
        )}

        <textarea
          placeholder="Preparation Steps"
          className="w-full p-3 mb-2 rounded border"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        {errors.steps && (
          <p className="text-red-500 mb-4">{errors.steps}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
