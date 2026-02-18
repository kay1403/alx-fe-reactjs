import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes cache
    refetchOnWindowFocus: false,
    keepPreviousData: true
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={() => refetch()}>
        Refetch Posts
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
