 import React from "react";

const ArticlesLists = ({ article, title }) => {
  return (
    <>
      <h1>{title}</h1>
      {article.map((article) => (
        <div className="article-preview" key={article.id}>
          <h2>{article.title}</h2>
          <p>Written by {article.author}</p>
        </div>
      ))}
    </>
  );
};

export default ArticlesLists;
