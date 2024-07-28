import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import PlaceList from './components/PlaceList';
import Main from './components/Main';
import Detail from './components/OrderDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main  />} />
        <Route path="/home" element={<Main  />} />
        <Route path="/detail/:id" element={<Detail  />} />
        
      </Routes>
    </Router>
  );
}

export default App;

