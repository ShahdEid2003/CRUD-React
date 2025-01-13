import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/footer.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Users from "./components/Users/users.jsx";
import Create from "./components/Users/create.jsx";
import Home from "./components/Home/home.jsx";
import Details from "./components/Users/details.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<Details />} />
          <Route path="/creat" element={<Create />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>

      <Footer />
    </>
  );
}
