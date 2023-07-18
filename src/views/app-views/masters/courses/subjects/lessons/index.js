import React, { useEffect, useState } from "react";
import { Divider, Button, Menu, Select,Modal } from "antd";
import Icon from "@ant-design/icons";
import CustomIcon from 'components/util-components/CustomIcon'
import SearchBox from "components/shared-components/SearchBox";
import { Link } from "react-router-dom";
import Filter from "components/shared-components/Filter";
import { Edit, CsvIcon, AlertTick, LessonTypeText, LessonTypeVideo, LessonTypeMusic, LessonTypeQuestion, FiletypeText, FiletypeVideo, FiletypeAudio, FiletypeQue, FileTypeArVr } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import Helper from "../../../../Helper";
import { useLocation, useHistory } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
const ClassAttend = () => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [lessonList, setLessonList] = useState([])
   const [modal2Open,setModal2Open]=useState(false);
  const [idToDelete,setIdTodelete]=useState();
  const [alertText, setAlertText] = useState(
    "Course category added Successfully!"
  );

  const course_id = queryParams.get("course_id");
  const subject_id = queryParams.get("subject_id");
  const attcolumn = [
    {
      title: "Sr No",
      dataIndex: "id",
    },
    {
      title: "Lesson",
      dataIndex: "lesson_name",
    },
    {
      title: "Lesson Type",
      dataIndex: "lesson_type",
      render: (type) => {
        return (
          <> 
          {type===0 ? <FiletypeText/> :''}
          {type===1 ? <FiletypeVideo/> :''}
          {type===2 ? <FiletypeAudio/> :''}
          {type===3 ? <FiletypeQue/> :''}
          {type===4 ? <FileTypeArVr/> :''}
          </>
        );
      },
    },
    {
      title: "Estimated Time (Mins)",
      dataIndex: "estimated_time",
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
                  <Menu.Item onClick={()=>onDeleteData(record.id)}>
                    <span><DeleteOutlined className="mr-2 " /> Delete</span>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to={`lessons/edit?lesson_id=${record.id}&subject_id=${subject_id}`}
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

  const onDeleteData = (id) => {
    setModal2Open(true);
    setIdTodelete(id);
  }
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
    // if (addParam == "subject") {
      setAlertSuccess(true);
      setAlertText("New Lesson added successfully!");
      setTimeout(() => {
        history.push("/app/masters/courses/subjects/lessons");
        setAlertSuccess(false);
      }, 2000);
    // }
  };
  const getSubject = async () => {
    const res1 = await axios.post('http://18.140.159.50:3333/api/get-admin-lessons-by-subject',{ subject_id:subject_id,board_id:2,course_id:course_id })
    console.log(res1.data);
    setLessonList(res1.data);
  }
  useEffect(() => {
    // showAlert();
    if (course_id&&subject_id) {
      getSubject()
    }
  }, []);

   const handleDelete = async (Oid) => {
    let data = {
      id:Oid
    };
    
      const response = await axios.post(
        "http://18.140.159.50:3333/api/admin-delete-lesson",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(response.data.success){
        getSubject();
        
      }
      else{
        alert("Cant Delete")
      }
      
    
  }

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
          <div className="mb-4 d-flex align-items-start w-100 justify-content-between p-3">
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
                <h5 className="m-0">Subject</h5>
                <p className="m-0">Workplace Safety</p>
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
          <Link to={`lessons/add_new?course_id=${course_id}&subject_id=${subject_id}`}> + Add New Lesson Module</Link>
        </Button>
      </div>
      <Helper clients={lessonList} attribiue={attcolumn} />
      <Modal
        // title="Vertically centered modal dialog"
        centered
        visible={modal2Open}
        onOk={() =>{setModal2Open(false)
            handleDelete(idToDelete);
        }}
        onCancel={() => setModal2Open(false)}
        okText="Yes,Confirm"
        cancelText="No,Cancel"
        okButtonProps={{style: { backgroundColor: '#0068B3' ,width:"30%"} }}  
      >
       <div style={{color:"#000B23",fontSize:"18px",fontWeight:"600"}}>Sure you want to delete?</div>
       <div>It will be delete from the system</div>
      </Modal>
    </div>
  );
};

export default ClassAttend;
