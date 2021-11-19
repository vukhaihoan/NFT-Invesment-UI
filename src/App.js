import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "components/header";
import Home from "pages/home";
import SignIn from "components/Sign/singin";
import SignUp from "components/Sign/signup";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}
