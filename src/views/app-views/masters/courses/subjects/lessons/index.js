import React, { useEffect, useState } from "react";
import { Divider, Button, Menu, Select } from "antd";
import Icon from "@ant-design/icons";
import CustomIcon from 'components/util-components/CustomIcon'
import SearchBox from "components/shared-components/SearchBox";
import { Link } from "react-router-dom";
import Filter from "components/shared-components/Filter";
import { Edit, CsvIcon, AlertTick, LessonTypeText, LessonTypeVideo, LessonTypeMusic, LessonTypeQuestion } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import Helper from "../../../../Helper";
import { useLocation, useHistory } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
const ClassAttend = () => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertText, setAlertText] = useState(
    "Course category added Successfully!"
  );

  const addParam = queryParams.get("add");
  const attcolumn = [
    {
      title: "Sr No",
      dataIndex: "Sr_No",
    },
    {
      title: "Lesson Module ",
      dataIndex: "Lesson_Module",
    },
    {
      title: "Lesson Type",
      dataIndex: "Lesson_Type",
      render: (type) => {
        return (
          <> 
          {type==='text' ? <LessonTypeText/> :''}
          {type==='video' ? <LessonTypeVideo/> :''}
          {type==='music' ? <LessonTypeMusic/> :''}
          {type==='question' ? <LessonTypeQuestion/> :''}
          </>
        );
      },
    },
    {
      title: "Estimated Time (Mins)",
      dataIndex: "Estimated_Time",
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
                    <span><DeleteOutlined className="mr-2 " /> Delete</span>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to={`event_list/update/`}
                      className="d-flex align-items-center"
                    >
                     <CustomIcon className='mr-2' svg={Edit} /> Edit
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
  const attData = [
    {
      Sr_No: 1,
      Lesson_Module: 'Module 1',
      Lesson_Type: 'video',
      Estimated_Time: 20,
    },
    {
      Sr_No: 2,
      Lesson_Module: 'Module 2',
      Lesson_Type: 'text',
      Estimated_Time: 10,
    },
    {
      Sr_No: 3,
      Lesson_Module: 'Module 3',
      Lesson_Type: 'music',
      Estimated_Time: 15,
    },
  ];
  
  

  let alertstyle = {
    position: "absolute",
    top: "0px",
    left: 0,
    width: " 100%",
    height: "50px",
    background: "#00AB6F",
    color: "white",
    transition: "all 0.5s ease 0s",
    zIndex: 2,
  };
  const showAlert = () => {
    if (addParam == "subject") {
      setAlertSuccess(true);
      setAlertText("New Lesson added successfully!");
      setTimeout(() => {
        history.push("/app/masters/courses/subjects/lessons");
        setAlertSuccess(false);
      }, 2000);
    }
  };

  useEffect(() => {
    showAlert();
  }, []);

  return (
    <div>
      {alertSuccess ? (
        <div
          className="d-flex align-items-center justify-content-center"
          style={alertstyle}
        >
         <AlertTick/> {alertText}
        </div>
      ) : (
        ""
      )}
      <div className="p-3 mb-4 bg-white">
        <div style={{ background: "#fafafb" }} className="w-100 rounded">
          <div className="mb-4 d-flex align-items-start w-75 justify-content-between p-3">
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
                <h5 className="m-0">Medium</h5>
                <p className="m-0">English</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Total Lessons</h5>
                <p className="m-0">4</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Total Time</h5>
                <p className="m-0">5 Hrs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="membershipPlanTableSearchFilter d-flex mb-3">
          <SearchBox />
          {/* <Filter>
          <Button
            icon={<Icon component={FilterIcon} />}
            className="d-flex align-items-center ml-2"
          >
            Filters
          </Button>
        </Filter> */}
          <Button
            icon={<Icon component={CsvIcon} />}
            className="d-flex align-items-center ml-2"
          >
            Export
          </Button>
          <h5
            className="d-flex align-items-center justify-content-between ml-2 mt-2 mr-2 chapterSelect"
          >
            Chapters :
          </h5>
            <Select
              placeholder="Select Chapter"
              style={{ width: 180 }}
              options={[
                {
                  value: "Chapter1",
                  label: "Chapter 1",
                },
                {
                  value: "Chapter2",
                  label: "Chapter 2",
                },
                {
                  value: "Chapter3",
                  label: "Chapter 3",
                },
              ]}// Render the icon using the desired Ant Design icon component
            />
        </div>
        <Button className="bg-info text-white">
          <Link to={"lessons/add_new"}> + Add New Lesson Module</Link>
        </Button>
      </div>
      <Helper clients={attData} attribiue={attcolumn} />
    </div>
  );
};

export default ClassAttend;
