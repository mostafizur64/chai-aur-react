import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user)
  return <div>Profile :Welcome {user}</div>;
};

export default Profile;
