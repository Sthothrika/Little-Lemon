import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
