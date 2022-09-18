import React from "react";
import { BrowserRouter as Router, Routes, Route ,useParams} from "react-router-dom";

import Home from "./components/Home";
import Details from "./components/Details";



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user/:id" element={<Details/>} />
        </Routes>
      </Router>
    </div>
  );
};



export default App;
