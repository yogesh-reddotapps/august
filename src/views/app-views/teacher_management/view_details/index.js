import { Button, Menu, Modal, Select, Rate, Switch, Divider } from "antd";
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
const admins = [
  {
      "User_ID": 1,
      "Admin_Name": "John",
      "Ratings_Given": 4,
      "Remarks": "Good service",
      "Status": "active"
  },
  {
      "User_ID": 2,
      "Admin_Name": "Sarah",
      "Ratings_Given": 3,
      "Remarks": "Average experience",
      "Status": "inactive"
  },
  {
      "User_ID": 3,
      "Admin_Name": "David",
      "Ratings_Given": 5,
      "Remarks": "Excellent support",
      "Status": "active"
  }
]
const students = [
  {
      "User_ID": 1,
      "Class_ID": 101,
      "Student": "John",
      "Ratings_Given": 4,
      "Remarks": "Good performance",
      "Status": "active"
  },
  {
      "User_ID": 2,
      "Class_ID": 101,
      "Student": "Sarah",
      "Ratings_Given": 3,
      "Remarks": "Average progress",
      "Status": "inactive"
  },
  {
      "User_ID": 3,
      "Class_ID": 102,
      "Student": "David",
      "Ratings_Given": 5,
      "Remarks": "Excellent work",
      "Status": "active"
  }
]


