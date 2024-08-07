import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./style.css";

const EditForm = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const navigate = useNavigate();

  const postsCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  return (
    <div className="editform">
      <label>Title:</label>
      <input
        type="text"
        placeholder="Post title...."
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <label>Description:</label>
      <textarea
        rows={12}
        columns={7}
        placeholder="Write Post here...."
        onChange={(event) => {
          setPostText(event.target.value);
        }}
      ></textarea>
      <button onClick={createPost}>Submit Post</button>
    </div>
  );
};

export default EditForm;
