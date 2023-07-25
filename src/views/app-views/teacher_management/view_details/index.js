import { Button, Menu, Modal, Select, Rate, Switch, Divider, Tag } from "antd";
import {
  CourseAccess,
  ClassInvite,
  LeaveApplication,
  CsvIcon,
  AcceptTick,
  CancelCross,
  RatingTab,
} from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import CustomIcon from "components/util-components/CustomIcon";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { membershipFacilityBooking } from "../../data";
import { membershipEventBooking } from "../../data";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import Helper, { capitalizeFirstLetter } from "../../Helper";
import "./view_detail.css";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";
import { Tabs } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Search from "antd/lib/transfer/search";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { API_BASE_URL } from "constants/ApiConstant";
import { headersForAdminRating, headersForClassInvite, headersForCourseAccess, headersForLeaveApplication } from "views/app-views/Export/Headers";
import ExportButton from "views/app-views/Export/ExportButton";
import { formatDate } from "constants/DateConstant";
const admins = [
  {
    User_ID: 1,
    Admin_Name: "John",
    Ratings_Given: 4,
    Remarks: "Good service",
    Status: "active",
  },
  {
    User_ID: 2,
    Admin_Name: "Sarah",
    Ratings_Given: 3,
    Remarks: "Average experience",
    Status: "inactive",
  },
  {
    User_ID: 3,
    Admin_Name: "David",
    Ratings_Given: 5,
    Remarks: "Excellent support",
    Status: "active",
  },
];
const students = [
  {
    User_ID: 1,
    Class_ID: 101,
    Student: "John",
    Ratings_Given: 4,
    Remarks: "Good performance",
    Status: "active",
  },
  {
    User_ID: 2,
    Class_ID: 101,
    Student: "Sarah",
    Ratings_Given: 3,
    Remarks: "Average progress",
    Status: "inactive",
  },
  {
    User_ID: 3,
    Class_ID: 102,
    Student: "David",
    Ratings_Given: 5,
    Remarks: "Excellent work",
    Status: "active",
  },
];

