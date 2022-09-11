import react from "react";
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="App"> 
      <Router>
        <Link to="/createpost">Create a Post</Link>
        <Link to="/">Home Page</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;