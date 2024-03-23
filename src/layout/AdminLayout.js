import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import {  Layout, Menu,  theme,} from "antd";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  

} from "@ant-design/icons";
import AdminHeader from "./header/AdminHeader";
import { type } from "@testing-library/user-event/dist/type";
import { Token } from "../utlis/Storage";

const { Header, Content, Sider } = Layout;

console.log("Item","ssffggg$(1)");

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);


const Adminlayout = () => {
  const {token, type}=Token()
  const navigate=useNavigate()
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  React.useEffect=(()=>{
    if(!token || type!="admin"){
      Navigate('/auth/login')
    }

  },[])
  return (
    <div>
      <div>
        <Layout>
          <Header style={{color:'White'}}>
           
           <AdminHeader/>
          </Header>
          <Content
            style={{
              padding: "0 48px",
            }}
          >
            {/* <Breadcrumb
              style={{
                margin: "16px 0",

                
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Layout
              style={{
                padding: "24px 0",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                

              }}
            >
              <Sider
                style={{
                  background: colorBgContainer,
                }}
                width={200}
              >
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{
                    height: "100%",
                  }}
                  items={items2}
                />
              </Sider>
              <div>
                <Outlet />
              </div>
            </Layout>
          </Content>
        </Layout>

      </div>
    </div>
  );
};

export default Adminlayout;
