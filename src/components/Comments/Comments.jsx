import "./style.css";
import User from "../../assets/sam.jpeg";

const Comments = () => {
  return (
    <div className="comments">
      <h3>Comments</h3>
      <div className="reply">
        <div className="profile_img">
          <img src={User} alt="" />
        </div>
        <div className="r">
          <div className="user">
            <span>Heather</span>
            <span>5d</span>
          </div>
          <div className="m">
            <p>
              Great post, thanks for sharing your insights. I especially agree
              with the importance of building a strong foundation and getting
              hands-on experience. These are key factors that can help you stand
              out in the competitivetech job market.
            </p>
          </div>
        </div>
      </div>
      <div className="reply">
        <div className="profile_img">
          <img src={User} alt="" />
        </div>
        <div className="r">
          <div className="user">
            <span>Heather</span>
            <span>5d</span>
          </div>
          <div className="m">
            <p>
              Great post, thanks for sharing your insights. I especially agree
              with the importance of building a strong foundation and getting
              hands-on experience. These are key factors that can help you stand
              out in the competitivetech job market.
            </p>
          </div>
        </div>
      </div>
      <div className="reply">
        <div className="profile_img">
          <img src={User} alt="" />
        </div>
        <div className="r">
          <div className="user">
            <span>Heather</span>
            <span>5d</span>
          </div>
          <div className="m">
            <p>
              Great post, thanks for sharing your insights. I especially agree
              with the importance of building a strong foundation and getting
              hands-on experience. These are key factors that can help you stand
              out in the competitivetech job market.
            </p>
          </div>
        </div>
      </div>
      <div className="comment_form">
        <form>
          <input type="text" placeholder="Write a comment" />
        </form>
      </div>
    </div>
  );
};

export default Comments;
