import { Link } from "react-router-dom";
import RecepiCard from "../cards/RecepiCard";

const NewestRecipes = ({recipes}) => {

    return (
        <div className="mx-16">
            <h1 className="text-4xl mt-10 mb-20 text-center">Newest Recipes </h1>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {recipes
                    ?.reverse()
                    ?.slice(0, 4)
                    ?.map((recipe) => (
                        <RecepiCard key={recipe?.id} recipe={recipe} />
                    ))}
            </div>
            <div className="mt-12 text-center">
                <Link to="/recipes" className="btn btn-secondary text-white px-12">See All</Link>
            </div>
        </div>
    )
};

export default NewestRecipes