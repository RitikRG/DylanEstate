import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SellerHomepage from './components/SellerHomepage';
import ListYourProperty from './components/ListYourProperty';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<SellerHomepage/>}/>
        <Route path='/ListYourProperty' element={<ListYourProperty/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
