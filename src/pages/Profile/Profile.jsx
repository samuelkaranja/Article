import { AuthorDetails, Tabs } from "../../components";
import "./style.css";

const Profile = () => {
  return (
    <div className="profile">
      <AuthorDetails />
      <Tabs />
    </div>
  );
};

export default Profile;
