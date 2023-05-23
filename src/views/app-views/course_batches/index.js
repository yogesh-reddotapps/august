import { Button, Menu, Modal } from "antd";
import { ExportIcon, FilterIcon } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { membershipFacilityBooking } from "../data";
import {
  EyeOutlined,
} from "@ant-design/icons";
import Helper from "../Helper";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";

function FacilityBooking() {
  const [facilityBooking, setFacilityBooking] = useState(
    membershipFacilityBooking
  );

 

  const facilityBookingColumns = [
    {
      title: "Course Id",
      dataIndex: "id",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src={`${avatar}`} alt="..." />;
      },
    },
    {
      title: "Course Name",
      dataIndex: "name",
    },
    {
      title: "Batch ID",
      dataIndex: "Course_category",
      render: (avatar) => {
        return <>#WS-B56</>;
      },
    },
    {
      title: "Start Date",
      dataIndex: "date",
      render: (date) => {
        return <div>{date.slice(0,11)}</div>;
      }
    },
    {
      title: "End Date",
      dataIndex: "date",
      render: (date) => {
        return <div>{date.replace("Mar", "Jun").slice(0,11)}</div>;
      }
    },
    {
      title: "Capacity",
      dataIndex: "venue",
      render: (avatar) => {
        return <div>25</div>;
      }
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <div
            className={`${
              text !== "active" ? "text-danger" : "text-success"
            } font-weight-semibold`}
          >
            {text}
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
                    <Link to="curriculam_details">
                      {" "}
                      <EyeOutlined className="mr-2 " />
                      View Details
                    </Link>
                  </Menu.Item>
                  {/* <Menu.Item>
                    <Link to="assessment">
                      {" "}
                      <FileUnknownOutlined className="mr-2 " />
                      View Assessments
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="assignment">
                      {" "}
                      <div className="d-flex align-items-center">

                      <ViewCourseMaterial className="mr-2 " />
                      <span className="ml-1">
                        View Assignments
                        </span>
                      </div>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="course_material">
                      {" "}
                      <div className="d-flex align-items-center">
                        
                      <ViewCourseMaterial className="mr-2 " />
                      <span className="ml-1">
                        View Course Material
                        </span>
                      </div>
                    </Link>
                  </Menu.Item> */}
                </Menu>
              }
            />
          </>
        );
      },
    },
  ];

  const deleteFacilityBooking = (record, dataSet, Id) => {
    axios
      .delete("http://127.0.0.1:3333/bookings/delete", {
        data: { id: record[Id] },
      })
      .then((response) => {
        console.log(response);
        if (response.data.status) {
          dataSet((pre) => {
            return pre.filter((member) => member[Id] !== record[Id]);
          });
        }
        alert(response.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <div className="" style={{ display: "flex" }}>
          <SearchBox />
          <Filter type={'course_curriculam'}>
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
        <Button className="bg-info">
        <Link
          to="course_batches/add_new_batch"
          className="d-flex align-items-center rounded text-white font-weight-semibold"
        >
          + Add New Batch
        </Link></Button>
      </div>
      <div>
        <Helper clients={facilityBooking} attribiue={facilityBookingColumns} />
      </div>
    </div>
  );
}

export default FacilityBooking;
