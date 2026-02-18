import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Go to <Link to="/blog/1">BlogPost 1</Link>
      </p>
      <p>
        Profile <Link to="/profile/details">Details</Link>
      </p>
    </div>
  );
}

export default Home;
