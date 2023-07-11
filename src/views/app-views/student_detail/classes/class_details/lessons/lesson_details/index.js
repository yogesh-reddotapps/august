import { Button, Menu, Modal, Rate, Divider } from "antd";
import {
  CourseAccess,
  CsvIcon,
  FilterIcon,
  LessonTypeText,
  ClassInvite,
  Edit,
} from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Helper from "../../../../../Helper";
import { useState } from "react";
import axios from "axios";
import Filter from "components/shared-components/Filter";
import Icon, { FileUnknownOutlined, DeleteOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Search from "antd/lib/transfer/search";
import CustomIcon from "components/util-components/CustomIcon";
import { API_BASE_URL } from "constants/ApiConstant";
const assignmentArray = [
  {
    ID: 1,
    Assignment: "Math Homework",
    Assignment_Type: "Problem Set",
    Assignment_Questions: 10,
    Submitted_By: "16 Jan 2022",
    Pending_Submissions: 3,
    Status: "Pending",
  },
  {
    ID: 2,
    Assignment: "English Essay",
    Assignment_Type: "Writing",
    Assignment_Questions: 1,
    Submitted_By: "16 Jan 2022",
    Pending_Submissions: 0,
    Status: "Completed",
  },
  {
    ID: 3,
    Assignment: "Science Experiment",
    Assignment_Type: "Lab Report",
    Assignment_Questions: 5,
    Submitted_By: "16 Jan 2022",
    Pending_Submissions: 1,
    Status: "Completed",
  },
  // Add more objects as needed
];

function FacilityBooking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchParams = new URLSearchParams(document.location.search);
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const lessonId = searchParams.get("lessonId");
  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 10000);
  };

  useEffect(() => {

      getLessonDetails();
    
  }, []);

  const getLessonDetails = ()=>{
    axios.post(`${API_BASE_URL}/view-lesson`,
    {
      headers:{
        "Content-Type": "application/json",
      },
      data:{
        lesson_id:parseInt(lessonId),
        subject_id:parseInt(id)
      }
    }).then((response)=>{
      console.log(response);
    }).catch((err)=>{
      console.log(err);
    })
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const SubjectColumn = [
    {
      title: "ID",
      dataIndex: "ID",
    },
    {
      title: "Assignment",
      dataIndex: "Assignment",
    },
    {
      title: "Assignment Type",
      dataIndex: "Assignment_Type",
    },
    {
      title: "Assignment Questions",
      dataIndex: "Assignment_Questions",
    },
    {
      title: "Submitted On",
      dataIndex: "Submitted_By",
    },
    // {
    //   title: "Pending Submissions",
    //   dataIndex: "Pending_Submissions",
    // },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => {
        return (
          <div className={text === "Completed" ? "text-success" : "text-danger"}>
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
                    <span>
                      {" "}
                      <DeleteOutlined className="mr-2 " />
                      Delete
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                    <span className="d-flex align-items-center">
                      <CustomIcon className="mr-2" svg={Edit} />
                      Edit
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      className="d-flex align-items-center"
                      to="lesson_details/view_submission"
                    >
                      <FileUnknownOutlined className="mr-2" />
                      View Submissions
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
          <CourseAccess /> <span className="ml-2">Lesson Details</span>
        </div>
      ),
      key: 1,
      children: (
        <div className="bg-white border rounded p-3">
          <div className="d-flex justify-content-between">
            <h5 className="d-flex align-items-center">
              {" "}
              <LessonTypeText /> <span>Text</span>
            </h5>
            <h5>Estimated Time: 60 Mins</h5>
          </div>
          <div className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard Lorem Ipsthe industry's standard
          </div>
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex justify-content-center">
          <ClassInvite /> <span className="ml-2">Assignments & Quizzes</span>
        </div>
      ),
      key: 2,
      children: (
        <div>
          <div className="d-flex justify-content-between">
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
           
          </div>
          <Helper clients={assignmentArray} attribiue={SubjectColumn} />
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
                <div>
                  <h5 className="m-0">ID</h5>
                  <p className="m-0">#24</p>
                </div>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div
              style={{ gap: "10px", width: "200px" }}
              className="d-flex align-items-top"
            >
              <div>
                <img height={40} width={40} src="/img/avatar3.png" alt="img" />
              </div>
              <div>
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
                <p className="m-0">Safety Course</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div style={{ width: "60px" }}>
              <div>
                <h5 className="m-0">Batch ID</h5>
                <p className="m-0">#WS-B1</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div style={{ width: "60px" }}>
              <div>
                <h5 className="m-0">Class ID</h5>
                <p className="m-0">#WS-001</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Subject</h5>
                <p className="m-0">Workplace Safety</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Lesson Name</h5>
                <p className="m-0">Workplace Safety Introduction</p>
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
