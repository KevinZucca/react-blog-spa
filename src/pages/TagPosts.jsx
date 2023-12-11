import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TagPosts() {
  const { tags } = useParams();
  const [tagPosts, setTagPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function getTagPosts() {
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:3000/posts?tags=${tags}`);
      const tagsData = await response.json();
      setTagPosts(tagsData);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getTagPosts();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full min-h-[50vh]">
          <p className="text-2xl">caricamento...</p>
        </div>
      ) : (
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
      )}
    </>
  );
}
