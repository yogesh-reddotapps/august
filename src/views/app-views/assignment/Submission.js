import { Button, Menu, Modal, Select } from "antd";
import { Export, ExportIcon, FilterIcon, History, Edit } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import CustomIcon from "components/util-components/CustomIcon";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { membershipFacilityBooking } from "../data";
import { membershipEventBooking } from "../data";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import Helper, { capitalizeFirstLetter } from "../Helper";
import "./assignment.css";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";
import { Tabs } from "antd";

function Submission() {
  const [facilityBooking, setFacilityBooking] = useState(
    membershipFacilityBooking
  );
  const [membershipRequestData, setmembershipRequestData] = useState(
    membershipEventBooking
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    // {
    //   title: "Submission On",
    //   dataIndex: "event_time",
    // },
    {
      title: "Submission On",
      dataIndex: "event_time",
    },
    // {
    //   title: "Result",
    //   dataIndex: "result",
    //   render: (text) => {
    //     return (
    //       <div>20/25</div>
    //     );
    //   },
    // },
    {
      title: "Status",
      dataIndex: "result",
      render: (text) => {
        return (
          <div>Pending</div>
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
                    <Link to="/app/assignment/view-submission">
                      {" "}
                      <EyeOutlined className="mr-2 " />
                      View Details
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
  const facilityBookingColumns = [
    {
      title: "User Id",
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
      dataIndex: "name",
      render: (avatar) => {
        return <h5>Jane Cooper</h5>;
      },
    },
    {
      title: "Enrolled On",
      dataIndex: "name",
      render: (avatar) => {
        return <h5>16 Jan 2023</h5>;
      },
    },
    {
      title: "Face Recognition",
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src={`${avatar}`} />;
      },
    },
    {
      title: "Id Upload",
      dataIndex: "nationality",
      render: (avatar) => {
        return <img src='/img/idcard.png' />;
      },
    },
    {
      title: "Id Upload",
      dataIndex: "nationality",
      render: (flag) => {
        return <div> Pending </div>;
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
                      Accept
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <span onClick={() => onDeleteData(record)}>
                      {" "}
                      <DeleteOutlined className="mr-2 " />
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
  const operations = (
    <div className="" style={{ display: "flex", marginBottom: "10px" }}>
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
    </div>
  );
  const items = [
    {
      label: `Enrolled Students`,
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
      label: `Id Verified Students`,
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
                  style={{ width: "300px", textAlign: "left" }}
                >
                  Course
                </th>
                <th
                  className="p-2"
                  style={{ width: "300px", textAlign: "left" }}
                >
                  Assignment
                </th>
                <th
                  className="p-2"
                  style={{ width: "300px", textAlign: "left" }}
                >
                  Type
                </th>
                <th
                  className="p-2"
                  style={{ width: "300px", textAlign: "left" }}
                >
                  Submission
                </th>
                <th
                  className="p-2"
                  style={{ width: "300px", textAlign: "left" }}
                >
                  Pending Submissions
                </th>
              </tr>
              <tr>
                <td className="p-2">
                  Workplace Safety and Health in Construction Sites
                </td>
                <td className="p-2">Assignment 1</td>
                <td className="p-2">MCQ</td>
                <td className="p-2">5</td>
                <td className="p-2">10</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          
        </div>
        
        {/* <Tabs tabBarExtraContent={operations}>
          {items.map((item) => (
            <Tabs.TabPane tab={item.label} key={item.key}>
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs> */}
      </div>

      <div className="d-flex justify-content-between mb-3">
      <div className="" style={{ display: "flex", marginBottom: "10px" }}>
      <SearchBox />
      {/* <Filter>
        <Button
          icon={<Icon component={FilterIcon} />}
          className="d-flex align-items-center ml-2"
        >
          Filters
        </Button>
      </Filter> */}
      <Button
        icon={<Icon component={ExportIcon} />}
        className="d-flex align-items-center ml-2"
      >
        Export
      </Button>
    </div>
      </div>
      
      <div>
          <Helper
            clients={membershipRequestData}
            attribiue={membershipRequestColumns}
          />
        </div>
    </div>
  );
}

export default Submission;
