import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";
import UserProfile from "../../component/user/profile/UserProfile";

const UzserProfile = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {

    console.log("event", e);
    if (Number(e.key) === 2) {
     
      navigate("/");
    }else{
        navigate('Profile')
    }
  };
  const items = [
    { key: 1, label: "Option 1" },
    { key: 2, label: "Option 2" }
  ];

  const menu = (
    <Menu onClick={handleClick}>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="flex justify-between items-center">
      {/* <div>Logo</div> */}
      <div>
        <UserProfile/>
      </div>
      {/* <div>
        <Dropdown overlay={menu} placement="bottom" arrow>
          <Avatar
            style={{ backgroundColor: "#1677ff" }}
            icon={<UserAddOutlined />}
          />
        </Dropdown>
      </div> */}
    </div>
  );
};

export default UzserProfile;
// const items = [
//   {
//     key: "1",
//     label: "Profile",
//   },
//   {
//     key: "2",
//     label: "Logout",
//   },

// ];