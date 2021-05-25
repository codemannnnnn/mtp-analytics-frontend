import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
const UserAccounts = (props) => {
  const { accountInfo } = props;
  const {
    businessName,
    businessEmail,
    businessPhone,
    businessPoc,
    deskPhoneTotal,
    phoneLinesMonthlyCost,
    internetProvider,
    internetMonthlyCost,
  } = accountInfo;
  return (
    <div>
      <div className="user-account-item">
        <span>{businessName}</span>
        <span>{businessEmail}</span>
        <span>{businessPhone}</span>
        <span>{businessPoc}</span>
      </div>
    </div>
  );
};

export default UserAccounts;
