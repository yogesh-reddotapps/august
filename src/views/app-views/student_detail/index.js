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
import { useLocation } from "react-router-dom";
import {DownloadOutlined} from '@ant-design/icons'
import moment from "moment";
import { headersForAssesmentList, headersForBatchList, headersForCertificateList, headersForStudentEnroll } from "../Export/Headers";
import ExportButton from "../Export/ExportButton";
import { formatDate } from "constants/DateConstant";
import { API_BASE_URL } from "constants/ApiConstant";
const CertiArray = [
  {
    ID: "001",
    Course_Name: "English Literature",
    Assessment: "Final Exam",
    Certification_Title: "Literature Proficiency",
    Awarded_On: "2023-05-01",
  },
  {
    ID: "002",
    Course_Name: "Mathematics",
    Assessment: "Midterm Exam",
    Certification_Title: "Mathematics Proficiency",
    Awarded_On: "2023-05-05",
  },
  {
    ID: "003",
    Course_Name: "History",
    Assessment: "Final Project",
    Certification_Title: "History Proficiency",
    Awarded_On: "2023-05-10",
  },
  {
    ID: "004",
    Course_Name: "Science",
    Assessment: "Final Exam",
    Certification_Title: "Science Proficiency",
    Awarded_On: "2023-05-15",
  },
];

var courses = [
  {
    Id: 1,
    Course_Name: "Mathematics",
    Category: "Science",
    Language: "English",
    Date_of_Enroll: "2023-01-01",
    Status: "Enrolled",
  },
  {
    Id: 2,
    Course_Name: "History",
    Category: "Social Science",
    Language: "English",
    Date_of_Enroll: "2023-02-01",
    Status: "Enrolled",
  },
  {
    Id: 3,
    Course_Name: "Physics",
    Category: "Science",
    Language: "English",
    Date_of_Enroll: "2023-03-01",
    Status: "Completed",
  },
];

const BatchArray = [
  {
    id: 1,
    Course_ID: "C001",
    Course_Name: "English Literature",
    Batch_ID: "B001",
    Start_Date: "2023-01-15",
    Total_Classes: 20,
    Status: "Active",
  },
  {
    id: 2,
    Course_ID: "C002",
    Course_Name: "Mathematics",
    Batch_ID: "B002",
    Start_Date: "2023-02-10",
    Total_Classes: 15,
    Status: "Inactive",
  },
  {
    id: 3,
    Course_ID: "C003",
    Course_Name: "History",
    Batch_ID: "B003",
    Start_Date: "2023-03-05",
    Total_Classes: 18,
    Status: "Active",
  },
  {
    id: 4,
    Course_ID: "C004",
    Course_Name: "Science",
    Batch_ID: "B004",
    Start_Date: "2023-04-01",
    Total_Classes: 12,
    Status: "Active",
  },
];

const LeaveArray = [
  {
    ID: "001",
    Course_Name: "English Literature",
    Assessment: "Final Exam",
    Enrolled_On: "2023-01-10",
    Status: "Active",
  },
  {
    ID: "002",
    Course_Name: "Mathematics",
    Assessment: "Midterm Exam",
    Enrolled_On: "2023-02-05",
    Status: "Inactive",
  },
  {
    ID: "003",
    Course_Name: "History",
    Assessment: "Final Project",
    Enrolled_On: "2023-03-01",
    Status: "Active",
  },
  {
    ID: "004",
    Course_Name: "Science",
    Assessment: "Final Exam",
    Enrolled_On: "2023-04-01",
    Status: "Active",
  },
];

