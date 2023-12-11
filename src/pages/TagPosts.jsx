import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TagPosts() {
  const { tags } = useParams();
  const [tagPosts, setTagPosts] = useState([]);

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
      <h2>All posts with "{tags}" tag</h2>
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
          <p className="m-auto">No posts for this category</p>
        )}
      </div>
    </>
  );
}
