import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
import coverImg from "../../assets/findBook/cover_not_found.jpg";
import { FaArrowLeft } from "react-icons/fa";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description ? description : "No description found",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;
  return (
    <section className="px-24">
      <div className="my-auto py-8 mx-0 px-0">
        <button
          type="button"
          className="flex justify-center items-center ml-5 mb-10 transition duration-300 hover:text-primary"
          onClick={() => navigate("/findBook")}
        >
          <FaArrowLeft size={22} />
          <span className="ml-4 text-3xl font-semibold">Go Back</span>
        </button>
        <div className="gap-4 grid lg:grid-cols-2">
          <div className="max-h-[600px] lg:max-h-[800px] overflow-hidden ">
            <img
              src={book?.cover_img}
              alt="cover img"
              className="mx-0 my-auto w-full h-full object-contain"
            />
          </div>
          <div className="overflow-y-scroll lg:max-h-[800px] max-h-[600px] p-6 shadow-md hover:shadow-xl">
            <div className="mb-8">
              <span className="font-bold text-4xl ">{book?.title}</span>
            </div>
            <div className="opacity-80 mb-6">
              <span>{book?.description}</span>
            </div>
            <div className="mb-6 ">
              <span className="font-bold">Subject Places: </span>
              <span>{book?.subject_places}</span>
            </div>
            <div className="mb-6 ">
              <span className="font-bold">Subject Times: </span>
              <span>{book?.subject_times}</span>
            </div>
            <div className="mb-6 ">
              <span className="font-bold">Subject: </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
