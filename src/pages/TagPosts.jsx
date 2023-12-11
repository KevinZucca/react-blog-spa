import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TagPosts() {
  const { tags } = useParams();
  const [tagPosts, setTagPosts] = useState([]);
  const navigate = useNavigate();

  async function getTagPosts() {
    try {
      const response = await fetch(`http://localhost:3000/posts?tags=${tags}`);
      const tagsData = await response.json();
      setTagPosts(tagsData);
      console.log(tagsData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getTagPosts();
  }, []);
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="mt-3 text-left bg-sky-500 rounded-xl px-5 py-2 hover:bg-sky-800"
      >
        Back
      </button>
      <h2 className="text-center my-4">All posts with "{tags}" tag</h2>
      <div
        className={`w-full grid ${
          tagPosts.length > 0 ? "grid-cols-4" : "grid-cols-1"
        } gap-5 p-4`}
      >
        {tagPosts.length > 0 ? (
          tagPosts.map((el, index) => (
            <div
              className="flex flex-col gap-5 items-center justify-center border h-[300px]"
              key={el.id}
            >
              <h3>{el.title}</h3>
            </div>
          ))
        ) : (
          <div className="m-auto flex flex-col gap-8 justify-center items-center">
            <img className="w-40" src="/public/sad.png" alt="not-found" />
            <p>NO POSTS FOR THIS TAGS</p>
          </div>
        )}
      </div>
    </>
  );
}
