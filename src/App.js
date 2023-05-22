import React from "react";
//react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employer from "./home/Employer"

// import pages

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Employer />} />
        </Routes>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
