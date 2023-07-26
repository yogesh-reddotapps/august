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
import Icon, { EyeOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Search from "antd/lib/transfer/search";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { headersForClasses } from "views/app-views/Export/Headers";
import ExportButton from "views/app-views/Export/ExportButton";
import { formatDate } from "constants/DateConstant";
import { API_BASE_URL } from "constants/ApiConstant";
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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [classArr, setclassArr] = useState([])
  const class_id = queryParams.get("class_id");
  const studentName = queryParams.get("student");
  const courseName = queryParams.get("course");
  const student_id = queryParams.get("student_id");

  const [newAllUsersData,setNewAllUsersData] = useState([]);
useEffect(()=>{
  let nAllUsersData = classArr
  nAllUsersData && nAllUsersData.map((item)=>{
    item.class_date=formatDate(item.class_date);
    item.start_time=moment(item.start_time,"HH:mm:ss").format("hh:mm A");
    item.end_time = moment(item.end_time,"HH:mm:ss").format("hh:mm A");
    item.status = item.status===0?"InActive":"Active"
  })
  setNewAllUsersData(nAllUsersData)
},[classArr])
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
      dataIndex: "id",
    },
    {
      title: "Date",
      dataIndex: "class_date",
      render:(date)=>{
        return<>{moment(date).format('YYYY-MM-DD')}</>
      }
    },
    {
      title: "Start Time",
      dataIndex: "start_time",
      render:(time)=>{
        return<>{moment(time, "HH:mm:ss").format("hh:mm A")}</>
      }
    },
    {
      title: "End Time",
      dataIndex: "end_time",
      render:(time)=>{
        return<>{moment(time, "HH:mm:ss").format("hh:mm A")}</>
      }
    },
    {
      title: "Teacher Assigned",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <div
            className={`${
              text === "completed" ? "text-success" : "text-warning"
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
                      to={`classes/class_details?id=${record.id}&student_id=${student_id}`}
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
            {/* <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button> */}
             <ExportButton data={newAllUsersData} passing={headersForClasses}/>
          </div>
          <Helper clients={classArr} attribiue={classColumn} />
        </div>
      ),
    },
  ];

  const getClassDet = async () => {
    let res1 = await axios.post(
      `${API_BASE_URL}/get-classes-By-batch-id`,
      { batch_id: 4 }
    );
    console.log(res1);
    // setclassArr(res1.data.data);
  };

  const fetchDet = async () => {
    const res3 = await axios.get(
      `${API_BASE_URL}/get-admin-student-batches/12`
    );
    // console.log(res3.data);
  };
  const getClassesByStudentId = async () => {
    const res1 = await axios.post('${API_BASE_URL}/get-admin-classes-by-student',{ "student_id":student_id});
    setclassArr(res1.data.data);
  }
  useEffect(() => {
    fetchDet();
    if(student_id){
      getClassesByStudentId()
    }
    if (class_id) {
      getClassDet();
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
                  {studentName}
                  <img className="ml-2" src="/img/male.png" alt="img" />
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
                  {courseName}
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
