import { useEffect, useState } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';
import Landing from './Main/Landing';
import Footer from './Footer';


function App() {

  // LOCALSTORAGE

  // Eventos

  const {pathname} = useLocation();
  const dataUrl = matchPath('/search')

  return (
  <div className="app">
    <Header/>
    <main className="main">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/search' element={}/>
      </Routes>
    </main>
    <Footer/>
  </div>);
}

export default App;
