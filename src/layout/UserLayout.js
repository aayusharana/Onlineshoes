import { Button, Input, Layout, theme ,Row,Col, Typography,Space, Menu} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import{FacebookOutlined,InstagramOutlined,MailOutlined,PhoneOutlined,TwitterOutlined} from "@ant-design/icons"

import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./header";
const{Text}=Typography
const UserLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <div>
        <Layout>
          <Header style={{ color: "skyblue" }}>
            <MainHeader />
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
              <div>
                <Outlet />
              </div>
            </Layout>
          </Content>
          <Footer
            style={{
              backgroundColor: "skyblue",
              color: "#fff",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <Row gutter={16}>
        <Col xs={24} sm={12} md={6}>
          <Text strong>Contact Us:</Text>
          <p>Email: aayurana42@gail.com</p>
          <p>Phone: 9808493647</p>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Text strong>Quick Links:</Text>
          <ul>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/Hotproduct">Hot Products</a></li>
            
          </ul>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Text strong>Connect with Us:</Text>
          <Space size="large">
            <a href="/" target="_blank" rel="noopener noreferrer"><FacebookOutlined /></a>
            <a href="/" target="_blank" rel="noopener noreferrer"><TwitterOutlined /></a>
            <a href="/" target="_blank" rel="noopener noreferrer"><InstagramOutlined /></a>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Text strong>Subscribe to Newsletter:</Text>
          <Input placeholder="Enter your email" />
          <Button type="primary" style={{ marginTop: "8px" }}>Subscribe</Button>
        </Col>
      </Row>

      
        <Col xs={24} sm={12} md={8} lg={6}>
        <Text strong>Payment Partner</Text>
            <Menu mode="vertical">
              <Menu.Item key="Esewa">Esewa</Menu.Item>
              <Menu.Item key="Khalti">Khalti</Menu.Item>
              <Menu.Item key="ConnectIPS">ConnectIPS</Menu.Item>
              <Menu.Item key="VisaCard">VisaCard</Menu.Item>
            </Menu>
          </Col>
          </Footer>  
          
      
            
        </Layout>
      </div>
    </div>
  );
};

export default UserLayout;
