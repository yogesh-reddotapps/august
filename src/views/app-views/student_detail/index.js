import { Button, Menu, Modal, Select, Rate, Switch, Divider } from "antd";
import {
  CourseAccess,
  ClassInvite,
  LeaveApplication,
  CsvIcon,
  AcceptTick,
  CancelCross,
  RatingTab,
  StudentAssessment,
  CertificationsIcon,
  ViewResult,
  AwardCerti,
  FilterIcon,
} from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import CustomIcon from "components/util-components/CustomIcon";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import Helper, { capitalizeFirstLetter } from "../Helper";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";
import { Tabs } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Search from "antd/lib/transfer/search";
const CertiArray = [
  {
      "ID": "001",
      "Course_Name": "English Literature",
      "Assessment": "Final Exam",
      "Certification_Title": "Literature Proficiency",
      "Awarded_On": "2023-05-01"
  },
  {
      "ID": "002",
      "Course_Name": "Mathematics",
      "Assessment": "Midterm Exam",
      "Certification_Title": "Mathematics Proficiency",
      "Awarded_On": "2023-05-05"
  },
  {
      "ID": "003",
      "Course_Name": "History",
      "Assessment": "Final Project",
      "Certification_Title": "History Proficiency",
      "Awarded_On": "2023-05-10"
  },
  {
      "ID": "004",
      "Course_Name": "Science",
      "Assessment": "Final Exam",
      "Certification_Title": "Science Proficiency",
      "Awarded_On": "2023-05-15"
  }
]

var courses = [
  {
    Id: 1,
    Course_Name: "Mathematics",
    Category: "Science",
    Language: "English",
    Date_of_Enroll: "2023-01-01",
    Status: "Enrolled"
  },
  {
    Id: 2,
    Course_Name: "History",
    Category: "Social Science",
    Language: "English",
    Date_of_Enroll: "2023-02-01",
    Status: "Enrolled"
  },
  {
    Id: 3,
    Course_Name: "Physics",
    Category: "Science",
    Language: "English",
    Date_of_Enroll: "2023-03-01",
    Status: "Completed"
  }
];

const BatchArray = [
  {
      "Course_ID": "C001",
      "Course_Name": "English Literature",
      "Batch_ID": "B001",
      "Start_Date": "2023-01-15",
      "Total_Classes": 20,
      "Status": "Active"
  },
  {
      "Course_ID": "C002",
      "Course_Name": "Mathematics",
      "Batch_ID": "B002",
      "Start_Date": "2023-02-10",
      "Total_Classes": 15,
      "Status": "Inactive"
  },
  {
      "Course_ID": "C003",
      "Course_Name": "History",
      "Batch_ID": "B003",
      "Start_Date": "2023-03-05",
      "Total_Classes": 18,
      "Status": "Active"
  },
  {
      "Course_ID": "C004",
      "Course_Name": "Science",
      "Batch_ID": "B004",
      "Start_Date": "2023-04-01",
      "Total_Classes": 12,
      "Status": "Active"
  }
]

const LeaveArray = [
  {
      "ID": "001",
      "Course_Name": "English Literature",
      "Assessment": "Final Exam",
      "Enrolled_On": "2023-01-10",
      "Status": "Active"
  },
  {
      "ID": "002",
      "Course_Name": "Mathematics",
      "Assessment": "Midterm Exam",
      "Enrolled_On": "2023-02-05",
      "Status": "Inactive"
  },
  {
      "ID": "003",
      "Course_Name": "History",
      "Assessment": "Final Project",
      "Enrolled_On": "2023-03-01",
      "Status": "Active"
  },
  {
      "ID": "004",
      "Course_Name": "Science",
      "Assessment": "Final Exam",
      "Enrolled_On": "2023-04-01",
      "Status": "Active"
  }
]


