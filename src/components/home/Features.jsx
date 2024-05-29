const Features = () => {

    return (
        <section id="features" className="py-20 mt-10">
            <div className="mx-16 text-center">
                <h2 className="text-4xl font-bold mb-12">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-slate-100 p-4 shadow-md rounded-lg">
                        <h3 className="text-2xl font-bold mb-2">Easy to Use</h3>
                        <p>Our app is designed with a user-friendly interface to make your cooking experience enjoyable.</p>
                    </div>
                    <div className="bg-slate-100 p-4 shadow-md rounded-lg">
                        <h3 className="text-2xl font-bold mb-2">Variety of Recipes</h3>
                        <p>Discover a wide range of recipes from different cuisines around the world.</p>
                    </div>
                    <div className="bg-slate-100 p-4 shadow-md rounded-lg">
                        <h3 className="text-2xl font-bold mb-2">Community Driven</h3>
                        <p>Share your own recipes and get inspired by others in our community.</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Features