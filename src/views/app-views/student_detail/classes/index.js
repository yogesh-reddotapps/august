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
import Helper from "../../Helper";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon, {EyeOutlined} from "@ant-design/icons";
import { Tabs } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Search from "antd/lib/transfer/search";
const classArray = [
  {
    Class_ID: "001",
    Date: "2023-05-01",
    Start_Time: "09:00 AM",
    End_Time: "10:30 AM",
    Teacher_Assigned: "John Smith",
    Status: "Completed",
  },
  {
    Class_ID: "002",
    Date: "2023-05-02",
    Start_Time: "02:00 PM",
    End_Time: "03:30 PM",
    Teacher_Assigned: "Emily Johnson",
    Status: "Completed",
  },
  {
    Class_ID: "003",
    Date: "2023-05-03",
    Start_Time: "10:00 AM",
    End_Time: "11:30 AM",
    Teacher_Assigned: "Michael Davis",
    Status: "Upcoming",
  },
  {
    Class_ID: "004",
    Date: "2023-05-04",
    Start_Time: "04:00 PM",
    End_Time: "05:30 PM",
    Teacher_Assigned: "Jessica Wilson",
    Status: "Upcoming",
  },
];

function FacilityBooking() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 10000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const classColumn = [
    {
      title: "Class ID",
      dataIndex: "Class_ID",
    },
    {
      title: "Date",
      dataIndex: "Date",
    },
    {
      title: "Start Time",
      dataIndex: "Start_Time",
    },
    {
      title: "End Time",
      dataIndex: "End_Time",
    },
    {
      title: "Teacher Assigned",
      dataIndex: "Teacher_Assigned",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => {
        return (
          <div
            className={`${
              text === "Completed" ? "text-success" : "text-warning"
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
                      <EyeOutlined className="mr-2" />
                      View Class Details
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

  const items = [
    {
      label: (
        <div className="d-flex justify-content-center">
          <CourseAccess /> <span className="ml-2">Classes</span>
        </div>
      ),
      key: 1,
      children: (
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
          <Helper clients={classArray} attribiue={classColumn} />
        </div>
      ),
    },
  ];

  return (
    <div className="tabbarWhite">
      <div className="p-3 bg-white">
        <div
          style={{ background: "#fafafb" }}
          className="mb-4 rounded d-flex justify-content-between align-items-start w-100 p-3"
        >
          <div
            style={{ gap: "10px" }}
            className="d-flex align-items-start p-3 justify-content-between"
          >
            <div style={{ gap: "10px" }} className="d-flex align-items-center">
              <div>
                <img height={40} width={40} src="/img/avatar3.png" alt="img" />
              </div>
              <div>
                <h5 className="m-0">Student</h5>
                <div className="d-flex align-items-center">
                  Janny Wilson{" "}
                  <img className="ml-2" src="/img/female.png" alt="img" />
                </div>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div style={{ gap: "10px" }} className="d-flex align-items-top">
              <div>
                <img height={40} width={40} src="/img/avatar3.png" alt="img" />
              </div>
              <div style={{ width: "330px" }}>
                <h5 className="m-0">Course</h5>
                <div className="d-flex align-items-center">
                  Workplace Safety and Health in Construction Sites
                </div>
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
                <h5 className="m-0">Start Date</h5>
                <p className="m-0">1 Mar 2022</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">End Date</h5>
                <p className="m-0">1 Mar 2022</p>
              </div>
            </div>
          </div>
          <div className="p-3 d-flex flex-column align-items-end">
            <h5 className="px-4 py-1 rounded text-white bg-success m-0 d-inline">
              Active
            </h5>
            <div>Since Monday, 1 Jan 2022</div>
          </div>
        </div>
      </div>
      <Tabs>
        {items.map((item) => (
          <Tabs.TabPane tab={item.label} key={item.key}>
            {item.children}
          </Tabs.TabPane>
        ))}
      </Tabs>

      <div className="d-flex justify-content-between mb-3">
        {/* <div className="" style={{ display: "flex" }}>
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
        </div> */}
        {/* <Link
          to="staffManagement/add_new"
          className="bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
        >
          Add New Staff
        </Link> */}
      </div>
      {/* <div>
        <Helper clients={facilityBooking} attribiue={facilityBookingColumns} />
      </div> */}
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
