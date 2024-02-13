import "./style.css";
import Image from "../../assets/transylvania.jpg";

const Posts = () => {
  return (
    <>
      <div className="posts">
        <div className="posts_display">
          <div className="posts_img">
            <img src={Image} alt="" />
          </div>
          <div className="posts_info">
            <span className="title">How to build unique product</span>
            <span className="writer">Jessica Smith . 1 min read</span>
            <span className="subtitle">
              Rule No.1: Don't believe everything from how-to-build products
            </span>
          </div>
        </div>
        <div className="time">
          <span>3:03 PM</span>
        </div>
      </div>

      <div className="posts">
        <div className="posts_display">
          <div className="posts_img">
            <img src={Image} alt="" />
          </div>
          <div className="posts_info">
            <span className="title">How to build unique product</span>
            <span className="writer">Jessica Smith . 1 min read</span>
            <span className="subtitle">
              Rule No.1: Don't believe everything from how-to-build products
            </span>
          </div>
        </div>
        <div className="time">
          <span>3:03 PM</span>
        </div>
      </div>

      <div className="posts">
        <div className="posts_display">
          <div className="posts_img">
            <img src={Image} alt="" />
          </div>
          <div className="posts_info">
            <span className="title">How to build unique product</span>
            <span className="writer">Jessica Smith . 1 min read</span>
            <span className="subtitle">
              Rule No.1: Don't believe everything from how-to-build products
            </span>
          </div>
        </div>
        <div className="time">
          <span>3:03 PM</span>
        </div>
      </div>
    </>
  );
};

export default Posts;
