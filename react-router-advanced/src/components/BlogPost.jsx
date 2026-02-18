import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog Post #{id}</h2>
      <p>Content of the blog goes here...</p>
    </div>
  );
}

export default BlogPost;
