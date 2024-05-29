import CategoryCard from "../cards/CategoryCard";

const Categories = ({ categories }) => {

    return (
        <div id="categories" className="mx-16">
            <h1 className="text-4xl my-20 text-center">Our Recipe Categories </h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                {categories?.map((category) => (
                    <CategoryCard key={category?.id} category={category} />
                ))}
            </div>
        </div>
    )
};

export default Categories