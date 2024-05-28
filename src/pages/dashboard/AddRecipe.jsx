import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import ConfirmationModal from "../../components/shared/ConfirmationModal";

const AddRecipe = () => {
  const [categories, setCategories] = useState();
  const [recipeData, setRecipeData] = useState({});
  const closeBtnRef = useRef(null);

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/categories");
      if (data?.status === 200) {
        setCategories(data?.data);
      }
    }

    load();
  }, []);

  const confirmUpdateRecipe = (e) => {
    e.preventDefault();

    const form = e.target;

    const id = form.id.value;
    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    setRecipeData({
      id,
      title,
      price,
      category,
      description,
    })

    document.getElementById('confirmationModal')?.showModal();
  }

  const handleCreateRecipe = async (recipeData) => {

    const result = await axios.post("http://localhost:3000/recipes", recipeData);
    if (result.status === 200) {
      toast.success("A new recipe is created successfully");
      navigate("/dashboard/manage-recipes");
    }
  };

  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4">Add Recipe</h1>
      <form onSubmit={confirmUpdateRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Id </label>
          <input type="text" name="id" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input type="text" name="title" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input
            type="number"
            name="price"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Cateogry </label>
          <select name="category" id="" className="w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option key={category?.id} value={category?.title}>
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea name="description" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Add Recipe"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
      <ConfirmationModal closeBtnRef={closeBtnRef} data="Are you sure to create the recipe?">
        <button onClick={() => handleCreateRecipe(recipeData)} className="btn btn-primary text-white">Add</button>
      </ConfirmationModal>
    </div>
  );
};

export default AddRecipe;
