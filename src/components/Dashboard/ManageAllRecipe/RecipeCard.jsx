import { Link } from "react-router-dom";
import pizza from "../../../assets/pizza.webp";

const RecipeCard = ({ recipe, setSelectedId }) => {

    const handleDeleteRecipe = () => {
        setSelectedId(recipe?.id)
        document.getElementById('confirmationModal')?.showModal();
    }

    return (
        <div className="card bg-slate-50 shadow-lg card-compact">
            <figure>
                <img src={pizza} alt="food" className="max-w-50" />
            </figure>
            <div className="card-body">
                <h3 className="card-title">{recipe?.title}</h3>
                <h2 className="text-lg -mt-2">${recipe?.price}</h2>
                <p>
                    {recipe?.description?.length > 30
                        ? `${recipe?.description?.slice(0, 60)}...`
                        : recipe?.description}
                </p>
                <div className="badge badge-outline mt-3 mb-4">{recipe?.category}</div>
                <div className="card-actions">
                    <Link
                        to={`/recipes/${recipe?.id}`}
                        className="btn btn-primary btn-sm btn-outline"
                    >
                        Details
                    </Link>
                    <Link
                        to={`/dashboard/edit-recipe/${recipe?.id}`}
                        className="btn btn-outline btn-sm btn-neutral"
                    >
                        Update
                    </Link>
                    <button className="btn text-white btn-sm btn-error" onClick={handleDeleteRecipe}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard