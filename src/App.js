import React from "react";
import { Button, Form, Input, DatePicker,Radio,Select,} from "antd";
const { Option } = Select;
const FormSubmit = () => {
  const onFinish = (values) => {
    console.log("values:", values);
  };
  
  return (
    <div>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          name="First_Name"
          label="First Name"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Middle_Name"
          label="Middle Name"

        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Last_Name"
          label="Last Name"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Email"
          label="Email Id"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Phone_Number"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
            {
              pattern: /^[0-10]*$/,
              message: "Please enter a valid phone number (numeric only).",
            },
          ]}
        >
          <Input type="tel" />
        </Form.Item>

        <Form.Item
          name="Country"
          label="Country"
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select placeholder="Select your country">
            <Option value="Nepal">Nepali</Option>
            <Option value="India">India</Option>
            <Option value="Bhutan">Bhutan</Option>
            <Option value="Chine">Chine</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="Gender"
          label="Gender">

          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
          <Radio value="other">Other</Radio>


        </Form.Item>



        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Form Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormSubmit;
