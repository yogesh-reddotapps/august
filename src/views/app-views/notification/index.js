import { Button, Menu, Modal, Select, Rate, Switch,Divider } from "antd";
import { Export, ExportIcon, FilterIcon, History, Edit, SystemNotification, CustNotification } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import CustomIcon from "components/util-components/CustomIcon";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { membershipFacilityBooking } from "../data";
import { membershipEventBooking } from "../data";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import Helper, { capitalizeFirstLetter } from "../Helper";
import "./notification.css";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";
import { Tabs } from "antd";
import TextArea from "antd/lib/input/TextArea";
import moment from "moment";

function FacilityBooking() {
  const [facilityBooking, setFacilityBooking] = useState(
    membershipFacilityBooking
  );
  const [membershipRequestData, setmembershipRequestData] = useState(
    membershipEventBooking
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sysNoti, setSysNoti] = useState([])

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
  const onStatusChange = async (check,record) => {
    console.log(check,record);
    const res1 = await axios.put(`http://18.140.159.50:3333/api/notifications/active-inactive/${record.id}`,{status:check})
    console.log(res1);
  }
  const notificationArray = [
    {
      notificationName: "Notification 1",
      createdOn: "2023-04-18",
      lastUpdate: "2023-04-18"
    },
    {
      notificationName: "Notification 2",
      createdOn: "2023-04-17",
      lastUpdate: "2023-04-17"
    },
    {
      notificationName: "Notification 3",
      createdOn: "2023-04-16",
      lastUpdate: "2023-04-16"
    }
  ];
  
  
  const facilityBookingColumns = [
    {
      title: "Notification Title",
      dataIndex: "notification_title",
    },
    {
      title: "Created On",
      dataIndex: "created_at",
      render:(time)=>{
        return<>{moment.utc(time).local().format("DD/MM/YYYY, hh:mm:ss A")}</>
      }
    },
    {
      title: "Last Update",
      dataIndex: "updated_at",
      render:(time)=>{
        return<>{moment.utc(time).local().format("DD/MM/YYYY, hh:mm:ss A")}</>
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
      title: "Active/Inactive",
      // dataIndex: "status",
      render: (record) => {
        return (
          <Switch
            defaultChecked={record.status===1?true:false}
            onChange={(checked) => onStatusChange(checked,record)}
          />
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
                    <Link to={`/app/notification/edit?id=${record.id}`}>
                      {" "}
                      <CustomIcon className='mr-2' svg={Edit} /> Edit
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
  const operations = (
    <div className="mb-2 d-flex align-items-center">
      <Button
        // onClick={showModal}
        className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
      >
        <Link to={'/app/notification/add_notification'}>
        + Add New Notification</Link>
      </Button>
    </div>
  );
  const items = [
    {
      label: (<div className="d-flex align-items-center"> <SystemNotification />  System Notifications</div>),
      key: 1,
      children: (
        <div className="border rounded p-3 mb-4 bg-white">
          <Helper
            clients={sysNoti}
            attribiue={facilityBookingColumns}
          />
        </div>
      ),
    },
    {
      label: (<div className="d-flex align-items-center"> <CustNotification />  Custom Notifications</div>),
      key: 2,
      children: (
        <div className="border rounded p-3 mb-4 bg-white">
          {/* <Helper
            clients={membershipRequestData}
            attribiue={membershipRequestColumns}
          /> */}
          test
        </div>
      ),
    }
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
  const getSysNotification = async () => {
    const res1 = await axios.get('http://18.140.159.50:3333/api/notifications/system');
    setSysNoti(res1.data);
  }
  useEffect(() => {
  getSysNotification()
  }, [])
  
  return (
    <div>
      <div>
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
          <Rate value={3} />
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
