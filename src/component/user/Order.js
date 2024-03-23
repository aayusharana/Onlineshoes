import { Avatar, Descriptions, Modal, Table } from "antd";
import React from "react";
import { Post } from "./Esewa";
import { config } from "./Khalti";
import KhaltiCheckout from "khalti-checkout-web";

const Order = ({
  isModalOpen,
  setIsModalOpen,
  sumNetTotal,
  sumQtyTotal,
  myOrder,
}) => {
  const [ispayment, setPayment] = React.useState(false);
  let checkout = new KhaltiCheckout(config);

  var path = "https://uat.esewa.com.np/epay/main";
  var params = {
    amt: sumNetTotal,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: sumNetTotal,
    pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
    scd: "EPAYTEST",
    su: "http://merchant.com.np/page/esewa_payment_success",
    fu: "http://merchant.com.np/page/esewa_payment_failed",
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handlePaymentMethod = (id) => {
    if (id === "1") {
      setPayment(id);
    } else if (id === "3") {
      setPayment(id); // Assuming you want to set payment method to Khalti
      checkout.show({ amount: 1000 }); // Show Khalti checkout
    }
  };

  const Paymentmethod = [
    {
      name: "Esewa",
      id: "1",
      icon: (
        <Avatar
          icon={
            <img
              src="https://esewa.com.np/common/images/esewa-icon-large.png"
              alt="/"
            />
          }
        />
      ),
    },
    {
      name: "IpsConnect",
      id: "2",
      icon: (
        <Avatar
          icon={
            <img
              src="https://esewa.com.np/common/images/esewa-icon-large.png"
              alt="/"
            />
          }
        />
      ),
    },
    {
      name: "Khalti",
      id: "3",
      icon: (
        <Avatar
          icon={
            <img
              src="https://blog.khalti.com/wp-content/uploads/2021/01/khalti-icon.png"
              alt="/"
            />
          }
        />
      ),
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];
  return (
    <div>
      <Modal
        title="Payment Methods"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div>
            <div>
              <Table columns={columns} dataSource={myOrder} />
            </div>
            <div className="flex justify-start items-start gap-2">
              <div>
                <Descriptions title="Total Details">
                  <Descriptions.Item label="Price">
                    {sumNetTotal}
                  </Descriptions.Item>
                  <Descriptions.Item label="Quentity">
                    {sumQtyTotal}
                  </Descriptions.Item>
                </Descriptions>
              </div>
              <div className="grid gap-3">
                {Paymentmethod?.map((item) => (
                  <div
                    key={item.id}
                    className={`border-8 border-current ${
                      item.id === ispayment
                        ? "border-red-800"
                        : "border-current"
                    } cursor-pointer`}
                    onClick={() => handlePaymentMethod(item.id)}
                  >
                    <div>{item.icon}</div>
                    <div>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {ispayment === "1" && Post(path, params)}
    </div>
  );
};

export default Order;