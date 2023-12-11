import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostsShow() {
  const { slug } = useParams();
  const [post, setPost] = useState();

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
      <div className="border h-[500px] p-4 w-1/4 m-auto my-10 flex justify-center items-center">
        {post ? (
          <>
            <h2>{post.title}</h2>
          </>
        ) : (
          <p>Caricamento...</p>
        )}
      </div>
    </>
  );
}
