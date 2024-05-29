import banner from "../../assets/about/banner.avif"

const Banner = () => {
    return (
        <section className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                    <p className="mb-5">Learn more about our mission and the team behind the Recipe App.</p>
                </div>
            </div>
        </section>
    )
};

export default Banner