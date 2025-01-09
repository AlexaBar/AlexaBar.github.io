import React, { useState } from 'react';
import './Home.css';

import Header from '../../components/Header/Header';
import ExploreList from '../../components/ExploreList/ExploreList';
import ToyDisplay from '../../components/ToyDisplay/ToyDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
const Home = () => {

  const[category,setCategory]= useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  );
}

export default Home;
