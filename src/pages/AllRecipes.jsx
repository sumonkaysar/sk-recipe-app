import axios from "axios";
import { useEffect, useState } from "react";
import RecepiCard from "../components/cards/RecepiCard";

const AllRecipes = () => {
    const [recipes, setRecipes] = useState();

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
        <div className="mx-16 mb-20">
            <h1 className="text-4xl my-12 text-center">All Recipes </h1>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {recipes?.map((recipe) => (
                        <RecepiCard key={recipe?.id} recipe={recipe} />
                    ))}
            </div>
        </div>
    )
};

export default AllRecipes