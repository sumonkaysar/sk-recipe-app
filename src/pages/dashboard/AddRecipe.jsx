import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import ConfirmationModal from "../../components/shared/ConfirmationModal";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState();
  const [recipeData, setRecipeData] = useState({});
  const closeBtnRef = useRef(null);
  const navigate = useNavigate();

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
    setErrors({});

    const form = e.target;

    const id = form.id.value;
    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;

    if (id && title && price && category && description) {
      setRecipeData({
        id,
        title,
        price,
        category,
        description,
      })

      document.getElementById('confirmationModal')?.showModal();
    } else {
      !id && setErrors(prevErrors => ({ ...prevErrors, id: "ID can't be blank" }));
      !title && setErrors(prevErrors => ({ ...prevErrors, title: "Title can't be blank" }));
      !price && setErrors(prevErrors => ({ ...prevErrors, price: "Price can't be blank" }));
      !category && setErrors(prevErrors => ({ ...prevErrors, category: "Please choose a category" }));
      !description && setErrors(prevErrors => ({ ...prevErrors, description: "Description can't be blank" }));
    }
  }

  const handleCreateRecipe = async (recipeData) => {

    const result = await axios.post("http://localhost:3000/recipes", recipeData);
    if (result.status === 201) {
      toast.success("A new recipe is created successfully");
      navigate("/dashboard/manage-recipes");
    }
  };

  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-6 mt-12">Add Recipe</h1>
      <form onSubmit={confirmUpdateRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="id">ID </label>
          <input
            id="id"
            type="text"
            name="id"
            className="w-full bg-slate-100 input input-lg border-0 focus:outline-0"
          />
          {errors.id && <p className="text-error mt-1">{errors.id}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="title">Title </label>
          <input
            id="title"
            type="text"
            name="title"
            className="w-full bg-slate-100 input input-lg border-0 focus:outline-0"
          />
          {errors.title && <p className="text-error mt-1">{errors.title}</p>}
        </div>
        <div className="sm:flex gap-3 mb-5">
          <div className="flex-1 mb-5 sm:mb-0">
            <label htmlFor="price">Price </label>
            <input
              id="price"
              type="text"
              name="price"
              className="w-full bg-slate-100 input input-lg border-0 focus:outline-0"
            />
            {errors.price && <p className="text-error mt-1">{errors.price}</p>}
          </div>
          <div className="flex-1">
            <label htmlFor="category">Cateogry </label>
            <select
              id="category"
              name="category"
              className="w-full bg-slate-100 select select-lg border-0 focus:outline-0"
            >
              {categories?.map((category) => (
                <option key={category?.id} value={category?.title}>
                  {category?.title}
                </option>
              ))}
            </select>
            {errors.category && <p className="text-error mt-1">{errors.category}</p>}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="description">Description </label>
          <textarea
            id="description"
            name="description"
            className="w-full bg-slate-100 textarea textarea-lg border-0 focus:outline-0"
          />
          {errors.description && <p className="text-error mt-1">{errors.description}</p>}
        </div>
        <div className="mb-4">
          <input
            type="submit"
            value={"Add Recipe"}
            className="w-full btn text-white btn-primary py-3 px-5 border"
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
