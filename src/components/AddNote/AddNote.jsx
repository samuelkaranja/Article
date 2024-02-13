import { useState } from "react";
import "./style.css";

const AddNote = () => {
  const [isVisisble, setIsVisisble] = useState(false);

  const toggleForm = () => {
    setIsVisisble(!isVisisble);
  };

  return (
    <div className="addnote">
      <button onClick={toggleForm}>{isVisisble ? "Close" : "Add Note"}</button>
      {isVisisble && (
        <div className="addnote_form">
          <form>
            <label>Title</label>
            <input type="text" placeholder="Enter title..." />
            <label>Description</label>
            <textarea rows={10} placeholder="Write your note.."></textarea>
            <button type="onsubmit">Add</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddNote;
