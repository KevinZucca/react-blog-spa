import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PostsShow() {
  const { slug } = useParams();
  const [post, setPost] = useState();
  const navigate = useNavigate();

  async function getSinglePost() {
    try {
      const response = await fetch(`http://localhost:3000/posts/${slug}`);
      const postData = await response.json();
      setPost(postData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getSinglePost();
  }, []);

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="mt-3 text-left bg-sky-500 rounded-xl px-5 py-2 hover:bg-sky-800"
      >
        Back
      </button>
      <div className="border h-[500px] p-4 w-1/4 m-auto my-10 flex flex-col gap-3 justify-center items-center text-center">
        {post ? (
          <>
            <h2 className="text-2xl">{post.title}</h2>
            <p>{post.content}</p>
          </>
        ) : (
          <p>Caricamento...</p>
        )}
      </div>
    </>
  );
}
