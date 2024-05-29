import "./CategoryCard.css";

/* eslint-disable react/prop-types */
export default function CategoryCard({ category }) {
  return (
    <div style={{ backgroundImage: `url(${category?.flag})` }} className="categoryCard rounded w-64 sm:w-full h-36 xl:h-48 bg-cover bg-no-repeat bg-center overflow-hidden cursor-pointer border-2">
      <div className="categoryCardOverlay bg-[#000000c2] w-full h-full flex justify-center items-center translate-y-52">
        <h3 className="text-xl font-semibold text-white">{category?.title}</h3>
      </div>
    </div>
  );
}
