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
} from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Helper from "../../../../Helper";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon, {EyeOutlined} from "@ant-design/icons";
import { Tabs } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Search from "antd/lib/transfer/search";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { headersForSubjectList } from "views/app-views/Export/Headers";
import ExportButton from "views/app-views/Export/ExportButton";
import { API_BASE_URL } from "constants/ApiConstant";
const subjectArray = [
    {
        "Sr_No": 1,
        "Subject_Name": "English",
        "Lessons": 20,
        "Estimated_Time": "40 hours"
    },
    {
        "Sr_No": 2,
        "Subject_Name": "Mathematics",
        "Lessons": 15,
        "Estimated_Time": "30 hours"
    },
    {
        "Sr_No": 3,
        "Subject_Name": "Science",
        "Lessons": 18,
        "Estimated_Time": "36 hours"
    },
    {
        "Sr_No": 4,
        "Subject_Name": "History",
        "Lessons": 12,
        "Estimated_Time": "24 hours"
    }
]

function FacilityBooking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subjectList, setSubjectList] = useState([])
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const batchId = queryParams.get("batchId");
  const classId = queryParams.get("classId");
  const courseId = queryParams.get("courseId");
  
const [newAllUsersData,setNewAllUsersData] = useState([]);
useEffect(()=>{
  let nAllUsersData =subjectList
  nAllUsersData && nAllUsersData.map((item)=>{
   
    item.estimateTime= estimate(item.lessons);
   
  })
  setNewAllUsersData(nAllUsersData)
},[subjectList])

const estimate =(lessons)=>{
  var a = lessons.reduce((total, lesson) => {
    if (lesson.estimated_time) {
      return total + parseInt(lesson.estimated_time);
    }
    return total;
  }, 0)
  return a;
}

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
      title: "Subject Name",
      dataIndex: "subject_name",
    },
    {
      title: "Lessons",
      dataIndex: "lesson_count",
    },
    {
      title: "Lesson Type",
      dataIndex: "Lesson_Type",
      render:()=>{
        return <div style={{gap:'8px'}} className="d-flex">
        <FiletypeText/>
        <FiletypeVideo/>
        <FiletypeAudio/>
        </div>
      }
    },
    {
      title: "Estimated Time (Mins)",
      dataIndex: "lessons",
      render:(lessons)=>{
        return<>{
          lessons.reduce((total, lesson) => {
            if (lesson.estimated_time) {
              return total + parseInt(lesson.estimated_time);
            }
            return total;
          }, 0)
        }</>
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
                      to={`view_subjects/lessons?batchId=${batchId}&subjectId=${record.subject_id}&courseId=${courseId}&classId=${classId}`}
                    >
                      <EyeOutlined className="mr-2" />
                      View Lesson
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
          <CourseAccess /> <span className="ml-2">subjects</span>
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
            {/* <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button> */}
            <ExportButton data={newAllUsersData} passing={headersForSubjectList}/> 
          </div>
          <Helper clients={subjectList} attribiue={SubjectColumn} />
        </div>
      ),
    },
  ];
  const getSubject = async (classId)=>{
    const res1 = await axios.get(`${API_BASE_URL}/get-subject-by-class/${classId}`)
    setSubjectList(res1.data.data.map((elem,i)=>{
      return {...elem,sr:i+1}
    }))
  }
  useEffect(() => {
    if (classId) {
      getSubject(classId)
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
              <div style={{ width: "180px" }}>
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
                <h5 className="m-0">Date</h5>
                <p className="m-0">1 Mar 2022</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Time</h5>
                <p className="m-0">10:0 Am-12:00 Pm</p>
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
