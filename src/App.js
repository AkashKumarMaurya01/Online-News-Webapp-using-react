
import './App.css';

import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pagesize = 8;


  const [progress, setProgress] = useState(0)



  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={4}
          color='#f11946'
          progress={progress} />
        <Routes>

          <Route exact path="/" element={<News setProgress={setProgress} key='general' pagesize={pagesize} country='in' category='general' />} ></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} key='sports' pagesize={pagesize} country='in' category='sports' />} ></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} key='business' pagesize={pagesize} country='in' category='business' />} ></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key='entertai' pagesize={pagesize} country='in' category='entertainment' />} ></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} key='general' pagesize={pagesize} country='in' category='general' />} ></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} key='health' pagesize={pagesize} country='in' category='health' />} ></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} key='science' pagesize={pagesize} country='in' category='science' />} ></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} key='technology' pagesize={pagesize} country='in' category='technology' />} ></Route>





        </Routes>
      </Router>
    </div>
  )

}
export default App;



