import { Button, Menu, Modal } from "antd";
import { Export, ExportIcon, FilterIcon, History, ViewCourseMaterial } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import CustomIcon from "components/util-components/CustomIcon";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { membershipFacilityBooking } from "../data";
import {
  DeleteOutlined,
  EyeOutlined,
  FileUnknownOutlined,
} from "@ant-design/icons";
import Helper, { capitalizeFirstLetter } from "../Helper";
import "./FacilityBooking.css";
import { useState } from "react";
import axios from "axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";

function FacilityBooking() {
  const [facilityBooking, setFacilityBooking] = useState(
    membershipFacilityBooking
  );
  const [curriculamList, setCurriculamList] = useState([])

  const onDeleteData = (record, dataSet, Id) => {
    // console.log(Id)
    // console.log(record)
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteFacilityBooking(record, dataSet, Id);
      },
    });
  };

  const facilityBookingColumns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      dataIndex: "course_picture",
      render: (avatar) => {
        return <img style={{width:'70px',height:'70px',borderRadius:'50%'}} src={`${avatar}`} alt="..." />;
      },
    },
    {
      title: "Course Name",
      dataIndex: "course_name",
      // width: 400,
    },
    {
      title: "Course Category",
      dataIndex: "course_category",
    },
    {
      title: "Medium",
      dataIndex: "medium",
    },
    {
      title: "Subject",
      dataIndex: "subjects_count",
    },
    {
      title: "Lessons",
      dataIndex: "lesson_count",
    },

    {
      title: "Students Enroll",
      dataIndex: "enroll",
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
                    <Link to={{
                      pathname:"curriculam_details",
                      state:{
                        id:record.id
                      }
                    }
                    }>
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
  const getCurriculam = async () => {
    const res1 = await axios.get(`http://18.140.159.50:3333/api/get-curriculum-list`)
    setCurriculamList(res1.data);
  }
  useEffect(() => {
   getCurriculam()
  }, [])
  

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
        {/* <Link
          to="staffManagement/add_new"
          className="bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
        >
          Add New Staff
        </Link> */}
      </div>
      <div>
        <Helper clients={curriculamList} attribiue={facilityBookingColumns} />
      </div>
    </div>
  );
}

export default FacilityBooking;
