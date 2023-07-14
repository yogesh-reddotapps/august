import { Button, Menu, Modal } from 'antd'
import { Export, ExportIcon, FilterIcon, History } from 'assets/svg/icon'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import CustomIcon from 'components/util-components/CustomIcon'
import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './FacilityType.css'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { facilityList } from '../data'
import Helper from '../Helper'
import axios from 'axios'
import { useEffect } from 'react'
import SearchBox from 'components/shared-components/SearchBox'
import Filter from 'components/shared-components/Filter'
import Icon from '@ant-design/icons'


export default function FacilityType() {


    const param = useParams()
    const [facilityTypeData, setFacilityTypeData] = useState(facilityList)


    const onDeleteData = (record, dataSet, Id) => {
        // console.log(Id)
        // console.log(record)
        Modal.confirm({
            title: "Are you sure, you want to delete this members record ?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                deleteFacilitiesTypes(record, dataSet, Id)
            }
        })
    }

    const membershipBookingColumns = [
        {
            title: 'Facility Id',
            dataIndex: 'id',
        },
        {
            title: "Facility Type",
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
                                    <Link to={`${param.facility_types}/add_new`} > <EyeOutlined className='mr-2 ' />View/Edit Details</Link >
                                </Menu.Item>
                                <Menu.Item>
                                    <span onClick={() => onDeleteData(record, setFacilityTypeData, 'id')}> <DeleteOutlined className='mr-2 ' />Delete</span>
                                </Menu.Item>
                            </Menu>
                        } />

                    </>
                );
            },
        },
    ]

    const Types = () => {
        axios.get("http://127.0.0.1:3333/facilities/types").then((response) => {
            console.log(response.data.result)
            if (response.data.status) {
                setFacilityTypeData(response.data.result);
            } else {
                console.log(response)
            }
        });
    }

    const deleteFacilitiesTypes = (record, dataSet, Id) => {
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
        Types();
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
                <Link to={`${param.facility_types}/add_new`} className='bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4'>Add New</Link>
            </div>
            <div>
                <Helper clients={facilityTypeData} attribiue={membershipBookingColumns} />
            </div>

        </div>
    )
}
