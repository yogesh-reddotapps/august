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
import Icon,{EditOutlined} from "@ant-design/icons";
import moment from "moment";
import { headerForCourseBatches } from "../Export/Headers";
import { formatDate } from "constants/DateConstant";
import ExportButton from "../Export/ExportButton";
import { API_BASE_URL } from "constants/ApiConstant";
function FacilityBooking() {
  const [facilityBooking, setFacilityBooking] = useState(
    membershipFacilityBooking
  );

  const [newAllUsersData,setNewAllUsersData] = useState([]);
useEffect(()=>{
  let nAllUsersData = facilityBooking
  nAllUsersData.map((item)=>{
    item.start_date=formatDate(item.start_date);
    item.end_date=formatDate(item.end_date);
  })
  setNewAllUsersData(nAllUsersData)
},[facilityBooking])


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
                    <Link to={`course_batches/edit_batch?id=${record.id}`}>
                      {" "}
                      <EditOutlined  className="mr-2 " />
                      Edit
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
    axios.get(`${API_BASE_URL}/batches`).then((res)=>{
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
          {/* <Button
            icon={<Icon component={ExportIcon} />}
            className="d-flex align-items-center ml-2"
          >
            Export
          </Button> */}
          <ExportButton data={newAllUsersData} passing={headerForCourseBatches}/> 
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
