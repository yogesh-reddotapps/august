import { Button, Menu, Modal, Form, Input, Select, DatePicker } from "antd";
import React, { useState } from "react";
import { ExportIcon, FilterIcon,Edit, ViewAttend } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import Helper from "../Helper";
import "./upcoming_classes.css";
import CustomIcon from 'components/util-components/CustomIcon'
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";

function TeacherManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [form] = Form.useForm();
  const dummyArray = [
    {
      id: 1,
      Assessment: "Workplace Safety and Health in Construction Sites",
      Assessment_Questions: "Woodland",
      Attended_By: "16 Jan 2023",
      Due_Date: "10:00 AM - 12:00 PM",
      Created_By: "25",
      Created_On: "25",
      invite_sent: "10",
    },
    {
      id: 2,
      Assessment: "Workplace Safety and Health in Construction Sites",
      Assessment_Questions: "Woodland",
      Attended_By: "16 Jan 2023",
      Due_Date: "10:00 AM - 12:00 PM",
      Created_By: "25",
      Created_On: "25",
      invite_sent: "10",
    },
    {
      id: 3,
      Assessment: "Workplace Safety and Health in Construction Sites",
      Assessment_Questions: "Woodland",
      Attended_By: "16 Jan 2023",
      Due_Date: "10:00 AM - 12:00 PM",
      Created_By: "25",
      Created_On: "25",
      invite_sent: "10",
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
      title: "Upcoming Courses",
      dataIndex: "Assessment",
    },
    {
      title: "Venue",
      dataIndex: "Assessment_Questions",
    },
    {
      title: "Class Date",
      dataIndex: "Attended_By",
    },
    {
      title: "Time",
      dataIndex: "Due_Date",
    },
    {
      title: "Teachers Invited",
      dataIndex: "Created_By",
    },
    {
      title: "Accepted By",
      dataIndex: "Created_On",
    },
    {
      title: "Rejected By",
      dataIndex: "invite_sent",
    },
    {
      title: "Pending",
      dataIndex: "status",
      render: (text) => {
        return (
          <div>
            10
          </div>
        );
      },
    },{
      title: "Action",
      // dataIndex: 'action',
      render: (record) => {
        return (
          <>
            <EllipsisDropdown
              menu={
                <Menu>
                  <Menu.Item>
                    <Link to="facility_booking">
                      {" "}
                      
                      <DeleteOutlined className='mr-2' />Delete
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <span>
                      {" "}
                      
                      <CustomIcon className='mr-1' svg={Edit} />Reschedule
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                  <Link to="upcoming_classes/class_attendance">
                     
                      <ViewAttend className='mr-2'/> {" "} View Attendance
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
        >
          <Link to={'upcoming_classes/schedule_new_class'}>
          Schedule New Class</Link>
        </Button>
      </div>
      {/* <Modal
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
      </Modal> */}

      <div className="mb-3">
        <Helper clients={dummyArray} attribiue={assesmentColumn} />
      </div>
    </div>
  );
}

export default TeacherManagement;
