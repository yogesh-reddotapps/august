import { Button, Divider, Menu, Modal, Select } from "antd";
import { Export, ExportIcon, FilterIcon, CsvIcon, Edit } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import CustomIcon from "components/util-components/CustomIcon";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { membershipFacilityBooking } from "../../data";
import { membershipEventBooking } from "../../data";
import { DeleteOutlined, EyeOutlined ,FileUnknownOutlined} from "@ant-design/icons";
import Helper, { capitalizeFirstLetter } from "../../Helper";
import "./course_enroll.css";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";
import { Tabs } from "antd";

function FacilityBooking() {
    
  const [membershipRequestData, setmembershipRequestData] = useState(
    membershipEventBooking
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certData = [
    {
      id : 1,
      certification:"certification 1",
      award_on:'16 Jan 2023'
    },
    {
      id : 2,
      certification:"certification 1",
      award_on:'16 Jan 2023'
    },
    {
      id : 3,
      certification:"certification 1",
      award_on:'16 Jan 2023'
    }
  ]

  const certificatecolumn = [
    {
      title: "User ID",
      dataIndex: "id",
    },
    {
      title: "Certification",
      dataIndex: "certification",
    },
    {
      title: "Award On",
      dataIndex: "award_on",
    },
    {
      title: "Certificate",
      dataIndex: "certificate",
      render: (avatar) => {
        return <img src={`/img/3rd Certificate 1.png`} />;
      },
    }
  ]

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
      dataIndex: "date",
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

 

  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 10000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dummyData = [
    {
      Id: 1,
      Assignment: "Math Homework",
      AssignmentType: "Homework",
      AssignmentQuestions: 10,
      SubmittedOn: "2023-04-18"
    },
    {
      Id: 2,
      Assignment: "Science Experiment",
      AssignmentType: "Lab",
      AssignmentQuestions: 5,
      SubmittedOn: "2023-04-19"
    },
    {
      Id: 3,
      Assignment: "History Essay",
      AssignmentType: "Essay",
      AssignmentQuestions: 3,
      SubmittedOn: "2023-04-17"
    }
  ];

  const assData = [
    {
        Id:1,
        Assessment:'Assessment 1',
        Enrolled_On:'16 Jan 2023'
    },
    {
        Id:2,
        Assessment:'Assessment 2',
        Enrolled_On:'16 Jan 2023'
    }
  ]
  
  const assessmentcolumn = [
    {
        title: "Id",
        dataIndex: "Id",
      },
      {
        title: "Assessment",
        dataIndex: "Assessment",
      },
      {
        title: "Enrolled On",
        dataIndex: "Enrolled_On",
      },
      {
        title: "Face Recognition",
        dataIndex: "Id",
        render: (text) => {
          return (
            <div >
              <img src="/img/Avatar 2.png" />
            </div>
          );
        },
      },
      {
        title: "Id Uploaded",
        dataIndex: "Id",
        render: (text) => {
          return (
            <div >
              <img src="/img/idcard.png" />
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
                text !== "Active" ? "text-danger" : "text-success"
              } font-weight-semibold`}
            >
              Inactive
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
                      <Link to="course_enroll/assessment_submission">
                        <FileUnknownOutlined className="mr-2 " /> View Result
                      </Link>
                    </Menu.Item>
                  </Menu>
                }
              />
            </>
          );
        },
      },
    ]

  const facilityBookingColumns = [
    {
      title: "Id",
      dataIndex: "Id",
    },
    {
      title: "Assignment",
      dataIndex: "Assignment",
    },
    {
      title: "Assignment Type",
      dataIndex: "AssignmentType",
    },
    {
      title: "Assignment Questions",
      dataIndex: "AssignmentQuestions",
    },
    {
      title: "Submitted On",
      dataIndex: "SubmittedOn",
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
            Inactive
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
                    <Link to="course_enroll/assignment_submission">
                      <FileUnknownOutlined className="mr-2 " /> View Submission
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
      label: `Assignments`,
      key: 1,
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
          <Helper
            clients={dummyData}
            attribiue={facilityBookingColumns}
          />
        </div>
      ),
    },
    {
      label: `Assessments`,
      key: 2,
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
          <Helper
            clients={assData}
            attribiue={assessmentcolumn}
          />
        </div>
      ),
    },
    {
        label: `Certifications`,
        key: 3,
        children: (
          <div>
            <Helper
              clients={certData}
              attribiue={certificatecolumn}
            />
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

  return (
    <div>
      <div className="p-3 mb-4 bg-white">
        <div style={{background:'#fafafb'}} className="mb-4 rounded d-flex align-items-start w-100 p-3 justify-content-between">
          <div className="d-flex align-items-start">
            <div className="mr-2">
                <img src="/img/Avatar.png" alt="img"/>
            </div>
            <div>
                <h5 className="m-0">Student</h5>
                <h5 className="m-0">jane Cooper</h5>
            </div>
          </div>
          <Divider style={{height:'60px'}} type="vertical" />
          <div>
          <div style={{width:'250px'}}>
                <h5 className="m-0">Course</h5>
                <div className="d-flex justify-content-center align-items-center"><img height={30} width={30} src="/img/avatar3.png"/><p className="m-0 ml-2">Workplace Safety and Health in Construction Sites</p></div>
            </div>
          </div>
           <Divider style={{height:'60px'}} type="vertical" />
          <div>
          <div>
                <h5 className="m-0">Course Category</h5>
                <p className="m-0">Safety Course</p>
            </div>
          </div>
           <Divider style={{height:'60px'}} type="vertical" />
          <div><div>
                <h5 className="m-0">Medium</h5>
                <p className="m-0">English</p>
            </div></div>
           <Divider style={{height:'60px'}} type="vertical" />
          <div><div>
                <h5 className="m-0">Enroll Date</h5>
                <p className="m-0">1 Mar 2022</p>
            </div></div>
           <Divider style={{height:'60px'}} type="vertical" />
          <div><div>
                <h5 className="m-0">Course Date</h5>
                <p className="m-0">5 Mar 2022</p>
            </div></div>
           <Divider style={{height:'60px'}} type="vertical" />
          <div><div className="d-flex align-items-end flex-column">
                <h5 className="m-0 bg-warning text-white rounded px-2 py-1">Completed</h5>
                <p style={{color:"black"}} className="m-0 text-black">Since Monday, 1 Jan 2022</p>
            </div></div>
        </div>
        <Tabs>
          {items.map((item) => (
            <Tabs.TabPane tab={item.label} key={item.key}>
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
      <Modal
        width={400}
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
          <span className=" font-size-sm w-75 font-weight-semibold">
            Workplace Safety and Health in Construction Sites
          </span>
          <br />
          <h5 className="font-weight-bold mt-4">Select Teacher</h5>
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Teacher 1",
              },
              {
                value: "2",
                label: "Teacher 2",
              },
            ]}
          />

          <Button className="mt-3 bg-info text-white">Save</Button>
        </div>
      </Modal>
    </div>
  );
}

export default FacilityBooking;
