import React from "react";
import "./style.css";
import Blog from "../Blog/Blog";
import { Articles } from "../../assets/Articles";

const Latest = () => {
  return (
    <div className="latest">
      <h2>Latest</h2>
      {Articles.map((article) => {
        return <Blog key={article.id} article={article} />;
      })}
    </div>
  );
};

export default Latest;
