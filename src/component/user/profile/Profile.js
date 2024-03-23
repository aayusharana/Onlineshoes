import React from "react";
import { Tabs } from "antd";
import Record from "./Record";
import History from "./History";
import UzserProfile from "../../../layout/header/UzserProfile";
// import UserProfile from "./UserProfile";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Profile",
    children: <UzserProfile/>,
  },
  {
    key: "2",
    label: "History",
    children: <History />,
  },
  {
    key: "3",
    label: "Record",
    children: <Record />,
  },
  // {
  //   key: "4",
  //   label: "UserProfile",
  //   children: <UserProfile />,
  // },
];

const Profile = () => {
  return (
    <div>
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
};

export default Profile;