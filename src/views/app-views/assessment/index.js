import { Button, Menu, Modal, Select } from "antd";
import { Export, ExportIcon, FilterIcon, History, Edit } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import CustomIcon from "components/util-components/CustomIcon";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { membershipFacilityBooking } from "../data";
import { membershipEventBooking } from "../data";
import { FileUnknownOutlined } from "@ant-design/icons";
import Helper, { capitalizeFirstLetter } from "../Helper";
import "./assessment.css";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";
import { Tabs } from "antd";

function FacilityBooking() {

    const dummyArray = [
        {
          id: 1,
          Assessment: 'Mathematics',
          Assessment_Questions: 10,
          Attended_By: 'John Doe',
          Due_Date: '2023-05-01',
          Created_By: 'Jane Smith',
          Created_On: '2023-04-16'
        },
        {
          id: 2,
          Assessment: 'Science',
          Assessment_Questions: 15,
          Attended_By: 'Sarah Lee',
          Due_Date: '2023-05-05',
          Created_By: 'Jack Johnson',
          Created_On: '2023-04-17'
        },
        {
          id: 3,
          Assessment: 'English',
          Assessment_Questions: 20,
          Attended_By: 'Michael Chen',
          Due_Date: '2023-05-10',
          Created_By: 'Karen Wang',
          Created_On: '2023-04-18'
        }
      ];
      
    const assesmentColumn=[
          {
            title: 'ID',
            dataIndex: 'id',
          },{
            title: 'Assessment',
            dataIndex: 'Assessment',
          },{
            title: 'Assessment Questions',
            dataIndex: 'Assessment_Questions',
          },{
            title: 'Attended By',
            dataIndex: 'Attended_By',
          },{
            title: 'Due Date',
            dataIndex: 'Due_Date',
          },{
            title: 'Created By',
            dataIndex: 'Created_By',
          },{
            title: 'Created On',
            dataIndex: 'Created_On',
          },
          {
            title:"Status",
            dataIndex: "status",
            render: (text) => {
              return (
                <div
                  className={`${
                    text !== "Active" ? "text-danger" : "text-success"
                  } font-weight-semibold`}
                >
                  Active
                </div>
              );
            },
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
                        <Link to='/app/assessment/submission' > <FileUnknownOutlined className="mr-2 " />Submissions</Link >
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
  return (
    <div>
      <div className="border rounded p-3 mb-4 bg-white">
        <div>
          <h3>Course</h3>
          <h4>Workplace Safety and Health in Construction Sites</h4>
        </div>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <div className="memberDetailTableSearchFilter">
          <SearchBox />
          <Filter>
            <Button
              icon={<Icon component={FilterIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Filters
            </Button>
          </Filter>
          <Button
            icon={<Icon component={ExportIcon} />}
            className="d-flex align-items-center ml-2"
          >
            Export
          </Button>
        </div>
        <Link
          to="assessment/add_new"
          className="bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
        >
          Add New Assesment
        </Link>
      </div>
      <div className="mb-3">
      <Helper
            clients={dummyArray}
            attribiue={assesmentColumn}
          />
      </div>
    </div>
  );
}

export default FacilityBooking;
