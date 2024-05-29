// import banner1 from "../../assets/image_01.jpeg";
import banner2 from "../../assets/home/banner.jpg";

export default function Banner() {
  return (
    <div
      className="hero min-h-[700px]"
      style={{
        backgroundImage: `url(${banner2})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md text-center">
          <h1 className="mb-5 text-4xl font-bold">Discover Recipes from Around the World</h1>
          <p className="mb-5">Explore a variety of recipes from different countries and bring new flavors to your kitchen.</p>
          <a href="#categories" className="btn btn-primary text-white">Get Started</a>
        </div>
      </div>
    </div>
  );
}
