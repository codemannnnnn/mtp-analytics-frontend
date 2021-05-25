import React, { useState, useEffect, Suspense } from "react";

import UserDash from "./UserDash";
import UserAccounts from "./UserAccounts";
import ModalForm from "./ModalForm";

import { Table, Card, Statistic } from "antd";
import { useRecoilState } from "recoil";

import { getAllData } from "../state/api/getAllData";

const Dashboard = () => {
  const [data, setData] = useRecoilState(getAllData);
  const [customerData, setCustomerData] = useState([]);

  const { userInfo } = data[0];
  const accounts = data[0].accounts;

  useEffect(() => {
    const shapeData = () => {
      const arr = [];
      accounts.forEach((e) => {
        arr.push({
          key: e.id,
          name: e.businessName,
          email: e.businessEmail,
          phone: e.businessPhone,
          contact: e.businessPoc,
        });
      });
      setCustomerData(arr);
    };
    shapeData();
  }, [data]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
  ];

  return (
    <div>
      <h1>Dash</h1>

      <div className="dash-split">
        <div>
          <Card
            title={`${userInfo.firstName} ${userInfo.lastName}`}
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <p>{userInfo.email}</p>
            <p>{userInfo.workPhone}</p>
            <p>{userInfo.title}</p>
          </Card>
        </div>
        <div className="user-stats">
          <Statistic title="Stats" value={11111} />
        </div>
        <div>
          <ModalForm />
        </div>
      </div>
      <div className="account-info">
        <Table dataSource={customerData} columns={columns} />
      </div>
    </div>
  );
};

export default Dashboard;

//
