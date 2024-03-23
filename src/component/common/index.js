import { Button, Form, Input } from "antd";
import React from "react";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export const FormItem = (props) => {
  return (
    <Form.Item
      {...props}
      name={props.name}
      label={props?.label}
      rules={props.localrules}
    >
      {props.children}
    </Form.Item>
  );
};
export const AntdInput = (props) => {
  const temRule = [
    {
      required: props.required,
      message: `Please Enter ${props.label},`
    },
  ];

  const localrules =
    props.rules instanceof Array ? [...temRule, ...props.rules] : temRule;

  return (
    <FormItem {...props} localrules={localrules}>
      <Input onClick={props.onClick} onChange={props.onChange} />
    </FormItem>
  );
};
export const SaveButton = (props) => {
  return (
    <Button
      className={props.name}
      htmlType={props.type}
      onClick={props.onClick}
      onChange={props.onChange}
      loading={props.loading}
    >
     
     { props.name}
     
    </Button>
  );
};

export const EditButton = (props) => {
  return (
    <Button className="bg-yellow-300" htmlType={props.type}>
      Edit
    </Button>
  );
};

export const AntdUploder = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const temRule = [
    {
      required: props.required,
      message:`Please Enter ${props.label},`
    },
  ];

  const localrules =
    props.rules instanceof Array ? [...temRule, ...props.rules] : temRule;
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <FormItem {...props} localrules={localrules}>
      <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: "100%",
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </FormItem>
  );
}