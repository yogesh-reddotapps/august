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

  const [facilityBookingData, setFacilityBookingData] = useState([])

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
      title: 'Booking Id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      // dataIndex: 'name',
      render: (record) => {
        return <div className='font-weight-bold text-dark' >{capitalizeFirstLetter(record.first_name)} {capitalizeFirstLetter(record.last_name)}</div>
      }
    },
    {
      title: "Facility Name",
      dataIndex: 'facility_name',
    },
    {
      title: "Facility Type",
      dataIndex: 'facility_type',
    },
    {
      title: "Booking Time",
      // dataIndex: 'booking_timing',
      render: (record) => {
        return <div>{new Date(record.date_time).toLocaleTimeString()}, for {record.booking_hours} hrs</div>
      }
    },
    {
      title: "Date of Booking",
      dataIndex: 'date_time',
      render: text => {
        return <div>{new Date(text).toLocaleDateString(0, 10)}</div>
      }
    },
    {
      title: "No of Guest",
      dataIndex: 'no_of_pax',
    },

    {
      title: "Amount Paid",
      dataIndex: 'amount',
    },

    {
      title: "Status",
      dataIndex: 'status',
      render: text => {
        return <p className={`${text === "Cancel" ? 'text-danger membershipPaymentPending' : "text-success membershipPaymentPaid"} font-weight-semibold`}>{text}</p>
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
                  <span onClick={() => onDeleteData(record, setFacilityBookingData, 'id')}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]

  const getFacilityBookings = () => {
    axios.get("http://127.0.0.1:3333/bookings?type=facility").then((response) => {
      console.log(response)  
      if (response.data.status) {
        setFacilityBookingData(response.data.result);
      } else {
        console.log(response)
      }
    })
  }

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

  useEffect(() => {
    getFacilityBookings();
  }, [])

  return (
    <div>
      <div className='membershipPlanTableSearchFilter'>
        <SearchBox />
        <Filter>
          <Button icon={<Icon component={FilterIcon} />} className="d-flex align-items-center ml-2">Filters
          </Button>
        </Filter>
        <Button icon={<Icon component={ExportIcon} />} className="d-flex align-items-center ml-2" >Export</Button>
      </div>
      <div>
        <Helper clients={facilityBookingData} attribiue={facilityBookingColumns} />
      </div>

    </div>
  )
}

export default FacilityBooking