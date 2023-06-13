import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link,} from "react-router";
import Middle from "./pages/middle";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Error from "./pages/error";
import Guide from "./pages/guide";


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route path="/middle" element={<Middle />}></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/guide" element={<Guide />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="*" exact="true" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;