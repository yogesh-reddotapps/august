import { Button, Menu, Modal } from 'antd'
import { Export, ExportIcon, FilterIcon, History } from 'assets/svg/icon'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import CustomIcon from 'components/util-components/CustomIcon'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Facility.css'
import { DeleteOutlined, UnorderedListOutlined, EyeOutlined } from '@ant-design/icons'
import { facilityList } from '../data'
import Helper from '../Helper'
import axios from 'axios'
import Icon from '@ant-design/icons'
import SearchBox from 'components/shared-components/SearchBox'
import Filter from 'components/shared-components/Filter'


export default function Facility() {

  const [facilityData, setFacilityData] = useState(facilityList)


  const onDeleteData = (record, dataSet, Id) => {
    // console.log(Id)
    // console.log(record)
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteFacilities(record, dataSet, Id)
      }
    })
  }

  const membershipBookingColumns = [
    {
      title: 'Facility Id',
      dataIndex: 'id',
    },
    {
      title: "Facility Name",
      dataIndex: 'name',
      render: text => {
        return <p className='font-weight-bold text-dark' >{text}</p>
      }
    },
    {
      title: "Business Hrs",
      dataIndex: 'business_hrs',
    },
    {
      title: "No of Bookings",
      dataIndex: 'no_of_bookings',
    },
    {
      title: "Total Revenue",
      dataIndex: 'total_revenue',
    },
    {
      title: "Status",
      dataIndex: 'status',
      render: text => {
        return <p className={`${text !== "Available" ? 'text-danger membershipPaymentPending' : "text-success membershipPaymentPaid"} font-weight-semibold`}>{text}</p>
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
                  <Link to='facility_list' > <EyeOutlined className='mr-2 ' />View/Edit Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <Link to={`facility_list/${record.name?.replaceAll(" ", '_')}`} > <UnorderedListOutlined className='mr-2 ' />Facility Types</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record, setFacilityData, 'id')}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]

  const getFacilities = () => {
    axios.get("http://127.0.0.1:3333/facilities").then((response) => {
      console.log(response.data.result)
      if (response.data.status) {
        setFacilityData(response.data.result);
      } else {
        console.log(response)
      }
    });
  }

  const deleteFacilities = (record, dataSet, Id) => {
    axios.delete("http://127.0.0.1:3333/facilities/delete", { data: { id: record[Id] } }).then((response) => {
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
    getFacilities();
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
        <Link to='facility_list/add_new' className='bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4'>Add New</Link>
      </div>
      <div>
        <Helper clients={facilityData} attribiue={membershipBookingColumns} />
      </div>

    </div>
  )
}
