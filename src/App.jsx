import React from "react";
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage'

const List = () => <div>Список</div>;
const Saved = () => <div>Сохраненные</div>;

const App = () => {
  return (
    <Router>
      <div className='w-full max-w-[1140px] mx-auto py-[15px] font-plus h-full pb-[30px]'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<List />} />
          <Route path="/server" element={<Saved />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
