import BookList from "../components/BookList/BookList";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const FindBook = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Header />
      <BookList />
    </div>
  );
};

export default FindBook;
