import { Button, Menu, Modal, Rate, Divider, Select } from "antd";
import {
  CourseAccess,
  CsvIcon,
  AcceptTick,
  CancelCross,
  FilterIcon,
  RatingTab,
  FiletypeText,
  FiletypeAudio,
  FiletypeVideo,
  FiletypeQue,
  FileTypeUsingProp,
} from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Helper from "../../../../../../../Helper";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon, {EyeOutlined} from "@ant-design/icons";
import { Tabs } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Search from "antd/lib/transfer/search";
import { Option } from "antd/lib/mentions";
import moment from "moment";
const submissions = [
    {
      User_ID: 1,
      Student_Name: "John Smith",
      Submission_on: "2023-05-15",
      Status: "Pending",
    },
    {
      User_ID: 2,
      Student_Name: "Jane Doe",
      Submission_on: "2023-05-14",
      Status: "Completed",
    },
    // Add more objects as needed
  ];
  


function FacilityBooking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchParams = new URLSearchParams(document.location.search);
  const assignmentId = searchParams.get("assignmentId");
  const [submissionList, setSubmissionList] = useState([])
  const batchId = searchParams.get("batchId");
  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 10000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  const SubjectColumn = [
    {
      title: "User ID",
      dataIndex: "user_id",
    },
    {
      dataIndex: "profile_pic",
      render:(image)=>{
        return <img style={{width:'60px'}} src={image} alt="..."/>
      }
    },
    {
      title: "Student Name",
      dataIndex: "student_name",
    },
    {
      title: "Submission on",
      dataIndex: "submitted_at",
      render:(date)=>{
        return <>{moment(date).format("DD-MM-YYYY")}</>
      }
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return <div className={text==='completed'?'text-success':'text-warning'}>{text}</div>
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
                      to={`assignment_submission/view_submission?id=1&type=text&studentId=${record.student_id}&assignmentId=${record.assignment_id}`}
                    >
                      <EyeOutlined className="mr-2" />
                      View
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
          <CourseAccess /> <span className="ml-2">Assignments Submissions</span>
        </div>
      ),
      key: 1,
      children: (
        <div>
          <div style={{ width: "580px" }} className="d-flex mb-3">
            <div style={{ width: "220px" }}><Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
            /></div>
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
          </div>
          <Helper clients={submissionList} attribiue={SubjectColumn} />
        </div>
      ),
    }
  ];
  const getSubmissions = async(id) => {
    const res1 = await axios.get(`http://18.140.159.50:3333/api/view-assignment-submission-by-id/${id}`)
    setSubmissionList(res1.data.data);
  }
  useEffect(() => {
    if(assignmentId){
      getSubmissions(assignmentId)
    }
  }, [])
  

  return (
    <div className="tabbarWhite">
      <div className="p-3 bg-white">
      <div
          style={{ background: "#fafafb" }}
          className="mb-4 rounded d-flex justify-content-between align-items-start w-100 p-3"
        >
          <div
            style={{ gap: "10px",width:'80%' }}
            className="d-flex align-items-start w-100 p-3 justify-content-between"
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
              <div style={{ width: "240px" }}>
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
                <h5 className="m-0">Subject</h5>
                <p className="m-0">Safety Course</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Lesson Name</h5>
                <p className="m-0">Workplace Safety Introduction</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Assignment</h5>
                <p className="m-0">Assignment 1</p>
              </div>
            </div>
            
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
