import { Button, Menu, Modal, Select } from "antd";
import { Export, ExportIcon, FilterIcon, History, Edit } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import CustomIcon from "components/util-components/CustomIcon";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileUnknownOutlined, DeleteOutlined } from "@ant-design/icons";
import Helper, { capitalizeFirstLetter } from "../Helper";
import "./assignment.css";
import { useState } from "react";

import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";
import { Tabs } from "antd";

function FacilityBooking() {
  const dummyArray = [
    {
      id: 1,
      Assessment: "Mathematics",
      Assessment_Questions: "Mcq",
      Attended_By: "15",
      Created_By: "admin",
      Created_On: "2023-04-16",
    },
    {
      id: 2,
      Assessment: "Science",
      Assessment_Questions: "Theory",
      Attended_By: "15",
      Created_By: "admin",
      Created_On: "2023-04-16",
    },
    {
      id: 3,
      Assessment: "English",
      Assessment_Questions: "Reading",
      Attended_By: "15",
      Created_By: "admin",
      Created_On: "2023-04-16",
    },
  ];

  const assesmentColumn = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Assignment",
      dataIndex: "Assessment",
    },
    {
      title: "Assignment Type",
      dataIndex: "Assessment_Questions",
    },
    {
      title: "Assignment Questions",
      dataIndex: "Attended_By",
    },
    {
      title: "Created By",
      dataIndex: "Created_By",
    },
    {
      title: "Created On",
      dataIndex: "Created_On",
    },
    {
      title: "Status",
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
            <EllipsisDropdown
              menu={
                <Menu>
                  <Menu.Item>
                    <Link
                      to={`event_list/update/${record.id}`}
                      className="d-flex align-items-center"
                    >
                      <DeleteOutlined className="mr-2" />
                      Delete
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to={`event_list/update/${record.id}`}
                      className="d-flex align-items-center"
                    >
                      <CustomIcon className="mr-2" svg={Edit} />
                      Edit
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/app/assignment/submission">
                      {" "}
                      <FileUnknownOutlined className="mr-2 " />
                      Submissions
                    </Link>
                  </Menu.Item>
                </Menu>
              }
            />
          </>
        );
      },
    },
  ];
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
          to="assignment/add_new"
          className="bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
        >
          Add New Assignment
        </Link>
      </div>
      <div className="mb-3">
        <Helper clients={dummyArray} attribiue={assesmentColumn} />
      </div>
    </div>
  );
}

export default FacilityBooking;
