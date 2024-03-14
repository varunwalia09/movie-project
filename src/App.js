import React from "react";
import './App.scss';
import Header from './components/Header.js';
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import Banner from "./components/Banner";
import List from "./components/List";
import Trending from "./components/Trending.js";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Header/>
              <HomeBanner/>
            </React.Fragment>
          }/>
          <Route path="/login" element={
            <React.Fragment>
              <Header/>
              <Login/>
            </React.Fragment>
          }/>
          
          <Route path="/register" element={
            <React.Fragment>
              <Header/>
              <Login/>
            </React.Fragment>
          }/>

          <Route path="/dashboard" element={
            <React.Fragment>
              <Header/>
              <Banner/>
              <List title=" Now Trending" param="trending"/>
              <List title="Now Playing" param="now_playing"/>
              <List title="Recomended Originals" param="originals"/>
              <List title="popular" param="popular"/>
              <List title="Top Rated" param="top_rated"/>
              <List title="Upcoming" param="upcoming"/>
            </React.Fragment>
          }/>
       {/* Add a new route for TrendingMovies */}
       <Route path="/trending" element={
            <React.Fragment>
              <Header/>
              <Trending title=" " param="trending" />
            </React.Fragment>
          } />

        </Routes>
      </Router>
    </React.Fragment>
     
    
  );
}
export default App;
