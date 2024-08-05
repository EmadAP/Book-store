import LandingPage from "./pages/LandingPage";
import FindBook from "./pages/FindBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Hooks/Context";
import BookDetails from "./components/BookDetails/BookDetails";
AppProvider;

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/findBook" element={<FindBook />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
