import "./style.css";
import { Link } from "react-router-dom";

const Blog = ({ article }) => {
  if (!article) {
    return <h3>Data cannot be found</h3>;
  }
  const { id, image, author, title, subtitle, readtime } = article;
  return (
    <div className="blog">
      <div className="article">
        <div className="article_img">
          <img src={image} alt={title} />
        </div>
        <div className="intro">
          <span className="author">{author} - Apr 15</span>
          <span className="title">{title}</span>
          <span className="detail">{subtitle}</span>
          <div className="show">
            <p>{readtime} min read</p>
            <Link to={`/details/${id}`}>Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
