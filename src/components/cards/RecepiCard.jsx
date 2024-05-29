/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import pizza from "../../assets/pizza.webp";

export default function RecepiCard({ recipe }) {
  return (
    <div className="card bg-slate-100 shadow-xl">
      <figure>
        <img src={pizza} alt="food" className="max-w-50" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe?.title}</h2>
        <h2 className="card-title">{recipe?.price}</h2>
        <p>
          {recipe?.description?.length > 30
            ? `${recipe?.description?.slice(0, 60)}...`
            : recipe?.description}
        </p>
        <div className="badge badge-outline">{recipe?.category}</div>
        <div className="card-actions justify-center mt-2">
          <Link
            to={`/recipes/${recipe?.id}`}
            className="w-full btn btn-primary text-white"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
