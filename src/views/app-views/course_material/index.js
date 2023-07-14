import { Button, Menu, Modal, Select } from "antd";
import { Export, ExportIcon, FilterIcon, History, Edit, PdfType, VideoType } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import CustomIcon from "components/util-components/CustomIcon";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileUnknownOutlined, DeleteOutlined } from "@ant-design/icons";
import Helper, { capitalizeFirstLetter } from "../Helper";
import "./course_material.css";
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
      Assessment: "Safety Manual",
      Assessment_Questions: "pdf",
      Attended_By: "Admin",
      Created_By: "2023-04-16",
    },
    {
      id: 2,
      Assessment: "Safety Manual",
      Assessment_Questions: "video",
      Attended_By: "Admin",
      Created_By: "2023-04-16",
    },
    {
      id: 3,
      Assessment: "Safety Manual",
      Assessment_Questions: "pdf",
      Attended_By: "Admin",
      Created_By: "2023-04-16",
    },
  ];

  const assesmentColumn = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Course Material",
      dataIndex: "Assessment",
    },
    {
      title: "File Type",
      dataIndex: "Assessment_Questions",
      render: (text) => {
        return (
          <div>
            {
              text == 'pdf' && <PdfType/>
            }
            {
              text == 'video' && <VideoType/>
            }
          </div>
        );
      },
    },
    {
      title: "Uploaded By",
      dataIndex: "Attended_By",
    },
    {
      title: "Uploaded On",
      dataIndex: "Created_By",
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
                    <Link to="/app/assessment/submission">
                      {" "}
                      <DeleteOutlined className="mr-2 " />
                      Delete
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
        </div>
        <Link
          to="course_material/add_new"
          className="bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
        >
          Add New Material
        </Link>
      </div>
      <div className="mb-3">
        <Helper clients={dummyArray} attribiue={assesmentColumn} />
      </div>
    </div>
  );
}

export default FacilityBooking;
