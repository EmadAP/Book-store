import { useGlobalContext } from "../../Hooks/Context";
import Loading from "../Loader/Loader";
import coverImg from "../../assets/findBook/cover_not_found.jpg";
import Book from "./Book";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const bookWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      //removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  console.log(bookWithCovers);

  if (loading) return <Loading />;

  return (
    <section className="p-12 bg-white dark:bg-gray-900 text-gray-950 dark:text-white duration-500">
      <div className="mx-0 my-auto px-0 py-8">
        <div className="section-title">
          <h2 className=" px-5 pb-6 font-bold text-2xl">{resultTitle}</h2>
        </div>
        <div className="gap-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {bookWithCovers.slice(0, 30).map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