function FacilityBooking() {
  const [facilityBooking, setFacilityBooking] = useState(courses);
  const [studentData, setStudentData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseEnroll, setCourseEnroll] = useState([]);
  const [certificateList, setCertificateList] = useState([])
  const [aassessmentList, setAassessmentList] = useState([]);
  const [batchList, setBatchList] = useState([])
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const student_id = queryParams.get("student_id");
  const [newAllUsersData,setNewAllUsersData] = useState([]);
  const [newAllBatchesData,setNewAllBatchesData] = useState([]);
  const [newAllAssesmentData,setNewAllAssesmentData] = useState([]);
  const [newAllCertificationsData,setNewAllCertificationsData] = useState([]);
useEffect(()=>{
  let nAllUsersData = courseEnroll
  nAllUsersData && nAllUsersData.map((item)=>{
    item.enrollment_date=formatDate(item.enrollment_date);
    item.status=item.status ? "Active":"InActive"
  })
  setNewAllUsersData(nAllUsersData)
},[courseEnroll])

useEffect(()=>{
  let nAllUsersData = batchList
  nAllUsersData && nAllUsersData.map((item)=>{
    item.Start_Date=formatDate(item.start_date);
    item.status = item.status?"Active":"InActive"
  })
  setNewAllBatchesData(nAllUsersData)
},[batchList])


useEffect(()=>{
  let nAllUsersData = aassessmentList
  nAllUsersData && nAllUsersData.map((item)=>{
    item.enrollment_date=formatDate(item.enrollment_date);
  })
  setNewAllAssesmentData(nAllUsersData)
},[aassessmentList])

useEffect(()=>{
  let nAllUsersData = certificateList
  nAllUsersData && nAllUsersData.map((item)=>{
    item.issue_date=formatDate(item.issue_date);
  })
  setNewAllCertificationsData(nAllUsersData)
},[certificateList])

  const BatchesColumn = [
    {
      title: "Course ID",
      dataIndex: "course_id",
    },
    {
      title: "Course Name",
      dataIndex: "course_name",
    },
    {
      title: "Batch ID",
      dataIndex: "batch_id",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      render:(date)=>{
        return moment(date).format('YYYY-MM-DD')
      }
    },
    {
      title: "Total Classes",
      dataIndex: "total_classes",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <div
            className={`${
              text === 0 ? "text-danger" : "text-success"
            } font-weight-semibold`}
          >
            {text===0 ? 'Inactive':'Active'}
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
                      to={`student_detail/classes?student_id=${student_id}&class_id=${record.id}&student=${studentData.name}&course=${record.Course_Name}`
                        // state: {
                        //   batchData: record,
                        //   studentData: studentData,
                        // }
                      }
                    >
                      <EyeOutlined className="mr-2" />
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
      dataIndex: "id",
    },
    {
      title: "Course Name",
      dataIndex: "course_name",
    },
    {
      title: "Assessment",
      dataIndex: "assessment_title",
    },
    {
      title: "Enrolled On",
      dataIndex: "enrollment_date",
      render: (date) => {
      return moment(date).format('YYYY-MM-DD')
      },
    },
    {
      title: "Face Recognition",
      dataIndex: "Face_Recognition",
      render: () => {
        return <img src="/img/Avatar.png" alt="img" />;
      },
    },
    {
      title: "ID Uploaded",
      dataIndex: "ID_Uploaded",
      render: (avatar) => {
        return <img src="/img/idcard.png" alt="img" />;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <div
            className={`${
              text !== "accepted" ? "text-danger" : "text-success"
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
                      to={`student_detail/assessments/view_result?id=${student_id}&assessmentId=${record.id}`}
                    >
                      <ViewResult />
                      <span className="ml-2">View Result</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item onClick={()=>handleAssessmentStatus(record.id,'accepted')}>
                    <span
                      className="d-flex align-items-center"
                      to="curriculam_details/view_lesson_preview"
                    >
                      <AcceptTick />
                      Accept
                    </span>
                  </Menu.Item>
                  <Menu.Item onClick={()=>handleAssessmentStatus(record.id,'rejected')}>
                    <span
                      className="d-flex align-items-center"
                      to="curriculam_details/view_lesson_preview"
                    >
                      <CancelCross />
                      Reject
                    </span>
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
      dataIndex: "id",
    },
    {
      title: "Course Name",
      dataIndex: "course_id",
    },
    {
      title: "Assessment",
      dataIndex: "assessment_title",
    },
    {
      title: "Certification Title",
      dataIndex: "certification_title",
    },
    {
      title: "Awarded On",
      dataIndex: "issue_date",
      render: (text) => {
        return <div>{moment(text).format("YYYY-MM-DD")}</div>;
      },
    },
    {
      title: "Certificate",
      dataIndex: "thumbnail",
      render: (img) => {
        return <img style={{width:'80px'}} src={img} alt="img" />;
      },
    },
    {
      title: "Action",
      // dataIndex: 'action',
      render: (record) => {
        return (
          <>
          <Button>
          Download <DownloadOutlined />
          </Button>
            {/* <EllipsisDropdown
              menu={
                <Menu>
                  <Menu.Item>
                    <Link to="curriculam_details/award_certificate">
                      {" "}
                      <div className="d-flex align-items-center">
                        <span className="mr-1">
                          {" "}
                          <AwardCerti />
                        </span>
                        Award Certificate
                      </div>
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
            /> */}
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
  const facilityBookingColumns = [
    {
      title: "Id",
      dataIndex: "enrollment_id",
    },
    {
      title: "Course Name",
      dataIndex: "course_name",
    },
    {
      title: "Category",
      dataIndex: "course_category",
    },
    {
      title: "Language",
      dataIndex: "language_name",
    },
    {
      title: "Date of Enroll",
      dataIndex: "enrollment_date",
      render: (date) => {
        return <div>{moment(date).format("YYYY-MM-DD")}</div>;
      },
    },
    {
      title: "Status",
      // dataIndex: "status",
      render: () => {
        return (
          <div
            className={`${
              true !== "Active" ? "text-success" : "text-danger"
            } font-weight-semibold`}
          >
            Active
          </div>
        );
      },
    },
    // {
    //   title: "Action",
    //   // dataIndex: 'action',
    //   render: (record) => {
    //     return (
    //       <>
    //         <EllipsisDropdown
    //           menu={
    //             <Menu>
    //               <Menu.Item>
    //                 <Link
    //                   className="d-flex align-items-center"
    //                   to="curriculam_details/view_lesson_preview"
    //                 >
    //                   <AcceptTick />
    //                   Accept
    //                 </Link>
    //               </Menu.Item>
    //               <Menu.Item>
    //                 <Link
    //                   className="d-flex align-items-center"
    //                   to="curriculam_details/view_lesson_preview"
    //                 >
    //                   <CancelCross />
    //                   Reject
    //                 </Link>
    //               </Menu.Item>
    //             </Menu>
    //           }
    //         />
    //       </>
    //     );
    //   },
    // },
  ];

  const  handleAssessmentStatus = async (id,status)=>{
    const res1 = await axios.post(`${API_BASE_URL}/accepet-or-reject-assessment/${id}`,{status:status})
    console.log(res1);
  }

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
            {/* <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button> */}
            <ExportButton data={newAllUsersData} passing={headersForStudentEnroll}/>
          </div>
          <Helper clients={courseEnroll} attribiue={facilityBookingColumns} />
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
            {/* <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button> */}
            <ExportButton data={newAllBatchesData} passing={headersForBatchList}/>
          </div>
          <Helper clients={batchList} attribiue={BatchesColumn} />
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
            {/* <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button> */}
            <ExportButton data={newAllAssesmentData} passing={headersForAssesmentList}/>
          </div>
          <Helper clients={aassessmentList} attribiue={leaveAppColumns} />
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
            {/* <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button> */}
            <ExportButton data={newAllCertificationsData} passing={headersForCertificateList}/>
          </div>
          <Helper clients={certificateList} attribiue={certificateColumn} />
        </div>
      ),
    },
  ];

  const fetchStudent = async (id) => {
    let res1 = await axios.post(
      `${API_BASE_URL}/get-student-by-id`,
      {
        user_id: id,
      }
    );
    let data = res1.data[0];
    setStudentData(data);
    const res2 = await axios.get(
      `${API_BASE_URL}/get-admin-student-course-enroll/${data.id}`
    );
    setCourseEnroll(res2.data.batches);
    const res3 = await axios.get(
      `${API_BASE_URL}/get-admin-student-batches/${data.id}`
    );
    setBatchList(res3.data.batches);
    // const getCertificates = async () => {
      const res4 = await axios.get(`${API_BASE_URL}/get-certificates/${data.id}`);
      setCertificateList(res4.data);
    // }
    // const getAssessment = async () => {
      const res5 = await axios.get(`${API_BASE_URL}/get-assessment-by-student/${data.id}`);
      setAassessmentList(res5.data)
    // }
  };
 

  useEffect(() => {
    if (id) {
      fetchStudent(id);
      // getCertificates()
      // getAssessment()
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
                  {studentData !== null && studentData.name}{" "}
                  <img className="ml-2" src="/img/male.png" />
                </div>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Email ID</h5>
                <p className="m-0">
                  {studentData !== null && studentData.email}
                </p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Phone Number</h5>
                <p className="m-0">
                  {studentData !== null && studentData.phone_number}
                </p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Last Login Date</h5>
                <p className="m-0">
                  {studentData !== null &&
                    moment(studentData.lastLoginTime).format("DD MMM YYYY")}
                </p>
              </div>
            </div>
          </div>
          <div className="p-3 d-flex flex-column align-items-end">
            <h5 className="px-4 py-1 rounded text-white bg-success m-0 d-inline">
              Active
            </h5>
            <div>
              Since{" "}
              {studentData !== null &&
                moment(studentData.lastLoginTime).format("dddd, D MMM YYYY")}
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
