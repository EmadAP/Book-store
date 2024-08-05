import Img1 from "../../assets/findBook/img1.jpg";
import SearchForm from "./SearchForm";

const Header = () => {
  const bgImage = {
    backgroundImage: `url(${Img1})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };
  return (
    <div>
      <div
        className="flex flex-col text-center text-white min-h-[450px] sm:min-h-[500px] gap-6 sm:pt-0"
        style={bgImage}
      >
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-10">
          Find Your Book Of Choice.
        </h2>
        <br />
        <p className="my-10 text-lg ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          dignissimos quia necessitatibus sapiente nesciunt accusantium, magnam
          quos obcaecati hic. Mollitia sed ullam itaque libero dolor dolorum,
          magni maiores maxime alias.
        </p>
        <SearchForm />
      </div>
    </div>
  );
};

export default Header;
