import { Button, Menu, Modal } from 'antd'
import { Export, Edit, History, FilterIcon, ExportIcon } from 'assets/svg/icon'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import CustomIcon from 'components/util-components/CustomIcon'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SportEventFunds.css'
import '../Events_Booking/EventsBoking.css'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { membershipEventBooking } from '../data'
import Helper from '../Helper'
import axios from 'axios'
import Icon from '@ant-design/icons'
import SearchBox from 'components/shared-components/SearchBox'
import Filter from 'components/shared-components/Filter'




export default function SportEventFunds() {

  const [eventsData, setEventsData] = useState(membershipEventBooking)


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

  const membershipBookingColumns = [
    {
      title: 'Id',
      dataIndex: 'event_id',
    },
    {
      title: "Sports Function",
      dataIndex: 'sports_function',
    },
    {
      title: "Requested By",
      dataIndex: 'name',
      render: (text) => {
        return <p className='font-weight-bold text-dark' >{text}</p>
      }
    },
    {
      title: "Requested On",
      dataIndex: 'event_date',
      render: (text) => {
        return (
          <div>{new Date(text).toUTCString().slice(5,17)}</div>
        )
      }
    },
    {
      title: "Amount",
      dataIndex: 'payment_amount',
    },
    {
      title: "Approved On",
      dataIndex: 'event_date',
      render: (text) => {
        return (
          <div>{new Date(text).toUTCString().slice(5,17)}</div>
        )
      }
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
                  <Link to='/app/events/sport-event-funds/details' > <EyeOutlined className='mr-2 ' />View Details</Link >
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
    // getEvents();
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
        <Link to='sport-event-funds/add-new' className='bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4'>Request New Fund</Link>
      </div>
      <div>
        <Helper clients={eventsData} attribiue={membershipBookingColumns} />
      </div>

    </div>
  )
}
