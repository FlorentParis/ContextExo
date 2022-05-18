import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './App.css';
import Navbar from './Components/common/navbar';

/* Pages */
import Home from './Pages/Home';
import ListMovies from './Pages/ListMovies';
import Login from "./Pages/auth/Login";
import Register from './Pages/auth/Register';
import DetailsMovie from './Pages/ListMovies/DetailsMovie';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="list-movies" element={<ListMovies />} />
          <Route path="details/:movieId" element={<DetailsMovie />} />
          <Route path="auth/*">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
