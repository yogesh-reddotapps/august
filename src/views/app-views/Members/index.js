import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { clients } from '../data'
import Helper from '../Helper'
import './Members.css'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import CustomIcon from 'components/util-components/CustomIcon'
import { Export, History } from 'assets/svg/icon'
import axios from 'axios'
export default function Members() {

  const [membersData, setMembersData] = useState([])

  const onDeleteData = (record) => {
    console.log(record)
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteMember(record)
      }
    })
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: "Member Name",
      render: (record) => {
        return <div>{record.first_name} {record.last_name}</div>
      }
    },
    {
      title: "Phone Number",
      dataIndex: 'phone_number',
    },
    {
      title: "Email ID",
      dataIndex: 'email_address',
    },
    {
      title: "Membership Type",
      dataIndex: 'membership_name',
    },
    {
      title: "Last Activity",
      dataIndex: 'last_activity',
    },
    {
      title: "Status",
      dataIndex: 'status',
      render: text => {
        return <p className={`${text !== "Active" ? 'text-danger' : "text-success"} font-weight-semibold`}>{text}</p>
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
                  <Link to={`members/membersdetails/${record.id}`} > <EyeOutlined className='mr-2 ' />View Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record)}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]

  const getMembers = () => {
    axios.get("http://127.0.0.1:3333/members").then((response) => {
      console.log(response.data.result)  
      if (response.data.status) {
        setMembersData(response.data.result);
      } else {
        console.log(response)
      }
    });
  }

  const deleteMember = (record) => {
    axios.delete("http://127.0.0.1:3333/members/delete", { data: { id: record.id } }).then((response) => {
      console.log(response)
      if (response.data) {
        setMembersData((pre) => {
          return pre.filter((member) => member.id !== record.id)
        })
      }
      alert(response.data)
    }).catch((err) => {
      console.log(err)
    });
  }

  useEffect(() => {
    getMembers();
  }, [])


  return (
    <div>
      <div className='memberDetailTableSearchFilter'>
        <form className='memberDetailSearch'>
          <CustomIcon svg={History} /> <input className='memberDetailSerachInput' placeholder='Search' type="text" name="search" id="" />
        </form>
        <div className='memberDetailFilter'>
          <CustomIcon svg={History} /> <span className='memberDetailFilterText'> Filters</span>
        </div>
        <div className='memberDetailFilter'>
          <CustomIcon svg={Export} /> <span className='memberDetailFilterText'> Export</span>
        </div>

      </div>
      <div>
        <Helper clients={membersData} attribiue={columns} />
      </div>
    </div>
  )
}
