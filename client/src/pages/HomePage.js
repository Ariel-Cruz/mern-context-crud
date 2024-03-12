import { usePosts } from "../context/postContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";

export function HomePage() {
  const { posts } = usePosts();

  if (posts.length === 0)
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="text-9xl text-white" />
        <h1 className="text-white text-2xl">Aun no hay posts...</h1>
      </div>
    );

  return (
    <div className="text-white">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl text-gray-300 font-bold">Posts ({posts.length})</h1>
        <Link to="/post" className=" px-3 py-2 bg-indigo-500 hover:bg-indigo-400 text-white">Create new Post</Link>
      </header>
      
      <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
