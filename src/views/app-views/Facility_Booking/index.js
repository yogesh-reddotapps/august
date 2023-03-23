import { Button, Menu, Modal } from 'antd'
import { Export, ExportIcon, FilterIcon, History } from 'assets/svg/icon'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import CustomIcon from 'components/util-components/CustomIcon'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { membershipFacilityBooking } from '../data'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import Helper, { capitalizeFirstLetter } from '../Helper'
import './FacilityBooking.css'
import { useState } from 'react'
import axios from 'axios'
import SearchBox from 'components/shared-components/SearchBox'
import Filter from 'components/shared-components/Filter'
import Icon from '@ant-design/icons'


function FacilityBooking() {

  const [facilityBooking, setFacilityBooking] = useState(membershipFacilityBooking)

  const onDeleteData = (record, dataSet, Id) => {
    // console.log(Id)
    // console.log(record)
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteFacilityBooking(record, dataSet, Id)
      }
    })
  }

  const facilityBookingColumns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      dataIndex:'avatar',
      render:avatar=>{
        return <img src={`${avatar}`}/>
      }
    },
    {
      title: "Course Name",
      dataIndex: 'name',
    },
    {
      title: "Course Category",
      dataIndex: 'Course_category',
    },
    {
      title: "Date/Time",
      dataIndex: 'date',
      
    },
    {
      title: "Venue",
      dataIndex: 'venue',
    },


    {
      title: "Students Enroll",
      dataIndex: 'enroll',
    },
    {
      title: "Assignments",
      dataIndex: 'assignment',
    },
    {
      title: "Assesment",
      dataIndex: 'assesment',
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
                  <Link to='facility_booking' > <EyeOutlined className='mr-2 ' />View Details</Link >
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

 

  const deleteFacilityBooking = (record, dataSet, Id) => {
    axios.delete("http://127.0.0.1:3333/bookings/delete", { data: { id: record[Id] } }).then((response) => {
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



  return (
    <div>
        <div className='d-flex justify-content-between mb-3'>
      <div className='' style={{display:"flex"}}>
        <SearchBox />
        <Filter>
          <Button icon={<Icon component={FilterIcon} />} className="d-flex align-items-center ml-2">Filters
          </Button>
        </Filter>
        <Button icon={<Icon component={ExportIcon} />} className="d-flex align-items-center ml-2" >Export</Button>
       
      </div>
      <Link to='staffManagement/add_new' className='bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4'>Add New Staff</Link>
      </div>
      <div>
        <Helper clients={facilityBooking} attribiue={facilityBookingColumns} />
      </div>

    </div>
  )
}

export default FacilityBooking