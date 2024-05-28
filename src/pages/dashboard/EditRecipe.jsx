import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ConfirmationModal from "../../components/shared/ConfirmationModal";

const EditRecipe = () => {
  const { id } = useParams();

  const [recipeDetails, setRecipeDetails] = useState();
  const [categories, setCategories] = useState();
  const [recipeData, setRecipeData] = useState({});
  const navigate = useNavigate();
  const closeBtnRef = useRef(null);

  useEffect(() => {
    async function load() {
      const categoriesData = await axios.get(
        "http://localhost:3000/categories"
      );
      if (categoriesData?.status === 200) {
        setCategories(categoriesData?.data);
      }

      const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
      if (recipeData?.status === 200) {
        setRecipeDetails(recipeData?.data);
      }
    }

    load();
  }, [id]);

  const confirmUpdateRecipe = (e) => {
    e.preventDefault();

    const form = e.target;

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

  const handleUpdateRecipe = async (id, recipeData) => {
    const result = await axios.patch(`http://localhost:3000/recipes/${id}`, recipeData);

    if (result.status === 200) {
      toast.success("Recipe is Updated successfully");
      navigate("/dashboard/manage-recipes");
    }
  };

  return (
    <div className="w-full px-16 mt-12 mb-20">
      <h1 className="text-4xl mb-6">Edit Recipe</h1>
      <form onSubmit={confirmUpdateRecipe} className="w-full">
        <div className="mb-5">
          <label htmlFor="">Title</label>
          <input
            defaultValue={recipeDetails?.title}
            type="text"
            name="title"
            className="w-full bg-slate-100 input input-lg border-0 focus:outline-0"
          />
        </div>
        <div className="flex gap-3 mb-5">
          <div className="flex-1">
            <label htmlFor="">Price</label>
            <input
              type="text"
              name="price"
              defaultValue={recipeDetails?.price}
              className="w-full bg-slate-100 input input-lg border-0 focus:outline-0"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="">Cateogry</label>
            <select
              name="category"
              className="w-full bg-slate-100 select select-lg border-0 focus:outline-0"
            >
              {categories?.map((category) => (
                <option
                  key={category?.title}
                  selected={category?.title === recipeDetails?.category}
                  value={category?.title}
                >
                  {category?.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="">Description </label>
          <textarea
            defaultValue={recipeDetails?.description}
            name="description"
            className="w-full bg-slate-100 textarea textarea-lg border-0 focus:outline-0"
          />
        </div>

        <div className="mb-5">
          <input
            type="submit"
            value={"Update Recipe"}
            className="w-full btn text-white btn-primary py-3 px-5 border"
          />
        </div>
      </form>
      <ConfirmationModal closeBtnRef={closeBtnRef} data="Are you sure to update the recipe?">
        <button onClick={() => handleUpdateRecipe(id, recipeData)} className="btn btn-primary text-white">Update</button>
      </ConfirmationModal>
    </div>
  );
};

export default EditRecipe;
