
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ShowList from './showList';
import ShowDetails from './ShowDetails';
import BookingForm from './BookingForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<ShowList />} />
        <Route path="/shows/:id" element={<ShowDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
      </Routes>
    </Router>
  );
};

export default App;
