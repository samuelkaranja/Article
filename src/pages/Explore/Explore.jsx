import "./style.css";
import { FilterTags, Blog } from "../../components";
import { Articles } from "../../assets/Articles";

const Explore = () => {
  return (
    <div className="explore">
      <FilterTags />
      {Articles.map((article) => {
        return <Blog key={article.id} article={article} />;
      })}
    </div>
  );
};

export default Explore;