function FacilityBooking() {
  const [tabKey, setTabKey] = useState(0);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const teacherId = queryParams.get("teacherId");
  const [teacherData, setTeacherData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adminRatingsList, setAdminRatingsList] = useState([]);
  const [classRat, setClassRat] = useState([])
  const [courseAccess,setCourseAccess]=useState();
  const [adminRating, setAdminRating] = useState({
    teacher_id: 0,
    admin_id: "15",
    description: "",
    rating: 0,
  });
  const [leaveApp, setLeaveApp] = useState([]);
  const [facilityBooking, setFacilityBooking] = useState(
    membershipFacilityBooking
  );
  const [membershipRequestData, setmembershipRequestData] = useState(
    // membershipEventBooking
  );
  const [newAllUsersData,setNewAllUsersData] = useState([]);
  const [newAllLeaveApplication,setNewAllLeaveApplication]=useState([]);
useEffect(()=>{
  let nAllUsersData = membershipRequestData
  nAllUsersData && nAllUsersData.map((item)=>{
    item.class_date=formatDate(item.class_date);
    item.start_time=moment(item.start_time,"HH:mm:ss").format("h A");
    item.end_time = moment(item.end_time,"HH:mm:ss").format("h A");
    item.invite_date = formatDate(item.invite_date);
    item.date_of_action = formatDate(item.date_of_action);
    item.status = item.status;
  })
  setNewAllUsersData(nAllUsersData)
},[membershipRequestData])

useEffect(()=>{
  let nAllUsersData = leaveApp
  leaveApp&&nAllUsersData && nAllUsersData.map((item)=>{
    let upstatus;
    if (item.status===0) {
      upstatus="pending"
    }else if (item.status===1) {
      upstatus="accept"
    }else{
      upstatus="rejected"
    }
    item.class_date=formatDate(item.class_date);
    item.start_time=moment(item.start_time,"HH:mm:ss").format("h A");
    item.end_time = moment(item.end_time,"HH:mm:ss").format("h A");
    item.date_of_application= formatDate(item.date_of_application);
    item.status = upstatus;
  })
  setNewAllLeaveApplication(nAllUsersData)
},[leaveApp])

  const acceptApp = async (record) => {
    console.log(record);
    const res1 = await axios.post(
      "http://18.140.159.50:3333/api/accept-reject-applications",
      {
        leave_application_id: record.id,
        status: 1,
      }
    );
    console.log(res1);
  };
  const rejecttApp = async (record) => {
    console.log(record);
    const res1 = await axios.post(
      "http://18.140.159.50:3333/api/accept-reject-applications",
      {
        leave_application_id: record.id,
        status: 2,
      }
    );
    console.log(res1);
  };
  const sendAdminRate = async () => {
    const res1 = await axios.post(
      "http://18.140.159.50:3333/api/add-performance-rating",
      adminRating
    );
    if (res1.status === 201) {
      setIsModalOpen(false);
      setAdminRating({
        teacher_id: 0,
        admin_id: "15",
        description: "",
        rating: 0,
      });
    }
  };

  const membershipRequestColumns = [
    {
      title: "Batch ID",
      dataIndex: "batch_id",
    },
    {
      title: "Class ID",
      dataIndex: "class_id",
    },
    {
      title: "Course Name",
      dataIndex: "course_name",
      // render: (avatar) => {
      //   return <>Workplace Safety an Health in Construction Sites</>;
      // },
    },
    {
      title: "Class Date",
      dataIndex: "class_date",
      render: (date) => {
        return moment(date).format("DD MMM YYYY, hh:mm:ss A")
      },
    },
    {
      title: "Start Time",
      dataIndex: "start_time",
      render: (date) => {
        return moment(date, "HH:mm:ss").format("hh:mm:A")
      },
    },
    {
      title: "End Time",
      dataIndex: "end_time",
      render: (date) => {
        return moment(date, "HH:mm:ss").format("hh:mm:A")
      },
    },
    {
      title: "Date of Invite",
      dataIndex: "invite_date",
      render:(date)=>{
        return moment(date).format("DD MMM YYYY, hh:mm:ss A")
      }
    },
    {
      title: "Date of Accept/Reject",
      dataIndex: "date_of_action",
      render:(date)=>{
        return <>{moment(date).format("DD MMM YYYY, hh:mm:ss A")}</>
      }
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <div
            className={`${
              text === 0 && "text-warning"
            } ${
              text === 1 && "text-success"
            } ${
              text === 2 && "text-danger"
            } font-weight-semibold`}
          >
            {text===0&&"Sent"}
            {text===1&&"Accepted"}
            {text===2&&"Rejected"}
          </div>
        );
      },
    },
  ];

  const leaveAppColumns = [
    {
      title: "Batch ID",
      dataIndex: "batch_id",
    },
    {
      title: "Class ID",
      dataIndex: "class_id",
    },
    {
      title: "Course Name",
      dataIndex: "course_name",
    },
    {
      title: "Class Date",
      dataIndex: "class_date",
      render: (date) => {
        return <div>{moment(date).format("YYYY-MM-DD")}</div>;
      },
    },
    {
      title: "Start Time",
      dataIndex: "start_time",
      render: (time) => {
        return <>{moment(time, "HH:mm:ss").format("h:mm A")}</>;
      },
    },
    {
      title: "End Time",
      dataIndex: "end_time",
      render: (time) => {
        return <>{moment(time, "HH:mm:ss").format("h:mm A")}</>;
      },
    },
    {
      title: "Date of Application",
      width: "180px",
      dataIndex: "date_of_application",
      render: (time) => {
        return <>{moment(time).utc().format("DD MMM YYYY, h:mm A")}</>;
      },
    },
    {
      title: "Reason",
      width: "250px",
      dataIndex: "reason",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <>
            {text === "pending" && (
              <div className={`text-warning`}>
                <Tag color="warning">Pending</Tag>
              </div>
            )}
            {text === "accept" && (
              <div className={`text-success`}>
                <Tag color="success">Accepted</Tag>
              </div>
            )}
            {text === "rejected" && (
              <div className={`text-danges`}>
                <Tag color="error">Rejected</Tag>
              </div>
            )}
          </>
        );
      },
    },
    {
      title: "Action",
      // dataIndex: 'action',
      render: (record) => {
        return (
          <>
            <>
              {record.status === 0 && (
                <EllipsisDropdown
                  menu={
                    <Menu>
                      <Menu.Item onClick={()=>acceptApp(record)}>
                        <span
                          className="d-flex align-items-center"
                          to="curriculam_details/view_lesson_preview"
                        >
                          <AcceptTick />
                          Accept
                        </span>
                      </Menu.Item>
                      <Menu.Item onClick={()=>rejecttApp(record)}>
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
              )}
            </>
          </>
        );
      },
    },
  ];
  const adminratingColumn = [
    {
      title: "User ID",
      dataIndex: "user_id",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src="/img/avatar3.png" alt="img" />;
      },
    },
    {
      title: "Admin Name",
      dataIndex: "name",
    },
    {
      title: "Ratings Given",
      dataIndex: "rating",
      render: (val) => {
        return (
          <>
            <Rate disabled defaultValue={val} />
          </>
        );
      },
    },
    {
      title: "Remarks",
      dataIndex: "description",
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
  const classratingColumn = [
    {
      title: "User ID",
      dataIndex: "student_id",
    },
    {
      title: "Class ID",
      dataIndex: "class_name",
    },
    {
      dataIndex: "profile_pic",
      render: (avatar) => {
        return <img style={{width:'60px'}} src={avatar} alt="img" />;
      },
    },
    {
      title: "Student",
      dataIndex: "student_name",
    },
    {
      title: "Ratings Given",
      dataIndex: "rating",
      render: (val) => {
        return (
          <>
            <Rate disabled defaultValue={val} />
          </>
        );
      },
    },
    {
      title: "Remarks",
      dataIndex: "description",
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
  const showModal = () => {
    setIsModalOpen(true);
    // handleOk()
  };

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
      title: "Sr No.",
      dataIndex: "course_id",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src={`${avatar}`} />;
      },
    },
    {
      title: "Courses",
      dataIndex: "course_name",
    },
    {
      title: "Access",
      // dataIndex: "course_status",
      render: (record) => {
        return (
          <Switch
          defaultChecked={record.access?true:false}
          onChange={(checked) => handleChange(record.course_id,checked)}
          />
        );
      },
    },
    {
      title: "Course Status",
      dataIndex: "course_status",
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
  ];
  const operations = (
    <div className="mb-2 mr-3 d-flex align-items-center">
      <Button
        onClick={() => {
          setAdminRating((preval) => {
            return {
              ...preval,
              teacher_id: teacherData.id,
            };
          });
          showModal();
        }}
        className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
      >
        Performance Ratings
      </Button>
    </div>
  );

  const handleChange=async(Oid,checked)=>{
    console.log(Oid);
   await axios.post(
      "http://18.140.159.50:3333/api/teacher-course-access",
      {
        teacher_id: parseInt(teacherId),
        course_id: Oid
      }
    ).then((res1)=>{
      console.log(res1);
    }).catch((err)=>{
      console.log(err);
    });
   
  }
  const items = [
    {
      label: (
        <div className="d-flex justify-content-center">
          <CourseAccess /> <span className="ml-2">Course Access</span>
        </div>
      ),
      key: 1,
      children: (
        <div>
          <div style={{ width: "330px" }} className="d-flex mb-3">
            <Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              style={{ width: "220px" }}
            />
            {/* <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button> */}
            <ExportButton data={courseAccess} passing={headersForCourseAccess}/> 
          </div>
          <Helper
            clients={courseAccess}
            attribiue={facilityBookingColumns}
          />
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex justify-content-center">
          <ClassInvite /> <span className="ml-2">Class Invite</span>
        </div>
      ),
      key: 2,
      children: (
        <div>
          <div style={{ width: "330px" }} className="d-flex mb-3">
            <Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              style={{ width: "220px" }}
            />
            {/* <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button> */}
            <ExportButton data={newAllUsersData} passing={headersForClassInvite}/> 
          </div>
          <Helper
            clients={membershipRequestData}
            attribiue={membershipRequestColumns}
          />
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex justify-content-center">
          <LeaveApplication /> <span className="ml-2">Leave Application</span>
        </div>
      ),
      key: 3,
      children: (
        <div>
          <div style={{ width: "330px" }} className="d-flex mb-3">
            <Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              style={{ width: "220px" }}
            />
            {/* <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button> */}
            <ExportButton data={newAllLeaveApplication} passing={headersForLeaveApplication}/>
          </div>
          {leaveApp.length !== 0 && (
            <Helper
              clients={leaveApp.length !== 0 && leaveApp}
              attribiue={leaveAppColumns}
            />
          )}
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex justify-content-center">
          <RatingTab /> <span className="ml-2">Admin Ratings</span>
        </div>
      ),
      key: 4,
      children: (
        <div>
          <div style={{ width: "330px" }} className="d-flex mb-3">
            <Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              style={{ width: "220px" }}
            />
            {/* <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button> */}
            <ExportButton data={adminRatingsList} passing={headersForAdminRating}/>
          </div>
          <Helper clients={adminRatingsList} attribiue={adminratingColumn} />
        </div>
      ),
    },
    {
      label: (
        <div className="d-flex justify-content-center">
          <RatingTab /> <span className="ml-2">Class Ratings</span>
        </div>
      ),
      key: 5,
      children: (
        <div>
          <div style={{ width: "330px" }} className="d-flex mb-3">
            <Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              style={{ width: "220px" }}
            />
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
          </div>
          <Helper clients={classRat} attribiue={classratingColumn} />
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
  const getTeacherDetail = async () => {
    let res1 = await axios.post(
      "http://18.140.159.50:3333/api/get-teacher-by-id",
      {
        user_id: id,
      }
    );
    let data = res1.data[0];
    setTeacherData(data);
    const res2 = await axios.get(
      `http://18.140.159.50:3333/api/get-performance-rating/${data.id}`
    );
    console.log(res2.data);
    setAdminRatingsList(res2.data);
  };


  const getCourseAccess=async()=>{
    let res1 = await axios.get(
      `${API_BASE_URL}/teacher-courses-access-data/${teacherId}`,
    );
    // console.log(res1);
    let data = res1.data.data;
    setCourseAccess(data);
  }
  const getLeaveApp = async () => {
    const res1 = await axios.post(
      "http://18.140.159.50:3333/api/leave-applications",
      { teacher_id: "1" }
    );
    console.log(res1.data.data);
    setLeaveApp(res1.data.data);
  };

  const getClassInvites = async () => {
    const res1 = await axios.get(`http://18.140.159.50:3333/api/get-class-invites/${teacherId}`)
    setmembershipRequestData(res1.data.data);
  }
  const getClassRating = async () => {
    // api/get-class-rating-by-teacher/2
    const res1 = await axios.get(`http://18.140.159.50:3333/api/get-class-rating-by-teacher/${teacherId}`)
    setClassRat(res1.data);
  }
  useEffect(() => {
    getTeacherDetail();
    getLeaveApp();
    getCourseAccess();
    getClassInvites();
    getClassRating()
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
                <h5 className="m-0">Teacher</h5>
                <div className="d-flex align-items-center">
                  {teacherData !== null && teacherData.name}{" "}
                  <img className="ml-2" src="/img/male.png" />
                </div>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Email ID</h5>
                <p className="m-0">
                  {teacherData !== null && teacherData.email}
                </p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Phone Number</h5>
                <p className="m-0">
                  {teacherData !== null && teacherData.phone_number}
                </p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Last Login Date</h5>
                <p className="m-0">
                  {teacherData !== null &&
                    moment(teacherData.lastLoginTime).format("DD MMM YYYY")}
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
              {teacherData !== null &&
                moment(teacherData.created_at).format("dddd, D MMM YYYY")}
            </div>
          </div>
        </div>
      </div>
      <Tabs
        tabBarExtraContent={tabKey === "4" ? operations : ""}
        onChange={(e) => setTabKey(e)}
      >
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
          <h5> {teacherData !== null && teacherData.name}</h5>
          <br />
          <h5 className="font-weight-bold">Ratings</h5>
          <Rate
            value={adminRating.rating}
            onChange={(e) => {
              setAdminRating((preval) => {
                return {
                  ...preval,
                  rating: e,
                };
              });
            }}
          />
          <br />
          <h5 className="font-weight-bold">Remarks</h5>
          <TextArea
            value={adminRating.description}
            onChange={(e) => {
              setAdminRating((preval) => {
                return {
                  ...preval,
                  description: e.target.value,
                };
              });
            }}
            rows={4}
          />
          <div>
            <Button
              onClick={() => {
                sendAdminRate();
              }}
              className="mt-3 bg-info text-white"
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FacilityBooking;
