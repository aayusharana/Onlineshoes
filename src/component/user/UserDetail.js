import { EyeOutlined } from "@ant-design/icons";
import { Button, Card, Form, Rate } from "antd";
import React from "react";
import { useAppContext } from "../../ContextApi";

import { AntdInput, SaveButton } from "../common";
import Order from "./Order";
import { Token } from "../../utlis/Storage";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { appState } = useAppContext();
  const navigate = useNavigate();

  console.log("userdetail", appState);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { token } = Token();
  const [isValue, setIsValue] = React.useState({
    qty: 0,
    Price: 0,
    name: null,
  });
  const handleByNow = (value) => {
    if (token) {
      setIsModalOpen(true);
      setIsValue({
        qty: value?.Qty,
        price: appState?.detail?.price * value?.Qty,
        name: appState?.detail?.name,
      });
      console.log("changed", value);
    } else {
      navigate("/auth/login");
    }
  };

  // const myValue = localStorage.getItem("userdetail");
  // const data = JSON.parse(myValue);
  // console.log("userdetail", JSON.parse(myValue));
  return (
    <div className="flex justify-center gap-2.5">
      <div>
        <Card
          hoverable
          style={{
            width: 440,
          }}
          cover={<img alt="example" src={appState.detail.image} />}
        >
          <div>
            <Button type="primary">Add to Cart</Button>
          </div>
        </Card>
      </div>
      <div
        className="border-2 border-gray w-1/4 p-3"
        // style={{
        //   boxSizing: "border-box",
        //   borderRadius: "1px",
        //   borderWidth: "1px",
        //   borderBlockColor: "black",
        // }}
      >
        <div className="text-xl font-bold">{appState.detail.name}</div>
        <div>Price:{appState.detail.price}</div>
        <div>Brand:{appState.detail.brand}</div>

        <div>
          <Rate value={appState.detail.rating} />
        </div>

        <div>
          <EyeOutlined />
          View:{appState.detail.view}
        </div>
        <div>Stock Available:{appState.detail.stockItem}</div>
        <div>Description:{appState.detail.description}</div>
        <div>
          <Form onFinish={handleByNow}>
            <AntdInput initialValue={1} name="Qty" type="number" />

            <div className=" flex justify-between items-center ">
              <div className="w-full">
                <SaveButton
                  className="bg-red text-white w-full"
                  type="submit"
                  name={"Buy Now"}
                />
              </div>
              <div>
                <SaveButton
                  type="submit"
                  className="bg-black text-white w-full"
                  name={"Add to Cart"}
                />
              </div>
            </div>
          </Form>
        </div>
      </div>
      {isModalOpen && (
        <Order
          isModalOpen={isModalOpen}
          setIsModalOpen={(e) => setIsModalOpen(e)}
          sumNetTotal={isValue?.price}
          sumQtyTotal={isValue?.qty}
          myOrder={[isValue]}
        />
      )}
    </div>
  );
};

export default UserDetails;