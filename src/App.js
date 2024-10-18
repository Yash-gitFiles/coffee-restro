import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Restaurant from "./pages/Restaurant";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import BlogGrid from "./pages/blog/BlogGrid";
import BlogSingle from "./pages/blog/BlogSingle";
import BlogStandard from "./pages/blog/BlogStandard";
import Contact from "./pages/contact/Contact";
import MenuCoffee from "./pages/menu/menuCoffee/MenuCoffee";
import MenuRestaurant from "./pages/menu/menuRestaurant/MenuRestaurant";
import FAQsRow from "./pages/pagesinner/FAQsRow";
import Gallery from "./pages/pagesinner/Gallery";
import History from "./pages/pagesinner/History";
import OurChefs from "./pages/pagesinner/OurChefs";
import Reservation from "./pages/pagesinner/Reservation";
import Services from "./pages/pagesinner/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="restaurant" element={<Restaurant />} />
          <Route path="about" element={<About />} />
          <Route path="menuCoffee" element={<MenuCoffee />} />
          <Route path="menuRestaurant" element={<MenuRestaurant />} />
          <Route path="services" element={<Services />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="history" element={<History />} />
          <Route path="ourChefs" element={<OurChefs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faqs" element={<FAQsRow />} />
          <Route path="blogGrid" element={<BlogGrid />} />
          <Route path="blogStandard" element={<BlogStandard />} />
          <Route path="blogSingle" element={<BlogSingle />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
