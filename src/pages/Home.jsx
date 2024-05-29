import { useEffect } from "react";
import Banner from "../components/home/Banner";
import { useState } from "react";
import Categories from "../components/home/Categories";
import NewestRecipes from "../components/home/NewestRecipes";
import Features from "../components/home/Features";

export default function Home() {
  const [recipes, setRescipes] = useState();
  const [categories, setCategories] = useState();
  useEffect(() => {
    async function load() {
      //get recipies
      const recipeRes = await fetch("http://localhost:3000/recipes");
      const recipeData = await recipeRes.json();
      setRescipes(recipeData);
      //get categories
      const categoryRes = await fetch("http://localhost:3000/categories");
      const categoryData = await categoryRes.json();

      setCategories(categoryData);
    }
    load();

  }, []);

  return (
    <div className="mb-20">
      <Banner />
      <Categories categories={categories} />
      <Features />
      <NewestRecipes recipes={recipes} />
    </div>
  );
}
