import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
import DefaultLayout from "./layouts/DefaultLayout";
import PostsShow from "./pages/PostsShow";
import TagPosts from "./pages/TagPosts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/posts/:slug" element={<PostsShow />}></Route>
            <Route path="/tagposts/:tags" element={<TagPosts />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
