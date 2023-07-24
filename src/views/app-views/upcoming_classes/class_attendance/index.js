import React, { useState } from "react";
import { useEffect } from "react";
import { Divider, Button } from "antd";
import Icon from "@ant-design/icons";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import { FilterIcon, CsvIcon } from "assets/svg/icon";
import Helper from "../../Helper";
import axios from "axios";
import { API_BASE_URL } from "constants/ApiConstant";
import ExportButton from "views/app-views/Export/ExportButton";
import { headersForUpcomingAttendance } from "views/app-views/Export/Headers";
import moment from "moment";
const ClassAttend = () => {
  const [attData,setAttData]=useState([]);
  const [newAllUsersData,setNewAllUsersData] = useState([]);
useEffect(()=>{
  let nAllUsersData = attData.map((item) => ({
    ...item,
    dob: moment().diff(moment(item.dob, 'DD-MM-YYYY'), 'years'),
    present: item.present ? 'Present' : 'Absent',
  }));
  setNewAllUsersData(nAllUsersData)
},[attData])

  const attcolumn = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src={`/img/Avatar.png`} />;
      },
    },
    {
      title: "Student Name",
      dataIndex: "student_name",
    },
    {
      title: "Age",
      dataIndex: "dob",
      render:(text)=>{
        return <>{moment().diff(moment(text, 'DD-MM-YYYY'), 'years')}</>
      }
    },

    {
      title: "Gender",
      dataIndex: "gender",
      render: (text) => {
        return (
          <img
            src={`${text !== "male" ? "/img/female.png" : "/img/male.png"}`}
          ></img>
        );
      },
    },
    {
      title: "Contact No",
      dataIndex: "phone_number",
    },
    {
      title: "Email Id",
      dataIndex: "email",
    },

    {
      title: "Attendance",
      dataIndex: "present",
      render: (text) => {
        return (
          <div
            className={`${
              text === 0 ? "text-danger" : "text-success"
            } font-weight-semibold`}
          >
            {text===1?"present":'absent'}
          </div>
        );
      },
    },
  ];
  // const attData = [
  //   {
  //     Id: 1,
  //     student_name: "John Doe",
  //     age: 18,
  //     gender: "Male",
  //     contact_no: "1234567890",
  //     email: "johndoe@example.com",
  //     attendance: "Present",
  //   },
  //   {
  //     Id: 2,
  //     student_name: "Jane Smith",
  //     age: 19,
  //     gender: "Female",
  //     contact_no: "9876543210",
  //     email: "janesmith@example.com",
  //     attendance: "Absent",
  //   },
  //   {
  //     Id: 3,
  //     student_name: "Tom Johnson",
  //     age: 17,
  //     gender: "Male",
  //     contact_no: "7890123456",
  //     email: "tomjohnson@example.com",
  //     attendance: "Present",
  //   },
  //   {
  //     Id: 4,
  //     student_name: "Alice Brown",
  //     age: 18,
  //     gender: "Female",
  //     contact_no: "3456789012",
  //     email: "alicebrown@example.com",
  //     attendance: "Absent",
  //   },
  // ];

  useEffect(()=>{
    getHeaderData();
    getAttendance();
  },[])

  const getAttendance = async()=>{
    axios({
      method:'post',
      url:`${API_BASE_URL}/get-attendance`,
      data:{
        class_id:1,
        batch_id:4
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response)=>{
      console.log(response);
      setAttData(response.data.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  const getHeaderData = async()=>{
    try{
      axios({
        method:"GET",
        url:`${API_BASE_URL}/students/course/classes/5`,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response)=>{
        console.log(response);
      })
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <div className="p-3 mb-4 bg-white">
        <div
          style={{ background: "#fafafb" }}
          className="mb-4 rounded d-flex align-items-start w-100 p-3 justify-content-between"
        >
          <div>
            <div style={{ width: "250px" }}>
              <h5 className="m-0">Course</h5>
              <div className="d-flex justify-content-center align-items-center">
                <img height={30} width={30} src="/img/avatar3.png" />
                <p className="m-0 ml-2">
                  Workplace Safety and Health in Construction Sites
                </p>
              </div>
            </div>
          </div>
          <Divider style={{ height: "60px" }} type="vertical" />
          <div>
            <div>
              <h5 className="m-0">Course Category</h5>
              <p className="m-0">Safety Course</p>
            </div>
          </div>
          <Divider style={{ height: "60px" }} type="vertical" />
          <div>
            <div>
              <h5 className="m-0">Batch ID</h5>
              <p className="m-0">#WS-B1</p>
            </div>
          </div>
          <Divider style={{ height: "60px" }} type="vertical" />
          <div>
            <div>
              <h5 className="m-0">Class ID</h5>
              <p className="m-0">#WS-001</p>
            </div>
          </div>
          <Divider style={{ height: "60px" }} type="vertical" />
          <div>
            <div>
              <h5 className="m-0">Class Date</h5>
              <p className="m-0">1 Mar 2022</p>
            </div>
          </div>
          <Divider style={{ height: "60px" }} type="vertical" />
          <div>
            <div>
              <h5 className="m-0">Class Time</h5>
              <p className="m-0">10 AM - 7 PM</p>
            </div>
          </div>
          <Divider style={{ height: "60px" }} type="vertical" />
          <div>
            <div className="d-flex align-items-end flex-column">
              <h5 className="m-0">Status</h5>
              <h5 className="m-0 bg-success text-white rounded px-2 py-1">
                Completed
              </h5>
            </div>
          </div>
        </div>
        <h5 className="m-0">
          Teacher : <span className="text-info">Jane Cooper </span>
          <img src="/img/female.png" alt="img" />{" "}
        </h5>
      </div>
      <div className="membershipPlanTableSearchFilter d-flex mb-3">
        <SearchBox />
        <Filter>
          <Button
            icon={<Icon component={FilterIcon} />}
            className="d-flex align-items-center ml-2"
          >
            Filters
          </Button>
        </Filter>
        {/* <Button
          icon={<Icon component={CsvIcon} />}
          className="d-flex align-items-center ml-2"
        >
          Export
        </Button> */}
        <ExportButton data={newAllUsersData} passing={headersForUpcomingAttendance}/>
      </div>
      <Helper clients={attData} attribiue={attcolumn} />
    </div>
  );
};

export default ClassAttend;
