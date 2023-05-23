import { Button, Form, Input, Menu, Select, Switch } from 'antd'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import React, { useState,useEffect } from 'react'
import '../Membership_Request/MembershipRequest.css'
import { DeleteOutlined, CloseOutlined, EyeOutlined } from '@ant-design/icons'
import { membershipRequest } from '../data'
import CustomIcon from 'components/util-components/CustomIcon'
import { Account, Edit, Export, ExportIcon, FilterIcon, History, Verified } from 'assets/svg/icon'
import Helper from '../Helper'
import { Modal, Drawer } from 'antd';
// import Drawer from 'react-modern-drawer'
import axios from "axios";
import 'react-modern-drawer/dist/index.css'
import SearchBox from 'components/shared-components/SearchBox'
import Filter from 'components/shared-components/Filter'
import Icon from '@ant-design/icons'
import { Link } from 'react-router-dom'


export default function MembershipRequest() {

  const [membershipRequestData, setmembershipRequestData] = useState(membershipRequest)
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    handleOk()
  };

  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 5000)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getEvents = () => {
    axios
      .post(
        "http://18.140.159.50:3333/api/get-admins",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        setmembershipRequestData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onDeleteData = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setmembershipRequestData((pre) => {
          return pre.filter((member) => member.id !== record.id)
        })
      }
    })
  }

  useEffect(() => {
    getEvents();
  }, []);

  const membershipRequestColumns = [
    {
      title: 'User ID',
      dataIndex: 'id',
    },
    {
      dataIndex:'avatar',
      render:avatar=>{
        return <img src={`${avatar}`}/>
      }
    },
    {
      title: "Admin Username",
      dataIndex: 'name',
    },
   
    {
      title: "Mobile Number",
      dataIndex: 'phone_number' ,
    },
    {
      title: "Email ID",
      dataIndex: 'email',
    },
    {
      title:"DOB",
      dataIndex:'dob'
    },
    {
      title:"Last Login Date",
      dataIndex:'lastLoginTime'
    },
    {
      title: "Status",
      dataIndex: 'status',
      render: text => {
        return <div className={`${text !== "Active" ? 'text-danger' : "text-success"} font-weight-semibold`}>{text}</div>
      }
    },
    {
      title: "Action",
      // dataIndex: 'action',
      render: (record) => {
        return (
          <>
            <EllipsisDropdown menu={
              <Menu>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record)}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
                <Menu.Item>
                  <span className='d-flex align-items-center' ><CustomIcon className='mr-2' svg={Edit} />Edit</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]

  return (
    <div>
      <div className='d-flex justify-content-between mb-3'>
      <div className='memberDetailTableSearchFilter'>
        <SearchBox />
        <Filter>
          <Button icon={<Icon component={FilterIcon} />} className="d-flex align-items-center ml-2">Filters
          </Button>
        </Filter>
        <Button icon={<Icon component={ExportIcon} />} className="d-flex align-items-center ml-2" >Export</Button>
      </div>
      <Link to='admin_management/add_new' className='bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4'> + Add New Admin</Link>
      </div>
      <div>
        <Helper clients={membershipRequestData} attribiue={membershipRequestColumns} />
      </div>

    </div>
  )
}
