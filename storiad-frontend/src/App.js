import * as React from "react";
import BookInfo from "./pages/BookInfo";
import Books from "./pages/Books";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route path="/book-info" element={<BookInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
