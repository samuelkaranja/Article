import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Contact, Details, Edit, Explore, Home } from "./pages/";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
