import "./style.css";
import Image from "../../assets/sam.jpeg";

const AuthorDetails = () => {
  return (
    <div className="authordetails">
      <div className="author">
        <div className="author_image">
          <img src={Image} alt="" />
        </div>
        <div className="author_info">
          <span>Samuel Karanja</span>
          <p>
            Building a new startup. Founder @ycombinator.prev.Design leadership
            @Google, avid espresso drinker
          </p>
          <span>@samkaranja</span>
        </div>
      </div>
      <div className="author_btns">
        <a href="/#">Follow</a>
        <a href="/#">Message</a>
      </div>
    </div>
  );
};

export default AuthorDetails;
