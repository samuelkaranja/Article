import Blog from "../Blog/Blog";
import { Articles } from "../../assets/Articles";
import "./style.css";

const More = () => {
  return (
    <div className="more">
      <h2>More from our blog</h2>
      {Articles.map((article) => {
        return <Blog key={article.id} article={article} />;
      })}
    </div>
  );
};

export default More;
