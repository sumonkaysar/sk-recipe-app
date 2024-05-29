import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pizza from "../assets/pizza.webp";
import axios from "axios";

const RecipeDetails = () => {
    const { id } = useParams();

    const [recipeDetails, setRecipeDetails] = useState();

    useEffect(() => {
        async function load() {

            const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
            if (recipeData?.status === 200) {
                setRecipeDetails(recipeData?.data);
            }
        }
        load();
    }, [id]);
    return (
        <div className="card w-3/4 max-w-[700px] mx-auto shadow-xl my-20 bg-slate-100">
            <figure>
                <img src={pizza} alt="food" className="max-w-50" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipeDetails?.title}</h2>
                <h2 className="card-title">{recipeDetails?.price}</h2>
                <p>
                    {recipeDetails?.description}
                </p>
                <div className="badge badge-outline">{recipeDetails?.category}</div>
            </div>
        </div>
    )
};

export default RecipeDetails