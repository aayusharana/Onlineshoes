import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";

const AdminHeader = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log("event", e);
    if (Number(e.key) === 2) {
      localStorage.removeItem("token");
      navigate("/auth/login");
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
      {/* <div>Logo</div> */}
      
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

export default AdminHeader;
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