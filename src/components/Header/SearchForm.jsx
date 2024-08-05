import React, { useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Hooks/Context";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  // const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    // navigate("/book");
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            className="inline w-full rounded-xl border border-gray-300 bg-white text-gray-950 py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-primary focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm dark:bg-gray-900 dark:text-white duration-300"
            ref={searchText}
          />
          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-transparent bg-primary px-4 py-2 font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm hover:scale-105 duration-300 "
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
