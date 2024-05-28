import axios from "axios";
import { useEffect, useRef, useState } from "react";
import RecipeCard from "../../components/Dashboard/ManageAllRecipe/RecipeCard";
import ConfirmationModal from "../../components/shared/ConfirmationModal";
import { toast } from "react-toastify";

export default function ManageAllRecipe() {
  const [recipes, setRecipes] = useState();
  const [selectedId, setSelectedId] = useState(null);
  const closeBtnRef = useRef(null);

  const deleteRecipe = async (id) => {
    const result = await axios.delete(`http://localhost:3000/recipes/${id}`);

    if (result.status === 200) {
      setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id))
      toast.success("Recipe is Deleted succesfully");
    }
    closeBtnRef.current.click();
  }

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/recipes");
      if (data?.status === 200) {
        setRecipes(data?.data);
      }
    }
    load();
  }, []);

  return (
    <div className="w-full px-16 mt-10 mb-20">
      <h1 className="text-3xl mb-8">Manage All Recipe</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {recipes?.map((recipe) => (
          <RecipeCard key={recipe?.id} recipe={recipe} setSelectedId={setSelectedId} />
        ))}
      </div>
      <ConfirmationModal closeBtnRef={closeBtnRef} data="Are you sure to delete the recipe?">
        <button onClick={() => deleteRecipe(selectedId)} className="btn btn-error text-white">Delete</button>
      </ConfirmationModal>
    </div>
  );
}
