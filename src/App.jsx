import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
