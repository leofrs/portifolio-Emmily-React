import { useEffect } from "react";
import Aos from "aos";

import Header from "./components/header/Header";
import Banner from "./components/content/banner/Banner";
import Services from "./components/content/services/Services";
import Footer from "./components/footer/Footer";
import Cases from "./components/content/Cases/Cases";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Cases />
      <Footer />
    </>
  );
}

export default App;
