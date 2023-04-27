import React from "react";
import { Button, Divider, Tabs, Menu } from "antd";
import { AndroidOutlined } from "@ant-design/icons";
import { Mobileicon, AddressIcon, MailIcon } from "assets/svg/icon";
import Helper from "../Helper";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import { Link } from "react-router-dom";
import { FilterIcon, CsvIcon } from "assets/svg/icon";
import Icon from "@ant-design/icons";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";

const index = () => {
  const { TabPane } = Tabs;

  const courseenrolldata = [
    {
      course_name: "Course 1",
      course_category: "Category 1",
      medium: "Online",
      enroll_date: "2023-04-19",
      course_date: "2023-05-01",
      venue: "Virtual",
    },
    {
      course_name: "Course 2",
      course_category: "Category 2",
      medium: "In-person",
      enroll_date: "2023-04-19",
      course_date: "2023-06-01",
      venue: "City ABC",
    },
    {
      course_name: "Course 3",
      course_category: "Category 1",
      medium: "Online",
      enroll_date: "2023-04-19",
      course_date: "2023-07-01",
      venue: "Virtual",
    },
    // Add more objects as needed
  ];

  const courseenrollcolumn = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src={`/img/Avatar.png`} />;
      },
    },
    {
      title: "Course Name",
      dataIndex: "course_name",
    },
    {
      title: "Course Category",
      dataIndex: "course_category",
    },
    {
      title: "Medium",
      dataIndex: "medium",
    },
    {
      title: "Enroll Date",
      dataIndex: "enroll_date",
    },
    {
      title: "Course Date",
      dataIndex: "course_date",
    },
    {
      title: "Venue",
      dataIndex: "venue",
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
            active
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
                    <Link to="student_detail/course_enroll">
                      {" "}
                      View Details
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <span> Delete</span>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to={`event_list/update/`}
                      className="d-flex align-items-center"
                    >
                      Edit
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
  return (
    <>
      <div className="d-flex">
        <div style={{ width: "20%" }}>
          <div
            style={{ height: "600px" }}
            className="border rounded p-3 mb-4 bg-white"
          >
            <div className="d-flex justify-content-center flex-column align-items-center">
              <img width={80} src="/img/Avatar.png" alt="img" />
              <h4 className="mt-3 mb-0">Jane Cooper</h4>
              <h5 className="mt-0 mb-2">#21</h5>
              <Button className="px-5">Edit Details</Button>
              <Divider />
              <div className="w-100">
                <h4>Contact</h4>
                <div className="d-flex my-3">
                  <span className="ml-1 mr-2">
                    <Mobileicon />
                  </span>
                  +65 1234 5678
                </div>
                <div className="d-flex my-3">
                  <span className="ml-1 mr-2">
                    <AddressIcon />
                  </span>
                  Bedok-Bidadari Park Drive Singapore
                </div>
                <div className="d-flex my-3">
                  <span className="ml-1 mr-2">
                    <MailIcon />
                  </span>
                  janecooper@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "80%" }} className="pl-4">
          <div style={{ height: "600px" }}>
            <Tabs activeKey={"1"}>
              <TabPane
                tab={
                  <span>
                    <AndroidOutlined /> Course Enroll{" "}
                  </span>
                }
                key="1"
              >
                <div className=" mb-4">
                  <div className="membershipPlanTableSearchFilter d-flex mb-3">
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
                      icon={<Icon component={CsvIcon} />}
                      className="d-flex align-items-center ml-2"
                    >
                      Export
                    </Button>
                  </div>
                </div>
                <Helper
                  clients={courseenrolldata}
                  attribiue={courseenrollcolumn}
                />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
