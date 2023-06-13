import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import Middle from "./middle";
import Guide from "./guide";
import Services from "./services";
import Contact from "./contact";
import Footer from "./footer";
import Gototop from "./components/gototop";


const Home = () => {
  return( <>
    <Navbar />
    <Header />
    <Middle />
    <Contact />
    {/* <Guide /> */}
    <Services />
    <Footer />
  </>
  );
}
export default Home;
