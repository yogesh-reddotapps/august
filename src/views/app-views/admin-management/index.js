import { Button, Form, Input, Menu, Select, Switch } from "antd";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import React, { useState, useEffect } from "react";
import "../Membership_Request/MembershipRequest.css";
import { DeleteOutlined, CloseOutlined, EyeOutlined } from "@ant-design/icons";
import { membershipRequest } from "../data";
import CustomIcon from "components/util-components/CustomIcon";
import {
  Account,
  Edit,
  Export,
  ExportIcon,
  FilterIcon,
  History,
  Verified,
} from "assets/svg/icon";
import Helper from "../Helper";
import { Modal, Drawer } from "antd";
// import Drawer from 'react-modern-drawer'
import axios from "../../../axios";
import "react-modern-drawer/dist/index.css";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";
import { Link } from "react-router-dom";
import ExportButton from "../Export/ExportButton";
import { headersForAdmin } from "../Export/Headers";
import { formatDate } from "constants/DateConstant";

export default function MembershipRequest() {
  const [membershipRequestData, setmembershipRequestData] =
    useState([]);
  const [visible, setVisible] = useState(false);
  const [refereshTog, setRefereshTog] = useState(false)
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [modal2Open,setModal2Open]=useState(false);
  const [idToDelete,setIdTodelete]=useState();

  const [newAllUsersData,setNewAllUsersData] = useState([]);
  useEffect(()=>{
    let nAllUsersData = membershipRequestData
    nAllUsersData.map((item)=>{
      item.lastLoginTime=formatDate(item.lastLoginTime,true);
    })
    setNewAllUsersData(nAllUsersData)
  },[membershipRequestData])

  // const showModal = () => {
  //   setIsModalOpen(true);
  //   handleOk();
  // };

  // const handleOk = () => {
  //   setTimeout(() => {
  //     setIsModalOpen(false);
  //   }, 5000);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  const getEvents = () => {
    axios
      .post("/api/get-admins")
      .then((res) => {
        console.log(res.data);

        setmembershipRequestData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onDeleteData = (id) => {
    setModal2Open(true);
    setIdTodelete(id);
  }
  const handleDelete = async (Oid) => {
    let data = {
      user_id:Oid
    };
    const response = await axios.post(
      "http://18.140.159.50:3333/api/delete-admin",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if(response.data.success){
      setRefereshTog(refereshTog?false:true)
      
    }
    else{
      alert("Cant Delete")
    }
    

  };

  useEffect(() => {
    getEvents();
  }, [refereshTog]);

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
      title: "Admin Username",
      dataIndex: "name",
    },

    {
      title: "Mobile Number",
      dataIndex: "phone_number",
    },
    {
      title: "Email ID",
      dataIndex: "email",
    },
    {
      title: "DOB",
      dataIndex: "dob",
    },
    {
      title: "Last Login Date",
      dataIndex: "lastLoginTime",
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
                    <span onClick={() => onDeleteData(record.user_id)}>
                      {" "}
                      <DeleteOutlined className="mr-2 " />
                      Delete
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={`admin_management/edit?id=${record.user_id}`}>
                      <span className="d-flex align-items-center">
                        <CustomIcon className="mr-2" svg={Edit} />
                        Edit
                      </span>
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

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <div className="memberDetailTableSearchFilter">
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
            icon={<Icon component={ExportIcon} />}
            className="d-flex align-items-center ml-2"
          >
            Export
          </Button> */}
          <ExportButton data={newAllUsersData} passing={headersForAdmin}/>
        </div>
        <Link
          to="admin_management/add_new"
          className="bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
        >
          {" "}
          + Add New Admin
        </Link>
      </div>
      <div>
        <Helper
          clients={membershipRequestData}
          attribiue={membershipRequestColumns}
        />
      </div>
      <Modal
        // title="Vertically centered modal dialog"
        centered
        visible={modal2Open}
        onOk={() =>{setModal2Open(false)
            handleDelete(idToDelete);
        }}
        onCancel={() => setModal2Open(false)}
        okText="Yes,Confirm"
        cancelText="No,Cancel"
        okButtonProps={{style: { backgroundColor: '#0068B3' ,width:"30%"} }}  
      >
       <div style={{color:"#000B23",fontSize:"18px",fontWeight:"600"}}>Sure you want to delete?</div>
       <div>It will be delete from the system</div>
      </Modal>
    </div>
  );
}
