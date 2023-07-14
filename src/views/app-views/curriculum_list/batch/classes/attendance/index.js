import { Button, Menu, Modal, Rate, Divider } from "antd";
import {
  CourseAccess,
  CsvIcon,
  AcceptTick,
  CancelCross,
  FilterIcon,
} from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon, { EyeOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Search from "antd/lib/transfer/search";
import Helper from "views/app-views/Helper";

const students = [
    {
      ID: 1,
      Student_Name: "John Smith",
      DOB: "1998-05-10",
      Contact_No: "1234567890",
      Email_ID: "john.smith@example.com",
      Attendance: "Present",
    },
    {
      ID: 2,
      Student_Name: "Jane Doe",
      DOB: "1999-02-15",
      Contact_No: "9876543210",
      Email_ID: "jane.doe@example.com",
      Attendance: "Absent",
    },
    {
      ID: 3,
      Student_Name: "Jane Doe",
      DOB: "1999-02-15",
      Contact_No: "9876543210",
      Email_ID: "jane.doe@example.com",
      Attendance: "Absent",
    },
    {
      ID: 4,
      Student_Name: "Jane Doe",
      DOB: "1999-02-15",
      Contact_No: "9876543210",
      Email_ID: "jane.doe@example.com",
      Attendance: "Absent",
    },
    // Add more objects as needed
  ];
  

function FacilityBooking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const classColumn = [
    {
      title: "ID",
      dataIndex: "ID",
    },
    {
        dataIndex: "avatar",
        render: (avatar) => {
          return <img src='/img/avatar.png' alt="..."/>;
        },
    },
    {
      title: "Student Name",
      dataIndex: "Student_Name",
    },
    {
      title: "DOB",
      dataIndex: "DOB",
    },
    {
      title: "Contact No",
      dataIndex: "Contact_No",
    },
    {
      title: "Email ID",
      dataIndex: "Email_ID",
    },
    {
      title: "Attendance",
      dataIndex: "Attendance",
      render: (text) => {
        return (
          <div
            className={`${
              text === "Present" ? "text-success" : "text-danger"
            } font-weight-semibold`}
          >
            {text}
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
                    <Link
                      className="d-flex align-items-center"
                      to="classes/class_details"
                    >
                      {/* <EyeOutlined className="mr-2" /> */}
                      View Subjects
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      className="d-flex align-items-center"
                      to="classes/attendance"
                    >
                      {/* <EyeOutlined className="mr-2" /> */}
                      View Attendance
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
  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 10000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="tabbarWhite">
      <div className="p-3 bg-white">
        <div
          style={{ background: "#fafafb" }}
          className="mb-4 rounded d-flex justify-content-between align-items-start w-100 p-3"
        >
          <div
            style={{ gap: "10px", width: "80%" }}
            className="d-flex align-items-start p-3 justify-content-between"
          >
            <div>
              <div>
                <h5 className="m-0">ID</h5>
                <p className="m-0">#21</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div style={{ gap: "10px" }} className="d-flex align-items-top">
              <div>
                <img height={40} width={40} src="/img/avatar3.png" alt="img" />
              </div>
              <div style={{ width: "210px" }}>
                <h5 className="m-0">Course</h5>
                <div className="d-flex align-items-center">
                  Workplace Safety and Health in Construction Sites
                </div>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Course Category</h5>
                <p className="m-0">Safety courses</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Batch ID</h5>
                <p className="m-0">#WS-B1</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Class ID</h5>
                <p className="m-0">#WS-B1</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Class Date</h5>
                <p className="m-0">1 Mar 2022</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Class Time</h5>
                <p className="m-0">10 Am - 7 Pm</p>
              </div>
            </div>
          </div>
          <div className="p-3 d-flex flex-column align-items-end">
            <h5 className="px-4 py-1 rounded text-white bg-success m-0 d-inline">
              Completed
            </h5>
            <div>Since Monday, 1 Jan 2022</div>
          </div>
        </div>
        <h4 className="m-0">
          Teacher : <span className="text-info mr-2">Jane Cooper</span>
          <img src="/img/female.png" alt="..." />
        </h4>
      </div>

      <div>
          <div style={{ width: "450px" }} className="d-flex mb-3">
            <Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              style={{ width: "220px" }}
            />
            <Filter>
              <Button
                icon={<Icon component={FilterIcon} />}
                className="d-flex align-items-center ml-2"
              >
                Filters
              </Button>
            </Filter>
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
          </div>
          <Helper clients={students} attribiue={classColumn} />
        </div>
      <Modal
        width={600}
        footer={null}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="d-flex mb-3 flex-column">
          {/* <CustomIcon svg={Verified} /> */}
          <h3 style={{ margin: 0 }} className="font-weight-bold">
            Performance Ratings
          </h3>
          <Divider />
          <h5 className="font-weight-bold">Teacher</h5>
          <h5>Wade Smith</h5>
          <br />
          <h5 className="font-weight-bold">Ratings</h5>
          <Rate />
          <br />
          <h5 className="font-weight-bold">Remarks</h5>
          <TextArea rows={4} />
          <div>
            <Button className="mt-3 bg-info text-white">Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FacilityBooking;
