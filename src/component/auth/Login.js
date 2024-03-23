import { Button, Card,  Form, Input, notification } from "antd";
import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { Admin, auth } from "../../utlis/UserItem";
import { LeftCircleFilled,  } from "@ant-design/icons";
import useAxiosPost from "../../axios/Uploader"


const Login = () => {
  const {loading,data:logindata,postData}=useAxiosPost()
  console.log("loading",logindata)
  const data = auth?.[0];

  const navigate = useNavigate();
  const onFinish = (values) => {
    // if (values?.username === data.type) {
    //   navigate("/");
    //   notification.info({ message: "Login successfully!" });
    //   localStorage.setItem("token", JSON.stringify(data));
    // } else if (values?.username === "admin") {
    //   const admindata = Admin?.map((item) => {
    //     return { ...item, name: values.username };
    //   });
    //   notification.info({ message: "Login successfully!" });
    //   localStorage.setItem("token", JSON.stringify(admindata?.[0]));
    //   navigate("/admin");
    // } else {
    //   notification.info({
    //     message: "Something want to wrong!",
    //     placement: "top",
    //   });
    // }
  };
  React.useEffect(()=>{
    if(logindata?.token){
      localStorage.setItem("token", JSON.stringify(logindata?.token));
      navigate("/");
    }
  },[logindata,navigate])
  return (
    <div className="w-96 h-auto m-auto pt-20">
      <Card className="opacity-80 bg-white">
        <div>
          <div>
            <LeftCircleFilled onClick={() => navigate(-1)} />
          </div>
          <div className="text-center font-bold text-xl pb-2.5">
            <h3>Login</h3>
          </div>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name={"username"}
              label={"User Name"}
              rules={[
                {
                  required: "true",

                  message: "The input  Valid email!",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name={"password"}
              label={"Password"}
              rules={[
                {
                  required: "true",
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <div className="flex justify-between">
              <Button htmlType="submit">Login</Button>
            </div>
          </Form>
          <div>
            Don't have an account? <Link to="/auth/signup">Sign Up</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;