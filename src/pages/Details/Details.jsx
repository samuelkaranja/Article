import { useEffect } from "react";
import "./style.css";
import { FaComments, FaChartLine, FaThumbsUp, FaTags } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Articles } from "../../assets/Articles";
import { Comments } from "../../components";

const Details = () => {
  // Makes sure the content starts at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const article = Articles.find((info) => info.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="details">
      <h1>{article.title}</h1>
      <h4>{article.subtitle}</h4>
      <div className="details_img">
        <img src={article.image} alt="" />
      </div>
      <div className="desc">
        <p>{article.description}</p>
      </div>
      <div className="icons">
        <ul>
          <li>
            <FaComments size={18} color="grey" />
          </li>
          <li>
            <FaTags size={18} color="grey" />
          </li>
          <li>
            <FaChartLine size={18} color="grey" />
          </li>
          <li>
            <FaThumbsUp size={18} color="grey" />
          </li>
        </ul>
      </div>
      <Comments />
    </div>
  );
};

export default Details;
