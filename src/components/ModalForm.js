import React, { useState } from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

import axios from "axios";

const { Option } = Select;

const initFormVal = {
  businessName: "",
  businessEmail: "",
  businessAddress: "",
  businessCity: "",
  businessState: "",
  businessZip: null,
  businessPhone: null,
  businessPoc: "",
  phoneLines: null,
  phoneLinesMonthlyCost: null,
  phoneLinesProvider: "",
  internetMonthlyCost: null,
  internetProvider: "",
  deskPhoneTotal: null,
  deskPhoneMake: "",
  videoConferencingMonthlyCost: null,
  videoConferencingProvider: " ",
  longDistanceMonthlyCost: null,
  longDistanceProvider: " ",
  tollFreeMonthlyCost: null,
  tollFreeProvider: " ",
  phoneSystemMaintenanceMonthlyCost: null,
  phoneSystemMaintenanceProvider: " ",
  user_id: null,
};

const ModalForm = () => {
  const [visible, setVisible] = useState(false);
  const [formValues, setFormValues] = useState(initFormVal);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const onInputChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;

    setFormValues({
      ...formValues,
      [name]: val,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://mtp-analytics.herokuapp.com/customers", formValues)
      .then((res) => {
        console.log("successs");
      })
      .catch((err) => {
        console.log({ err: err.message });
      });
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> New account
      </Button>

      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={onSubmit} type="primary">
              Submit
            </Button>
          </div>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <h2>Business Information</h2>
            </Col>
            <Col span={12}>
              <Form.Item
                name="businessName"
                label="Name"
                onChange={onInputChange}
                rules={[
                  { required: true, message: "Please enter business name" },
                ]}
              >
                <Input
                  placeholder="Please enter business name"
                  value={formValues.businessName}
                  name="businessName"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="businessEmail"
                label="Email"
                onChange={onInputChange}
                rules={[
                  {
                    required: true,
                    message: "Please enter business email address",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter business email address"
                  value={formValues.businessEmail}
                  name="businessEmail"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="businessPoc"
                label="Contact"
                onChange={onInputChange}
                rules={[{ required: true, message: "Please enter contact" }]}
              >
                <Input
                  placeholder="Please enter contact"
                  value={formValues.businessPoc}
                  name="businessPoc"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="businessPhone"
                label="Phone"
                onChange={onInputChange}
                rules={[
                  { required: true, message: "Please enter phone number" },
                ]}
              >
                <Input
                  placeholder="Please enter phone number"
                  value={formValues.businessPhone}
                  name="businessPhone"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="businessAddress"
                label="Address"
                onChange={onInputChange}
                rules={[{ required: true, message: "Please enter address" }]}
              >
                <Input
                  placeholder="Please enter address"
                  value={formValues.businessAddress}
                  name="businessAddress"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="businessCity"
                label="City"
                onChange={onInputChange}
                rules={[{ required: true, message: "Please enter city" }]}
              >
                <Input
                  placeholder="Please enter city"
                  value={formValues.businessCity}
                  name="businessCity"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="businessState"
                label="State"
                onChange={onInputChange}
                rules={[{ required: true, message: "Please enter state" }]}
              >
                <Input
                  placeholder="Please enter state"
                  value={formValues.businessState}
                  name="businessState"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="businessZip"
                label="Zip"
                onChange={onInputChange}
                rules={[{ required: true, message: "Please enter zip" }]}
              >
                <Input
                  placeholder="Please enter zip"
                  value={formValues.businessZip}
                  name="businessZip"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phoneLines"
                label="Phone Lines"
                onChange={onInputChange}
                rules={[
                  { required: true, message: "Please enter phone lines" },
                ]}
              >
                <Input
                  placeholder="Please enter phone lines"
                  value={formValues.phoneLines}
                  name="phoneLines"
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="phoneLinesMonthlyCost"
                label="Cost"
                onChange={onInputChange}
                rules={[{ required: true, message: "Please enter address" }]}
              >
                <Input
                  placeholder="Please enter phone lines monthly cost"
                  value={formValues.phoneLinesMonthlyCost}
                  name="phoneLinesMonthlyCost"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="phoneLinesProvider"
                label="Provider"
                onChange={onInputChange}
                rules={[
                  {
                    required: true,
                    message: "Please enter phone lines provider",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter phone lines provider"
                  value={formValues.phoneLinesProvider}
                  name="phoneLinesProvider"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="internetProvider"
                label="Internet Provider"
                onChange={onInputChange}
                rules={[
                  { required: true, message: "Please enter internet provider" },
                ]}
              >
                <Input
                  placeholder="Please enter internet provider"
                  value={formValues.internetProvider}
                  name="internetProvider"
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="internetMonthlyCost"
                label="Cost"
                onChange={onInputChange}
                rules={[
                  { required: true, message: "Please enter internet provider" },
                ]}
              >
                <Input
                  placeholder="Please enter internet monthly cost"
                  value={formValues.internetMonthlyCost}
                  name="internetMonthlyCost"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="deskPhoneTotal"
                label="Desk Phones Total"
                onChange={onInputChange}
                rules={[
                  { required: true, message: "Please enter desk phone total" },
                ]}
              >
                <Input
                  placeholder="Please enter desk phone total"
                  value={formValues.deskPhoneTotal}
                  name="deskPhoneTotal"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="deskPhoneMake"
                label="Make"
                onChange={onInputChange}
                rules={[
                  { required: true, message: "Please enter desk phone make" },
                ]}
              >
                <Input
                  placeholder="Please enter desk phone make"
                  value={formValues.deskPhoneMake}
                  name="deskPhoneMake"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="videoConferencingProvider"
                label="Video Conferencing Provider"
                onChange={onInputChange}
                rules={[
                  {
                    required: true,
                    message: "Please enter video conferencing provider",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter video conferencing provider"
                  value={formValues.videoConferencingProvider}
                  name="videoConferencingProvider"
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="videoConferencingMonthlyCost"
                label="Cost"
                onChange={onInputChange}
                rules={[
                  {
                    required: true,
                    message: "Please enter video conferencing cost",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter video conferencing provider cost"
                  value={formValues.videoConferencingMonthlyCost}
                  name="videoConferencingMonthlyCost"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="longDistanceProvider"
                label="Long Distance Provider"
                onChange={onInputChange}
                rules={[
                  {
                    required: true,
                    message: "Please enter long distance provider",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter long distance provider"
                  value={formValues.longDistanceProvider}
                  name="longDistanceProvider"
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="longDistanceMonthlyCost"
                label="Cost"
                onChange={onInputChange}
                rules={[
                  {
                    required: true,
                    message: "Please enter long distance cost",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter long distance cost"
                  value={formValues.longDistanceMonthlyCost}
                  name="longDistanceMonthlyCost"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="tollFreeProvider"
                label="Toll Free Provider"
                onChange={onInputChange}
                rules={[
                  {
                    required: true,
                    message: "Please enter toll free provider",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter toll free provider"
                  value={formValues.tollFreeProvider}
                  name="tollFreeProvider"
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="tollFreeMonthlyCost"
                label="Cost"
                onChange={onInputChange}
                rules={[
                  {
                    required: true,
                    message: "Please enter toll free cost",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter toll free cost"
                  value={formValues.tollFreeMonthlyCost}
                  name="tollFreeMonthlyCost"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phoneSystemMaintenanceProvider"
                label="Phone System Maintenance Provider"
                onChange={onInputChange}
                rules={[
                  {
                    required: true,
                    message: "Please enter phone system maintenance provider",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter phone system maintenance provider"
                  value={formValues.phoneSystemMaintenanceProvider}
                  name="phoneSystemMaintenanceProvider"
                />
              </Form.Item>
            </Col>

            <Col span={4}>
              <Form.Item
                name="phoneSystemMaintenanceMonthlyCost"
                label="Cost"
                onChange={onInputChange}
                rules={[
                  {
                    required: true,
                    message: "Please enter phone system maintenance cost",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter phone system maintenance cost"
                  value={formValues.phoneSystemMaintenanceMonthlyCost}
                  name="phoneSystemMaintenanceMonthlyCost"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default ModalForm;
