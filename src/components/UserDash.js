import React, { useState, useEffect } from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const UserDash = (props) => {
  const { userData } = props;
  const { firstName, lastName, email, workPhone, cellPhone, title } = userData;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h3">
            {firstName} {lastName}
          </CardTitle>
          <CardSubtitle>{title}</CardSubtitle>
          <CardText>e: {email}</CardText>
          <CardText>c: {cellPhone}</CardText>
          <CardText>w: {workPhone}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserDash;
