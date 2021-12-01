import React from "react";
import { useState } from "react";
import ArticlesLists from "../ArticlesLists";

const Home = () => {
  const [data, setData] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Lanre", id: 1 },
    {
      title: "How to make money while sleeping!",
      body: "lorem ipsum...",
      author: "Idunnu",
      id: 2,
    },
    {
      title: "The Developers Dilemma",
      body: "lorem ipsum...",
      author: "Eniola",
      id: 3,
    },
  ]);

  return (
    <div>
      <ArticlesLists article={data} title="Welcome to the Tech Blogsite" />
    </div>
  );
};

export default Home;
