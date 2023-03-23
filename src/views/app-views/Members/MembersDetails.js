import { Button, Menu, Modal, Tabs } from 'antd'
import { Account, Address, DOB, Email, FilterIcon, History, ID, Phone } from 'assets/svg/icon'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import CustomIcon from 'components/util-components/CustomIcon'
import React, { useState } from 'react'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { membershipDetail, membershipEventBooking, membershipFacilityBooking, membershipPayment } from '../data'
import './MemberDetails.css'
import Helper, { capitalizeFirstLetter } from '../Helper'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import Filter from 'components/shared-components/Filter'
import Icon from '@ant-design/icons';
import SearchBox from 'components/shared-components/SearchBox'


export default function MembersDetails() {

  const param = useParams()
  const [memberDetail, setMemberDetail] = useState({})
  const [MembershipHistoryData, setMembershipHistoryData] = useState([])
  const [MembershipDetailPayment, setMembershipDetailDataPayment] = useState(membershipPayment)
  const [MembershipDetailEventBookingData, setMembershipDetailEventBookingData] = useState([])
  const [MembershipDetailFacilityBookingData, setMembershipDetaDetailFacilityBookingData] = useState(membershipFacilityBooking)

  const onDeleteData = (record, dataSet, Id) => {
    // console.log(Id)
    // console.log(record)
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        dataSet((pre) => {
          return pre.filter((member) => member[Id] !== record[Id])
        })
      }
    })
  }

  const membershipHistoryColumns = [
    {
      title: 'Membership id',
      dataIndex: 'member_id',
    },
    {
      title: "Membership Type",
      dataIndex: 'membership_name',
    },
    {
      title: "Activation Date",
      // dataIndex: 'activation_date',
      render: (record) => {
        return (
          <div>{new Date(record.activation_date).toLocaleDateString()}</div>
        )
      }
    },
    {
      title: "Expiry Date",
      // dataIndex: 'expiry_date',
      render: (record) => {
        return (
          <div>{new Date(record.expiry_date).toLocaleDateString()}</div>
        )
      }
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
                  <Link to='/app/membership/members/membersdetails' > <EyeOutlined className='mr-2 ' />View Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record, setMembershipHistoryData, "membership_id")}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]
  const membershipPaymentColumns = [
    {
      title: 'Payment id',
      dataIndex: 'payment_id',
    },
    {
      title: "Membership Type",
      dataIndex: 'membershipType',
    },
    {
      title: "Payment Date",
      dataIndex: 'payment_date',
    },
    {
      title: "Payment Amount",
      dataIndex: 'payment_amount',
    },
    {
      title: "Payment Mode",
      dataIndex: 'payment_mode',
      render: text => {
        return <p className='text-primary font-weight-semibold ' >{text}</p>
      }
    },
    {
      title: "Status",
      dataIndex: 'status',
      render: text => {
        return <p className={`${text === "Pending" ? 'text-danger membershipPaymentPending' : "text-success membershipPaymentPaid"} font-weight-semibold`}>{text}</p>
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
                  <Link to='/app/membership/members/membersdetails' > <EyeOutlined className='mr-2 ' />View Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record, setMembershipDetailDataPayment, 'payment_id')}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]
  const membershipBookingColumns = [
    {
      title: 'Event id',
      dataIndex: 'event_id',
    },
    {
      title: "Event Name",
      dataIndex: 'event_name',
      render: text => {
        return <p className='font-weight-bold text-dark' >{text.length > 18 ? `${text.slice(0, 18)}...` : text}</p>
      }
    },
    {
      title: "Booking Date",
      dataIndex: 'date',
      render: text => {
        return <div>{new Date(text).toLocaleDateString().slice(0, 10)}</div>
      }
    },
    {
      title: "Payment Amount",
      dataIndex: 'amount',
    },
    {
      title: "No of PAX",
      dataIndex: 'no_of_pax',
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
                  <Link to='/app/membership/members/membersdetails' > <EyeOutlined className='mr-2 ' />View Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record, setMembershipDetailEventBookingData, 'event_id')}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]
  const membershipFacilityBookingColumns = [
    {
      title: 'Booking id',
      dataIndex: 'booking_id',
    },
    {
      title: "Facility",
      dataIndex: 'facility',
      render: text => {
        return <p className='font-weight-bold text-dark' >{text.length > 18 ? `${text.slice(0, 18)}...` : text}</p>
      }
    },
    {
      title: "Facility Type",
      dataIndex: 'facility_type',
    },
    {
      title: "Payment Amount",
      dataIndex: 'payment_amount',
    },
    {
      title: "Date of Booking",
      dataIndex: 'booking_date',
    },
    {
      title: "No of Guest",
      dataIndex: 'no_of_guest',
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
                  <Link to='/app/membership/members/membersdetails' > <EyeOutlined className='mr-2 ' />View Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record, setMembershipDetaDetailFacilityBookingData, 'booking_id')}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]

  console.log(param)

  const getMemberDetail = () => {
    axios.get(`http://127.0.0.1:3333/members/get-member-details?id=${param.id}`).then((response) => {
      console.log(response.data.result[0])
      if (response.data.status) {
        setMemberDetail(response.data.result[0]);
      } else {
        console.log(response)
      }
    });
  }

  const getMemberHistory = () => {
    axios.get(`http://127.0.0.1:3333/members/get-member-histories?id=${param.id}`).then((response) => {
      console.log(response.data.result)
      if (response.data.status) {
        setMembershipHistoryData(response.data.result);
      } else {
        console.log(response)
      }
    });
  }

  const getMemberEvent = () => {
    axios.get(`http://127.0.0.1:3333/members/get-event-details?id=${param.id}`).then((response) => {
      console.log(response.data.result)
      if (response.data.status) {
        setMembershipDetailEventBookingData(response.data.result);
      } else {
        console.log(response)
      }
    });
  }

  useEffect(() => {
    getMemberDetail();
    getMemberHistory();
    getMemberEvent();
  }, [])



  return (
    memberDetail ? <div className='membershipDetailLayout'>
      <div className='membershipDetailLeft'>
        <div className='membershipDetailProfile'>
          <CustomIcon svg={Account} />
        </div>
        <p className='membershipDetailName'>{capitalizeFirstLetter(memberDetail.first_name)} {capitalizeFirstLetter(memberDetail.last_name)}</p>
        <p className='membershipDetailStatus'>{capitalizeFirstLetter(memberDetail.status)}</p>
        <hr />
        <p className='memberDetailProfileTitle'>Account Details</p>
        <p className='membershipDetailText'><CustomIcon svg={ID} /> {memberDetail.id}</p>
        <p className='membershipDetailText'><CustomIcon svg={DOB} /> {new Date(memberDetail.date_of_birth)?.toLocaleDateString()}</p>
        <hr />
        <p className='memberDetailProfileTitle'>Contact</p>
        <p className='membershipDetailText'><CustomIcon svg={Phone} /> {memberDetail.phone_number}</p>
        <p className='membershipDetailText'><CustomIcon svg={Address} /> {memberDetail.address}</p>
        <p className='membershipDetailText'><CustomIcon svg={Email} /> {memberDetail.email_address}</p>

      </div>
      <div className='membershipDetailRight'>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab={`Membership History`} key="1">
            <div className='memberDetailTableSearchFilter'>
              {/* <form className='memberDetailSearch'>
                <CustomIcon svg={History} /> <input className='memberDetailSerachInput' placeholder='Search' type="text" name="search" id="" />
              </form> */}
              {/* <div className='memberDetailFilter'>
                <CustomIcon svg={History} /> <span className='memberDetailFilterText'> Filters</span>
              </div> */}
              <SearchBox/>
              <Filter>
                <Button icon={<Icon component={FilterIcon}/>} className="d-flex align-items-center ml-2">
                  {/* <img className="mr-2" src={FilterIcon} alt="filterIcon"></img> */}
                  Filters
                </Button>
              </Filter>
            </div>
            <div className='membershipDetailTable'>
              <Helper clients={MembershipHistoryData} attribiue={membershipHistoryColumns} />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Payments" key="2">
            <div className='memberDetailTableSearchFilter'>
            <SearchBox/>
              <Filter>
                <Button icon={<Icon component={FilterIcon}/>} className="d-flex align-items-center ml-2">
                  {/* <img className="mr-2" src={FilterIcon} alt="filterIcon"></img> */}
                  Filters
                </Button>
              </Filter>
            </div>
            <div className='membershipDetailTable'>
              <Helper clients={MembershipDetailPayment} attribiue={membershipPaymentColumns} />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Event Bookings" key="3">
            <div className='memberDetailTableSearchFilter'>
            <SearchBox/>
              <Filter>
                <Button icon={<Icon component={FilterIcon}/>} className="d-flex align-items-center ml-2">
                  {/* <img className="mr-2" src={FilterIcon} alt="filterIcon"></img> */}
                  Filters
                </Button>
              </Filter>
            </div>
            <div className='membershipDetailTable'>
              <Helper clients={MembershipDetailEventBookingData} attribiue={membershipBookingColumns} />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Facility Bookings" key="4">
            <div className='memberDetailTableSearchFilter'>
            <SearchBox/>
              <Filter>
                <Button icon={<Icon component={FilterIcon}/>} className="d-flex align-items-center ml-2">
                  {/* <img className="mr-2" src={FilterIcon} alt="filterIcon"></img> */}
                  Filters
                </Button>
              </Filter>
            </div>
            <div className='membershipDetailTable'>
              <Helper clients={MembershipDetailFacilityBookingData} attribiue={membershipFacilityBookingColumns} />
            </div>
          </Tabs.TabPane>
        </Tabs>

      </div>
    </div> :
      <div>Hii</div>
  )
}