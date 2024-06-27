import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Breadcrumbs, Footer } from "./components";
import {
  Contact,
  Details,
  Edit,
  Explore,
  Home,
  Profile,
  Login,
} from "./pages/";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };

  return (
    <div className="App">
      <Router>
        <Navbar isAuth={isAuth} signUserOut={signUserOut} />
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
