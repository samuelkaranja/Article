import "./style.css";
import Document from "../../assets/document.png";
import AddNote from "../AddNote/AddNote";

const Notes = () => {
  return (
    <div className="notes">
      <h2>Notes</h2>
      <div className="thoughts">
        <div className="thoughts_image">
          <img src={Document} alt="" />
        </div>
        <div className="thoughts_info">
          <span>Remote work is the future</span>
          <p>
            The future of work is remote. And it's not just tech companies who
            are embracing this change. Companies in finance, healthcare, retail,
            and more are allowing their employees to work from home. In fact,
            according to a recent survey, 74% of CFOs plan to shift...
          </p>
        </div>
      </div>
      <div className="thoughts">
        <div className="thoughts_image">
          <img src={Document} alt="" />
        </div>
        <div className="thoughts_info">
          <span>Remote work is the future</span>
          <p>
            The future of work is remote. And it's not just tech companies who
            are embracing this change. Companies in finance, healthcare, retail,
            and more are allowing their employees to work from home. In fact,
            according to a recent survey, 74% of CFOs plan to shift...
          </p>
        </div>
      </div>
      <div className="thoughts">
        <div className="thoughts_image">
          <img src={Document} alt="" />
        </div>
        <div className="thoughts_info">
          <span>Remote work is the future</span>
          <p>
            The future of work is remote. And it's not just tech companies who
            are embracing this change. Companies in finance, healthcare, retail,
            and more are allowing their employees to work from home. In fact,
            according to a recent survey, 74% of CFOs plan to shift...
          </p>
        </div>
      </div>
      <AddNote />
    </div>
  );
};

export default Notes;
