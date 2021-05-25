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
      {console.log(formValues)}
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
            <Col span={12}>
              <Form.Item
                label="businessName"
                name="businessName"
                label="Business Name"
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
                name="businessAddress"
                label="Business Address"
                rules={[
                  {
                    required: true,
                    message: "Please enter business address name",
                  },
                ]}
              >
                <Input placeholder="Please enter business address name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="contact"
                label="Contact"
                rules={[{ required: true, message: "Please enter contact" }]}
              >
                <Input placeholder="Please enter contact" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[{ required: true, message: "Please select an owner" }]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  { required: true, message: "Please choose the approver" },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  { required: true, message: "Please choose the dateTime" },
                ]}
              >
                <DatePicker.RangePicker
                  style={{ width: "100%" }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
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
