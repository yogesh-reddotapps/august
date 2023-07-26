import { Button, Menu, Modal, Select, Divider, message } from "antd";
import {
  FilterIcon,
  CsvIcon,
  Edit,
  ClassInvite,
  TeacherAssignedIcon,
  ViewCourseMaterial,
  CertificationsIcon,
  FileTypeUsingProp,
  AlertTick,
  AwardCerti,
  BatchCal,
  PdfType,
  VideoType,
} from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import CustomIcon from "components/util-components/CustomIcon";
import React, { useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { membershipFacilityBooking } from "../data";
import { membershipEventBooking } from "../data";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import Helper, { capitalizeFirstLetter } from "../Helper";
import "./curriculam_detail.css";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";
import { Tabs } from "antd";
import { FileUnknownOutlined } from "@ant-design/icons";
import moment from "moment";
import { API_BASE_URL } from "constants/ApiConstant";
import { formatDate } from "constants/DateConstant";
import { Option } from "antd/lib/mentions";
import ExportButton from "../Export/ExportButton";
import { headersForAssesment, headersForBatches, headersForCourseMaterial, headersForCourseStudent, headersForTeacherAssigned } from "../Export/Headers";
// import { API_BASE_URL } from "constants/ApiConstant";

let alertstyle = {
  position: "absolute",
  top: "0px",
  left: 0,
  width: " 100%",
  height: "50px",
  background: "#00AB6F",
  color: "white",
  transition: "all 0.5s ease 0s",
  zIndex: 2,
};


function FacilityBooking() {
  const history = useHistory();
  const [key, setKey] = useState(1);
  const [membershipRequestData, setmembershipRequestData] = useState(
    membershipEventBooking
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [courseMaterial, setCourseMaterial] = useState([])
  const [teacherEnroll,setTeacherEnroll]=useState([]);
  const [studentEnroll,setStudentEnroll]=useState([]);
  const [batchDetails,setBatchDetails]=useState([]);
  const [assesment,setAssesment]=useState([]);
  const [teachersList, setTeachersList] = useState([])
  const [classes, setClasses] = useState([])
  const [assigneNewTeachVal, setAssigneNewTeachVal] = useState({
    teacher:null,
    class:null
  })
  const [alertText, setAlertText] = useState(
    "Course category added Successfully!"
  );
  const addParam = queryParams.get("add");
  const [newAllUsersData,setNewAllUsersData] = useState([]);
  const [newAllAssessmentData,setNewAllAssessmentData] = useState([]);
const [newAllCourseData,setNewAllCourseData] = useState([]);
const [newAllBatchData,setNewAllBatchData] = useState([]);
const [newAllStudentData,setNewAllStudentData] = useState([]);
useEffect(()=>{
  let nAllUsersData =[...studentEnroll]
  nAllUsersData && nAllUsersData.map((item)=>{
   
    item.student_dob=formatDate(item.student_dob);
    item.enrollment_date = formatDate(item.enrollment_date)
  })
  setNewAllStudentData(nAllUsersData)
},[studentEnroll])

useEffect(()=>{
  let nAllUsersData =[...batchDetails]
  nAllUsersData && nAllUsersData.map((item)=>{
   
    item.start_date=formatDate(item.start_date);
    item.end_date = formatDate(item.end_date);
    item.status=item.status?"Active":"InActive"
  })
  setNewAllBatchData(nAllUsersData)
},[batchDetails])



useEffect(()=>{
  let nAllUsersData =[...assesment]
  nAllUsersData && nAllUsersData.map((item)=>{
   
    try {
      item.questionLength = JSON.parse(item.description).length;
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
    
    try {
      item.due_date = formatDate(item.due_date);
    } catch (error) {
      console.error("Error formatting due_date:", error);
    }
    
    try {
      item.start_date = formatDate(item.start_date);
    } catch (error) {
      console.error("Error formatting start_date:", error);
    }
  })
  setNewAllAssessmentData(nAllUsersData)
},[assesment])



useEffect(()=>{
  let nAllUsersData =[...courseMaterial]
  nAllUsersData && nAllUsersData.map((item)=>{
    item.created_at = formatDate(item.created_at);
    item.status = item.status?"Active":"In Active"
  })
  setNewAllCourseData(nAllUsersData)
},[courseMaterial])

  useEffect(()=>{
    let nAllUsersData =[...teacherEnroll]
    nAllUsersData && nAllUsersData.map((item)=>{
     
      item.created_at=formatDate(item.created_at);
      item.teacher_status = item.teacher_status==="verified"?"Active":"In Active"
  
    })
    setNewAllUsersData(nAllUsersData)
  },[teacherEnroll])


  const membershipRequestColumns = [
    {
      title: "User ID",
      dataIndex: "user_id",
    },
    {
      dataIndex: "profile_pic",
      render: (avatar) => {
        return <img style={{width:'60px',borderRadius:'50%',height:'60px',objectFit:'cover'}} src={`${avatar}`} alt="..." />;
      },
    },
    {
      title: "Student Name",
      dataIndex: "student_name",
    },
    {
      title: "Date of Birth",
      dataIndex: "student_dob"
    },
    {
      title: "Gender",
      dataIndex: "gender",
      render: (text) => {
        return (
          <img
            src={`${text !== "male" ? "/img/female.png" : "/img/male.png"}`}
            alt="..."
          ></img>
        );
      },
    },
    {
      title: "Mobile Number",
      dataIndex: "student_phone_number",
    },
    {
      title: "Email ID",
      dataIndex: "student_email",
    },
    {
      title: "Date of enroll",
      dataIndex: "enrollment_date",
      render:(date)=>{
        return moment(date).format("DD-MMM-YYYY")
      }
    },
    {
      title: "Status",
      dataIndex: "student_status",
      render: (text) => {
        return (
          <div
            className={`${
              text !== "active" ? "text-danger" : "text-success"
            } font-weight-semibold`}
          >
            {text}
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
    //                 <Link to="/app/events">
    //                   {" "}
    //                   <EyeOutlined className="mr-2 " />
    //                   View Details
    //                 </Link>
    //               </Menu.Item>
    //               <Menu.Item>
    //                 <span>
    //                   {" "}
    //                   <DeleteOutlined className="mr-2 " />
    //                   Delete
    //                 </span>
    //               </Menu.Item>
    //               <Menu.Item>
    //                 <Link
    //                   to={`event_list/update/${record.id}`}
    //                   className="d-flex align-items-center"
    //                 >
    //                   <CustomIcon className="mr-2" svg={Edit} />
    //                   Edit
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

  const showModal = () => {
    setIsModalOpen(true);
    // handleOk()
  };

  const handleOk = async () => {
    console.log(assigneNewTeachVal);
    const res1 = await axios.post(`${API_BASE_URL}/assign-teacher`,{
      "course_id": location.state.id,
      "class_id": assigneNewTeachVal.class,
      "teacher_id": assigneNewTeachVal.teacher
  })
  console.log(res1);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 1000);
  };
  const deleteAssessment = async (id) => {
    const res1 = await axios.delete(`${API_BASE_URL}/assessments/${id}`)
    if(res1.status===200){
      message.success(res1.data.msg)
      getAssesment()
    }
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const assesmentColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Assessment Title",
      dataIndex: "assessment_title",
    },
    {
      title: "Assessment Questions",
      // dataIndex: "Assessment_Questions",
      render:(text)=>{
        return JSON.parse(text.description).length;
      }
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      render:(text)=>{
        return formatDate(text);
      }
    },
    {
      title: "Due Date",
      dataIndex: "due_date",
      render:(text)=>{
        return formatDate(text);
      }
    },
    {
      title: "Attended By",
      dataIndex: "attend_by",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <div
            className={`${
              text === "active" ? "text-success" : "text-danger"
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
                  <Menu.Item onClick={()=>deleteAssessment(record.id)}>
                    <span>
                      {" "}
                      <DeleteOutlined className="mr-2 " />
                      Delete
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                     className="d-flex align-items-center"
                     to={`curriculam_details/assessment/edit?courseId=${location.state.id}&assessmentId=${record.id}`}
                     >
                      <CustomIcon className="mr-2" svg={Edit} />
                      Edit
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      className="d-flex align-items-center"
                      to={`curriculam_details/assessment/submission?assessmentId=${record.id}`}
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
  const batchColumns = [
    {
      title: "Sr No",
      dataIndex: "id",
    },
    {
      title: "Batch ID",
      dataIndex: "batch_id",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
        render:(text)=>{
        return formatDate(text);
      }
    },
    {
      title: "End Date",
      dataIndex: "end_date",
        render:(text)=>{
        return formatDate(text);
      }
    },
    {
      title: "Classes Done",
      dataIndex: "complete_class",
    },
    {
      title: "Classes Remaining",
      dataIndex: "remaining_class",
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
    },
    {
      title: "Enroll Students",
      dataIndex: "student_enroll",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <div className={text === 1 ? "text-success" : "text-danger"}>
            {text===1?"Active":"Inactive"}
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
                    <Link to={`curriculum_list/curriculam_details/batch/classes?batchId=${record.id}&courseId=${location.state.id}`}>
                      {" "}
                      <EyeOutlined className="mr-2 " />
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
  const StundentEnrollColumns = [
    {
      title: "User Id",
      dataIndex: "id",
    },
    {
      dataIndex: "profile_pic",
      render: (avatar) => {
        return <img style={{width:"55px",height:'55px',borderRadius:'50%'}} src={avatar} />;
      },
    },
    {
      title: "Teacher Name",
      dataIndex: "teacher_name",
    },

    {
      title: "Email Id",
      dataIndex: "teacher_email",
    },
    {
      title: "Batch Name",
      dataIndex: "batch_name",
      // render: () => {
      //   return <>#B002</>;
      // },
    },
    {
      title: "Class Name",
      dataIndex: "class_name",
     
    },
    {
      title: "Assigned on",
      dataIndex: "created_at",
    },
    {
      title: "Status",
      dataIndex: "teacher_status",
      render: (text) => {
        return (
          <div
            className={`${
              text !== "verified" ? "text-danger" : "text-success"
            } font-weight-semibold`}
          >
             {text !== "verified"?"In Active":"Active"}
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
    //                 <Link to="facility_booking">
    //                   {" "}
    //                   <EyeOutlined className="mr-2 " />
    //                   View Details
    //                 </Link>
    //               </Menu.Item>
    //               <Menu.Item>
    //                 <span onClick={() => onDeleteData(record)}>
    //                   {" "}
    //                   <DeleteOutlined className="mr-2 " />
    //                   Delete
    //                 </span>
    //               </Menu.Item>
    //             </Menu>
    //           }
    //         />
    //       </>
    //     );
    //   },
    // },
  ];
  const courseMatColumns = [
    {
      title: "ID",
      dataIndex: "course_id",
    },
    {
      title: "Course Material Name",
      dataIndex: "course_material_name",
    },
    {
      title: "File Type",
      dataIndex: "file_type",
      render: (text) => {
        return (
          <div>
            {text === "pdf" && <PdfType />}
            {text === "mp4" && <VideoType />}
          </div>
        );
      },
    },
    {
      title: "URL",
      dataIndex: "URL",
    },
    {
      title: "Created By",
      dataIndex: "created_by",
    },
    {
      title: "Created On",
      dataIndex: "created_at",
      render:(date)=>{
        return<>{moment(date).format("DD MMM YYYY")}</>
      }
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <div
            className={`${
              text === 1 ? "text-success" : "text-danger"
            } font-weight-semibold`}
          >
            {text === 1 ? "Active" : "Inactive"}
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
                  <Menu.Item onClick={()=>{
                    // axios.delete(`${API_BASE_URL}/course-curriculum/course-materials/${record.id}`).then((res)=>{
                    //   console.log(res);
                    // }).catch((err)=>{
                    //   console.log(err);
                    // })
                    console.log("delete");
                  }}>
                    <span>
                      {" "}
                      <DeleteOutlined className="mr-2 " />
                      Delete
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
  const operations = <div className="mb-2 d-flex align-items-center"></div>;
  const items = [
    {
      label: (
        <div className="d-flex justify-content-center">
          <TeacherAssignedIcon />{" "}
          <span className="ml-2">Teachers Assigned</span>
        </div>
      ),
      key: 1,
      children: (
        <div>
          <div className="d-flex justify-content-between">
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
              {/* <Button
                icon={<Icon component={CsvIcon} />}
                className="d-flex align-items-center ml-2"
              >
                Export
              </Button> */}
               <ExportButton data={newAllUsersData} passing={headersForTeacherAssigned}/>
            </div>
            <Button
              onClick={showModal}
              className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
            >
              Assign New Teacher
            </Button>
          </div>

          <Helper clients={teacherEnroll} attribiue={StundentEnrollColumns} />
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex justify-content-center">
          <ClassInvite /> <span className="ml-2">Student Enroll</span>
        </div>
      ),
      key: 2,
      children: (
        <div>
          <div className="membershipPlanTableSearchFilter d-flex mb-3">
            <SearchBox />
            <Filter type={"curriculam_det"}>
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
            <ExportButton data={newAllStudentData} passing={headersForCourseStudent}/> 
          </div>
          <Helper
            clients={studentEnroll}
            attribiue={membershipRequestColumns}
          />
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex justify-content-center">
          <BatchCal /> <span className="ml-2">Batches</span>
        </div>
      ),
      key: 3,
      children: (
        <div>
          <div className="membershipPlanTableSearchFilter d-flex mb-3">
            <SearchBox />
            <Filter type={"subjects"}>
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
            <ExportButton data={newAllBatchData} passing={headersForBatches}/>
            <Select
              className="mx-2"
              style={{ width: "120px" }}
              placeholder="Subject"
              options={[
                {
                  value: "Subject 1",
                  label: "Subject 1",
                },
                {
                  value: "Subject 2",
                  label: "Subject 2",
                },
                {
                  value: "Subject 3",
                  label: "Subject 3",
                },
              ]}
            />
          </div>
          <Helper clients={batchDetails} attribiue={batchColumns} />
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex justify-content-center">
          <CertificationsIcon /> <span className="ml-2">Assessments</span>
        </div>
      ),
      key: 4,
      children: (
        <div>
          <div className="d-flex justify-content-between">
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
              {/* <Button
                icon={<Icon component={CsvIcon} />}
                className="d-flex align-items-center ml-2"
              >
                Export
              </Button> */}
              <ExportButton data={newAllAssessmentData} passing={headersForAssesment}/>
            </div>
            <Button className="bg-info">
              <Link
                to={`curriculam_details/assessment/add_new?courseId=${location.state.id}`}
                className="text-white"
              >
                {" "}
                + Add New Assessment
              </Link>
            </Button>
          </div>
          <Helper clients={assesment} attribiue={assesmentColumns} />
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex justify-content-center">
          <CertificationsIcon /> <span className="ml-2">Course Material</span>
        </div>
      ),
      key: 5,
      children: (
        <div>
          <div className="d-flex justify-content-between">
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
              {/* <Button
                icon={<Icon component={CsvIcon} />}
                className="d-flex align-items-center ml-2"
              >
                Export
              </Button> */}
              <ExportButton data={newAllCourseData} passing={headersForCourseMaterial}/>
            </div>
            <Button className="bg-info">
              <Link
                to={`curriculam_details/course_material/add_new?id=${location.state.id}`}
                className="text-white"
              >
                {" "}
                + Add New Material
              </Link>
            </Button>
          </div>
          <Helper clients={courseMaterial} attribiue={courseMatColumns} />
        </div>
      ),
    },
  ];

  const onDeleteData = (record, dataSet, Id) => {
    // console.log(Id)
    // console.log(record)
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteFacilityBooking(record, dataSet, Id);
      },
    });
  };

  const deleteFacilityBooking = (record, dataSet, Id) => {
    axios
      .delete("http://127.0.0.1:3333/bookings/delete", {
        data: { id: record[Id] },
      })
      .then((response) => {
        console.log(response);
        if (response.data.status) {
          dataSet((pre) => {
            return pre.filter((member) => member[Id] !== record[Id]);
          });
        }
        alert(response.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const showAlert = () => {
  //   if (addParam == "certificate") {
  //     setAlertSuccess(true);
  //     setAlertText("Certification awarded successfully !");
  //     setTimeout(() => {
  //       history.push("/app/curriculam_details");
  //       setAlertSuccess(false);
  //     }, 2000);
  //   }
  // };
  const getCourseMaterial = async () => {
    const res1 = await axios.get(`${API_BASE_URL}/course-curriculum/course-materials/courseId/${location.state.id}`);
    setCourseMaterial(res1.data.data);
    // console.log(res1.data);
  }

  const getTeacherEnroll = async () => {
    const res1 = await axios.get(`${API_BASE_URL}/get-classes-by-course/${location.state.id}`);
    setTeacherEnroll(res1.data.data);
  }

  const getStudentEnroll = async () => {
    const res1 = await axios.get(`${API_BASE_URL}/get-student-enroll/${location.state.id}`);
    setStudentEnroll(res1.data);
  }

  const getAssesment = async () => {
    const res1 = await axios.get(`${API_BASE_URL}/get-assesment-by-course/${location.state.id}`);
    setAssesment(res1.data.data);
  }

  

  const getBatchesDetail = async ()=>{
    const res1 = await axios.get(`${API_BASE_URL}/get-batches-bycourse/${location.state.id}`);
    setBatchDetails(res1.data.data);
  }

  const getClasses = async ()=> {
    let res1 = await axios.get(`${API_BASE_URL}/get-classes-by-course/${location.state.id}`)
    setClasses(res1.data.data);
    // console.log(res1.data.data);
  }
  
  const getTeacher = () => {
    axios
      .post(`${API_BASE_URL}/admin-teacher`, {},{
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setTeachersList(res.data);
        // console.log("teacge",res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // showAlert();
    getCourseMaterial()
    getStudentEnroll();
    getTeacherEnroll();
    getBatchesDetail();
    getAssesment();
    getTeacher()
    getClasses()
  }, []);
  return (
    <div className="tabbarWhite">
      {alertSuccess ? (
        <div
          className="d-flex align-items-center justify-content-center"
          style={alertstyle}
        >
          <AlertTick /> {alertText}
        </div>
      ) : (
        ""
      )}
      <div className="p-3 bg-white">
        <div
          style={{ background: "#fafafb" }}
          className="mb-4 rounded d-flex align-items-start w-100 p-3 justify-content-between"
        >
          <div>
            <div>
              <h5 className="m-0">ID</h5>
              <p className="m-0">#123</p>
            </div>
          </div>
          {/* <Divider style={{ height: "60px" }} type="vertical" /> */}
          <div className="mx-3">
            <div>
              <img height={30} width={30} src="/img/avatar3.png" />
            </div>
          </div>
          {/* <Divider style={{ height: "60px" }} type="vertical" /> */}
          <div>
            <div style={{ width: "250px" }}>
              <h5 className="m-0">Course</h5>
              <div className="d-flex justify-content-center align-items-center">
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
          <div>
            <div>
              <h5 className="m-0">Medium</h5>
              <p className="m-0">English</p>
            </div>
          </div>
          <Divider style={{ height: "60px" }} type="vertical" />
          <div>
            <div>
              <h5 className="m-0">No of teachers</h5>
              <p className="m-0">10</p>
            </div>
          </div>
          <Divider style={{ height: "60px" }} type="vertical" />
          <div>
            <div>
              <h5 className="m-0">Student's Enroll</h5>
              <p className="m-0">20</p>
            </div>
          </div>
        </div>
      </div>
      <Tabs tabBarExtraContent={operations} onChange={(e) => setKey(e)}>
        {items.map((item) => (
          <Tabs.TabPane tab={item.label} key={item.key}>
            {item.children}
          </Tabs.TabPane>
        ))}
      </Tabs>

      <div className="d-flex justify-content-between mb-3"></div>
      <Modal
        width={600}
        footer={null}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="d-flex my-3 flex-column">
          {/* <CustomIcon svg={Verified} /> */}
          <h3 className="font-weight-bold mt-4">
            Assign curriculam to teacher
          </h3>
          <h5>Course</h5>
          <span className=" font-size-sm w-75 font-weight-semibold">
            Workplace Safety and Health in Construction Sites
          </span>
          <br />
          <h5 className="font-weight-bold mt-4">Select Class</h5>
          <Select
            style={{
              width: 300,
              marginBottom: "5px",
            }}
            placeholder="Select"
            
            onChange={(value) =>  setAssigneNewTeachVal((preval) => ({...preval,class:value}))}
            // options={teacherArray}
          >
            {classes.map((clas, i) => (
                  <Option key={clas.id} value={clas.id}>
                    <div>
                      <img
                        className="circleTeacherImage mr-2"
                        src="/img/avatars/thumb-1.jpg"
                        alt="img"
                      />
                      {clas.class_name}
                    </div>
                  </Option>
                ))}
            </Select>
          <br />
          <h5 className="font-weight-bold mt-4">Select Teacher</h5>
          <Select
            style={{
              width: 300,
              marginBottom: "5px",
            }}
            placeholder="Select"
            onChange={(value) => setAssigneNewTeachVal((preval) => ({...preval,teacher:value}))}
            // options={teacherArray}
          >
            {teachersList.map((teacher, i) => (
                  <Option key={i} value={teacher.id}>
                    <div>
                      <img
                        className="circleTeacherImage mr-2"
                        src="/img/avatars/thumb-1.jpg"
                        alt="img"
                      />
                      {teacher.name}
                    </div>
                  </Option>
                ))}
            </Select>
          <br />
          <div className="d-flex justify-content-end">
            <Button className="w-25 text-black">Cancel</Button>
            <Button onClick={handleOk} className="ml-3 w-25 bg-info text-white">
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FacilityBooking;
// const lessonData = [
//   {
//     Sr_No: 1,
//     Batch_ID: "BATCH001",
//     Start_Date: "2023-01-01",
//     End_Date: "2023-05-31",
//     Classes_Done: 10,
//     Classes_Remaining: 30,
//     Capacity: 40,
//     Enroll_Students: 20,
//     Status: "Active",
//   },
//   {
//     Sr_No: 2,
//     Batch_ID: "BATCH002",
//     Start_Date: "2023-02-15",
//     End_Date: "2023-06-30",
//     Classes_Done: 5,
//     Classes_Remaining: 35,
//     Capacity: 50,
//     Enroll_Students: 25,
//     Status: "Active",
//   },
//   // Add more objects as needed
// ];
// const assessments = [
//   {
//     ID: 1,
//     Assessment_Title: "Mathematics Quiz",
//     Assessment_Questions: "10",
//     Start_Date: "2023-05-20",
//     Due_Date: "2023-05-25",
//     Attended_By: "John Doe",
//     Status: "Active",
//   },
//   {
//     ID: 2,
//     Assessment_Title: "English Essay",
//     Assessment_Questions: "1",
//     Start_Date: "2023-05-22",
//     Due_Date: "2023-05-27",
//     Attended_By: "Jane Smith",
//     Status: "In Progress",
//   },
//   {
//     ID: 3,
//     Assessment_Title: "Science Experiment",
//     Assessment_Questions: "5",
//     Start_Date: "2023-05-24",
//     Due_Date: "2023-05-29",
//     Attended_By: "Alex Johnson",
//     Status: "Not Started",
//   },
// ];
// const courseMaterials = [
//   {
//     ID: 1,
//     Course_Material_Name: "Introduction to Mathematics",
//     File_Type: "pdf",
//     URL: "https://example.com/material1.pdf",
//     Created_By: "John Doe",
//     Created_On: "2023-05-10",
//     Status: "Active",
//   },
//   {
//     ID: 2,
//     Course_Material_Name: "English Grammar Guide",
//     File_Type: "video",
//     URL: "https://example.com/material2.docx",
//     Created_By: "Jane Smith",
//     Created_On: "2023-05-12",
//     Status: "Inactive",
//   },
//   {
//     ID: 3,
//     Course_Material_Name: "Chemistry Lecture Slides",
//     File_Type: "pdf",
//     URL: "https://example.com/material3.ppt",
//     Created_By: "Alex Johnson",
//     Created_On: "2023-05-15",
//     Status: "Active",
//   },
// ];