import { Button, Menu, Modal } from "antd";
import { ExportIcon, FilterIcon } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { membershipFacilityBooking } from "../data";
import { EyeOutlined } from "@ant-design/icons";
import Helper from "../Helper";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";
import moment from "moment";

function FacilityBooking() {
  const [facilityBooking, setFacilityBooking] = useState(
    membershipFacilityBooking
  );

  const facilityBookingColumns = [
    {
      title: "Course Id",
      dataIndex: "course_id",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        // return <img src={`${avatar}`} alt="..." />;
        return <div>img</div>
      },
    },
    {
      title: "Course Name",
      dataIndex: "batch_id",
    },
    {
      title: "Batch ID",
      dataIndex: "id"
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      render: (date) => {
        // return <img src={`${avatar}`} alt="..." />;
        return <div>{moment(date).format("DD-MM-YY")}</div>
      },
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      render: (date) => {
        // return <img src={`${avatar}`} alt="..." />;
        return <div>{moment(date).format("DD-MM-YY")}</div>
      },
    },
    {
      title: "capacity",
      dataIndex: "capacity"
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return (
          <div
            className={`${
              text !== 1 ? "text-danger" : "text-success"
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
                    <Link to={`curriculam_details?id=${record.id}`}>
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

  useEffect(() => {
    axios.get("http://18.140.159.50:3333/api/batches").then((res)=>{
      console.log("resm",res.data);
      setFacilityBooking(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <div className="" style={{ display: "flex" }}>
          <SearchBox />
          <Filter type={"course_curriculam"}>
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
          </Link>
        </Button>
      </div>
      <div>
        <Helper clients={facilityBooking} attribiue={facilityBookingColumns} />
      </div>
    </div>
  );
}

export default FacilityBooking;
