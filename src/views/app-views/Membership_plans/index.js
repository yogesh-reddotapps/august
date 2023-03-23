import { Button, Menu, Modal } from 'antd'
import { Export,Edit, History, FilterIcon, ExportIcon } from 'assets/svg/icon'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import CustomIcon from 'components/util-components/CustomIcon'
import React, { useEffect } from 'react'
import { membershipDetail } from '../data'
import './MembershipPlan.css'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Helper from '../Helper'
import axios from 'axios'
import SearchBox from 'components/shared-components/SearchBox'
import Filter from 'components/shared-components/Filter'
import Icon from '@ant-design/icons'


export default function MembershipPlan() {

  const [MembershipPlanDetailData, setMembershipPlanDetailData] = useState([])

  const onDeleteData = (record, dataSet, Id) => {
    // console.log(Id)
    // console.log(record)
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteMembership(record, dataSet, Id)
      }
    })
  }

  const membershipHistoryColumns = [
    {
      title: 'Membership Id',
      dataIndex: 'id',
    },
    {
      title: "Membership Plan",
      dataIndex: 'name',
      render: text => {
        return <p style={{ letterSpacing: "0.7px" }} className='text-dark font-weight-bold ' >{text}</p>
      }
    },
    {
      title: "Membership Period",
      dataIndex: 'period',
    },
    {
      title: "Amount",
      dataIndex: 'amount',
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
                  <Link to='/app/membership/membership_plans' > <EyeOutlined className='mr-2 ' />View Details</Link >
                </Menu.Item>
                <Menu.Item>
                  <span onClick={() => onDeleteData(record, setMembershipPlanDetailData, "id")}> <DeleteOutlined className='mr-2 ' />Delete</span>
                </Menu.Item>
                <Menu.Item>
                  <Link to={`membership_plans/update/${record.id}`} className='d-flex align-items-center' ><CustomIcon className='mr-2' svg={Edit} />Edit</Link>
                </Menu.Item>
              </Menu>
            } />

          </>
        );
      },
    },
  ]

  const getMembership = () => {
    axios.get("http://127.0.0.1:3333/membership").then((response) => {
      // console.log(response)  
      if (response.status == 200) {
        setMembershipPlanDetailData(response.data);
      } else {
        console.log(response)
      }
    });
  }

  const deleteMembership = (record, dataSet, Id) => {
    axios.delete("http://127.0.0.1:3333/membership/delete", { data: { id: record[Id] } }).then((response) => {
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
    getMembership();
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
        <Link to='membership_plans/add_new' className='bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4'>Add New</Link>
      </div>
      <div>
        <Helper clients={MembershipPlanDetailData} attribiue={membershipHistoryColumns} />
      </div>

    </div>
  )
}
