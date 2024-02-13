import { useState } from "react";
import "./style.css";
import Posts from "../Posts/Posts";
import Notes from "../Notes/Notes";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Posts");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <div className="tabs_btns">
        <button onClick={() => handleTabClick("Posts")}>Posts</button>
        <button onClick={() => handleTabClick("Notes")}>Notes</button>
        <button onClick={() => handleTabClick("Reads")}>Reads</button>
      </div>
      <div>
        {activeTab === "Posts" && <Posts />}
        {activeTab === "Notes" && <Notes />}
        {/* {activeTab === "Reads" && <Reads />} */}
      </div>
    </div>
  );
};

export default Tabs;
