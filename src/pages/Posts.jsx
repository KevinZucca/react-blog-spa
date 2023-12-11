import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [postsList, setPostsList] = useState([]);

  async function getPosts() {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const posts = await response.json();
      setPostsList(posts);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h2>All posts</h2>

      <div className="w-full grid grid-cols-4 gap-5 p-4">
        {postsList.map((el, index) => (
          <div
            className="flex flex-col gap-5 items-center justify-center border h-[300px]"
            key={el.id}
          >
            <h3>{el.title}</h3>
            <Link to={`/posts/${el.slug}`}>
              <button className="bg-sky-500 rounded-xl p-3 hover:bg-sky-800">
                See details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
