import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";
import { LogOut } from "../../utlis/Storage";

const UserHeader = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log("event", e);
    if (Number(e.key) === 2) {
      LogOut();
      navigate("/");
    } else {
      navigate("/user/profile");
    }
  };

  const menu = (
    <Menu onClick={handleClick}>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="flex justify-between items-center">
      <div>
        <Dropdown overlay={menu} placement="bottom" arrow>
          <Avatar
            style={{ backgroundColor: "#1677ff" }}
            icon={<UserAddOutlined />}
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default UserHeader;
const items = [
  {
    key: "1",
    label: "Profile",
  },
  {
    key: "2",
    label: "Logout",
  },
];