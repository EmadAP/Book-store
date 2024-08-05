import { Link } from "react-router-dom";

const Book = (book) => {
  return (
    <div className="transition flex flex-col justify-between px-12 py-8 rounded-xl  dark:bg-gray-800 bg-white shadow-md hover:scale-105 duration-300 dark:shadow-black ">
      <div className="max-w-44 mx-auto md:max-w-[150px] lg:max-w-[120px]">
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className="mt-8 text-center">
        <Link to={`/book/${book.id}`} {...book}>
          <div className="mb-3 leading-6 font-bold text-3xl">
            <span>{book.title}</span>
          </div>
        </Link>
        <div className="leading-6 mb-1 text-2xl">
          <span className="capitalize font-bold">Author:</span>
          <span>{book.author.join(", ")}</span>
        </div>
        <div className=" text-2xl">
          <span className="capitalize font-bold">Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>
        <div className="opacity-60 text-sm ">
          <span className="capitalize font-bold">First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
