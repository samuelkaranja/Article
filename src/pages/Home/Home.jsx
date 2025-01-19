import React from "react";
//import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
//import { auth, db } from "../../firebase";
import "./style.css";
import { Banner, Latest, More, Popular } from "../../components";

const Home = ({ isAuth }) => {
  //const [postLists, setPostLists] = useState([]);

  //const postsCollectionRef = collection(db, "posts");

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const data = await getDocs(postsCollectionRef);
  //     setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getPosts();
  // });

  // const deletePost = async (id) => {
  //   const postDoc = doc(db, "posts", id);
  //   await deleteDoc(postDoc);
  // };

  return (
    <div>
      <Banner title="How to find your writing voice" text="Read Now" />
      {/* {postLists.map((post) => {
        return (
          <div className="post">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="delete">
              {isAuth && post.author.id === auth.currentUser.uid && (
                <button
                  style={{ border: "none" }}
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  &#128465;
                </button>
              )}
            </div>
            <div className="container">{post.postText}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })} */}
      <Latest />
      <Popular />
      <More />
    </div>
  );
};

export default Home;