function FacilityBooking() {
  const [facilityBooking, setFacilityBooking] = useState(
    courses
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const BatchesColumn = [
    {
      title: "Course ID",
      dataIndex: "Course_ID",
    },
    {
      title: "Course Name",
      dataIndex: "Course_Name"
    },
    {
      title: "Batch ID",
      dataIndex: "Batch_ID",
    },
    {
      title: "Start Date",
      dataIndex: "Start_Date",
    },
    {
      title: "Total Classes",
      dataIndex: "Total_Classes"
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => {
        return (
          <div
            className={`${
              text !== "Active" ? "text-danger" : "text-success"
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
                    <Link className="d-flex align-items-center" to="student_detail/classes">
                      <EyeOutlined className="mr-2"/>
                      View Classes
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

  const leaveAppColumns = [
    {
      title: "ID",
      dataIndex: "ID",
    },
    {
      title: "Course Name",
      dataIndex: "Course_Name",
    },
    {
      title: "Assessment",
      dataIndex: "Assessment",
    },
    {
      title: "Enrolled On",
      dataIndex: "Enrolled_On",
    },
    {
      title: "Face Recognition",
      dataIndex: "Face_Recognition",
      render: ()=>{
        return<img src="/img/Avatar.png" alt="img"/>
      }
    },
    {
      title: "ID Uploaded",
      dataIndex: "ID_Uploaded",
      render: (avatar) => {
        return <img src="/img/idcard.png" alt="img"/>;
      },
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => {
        return (
          <div
            className={`${
              text !== "Active" ? "text-danger" : "text-success"
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
                    <Link className="d-flex align-items-center" to="student_detail/assessments/view_result">
                      <ViewResult/>
                      <span className="ml-2">View Result</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link className="d-flex align-items-center" to="curriculam_details/view_lesson_preview">
                      <AcceptTick/>
                      Accept
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link className="d-flex align-items-center" to="curriculam_details/view_lesson_preview">
                      <CancelCross/>
                      Reject
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
  const certificateColumn = [
    {
      title: "ID",
      dataIndex: "ID",
    },
    {
      title: "Course Name",
      dataIndex: "Course_Name",
    },
    {
      title: "Assessment",
      dataIndex: "Assessment",
    },
    {
      title: "Certification Title",
      dataIndex: "Certification_Title",
    },
    {
      title: "Awarded On",
      dataIndex: "Awarded_On",
      render: (text) => {
        return (
          <div>
            {text}
          </div>
        );
      },
    },
    {
      title:'Certificate',
      dataIndex:'Certificate',
      render: ()=>{
        return<img src="/img/3rd Certificate 1.png" alt="img" />
      }
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
                    <Link to="curriculam_details/award_certificate">
                      {" "}
                    <div className="d-flex align-items-center"><span className="mr-1"> <AwardCerti /></span>
                      Award Certificate</div> 
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="curriculam_details/view_lesson_preview">
                      {" "}
                      <DeleteOutlined className="mr-2 " />
                      Delete
                    </Link>
                  </Menu.Item>
                </Menu>
              }
            />
          </>
        );
      },
    },
  ]
 

  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 10000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const facilityBookingColumns = [
    {
      title: "Id",
      dataIndex: "Id",
    },
    {
      title: "Course Name",
      dataIndex: "Course_Name",
    },
    {
      title: "Category",
      dataIndex: "Category",
    },
    {
      title: "Language",
      dataIndex: "Language",
    },
    {
      title: "Date of Enroll",
      dataIndex: "Date_of_Enroll",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <div
            className={`${
              text !== "Active" ? "text-success" : "text-danger"
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
                    <Link className="d-flex align-items-center" to="curriculam_details/view_lesson_preview">
                      <AcceptTick/>
                      Accept
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link className="d-flex align-items-center" to="curriculam_details/view_lesson_preview">
                      <CancelCross/>
                      Reject
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
          <CourseAccess /> <span className="ml-2">Course Enroll</span>
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
          <Helper
            clients={facilityBooking}
            attribiue={facilityBookingColumns}
          />
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex justify-content-center">
          <ClassInvite /> <span className="ml-2">Batches</span>
        </div>
      ),
      key: 2,
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
          <Helper
            clients={BatchArray}
            attribiue={BatchesColumn}
          />
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex justify-content-center">
          <StudentAssessment /> <span className="ml-2">Assessments</span>
        </div>
      ),
      key: 3,
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
          <Helper clients={LeaveArray} attribiue={leaveAppColumns} />
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex justify-content-center">
          <CertificationsIcon /> <span className="ml-2">Certifications</span>
        </div>
      ),
      key: 4,
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
          <Helper clients={CertiArray} attribiue={certificateColumn} />
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
            style={{ width: "60%" }}
            className="d-flex align-items-start p-3 justify-content-between"
          >
            <div style={{ gap: "10px" }} className="d-flex align-items-center">
              <div>
                <img height={40} width={40} src="/img/avatar3.png" />
              </div>
              <div>
                <h5 className="m-0">Student</h5>
                <div className="d-flex align-items-center">
                  Janny Wilson <img className="ml-2" src="/img/female.png" />
                </div>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Email ID</h5>
                <p className="m-0">Janecooper@gmail.com</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Phone Number</h5>
                <p className="m-0">+65 123 456</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Last Login Date</h5>
                <p className="m-0">1 Mar 2022</p>
              </div>
            </div>
          </div>
            <div className="p-3 d-flex flex-column align-items-end">
              <h5 className="px-4 py-1 rounded text-white bg-success m-0 d-inline">Active</h5>
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
