import { Button, Menu, Modal, Select, Rate, Switch,Divider } from "antd";
import { Export, ExportIcon, FilterIcon, History, Edit, CourseAccess, ClassInvite, LeaveApplication } from "assets/svg/icon";
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

function FacilityBooking() {
  const [facilityBooking, setFacilityBooking] = useState(
    membershipFacilityBooking
  );
  const [membershipRequestData, setmembershipRequestData] = useState(
    membershipEventBooking
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const membershipRequestColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src={`${avatar}`} />;
      },
    },
    {
      title: "Course Name",
      dataIndex: "applicant_name",
      render: (avatar) => {
        return <>Workplace Safety an Health in Construction Sites</>
      },
    },
    {
      title: "Class Date",
      dataIndex: "event_time",
    },
    {
      title: "Time",
      dataIndex: "time",
      render: (avatar) => {
        return <>10:00 AM - 12:00 PM</>
      },
    },
    {
      title: "Date of Invite",
      dataIndex: "event_time"
    },
    {
        title: "Date of Accept/Reject",
        dataIndex: "event_time"
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
    }
  ];

  const leaveAppColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src={`${avatar}`} />;
      },
    },
    {
      title: "Course Name",
      width:'180px',
      dataIndex: "applicant_name",
      render: (avatar) => {
        return <>Workplace Safety an Health in Construction Sites</>
      },
    },
    {
      title: "Class Date",
      dataIndex: "event_time",
    },
    {
      title: "Time",
      dataIndex: "time",
      render: (avatar) => {
        return <>10:00 AM - 12:00 PM</>
      },
    },
    {
      title: "Date of Application",
      width:'180px',
      dataIndex: "event_time",
      render: (avatar) => {
        return <>16 Jan 2023, 10:00 Am</>
      },
    },
    {
        title: "Reason",
        width:'250px',
        dataIndex: "event_time",
        render: (avatar) => {
          return <>Loreum ipsum is dummy text .Loreum ipsum is dummy text</>
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
    }
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
    <div className="mb-2 d-flex align-items-center">
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
      label: (<div className="d-flex justify-content-center"><CourseAccess/> <span className='ml-2'>Course Access</span></div>),
      key: 1,
      children: (
        <div>
          <Helper
            clients={facilityBooking}
            attribiue={facilityBookingColumns}
          />
        </div>
      ),
    },
    {
      label: (<div className="d-flex justify-content-center"><ClassInvite/> <span className='ml-2'>Class Invite</span></div>),
      key: 2,
      children: (
        <div>
          <Helper
            clients={membershipRequestData}
            attribiue={membershipRequestColumns}
          />
        </div>
      ),
    },
    {
      label: (<div className="d-flex justify-content-center"><LeaveApplication/> <span className='ml-2'>Leave Application</span></div>),
      key: 3,
      children: (
        <div>
          <Helper
            clients={membershipRequestData}
            attribiue={leaveAppColumns}
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
      <div className="border rounded p-3 mb-4 bg-white">
        <div>
          <table>
            <tbody>
              <tr>
                <th
                  className="p-2"
                  style={{ width: "80px", textAlign: "left" }}
                >
                  ID
                </th>
                <th
                  className="p-2"
                  style={{ width: "150px", textAlign: "left" }}
                >
                  Teacher
                </th>
                <th
                  className="p-2"
                  style={{ width: "200px", textAlign: "left" }}
                >
                  Email Id
                </th>
                <th
                  className="p-2"
                  style={{ width: "180px", textAlign: "left" }}
                >
                  Phone Number
                </th>
                <th
                  className="p-2"
                  style={{ width: "150px", textAlign: "left" }}
                >
                  Course Assigned
                </th>
                <th
                  className="p-2"
                  style={{ width: "150px", textAlign: "left" }}
                >
                  Invite Sent
                </th>
                <th
                  className="p-2"
                  style={{ width: "250px", textAlign: "left" }}
                >
                  Performance Ratings
                </th>
              </tr>
              <tr>
                <td className="p-2">#125</td>
                <td className="p-2">Wood smith</td>
                <td className="p-2">wade@gmail.com</td>
                <td className="p-2">+65 2546 8546</td>
                <td className="p-2">2</td>
                <td className="p-2">5</td>
                <td className="p-2">
                  <Rate disabled defaultValue={2} />
                  <p>*Ratings updated on 10 Mar 2023</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Tabs tabBarExtraContent={operations}>
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
        <div className="d-flex mb-3 flex-column">
          {/* <CustomIcon svg={Verified} /> */}
          <h3 style={{margin: 0}} className="font-weight-bold">
          Performance Ratings
          </h3>
          <Divider />
          <h5 className="font-weight-bold">Teacher</h5>
          <h5>Wade Smith</h5>
          <br/>
          <h5 className="font-weight-bold">Ratings</h5>
          <Rate />
          <br/>
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
