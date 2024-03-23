import { Button, Card, DatePicker, Form, Input } from "antd";
import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="w-96 h-auto m-auto pt-20">
      <Card className="opacity-80 bg-white">
        <div>
          <div className="text-center font-bold text-xl pb-2.5">
            <h3>Sign up</h3>
          </div>
          <div>
            <Form layout="vertical">
              <Form.Item
                name={"full_name"}
                rules={[
                  {
                    required: "true",
                    message: "Please input your Full Name!",
                  },
                ]}
              >
                <Input
                  placeholder="Input your Full Name"
                  prefix={<UserOutlined />}
                />
              </Form.Item>
              <Form.Item
                name={"email"}
                rules={[
                  {
                    required: "true",
                    type: "email",
                    message: "The input is not Valid email!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name={"contact"}
                rules={[
                  {
                    pattern: "/^d{10}$/",
                    message: "Please input value not Valid!",
                  },
                  {
                    required: true,
                    message: "Please input Phone Number!",
                  },
                ]}
              >
                <Input placeholder="Contact" />
              </Form.Item>
              <Form.Item label={"Date Of Birth"} name={"dob"}>
                <DatePicker />
              </Form.Item>

              <Form.Item
                name={"password"}
                rules={[
                  {
                    required: "true",
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Form.Item
                name={"re-password"}
                rules={[
                  {
                    required: "true",
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Enter Password Again"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <div className="flex justify-between">
                <Button htmlType="submit">Create Account</Button>
                <Button onClick={() => navigate("/")}>Back Home</Button>
              </div>
            </Form>
            <div>
              Already have an account? <Link to="/auth/login">Login</Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;