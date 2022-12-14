import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import {AuthContext} from "./helpers/AuthContext";
import {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3301/auth/auth", {
      headers:{
        accessToken: localStorage.getItem("accessToken"),
      },
    })
    .then((response)=> {
      if (response.data.error){
        setAuthState(false);
      }else {
        setAuthState(true);
      }
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState(false);
  };

  return (
    <div className="App"> 
    <AuthContext.Provider value={{authState, setAuthState}}>
      <Router>
        <div className="navbar">
          <Link to="/">Home Page</Link>    
          <Link to="/createpost">Create a Post</Link> 
          {!authState ? (  
            <>
              <Link to="/login">Login</Link> 
              <Link to="/registration">Registration</Link>             
            </>
          ) : (
            <button onClick={logout}>Logout</button>
          )}
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
