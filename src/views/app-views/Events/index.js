import { Button, Menu, Modal } from 'antd'
import { Export, Edit, History, FilterIcon, ExportIcon } from 'assets/svg/icon'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import CustomIcon from 'components/util-components/CustomIcon'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Events.css'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { membershipEventBooking } from '../data'
import Helper from '../Helper'
import axios from 'axios'
import Icon from '@ant-design/icons'
import SearchBox from 'components/shared-components/SearchBox'
import Filter from 'components/shared-components/Filter'




export default function Events() {
  const [membershipRequestData, setmembershipRequestData] = useState(membershipEventBooking)
  const [eventsData, setEventsData] = useState([])


  const onDeleteData = (record, dataSet, Id) => {
    // console.log(Id)
    // console.log(record)
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteEvents(record, dataSet, Id)
      }
    })
  }

  const membershipRequestColumns= [
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
      title: "Student Name",
      dataIndex: 'applicant_name',
    },
    {
      title: "Date of Birth",
      dataIndex: 'event_time',
    },
    {
      title: "Age",
      dataIndex: 'age',
    },
    {
      title:"Gender",
      dataIndex:'gender',
      render: text => {
        return <img src={`${text!=='male'?'/img/female.png':'/img/male.png'}`} ></img>
      }
    },
    {
      title:'Nationality',
      dataIndex:'nationality',
      render:flag=>{
        return <img width="20px"src={`${flag==='Singapore'?'/img/flag.jpg':''}`}></img>
      }
    },
    {
      title: "Mobile Number",
      dataIndex: 'phone',
    },
    {
      title: "Email ID",
      dataIndex: 'email',
    },
    {
      title:"Course Enrolled",
      dataIndex:'course_role'
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
                  <Link to='/app/events' > <EyeOutlined className='mr-2 ' />View Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record, setEventsData, 'id')}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
                <Menu.Item>
                  <Link to={`event_list/update/${record.id}`} className='d-flex align-items-center' ><CustomIcon className='mr-2' svg={Edit} />Edit</Link>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]

  const getEvents = () => {
    axios.get("http://127.0.0.1:3333/events").then((response) => {
      console.log(response.data.result)
      if (response.data.status) {
        setEventsData(response.data.result);
      } else {
        console.log(response)
      }
    });
  }

  const deleteEvents = (record, dataSet, Id) => {
    axios.delete("http://127.0.0.1:3333/events/delete", { data: { id: record[Id] } }).then((response) => {
      console.log(response)
      if (response.data.status) {
        dataSet((pre) => {
          return pre.filter((member) => member[Id] !== record[Id])
        })
      }
      alert(response.data.status)
    }).catch((err) => {
      console.log(err)
    });
  }

  useEffect(() => {
    getEvents();
  }, [])

  return (
    <div>
      <div className='d-flex justify-content-between mb-3'>
      <div className='membershipPlanTableSearchFilter'>
        <SearchBox />
        <Filter>
          <Button icon={<Icon component={FilterIcon} />} className="d-flex align-items-center ml-2">Filters
          </Button>
        </Filter>
        <Button icon={<Icon component={ExportIcon} />} className="d-flex align-items-center ml-2" >Export</Button>
      </div>
        <Link to='Student_management/add_new' className='bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4'>Add New Student</Link>
      </div>
      <div>
        <Helper  clients={membershipRequestData} attribiue={membershipRequestColumns}  />
      </div>

    </div>
  )
}
