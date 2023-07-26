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
import Helper from "../../../../../Helper";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon, {EyeOutlined} from "@ant-design/icons";
import { Tabs } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Search from "antd/lib/transfer/search";
import { Option } from "antd/lib/mentions";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { headersForLesson } from "views/app-views/Export/Headers";
import ExportButton from "views/app-views/Export/ExportButton";
import { API_BASE_URL } from "constants/ApiConstant";
const subjectArray = [
    {
        "Sr_No": 1,
        "Lesson": "Introduction to English",
        "Lesson_Type": "text",
        "Estimated_Time": "30 minutes"
    },
    {
        "Sr_No": 2,
        "Lesson": "Mathematical Equations",
        "Lesson_Type": "video",
        "Estimated_Time": "45 minutes"
    },
    {
        "Sr_No": 3,
        "Lesson": "Science Experiment",
        "Lesson_Type": "audio",
        "Estimated_Time": "20 minutes"
    },
    {
        "Sr_No": 4,
        "Lesson": "History Quiz",
        "Lesson_Type": "question",
        "Estimated_Time": "15 minutes"
    }
]


function FacilityBooking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lessonList, setLessonList] = useState([])
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const history = useHistory()
  const batchId = queryParams.get("batchId");
  const subjectId = queryParams.get("subjectId")
  const courseId = queryParams.get("courseId")
  const classId = queryParams.get("classId")
  const [newAllUsersData,setNewAllUsersData] = useState([]);
  useEffect(()=>{
    let nAllUsersData =lessonList
    nAllUsersData = nAllUsersData && nAllUsersData.map((item)=>({
     ...item,
     type:item.lesson_type===0?"Text":item.lesson_type===1?"Video":item.lesson_type===2?"Audio":item.lesson_type===3?"MCQ":""
  
    }))
    // item.lesson_type===0?"Text":item.lesson_type===1?"Audio":item.lesson_type===2?"Video":item.lesson_type===3?"MCQ":"AR/VR"
    setNewAllUsersData(nAllUsersData)
  },[lessonList])
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
      title: "Sr No",
      dataIndex: "sr",
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
      render:(time)=>{
        return <>{time}Min</>
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
                    <Link
                      className="d-flex align-items-center"
                      to={`lessons/lesson_details?id=1&type=text&lessonId=${record.id}&batchId=${batchId}&courseId=${courseId}&classId=${classId}&subjectId=${subjectId}`}
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
          <div style={{ width: "580px" }} className="d-flex mb-3">
            <div style={{ width: "220px" }}><Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
            /></div>
            <Filter>
              <Button
                icon={<Icon component={FilterIcon} />}
                className="d-flex align-items-center ml-2"
              >
                Filters
              </Button>
            </Filter>
            {/* <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button> */}
             <ExportButton data={newAllUsersData} passing={headersForLesson}/>
             <Select style={{width:'130px'}} className="ml-2" placeholder='Lesson Type'>
              <Option value="Text">Text</Option>
              <Option value="Video">Video</Option>
              <Option value="Audio">Audio</Option>
              <Option value="Question">Question</Option>
             </Select>
          </div>
          <Helper clients={lessonList} attribiue={SubjectColumn} />
        </div>
      ),
    }
  ];
  const getLessons = async (subjectId) => {
    const res1 = await axios.get(
      `${API_BASE_URL}/view-lessons-by-subject/${subjectId}`
    );
    setLessonList(res1.data.map((elem,i)=>{
      return {...elem,sr:i+1}
    }));
  };
  useEffect(() => {
    if (subjectId) {
      getLessons(subjectId);
    } else {
      history.push('/')
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
                <h5 className="m-0">Batch ID</h5>
                <p className="m-0">#WS-B1</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Class ID</h5>
                <p className="m-0">#C-C31</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Subject</h5>
                <p className="m-0">Safety Course</p>
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
