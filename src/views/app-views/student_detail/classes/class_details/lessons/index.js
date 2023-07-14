import { Button, Menu, Modal, Rate, Divider } from "antd";
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
import Helper from "../../../../Helper";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon, { EyeOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Search from "antd/lib/transfer/search";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const subjectArray = [
  {
    Sr_No: 1,
    Lesson: "Introduction to English",
    Lesson_Type: "text",
    Estimated_Time: "30 minutes",
  },
  {
    Sr_No: 2,
    Lesson: "Mathematical Equations",
    Lesson_Type: "video",
    Estimated_Time: "45 minutes",
  },
  {
    Sr_No: 3,
    Lesson: "Science Experiment",
    Lesson_Type: "audio",
    Estimated_Time: "20 minutes",
  },
  {
    Sr_No: 4,
    Lesson: "History Quiz",
    Lesson_Type: "question",
    Estimated_Time: "15 minutes",
  },
];

function FacilityBooking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lessonList, setLessonList] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

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
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Lesson",
      dataIndex: "lesson_name",
    },
    {
      title: "Lesson Type",
      dataIndex: "lesson_type",
      render: (text) => {
        return (
          <>
          {text==0 && <FileTypeUsingProp type='text' />}
          {text==1 && <FileTypeUsingProp type='video' />}
          {text==2 && <FileTypeUsingProp type='audio' />}
          {text==3 && <FileTypeUsingProp type='question' />}
            
          </>
        );
      },
    },
    {
      title: "Estimated Time (Mins)",
      dataIndex: "estimated_time",
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
                      to="lessons/lesson_details?id=1&type=text"
                    >
                      <EyeOutlined className="mr-2" />
                      View Lesson Details
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
          <CourseAccess /> <span className="ml-2">Lessons</span>
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
          <Helper clients={lessonList} attribiue={SubjectColumn} />
        </div>
      ),
    },
  ];
  const getLessons = async () => {
    const res1 = await axios.get(
      `http://18.140.159.50:3333/api/view-lessons-by-subject/${id}`
    );
    setLessonList(res1.data);
  };
  useEffect(() => {
    if (id) {
      getLessons();
    }
  }, []);

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
