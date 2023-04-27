import React from "react";
import { Form, Select, DatePicker,Button } from "antd";
const ScheduleNewClass = () => {
  const [form] = Form.useForm();
  const onFinish = (e) => {
    console.log(e);
  };
  const daysOfWeek = [
    {
      value: "Monday",
      label: "Monday",
    },
    {
      value: "Tuesday",
      label: "Tuesday",
    },
    {
      value: "Wednesday",
      label: "Wednesday",
    },
    {
      value: "Thursday",
      label: "Thursday",
    },
    {
      value: "Friday",
      label: "Friday",
    },
    {
      value: "Saturday",
      label: "Saturday",
    },
    {
      value: "Sunday",
      label: "Sunday",
    },
  ];

  return (
      <Form
        layout="vertical"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        form={form}
        name="control-hooks"
      >
    <div className="border rounded p-3 bg-white">
      <h5 className="text-info">Schedule New Class</h5>
        <Form.Item
          className="w-75"
          name="course_category"
          label="Course Category"
        >
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Select"
            onChange={(value) => console.log(`selected ${value}`)}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
            ]}
          />
        </Form.Item>
        <Form.Item className="w-75" name="course" label="Course">
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Select"
            onChange={(value) => console.log(`selected ${value}`)}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
            ]}
          />
        </Form.Item>
        <Form.Item className="w-75" name="venue" label="Venue">
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Select"
            onChange={(value) => console.log(`selected ${value}`)}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
            ]}
          />
        </Form.Item>
        <Form.Item className="w-75" name="course_date" label="Course Date">
          <DatePicker
            className="w-100"
            onChange={(date, dateString) => console.log(date, dateString)}
          />
        </Form.Item>
        <Form.Item className="w-75" name="course_day" label="Course Day">
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Select"
            onChange={(value) => console.log(`selected ${value}`)}
            options={daysOfWeek}
          />
        </Form.Item>
        <Form.Item className="w-75" name="course_time" label="Course Time">
          <DatePicker
            className="w-100"
            showTime
            onOk={(value) => console.log("onOk: ", value)}
            onChange={(date, dateString) => console.log(date, dateString)}
          />
        </Form.Item>
    </div>
    <div className="d-flex justify-content-end mt-3">
        <Form.Item>
          <Button className="mr-3" type="default">
            Cancel
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
    </div>
      </Form>
  );
};

export default ScheduleNewClass;
