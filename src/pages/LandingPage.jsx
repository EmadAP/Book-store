import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import BestBooks from "../components/BestBooks/BestBooks";
import Banner from "../components/Banner/Banner";
import AppStoreBanner from "../components/AppStoreBanner/AppStoreBanner";
import AllBooks from "../components/AllBooks/AllBooks";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";
import React, { useState } from "react";

//aos import
import AOS from "aos";
import "aos/dist/aos.css";
import PopUp from "../components/Popup/PopUp";

const LandingPage = () => {
  const [orderPopUp, setOrderPopUp] = useState(false);

  const handleOrderPopUp = () => {
    setOrderPopUp(!orderPopUp);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopUp={handleOrderPopUp} />
        <Hero handleOrderPopUp={handleOrderPopUp} />
        <BestBooks handleOrderPopUp={handleOrderPopUp} />
        <Banner />
        <AppStoreBanner />
        <AllBooks />
        <Testimonial />
        <Footer />
        <PopUp handleOrderPopUp={handleOrderPopUp} orderPopUp={orderPopUp} />
      </div>
    </>
  );
};

export default LandingPage;
