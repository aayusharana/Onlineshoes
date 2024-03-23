import { Table } from "antd";
import React from "react";

const Record = () => {
  const [tableParams, setTableParams] = React.useState({
    current: 1,
    pageSize: 2,
    total: 5,
  });

  const handlePaginationChange = (paginationData) => {
    setTableParams({
      current: paginationData?.current,
      pageSize: paginationData?.pageSize,
      total: paginationData?.total,
    });
  };

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "34",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "44",
      name: "sita",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "55",
      name: "Sarita",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "68",
      name: "Santosh",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "79",
      name: "Sanvi",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "85",
      name: "Susmita",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "SN",
      // dataIndex:'key',
      render: (text, record, index) => {
        return (
          <div>
            {(tableParams?.current - 1) * tableParams?.pageSize + (index + 1)}
          </div>
        );
      },
    },
    {
      title: "Product",
      dataIndex: "Product",
      key: "Product",
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      key: "Quantity",
    },
    {
      title: "purchase",
      dataIndex: "purchase",
      key: "purchase",
    },
  ];
  return (
    <div>
      <Table
        dataSource={dataSource}
        rowKey={"key"}
        columns={columns}
        pagination={{
          current: tableParams.current,
          pageSize: tableParams.pageSize,
          total: tableParams.total,
          showQuickJumper: true,
          showLessItems: true,
        }}
        onChange={handlePaginationChange}
      />
    </div>
  );
};

export default Record;