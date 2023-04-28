import { Button, Menu, Modal, Select, Divider } from "antd";
import {
  Export,
  ExportIcon,
  FilterIcon,
  CsvIcon,
  Edit,
  ClassInvite,
  TeacherAssignedIcon,
  ViewCourseMaterial,
  CertificationsIcon,
  FileTypeUsingProp,
  AlertTick,
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
const teacherArray = [
  {
    value: "Teacher 1",
    label: (
      <div>
        <img className="circleTeacherImage mr-2" src="/img/avatars/thumb-1.jpg" alt="img" />
        Teacher 1
      </div>
    ),
  },
  {
    value: "Teacher 2",
    label: (
      <div>
        <img className="circleTeacherImage mr-2" src="/img/avatars/thumb-2.jpg" alt="img" />
        Teacher 2
      </div>
    ),
  },
  {
    value: "Teacher 3",
    label: (
      <div>
        <img className="circleTeacherImage mr-2" src="/img/avatars/thumb-3.jpg" alt="img" />
        Teacher 3
      </div>
    ),
  },
  {
    value: "Teacher 4",
    label: (
      <div>
        <img className="circleTeacherImage mr-2" src="/img/avatars/thumb-4.jpg" alt="img" />
        Teacher 4
      </div>
    ),
  },
  // Add more objects with similar format here
  // ...
  {
    value: "Teacher 5",
    label: (
      <div>
        <img className="circleTeacherImage mr-2" src="/img/avatars/thumb-5.jpg" alt="img" />
        Teacher 5
      </div>
    ),
  },
  {
    value: "Teacher 6",
    label: (
      <div>
        <img className="circleTeacherImage mr-2" src="/img/avatars/thumb-6.jpg" alt="img" />
        Teacher 6
      </div>
    ),
  },
];
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
  const [facilityBooking, setFacilityBooking] = useState(
    membershipFacilityBooking
  );
  const [key, setKey] = useState(1);
  const [membershipRequestData, setmembershipRequestData] = useState(
    membershipEventBooking
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertText, setAlertText] = useState(
    "Course category added Successfully!"
  );

  const addParam = queryParams.get("add");
  const dummyData = [
    {
      userId: 1,
      teacherName: "John Doe",
      gender: "Male",
      nationality: "American",
      mobileNumber: "1234567890",
      emailId: "johndoe@example.com",
      assignedOn: "2023-04-18",
    },
    {
      userId: 2,
      teacherName: "Jane Smith",
      gender: "Female",
      nationality: "British",
      mobileNumber: "9876543210",
      emailId: "janesmith@example.com",
      assignedOn: "2023-04-19",
    },
  ];
  const membershipRequestColumns = [
    {
      title: "User ID",
      dataIndex: "id",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src={`${avatar}`} />;
      },
    },
    {
      title: "Student Name",
      dataIndex: "applicant_name",
    },
    {
      title: "Date of Birth",
      dataIndex: "event_time",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      render: (text) => {
        return (
          <img
            src={`${text !== "male" ? "/img/female.png" : "/img/male.png"}`}
          ></img>
        );
      },
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      render: (flag) => {
        return (
          <img
            width="20px"
            src={`${flag === "Singapore" ? "/img/flag.jpg" : ""}`}
          ></img>
        );
      },
    },
    {
      title: "Mobile Number",
      dataIndex: "phone",
    },
    {
      title: "Email ID",
      dataIndex: "email",
    },
    {
      title: "Date of enroll",
      dataIndex: "event_time",
    },
    {
      title: "Status",
      dataIndex: "status",
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
                    <Link to="/app/events">
                      {" "}
                      <EyeOutlined className="mr-2 " />
                      View Details
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <span>
                      {" "}
                      <DeleteOutlined className="mr-2 " />
                      Delete
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to={`event_list/update/${record.id}`}
                      className="d-flex align-items-center"
                    >
                      <CustomIcon className="mr-2" svg={Edit} />
                      Edit
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

  const lessonData = [
    {
      userId: 1,
      Sections: "Section 1 Course Intro",
      Lessons: "video",
    },
    {
      userId: 2,
      Sections: "Section 1 Course Intro",
      Lessons: "audio",
    },
    {
      userId: 3,
      Sections: "Section 1 Course Intro",
      Lessons: "text",
    },
    {
      userId: 4,
      Sections: "Section 1 Course Intro",
      Lessons: "question",
    },
    {
      userId: 5,
      Sections: "Section 1 Course Intro",
      Lessons: "text",
    },
    {
      userId: 6,
      Sections: "Section 1 Course Intro",
      Lessons: "text",
    },
  ];
  const certificateData = [
    {
      User_Id: 1,
      Student_Name: "John Doe",
      Gender: "Male",
      Email_ID: "johndoe@example.com",
      Awarded_On: "2022-03-15",
    },
    {
      User_Id: 2,
      Student_Name: "Jane Smith",
      Gender: "Female",
      Email_ID: "janesmith@example.com",
      Awarded_On: "2022-03-16",
    },
    // Add more objects as needed
  ];

  const certificateColumns = [
    {
      title: "User Id",
      dataIndex: "User_Id",
    },
    {
      title: "Student Name",
      dataIndex: "Student_Name",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
    },
    {
      title: "Email ID",
      dataIndex: "Email_ID",
    },
    {
      title: "Awarded On",
      dataIndex: "Awarded_On",
    },
    {
      title: "Certificate",
      dataIndex: "certificate",
      render: (text) => {
        return (
          <div>
            <img src="/img/3rd Certificate 1.png" alt="img" />
          </div>
        );
      },
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
            Completed
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
                    <Link to="curriculam_details/award_certificate">
                      {" "}
                      <EyeOutlined className="mr-2 " />
                      Award Certificate
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="curriculam_details/view_lesson_preview">
                      {" "}
                      <EyeOutlined className="mr-2 " />
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
  ];
  const lessonColumns = [
    {
      title: "Sr No",
      dataIndex: "userId",
    },
    {
      title: "Lesson Module",
      dataIndex: "Sections",
    },
    {
      title: "Lessons Type",
      dataIndex: "Lessons",
      render: (text) => {
        return <FileTypeUsingProp type={text}/>;
      },
    },
    {
      title: "Estimated Time (Mins)",
      dataIndex: "status",
      render: (text) => {
        return <div>20</div>;
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
                    <Link to="curriculam_details/view_lesson_preview">
                      {" "}
                      <EyeOutlined className="mr-2 " />
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
  const facilityBookingColumns = [
    {
      title: "User Id",
      dataIndex: "userId",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src={`/img/Avatar 1.png`} />;
      },
    },
    {
      title: "Teacher Name",
      dataIndex: "teacherName",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      render: (text) => {
        return (
          <img
            src={`${text !== "male" ? "/img/female.png" : "/img/male.png"}`}
          ></img>
        );
      },
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      render: (flag) => {
        return <img width="20px" src={`/img/flag.jpg`}></img>;
      },
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
    },

    {
      title: "Email Id",
      dataIndex: "emailId",
    },
    {
      title: "Assigned on",
      dataIndex: "assignedOn",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <div
            className={`${
              text !== "Active" ? "text-danger" : "text-success"
            } font-weight-semibold`}
          >
            inactive
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
                    <Link to="facility_booking">
                      {" "}
                      <EyeOutlined className="mr-2 " />
                      View Details
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <span onClick={() => onDeleteData(record)}>
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
  const operations = (
    <div className="mb-2 d-flex align-items-center">
      {key == 1 && (
        <Button
          onClick={showModal}
          className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
        >
          Assign New Teacher
        </Button>
      )}
      {/* {key==3 && 
      <Button
        onClick={showModal}
        className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
      >
        <Link to="curriculam_details/add_new_lesson">
        Assign New Lesson</Link>
      </Button>} */}
    </div>
  );
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
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
          </div>
          <Helper clients={dummyData} attribiue={facilityBookingColumns} />
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
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
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
          <ViewCourseMaterial color={"#3e79f7"} />{" "}
          <span className="ml-2">Lessons</span>
        </div>
      ),
      key: 3,
      children: (
        <div>
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
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
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
            <div className="d-flex align-items-center">
              <h5 className="m-0">Chapter : </h5>
              <Select
                className="mx-2"
                style={{ width: "120px" }}
                placeholder="Lesson"
                options={[
                  {
                    value: "Lesson 1",
                    label: "Lesson 1",
                  },
                  {
                    value: "Lesson 2",
                    label: "Lesson 2",
                  },
                  {
                    value: "Lesson 3",
                    label: "Lesson 3",
                  },
                ]}
              />
            </div>
          </div>
          <Helper clients={lessonData} attribiue={lessonColumns} />
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
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
          </div>
          <Helper clients={certificateData} attribiue={certificateColumns} />
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

  const showAlert = () => {
    if (addParam == "certificate") {
      setAlertSuccess(true);
      setAlertText("Certification awarded successfully !");
      setTimeout(() => {
        history.push("/app/curriculam_details");
        setAlertSuccess(false);
      }, 2000);
    }
  };

  useEffect(() => {
    showAlert();
  }, []);
  return (
    <div>
      {alertSuccess ? (
        <div
          className="d-flex align-items-center justify-content-center"
          style={alertstyle}
        >
         <AlertTick/> {alertText}
        </div>
      ) : (
        ""
      )}
      <div className="border rounded p-3 mb-4 bg-white">
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
        <Tabs tabBarExtraContent={operations} onChange={(e) => setKey(e)}>
          {items.map((item) => (
            <Tabs.TabPane tab={item.label} key={item.key}>
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>

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
          <h5 className="font-weight-bold mt-4">Select Teacher</h5>
          <Select
                style={{
                  width: 300,
                  marginBottom:'5px'
                }}
                mode="multiple"
                placeholder="Select"
                onChange={(value) => console.log(`selected ${value}`)}
                options={teacherArray}
              />
              <br />
          <div className="d-flex justify-content-end">
            <Button className="w-25 text-black">Cancel</Button>
            <Button className="ml-3 w-25 bg-info text-white">Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FacilityBooking;
