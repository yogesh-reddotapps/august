import { Export, ExportIcon, FilterIcon, History } from 'assets/svg/icon'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import CustomIcon from 'components/util-components/CustomIcon'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './EventsBoking.css'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { Button, Menu, Modal } from 'antd'
import Helper, { capitalizeFirstLetter } from '../Helper'
import { useState } from 'react'
import { membershipEventBooking } from '../data'
import axios from 'axios'
import SearchBox from 'components/shared-components/SearchBox'
import Filter from 'components/shared-components/Filter'
import Icon from '@ant-design/icons'



function EventsBoking() {

  const [eventBookingData, setEventBookingData] = useState([])

  const onDeleteData = (record, dataSet, Id) => {
    // console.log(Id)
    // console.log(record)
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteEventBooking(record, dataSet, Id)
      }
    })
  }

  const eventsBookingColumns = [
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
      title: "Event Name",
      dataIndex: 'event_name',
      render: text => {
        return <p>{text.length > 18 ? `${text.slice(0, 18)}...` : text}</p>
      }
    },
    {
      title: "No of PAX",
      dataIndex: 'no_of_pax',
    },
    {
      title: "Date of Booking",
      dataIndex: 'date_time',
      render: text => {
        return <div>{new Date(text).toLocaleDateString().slice(0, 10)}</div>
      }
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
                  <Link to='event_booking' > <EyeOutlined className='mr-2 ' />View Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record, setEventBookingData, 'id')}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]

  const getEventsBookings = () => {
    axios.get("http://127.0.0.1:3333/bookings?type=event").then((response) => {
      // console.log(response)  
      if (response.data.status) {
        setEventBookingData(response.data.result);
      } else {
        console.log(response)
      }
    });
  }

  const deleteEventBooking = (record, dataSet, Id) => {
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
    getEventsBookings();
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
        <Helper clients={eventBookingData} attribiue={eventsBookingColumns} />
      </div>

    </div>
  )
}

export default EventsBoking