import { Button, Menu, Modal, Form, Input, Select, DatePicker } from "antd";
import React, { useState } from "react";
import { ExportIcon, FilterIcon } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import Helper from "../Helper";
import "./teacher_management.css";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";

const teacherArray = [
  {
    value: "Teacher 1",
    label: (
      <div>
        <img className="circleTeacherImage mr-2" src="/img/avatars/thumb-1.jpg" alt="img" />
        Teacher 1
      </div>
    ),
  },
  {
    value: "Teacher 2",
    label: (
      <div>
        <img className="circleTeacherImage mr-2" src="/img/avatars/thumb-2.jpg" alt="img" />
        Teacher 2
      </div>
    ),
  },
  {
    value: "Teacher 3",
    label: (
      <div>
        <img className="circleTeacherImage mr-2" src="/img/avatars/thumb-3.jpg" alt="img" />
        Teacher 3
      </div>
    ),
  },
  {
    value: "Teacher 4",
    label: (
      <div>
        <img className="circleTeacherImage mr-2" src="/img/avatars/thumb-4.jpg" alt="img" />
        Teacher 4
      </div>
    ),
  },
  // Add more objects with similar format here
  // ...
  {
    value: "Teacher 5",
    label: (
      <div>
        <img className="circleTeacherImage mr-2" src="/img/avatars/thumb-5.jpg" alt="img" />
        Teacher 5
      </div>
    ),
  },
  {
    value: "Teacher 6",
    label: (
      <div>
        <img className="circleTeacherImage mr-2" src="/img/avatars/thumb-6.jpg" alt="img" />
        Teacher 6
      </div>
    ),
  },
];


function TeacherManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [form] = Form.useForm();
  const dummyArray = [
    {
      id: 1,
      Assessment: "Jane Cooper",
      Assessment_Questions: "M",
      Attended_By: "SG",
      Due_Date: "+65 2541 3652",
      Created_By: "jane@gmail.com",
      Created_On: "3",
      invite_sent: "4",
    },
    {
      id: 2,
      Assessment: "Jane Cooper",
      Assessment_Questions: "M",
      Attended_By: "SG",
      Due_Date: "+65 2541 3652",
      Created_By: "jane@gmail.com",
      Created_On: "3",
      invite_sent: "4",
    },
    {
      id: 3,
      Assessment: "Jane Cooper",
      Assessment_Questions: "M",
      Attended_By: "SG",
      Due_Date: "+65 2541 3652",
      Created_By: "jane@gmail.com",
      Created_On: "3",
      invite_sent: "4",
    },
  ];

  const assesmentColumn = [
    {
      title: "User ID",
      dataIndex: "id",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src={`${avatar}`} />;
      },
    },
    {
      title: "Teacher Name",
      dataIndex: "Assessment",
    },
    {
      title: "Gender",
      dataIndex: "Assessment_Questions",
    },
    {
      title: "Nationality",
      dataIndex: "Attended_By",
    },
    {
      title: "Mobile Number",
      dataIndex: "Due_Date",
    },
    {
      title: "Email Id",
      dataIndex: "Created_By",
    },
    {
      title: "Class Assigned",
      dataIndex: "Created_On",
    },
    {
      title: "Invite Sent",
      dataIndex: "invite_sent",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <div
            className={`${
              text !== "Active" ? "text-danger" : "text-success"
            } font-weight-semibold`}
          >
            Active
          </div>
        );
      },
    },
    {
      title: "Action",
      // dataIndex: 'action',
      render: (record) => {
        return (
          <>
            <EllipsisDropdown
              menu={
                <Menu>
                  <Menu.Item>
                    <Link to="/app/teacher_management/teacher_detail">
                      {" "}
                      <EyeOutlined className="mr-2 " />
                      View Detail
                    </Link>
                  </Menu.Item>
                </Menu>
              }
            />
          </>
        );
      },
    },
  ];
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 10000);
  };
  const onFinish = (e) => {
    console.log(e);
  };

  let alertstyle = {
    position: "absolute",
    top: '0px',
    left: 0,
    width: " 100%",
    height: "50px",
    background: "#00AB6F",
    color: "white",
    transition:'all 0.5s ease 0s'
  };

  return (
    <div>
      {alertSuccess ? (
        <div
          className="d-flex align-items-center justify-content-center"
          style={alertstyle}
        >
          Class Invite Sent Successfully
        </div>
      ) : (
        ""
      )}

      <div className="d-flex justify-content-between mb-3">
        <div className="memberDetailTableSearchFilter">
          <SearchBox />
          <Filter>
            <Button
              icon={<Icon component={FilterIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Filters
            </Button>
          </Filter>
          <Button
            icon={<Icon component={ExportIcon} />}
            className="d-flex align-items-center ml-2"
          >
            Export
          </Button>
        </div>
        <Button
          className="bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
          onClick={() => setIsModalOpen(true)}
        >
          Send Invite
        </Button>
      </div>
      <Modal
        width={600}
        footer={null}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="d-flex my-3 flex-column">
          <h4 className="mb-3">Send invite for class</h4>
          <Form
            layout="vertical"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            form={form}
            name="control-hooks"
          >
            <Form.Item
              className="w-75"
              name="select_course"
              label="Select Course"
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
            <Form.Item
              className="w-75"
              name="date_of_class"
              label="Date Of Class"
            >
              <DatePicker
                className="w-100"
                onChange={(date, dateString) => console.log(date, dateString)}
              />
            </Form.Item>
            <Form.Item className="w-75" name="time_slot" label="Time Slot">
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
                ]}
              />
            </Form.Item>
            <Form.Item className="w-75" name="teachers" label="Teachers">
              <Select
                style={{
                  width: "100%",
                }}
                mode="multiple"
                placeholder="Select"
                onChange={(value) => console.log(`selected ${value}`)}
                options={teacherArray}
              />
            </Form.Item>
          </Form>
          <div className="d-flex justify-content-end mb-3">
            <Button
              className=" d-flex align-items-center rounded font-weight-semibold px-4"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
              onClick={() => {
                setIsModalOpen(false);
                setAlertSuccess(true);
                setTimeout(() => {
                  setAlertSuccess(false);
                }, 2000);
              }}
            >
              Send Invite
            </Button>
          </div>
        </div>
      </Modal>

      <div className="mb-3">
        <Helper clients={dummyArray} attribiue={assesmentColumn} />
      </div>
    </div>
  );
}

export default TeacherManagement;