function FacilityBooking() {
  const [tabKey, setTabKey] = useState(0)
  const [facilityBooking, setFacilityBooking] = useState(
    membershipFacilityBooking
  );
  const [membershipRequestData, setmembershipRequestData] = useState(
    membershipEventBooking
  );
  const acceptApp = (record) => {
    setmembershipRequestData((pre)=>{
      // console.log(pre,record);
      return pre.map((elem,i) => {
        if (elem.id===record.id) {
          return {...elem,status:"Accepted"}
        } else {
          return elem
        }
      })
    })
  }
  const rejecttApp = (record) => {
    setmembershipRequestData((pre)=>{
      // console.log(pre,record);
      return pre.map((elem,i) => {
        if (elem.id===record.id) {
          return {...elem,status:"Rejected"}
        } else {
          return elem
        }
      })
    })
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const membershipRequestColumns = [
    {
      title: "Batch ID",
      dataIndex: "id",
    },
    {
      title: "Class ID",
      dataIndex: "id",
      render: (avatar) => {
         return <>#WS-001</>;
       },
    },
    {
      title: "Course Name",
      dataIndex: "applicant_name",
      render: (avatar) => {
        return <>Workplace Safety an Health in Construction Sites</>;
      },
    },
    {
      title: "Class Date",
      dataIndex: "event_time",
    },
    {
      title: "Start Time",
      dataIndex: "time",
      render: (avatar) => {
        return <>10:00 AM</>;
      },
    },
    {
      title: "End Time",
      dataIndex: "time",
      render: (avatar) => {
        return <>12:00 PM</>;
      },
    },
    {
      title: "Date of Invite",
      dataIndex: "event_time",
    },
    {
      title: "Date of Accept/Reject",
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
  ];

  const leaveAppColumns = [
    {
      title: "Batch ID",
      dataIndex: "id",
    },
    {
      title: "Class ID",
      dataIndex: "id",
      render: (avatar) => {
         return <>#WS-001</>;
       },
    },
    {
      title: "Course Name",
      dataIndex: "applicant_name",
      render: (avatar) => {
        return <>Workplace Safety an Health in Construction Sites</>;
      },
    },
    {
      title: "Class Date",
      dataIndex: "event_time",
    },
    {
      title: "Start Time",
      dataIndex: "time",
      render: (avatar) => {
        return <>10:00 AM</>;
      },
    },
    {
      title: "End Time",
      dataIndex: "time",
      render: (avatar) => {
        return <>12:00 PM</>;
      },
    },
    {
      title: "Date of Application",
      width: "180px",
      dataIndex: "event_time",
      render: (avatar) => {
        return <>16 Jan 2023, 10:00 Am</>;
      },
    },
    {
      title: "Reason",
      width: "250px",
      dataIndex: "event_time",
      render: (avatar) => {
        return <>Loreum ipsum is dummy text .Loreum ipsum is dummy text</>;
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
                    <Link className="d-flex align-items-center" onClick={()=>acceptApp(record)}>
                      <AcceptTick/>
                      Accept
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link className="d-flex align-items-center" onClick={()=>rejecttApp(record)}>
                      <CancelCross/>
                      Reject
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
  const adminratingColumn = [
    {
      title: "User ID",
      dataIndex: "User_ID",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src='/img/avatar3.png' alt="img" />;
      },
    },
    {
      title: "Admin Name",
      dataIndex: "Admin_Name",
    },
    {
      title: "Ratings Given",
      dataIndex: "Ratings_Given",
      render:(val)=>{
        return <><Rate disabled defaultValue={val} /></>
      }
    },
    {
      title: "Remarks",
      dataIndex: "Remarks",
    },
    {
      title: "Status",
      dataIndex: "Status",
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
                  <Menu.Item>
                    <Link className="d-flex align-items-center" to="curriculam_details/view_lesson_preview">
                      <AcceptTick/>
                      Accept
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link className="d-flex align-items-center" to="curriculam_details/view_lesson_preview">
                      <CancelCross/>
                      Reject
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
  const classratingColumn = [
    {
      title: "User ID",
      dataIndex: "User_ID",
    },
    {
      title: "Class ID",
      dataIndex: "Class_ID",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src='/img/avatar3.png' alt="img" />;
      },
    },
    {
      title: "Student",
      dataIndex: "Student",
    },
    {
      title: "Ratings Given",
      dataIndex: "Ratings_Given",
      render:(val)=>{
        return <><Rate disabled defaultValue={val} /></>
      }
    },
    {
      title: "Remarks",
      dataIndex: "Remarks",
    },
    {
      title: "Status",
      dataIndex: "Status",
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
                  <Menu.Item>
                    <Link className="d-flex align-items-center" to="curriculam_details/view_lesson_preview">
                      <AcceptTick/>
                      Accept
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link className="d-flex align-items-center" to="curriculam_details/view_lesson_preview">
                      <CancelCross/>
                      Reject
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
      dataIndex: "id",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src={`${avatar}`} />;
      },
    },
    {
      title: "Courses",
      dataIndex: "name",
    },
    {
      title: "Access",
      dataIndex: "gender",
      render: (text) => {
        return (
          <Switch
            defaultChecked
            onChange={(checked) => console.log(`switch to ${checked}`)}
          />
        );
      },
    },
    {
      title: "Course Status",
      dataIndex: "status",
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
        onClick={showModal}
        className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
      >
        Performance Ratings
      </Button>
    </div>
  );
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
          <div style={{width:'330px'}} className="d-flex mb-3">
            <Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              style={{width:'220px'}}
            />
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
          </div>
          <Helper
            clients={facilityBooking}
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
          <div style={{width:'330px'}} className="d-flex mb-3">
            <Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              style={{width:'220px'}}
            />
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
          <LeaveApplication /> <span className="ml-2">Leave Application</span>
        </div>
      ),
      key: 3,
      children: (
        <div>
          <div style={{width:'330px'}} className="d-flex mb-3">
            <Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              style={{width:'220px'}}
            />
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
          </div>
          <Helper clients={membershipRequestData} attribiue={leaveAppColumns} />
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
          <div style={{width:'330px'}} className="d-flex mb-3">
            <Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              style={{width:'220px'}}
            />
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
          </div>
          <Helper clients={admins} attribiue={adminratingColumn} />
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
          <div style={{width:'330px'}} className="d-flex mb-3">
            <Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              style={{width:'220px'}}
            />
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
          </div>
          <Helper clients={students} attribiue={classratingColumn} />
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
                  Jane Cooper <img className="ml-2" src="/img/female.png" />
                </div>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Email ID</h5>
                <p className="m-0">Janecooper@gmail.com</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Phone Number</h5>
                <p className="m-0">+65 123 456</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Last Login Date</h5>
                <p className="m-0">1 Mar 2022</p>
              </div>
            </div>
          </div>
            <div className="p-3 d-flex flex-column align-items-end">
              <h5 className="px-4 py-1 rounded text-white bg-success m-0 d-inline">Active</h5>
              <div>Since Monday, 1 Jan 2022</div>
            </div>
        </div>
      </div>
      <Tabs tabBarExtraContent={tabKey >= 4 ?  operations : ''} onChange={(e)=>setTabKey(e)}>
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
