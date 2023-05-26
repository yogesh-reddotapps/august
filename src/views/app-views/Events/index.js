import { Button, Menu, Modal } from "antd";
import {
  Export,
  Edit,
  History,
  FilterIcon,
  ExportIcon,
  ExcelIcon,
  CsvIcon,
  UploadFileIcon,
} from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import CustomIcon from "components/util-components/CustomIcon";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import { DeleteOutlined, EyeOutlined,CloseCircleOutlined } from "@ant-design/icons";
import { membershipEventBooking } from "../data";
import Helper from "../Helper";
import axios from "axios";
import Icon from "@ant-design/icons";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";

export default function Events() {
  const [membershipRequestData, setmembershipRequestData] = useState(
    membershipEventBooking
  );
  const [eventsData, setEventsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccModalOpen, setIsSuccModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  let styles = {
    files: {
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "13px",
      border: "1px solid lightblue",
      padding: "10px",
      borderRadius: "9px",
      background: "#0093ff0a",
    },
    uploadFile: {
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: 0,
    },

    // Add the new styles here:

    ".uploadFile::-webkit-file-upload-button": {
      visibility: "hidden",
    },

    ".uploadFile::before": {
      content: "'Drag & Drop'",
      display: "inline-block",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      cursor: "pointer",
    },

    ".uploadFile:hover::before": {
      backgroundColor: "#ccc",
    },
  };

  function handleFileSelect(event) {
    const fileList = event.target.files;
    const newSelectedFiles = [];

    for (let i = 0; i < fileList.length; i++) {
      newSelectedFiles.push(fileList[i]);
    }
    //   console.log(selectedFiles)

    setSelectedFiles([...selectedFiles, newSelectedFiles[0]]);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const confirmUpload = () => {
    setIsModalOpen(false);
    setIsSuccModalOpen(true)
    setTimeout(() => {
      setIsSuccModalOpen(false)
    }, 1500);
  }
  const delUplFile = (i) => {
    let AfterDeleteFile = selectedFiles.filter((elem,index)=>{
      return index!==i
    })
    setSelectedFiles(AfterDeleteFile);
  }
  const onDeleteData = (record, dataSet, Id) => {
    // console.log(Id)
    // console.log(record)
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        deleteEvents(record, dataSet, Id);
      },
    });
  };

  const membershipRequestColumns = [
    {
      title: "User ID",
      dataIndex: "id",
    },
    {
      dataIndex: "profile_pic",
      render: (avatar) => {
        return <img style={{borderRadius:'50%'}} width={50} height={50} src={`${avatar}`} alt="..."/>;
      },
    },
    {
      title: "Student Name",
      dataIndex: "name",
    },
    {
      title: "Date of Birth",
      dataIndex: "dob",
    },
    // {
    //   title: "Age",
    //   dataIndex: "age",
    // },
    // {
    //   title: "Gender",
    //   dataIndex: "gender",
    //   render: (text) => {
    //     return (
    //       <img
    //         src={`${text !== "male" ? "/img/female.png" : "/img/male.png"}`}
    //       ></img>
    //     );
    //   },
    // },
    // {
    //   title: "Nationality",
    //   dataIndex: "nationality",
    //   render: (flag) => {
    //     return (
    //       <img
    //         width="20px"
    //         src={`${flag === "Singapore" ? "/img/flag.jpg" : ""}`}
    //       ></img>
    //     );
    //   },
    // },
    {
      title: "Mobile Number",
      dataIndex: "phone_number",
    },
    {
      title: "Email ID",
      dataIndex: "email",
    },
    {
      title: "Course Enrolled",
      dataIndex: "course_role",
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
                    <Link to="Student_management/student_detail">
                      {" "}
                      <EyeOutlined className="mr-2 " />
                      View Details
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <span
                      onClick={() => onDeleteData(record, setEventsData, "id")}
                    >
                      {" "}
                      <DeleteOutlined className="mr-2 " />
                      Delete
                    </span>
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
                </Menu>
              }
            />
          </>
        );
      },
    },
  ];

  const getEvents = () => {
    axios
      .post(
        "http://18.140.159.50:3333/api/get-students",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setmembershipRequestData(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEvents = (record, dataSet, Id) => {
    axios
      .delete("http://127.0.0.1:3333/events/delete", {
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
    getEvents();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <div className="membershipPlanTableSearchFilter">
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
            icon={<Icon component={CsvIcon} />}
            className="d-flex align-items-center ml-2"
          >
            Export
          </Button>
          <Button
            icon={<Icon component={ExcelIcon} />}
            className="d-flex align-items-center ml-2"
            onClick={() => setIsModalOpen(true)}
          >
            Upload Excel
          </Button>
        </div>
        <Link
          to="Student_management/add_new"
          className="bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
        >
          Add New Student
        </Link>
      </div>
      <div>
        <Helper
          clients={membershipRequestData}
          attribiue={membershipRequestColumns}
        />
      </div>
      <Modal
        width={680}
        footer={null}
        visible={isModalOpen}
        onCancel={handleCancel}
      >
        <div className="p-3 mt-4">
          <div className="d-flex flex-column justify-content-center align-items-center position-relative uploaddoc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="none"
              viewBox="0 0 64 64"
            >
              <path
                fill="#0E7CEB"
                d="M18.57 15.51l7.86 7a2 2 0 001.33.51H56v34.9A2.93 2.93 0 0153.26 61H5.74A2.93 2.93 0 013 57.92V18a2.85 2.85 0 012.68-3h11.56a2 2 0 011.33.51z"
              ></path>
              <path fill="#D7E6EF" d="M49 57H7V3h42v54z"></path>
              <path
                fill="#0E7CEB"
                d="M45 23h16v-6a2 2 0 00-2-2h-6l-8 8z"
              ></path>
              <path fill="#F7FCFF" d="M14 9h42v14H14V9z"></path>
              <path
                fill="#0E7CEB"
                d="M25.69 15.51l7.42 7a1.8 1.8 0 001.25.51H61v34.9A2.87 2.87 0 0158.41 61H13.59A2.87 2.87 0 0111 57.92V18a2.79 2.79 0 012.53-3h10.9c.47 0 .922.184 1.26.51z"
              ></path>
              <path
                fill="#F7FCFF"
                d="M36 55c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"
              ></path>
              <path
                fill="#D7E6EF"
                d="M52 13H32a1 1 0 000 2h20a1 1 0 000-2zm0 4H37a1 1 0 000 2h15a1 1 0 000-2z"
              ></path>
              <path
                fill="#44394A"
                d="M36.5 49.28l6.72-6.72a5.501 5.501 0 00-7.78-7.78l-8.84 8.84a1.002 1.002 0 000 1.42A1 1 0 0028 45l8.84-8.84a3.5 3.5 0 114.95 4.95l-6.71 6.71a1.998 1.998 0 01-3.38-.571A2 2 0 0132.26 45L39 38.32a.5.5 0 01.71 0 .48.48 0 010 .71l-6 6a1 1 0 101.42 1.41l6-6a2.503 2.503 0 00-3.54-3.54l-6.72 6.72a4 4 0 000 5.66 4.003 4.003 0 005.66 0h-.03z"
              ></path>
            </svg>
            <h5 className="mb-0 mt-2">Drag & Drop Files Here</h5>
            <h5 className="mb-0">Or</h5>
            <h5 className="mb-0" style={{ color: "#4096ff" }}>
              Choosen File
            </h5>
            <input
              style={styles.uploadFile}
              className="uploadFile"
              type="file"
              multiple
              onChange={handleFileSelect}
            />
          </div>
          <div className="mt-4">
          {selectedFiles.length > 0 && (
                  <ul className="p-0" style={{width:'450px'}}>
                    {selectedFiles.map((file,i) => (
                      <li key={file.name} className="my-3" style={styles.files}>
                        {" "}
                        <div className="d-flex align-items-center"><UploadFileIcon /> <span style={{maxWidth:'344px'}} className="ml-2">{file.name} </span>  </div><span style={{cursor:'pointer'}} onClick={()=>delUplFile(i)}> <CloseCircleOutlined /> </span>
                      </li>
                    ))}
                  </ul>
                )}
          </div>
          <div
            style={{ gap: "10px" }}
            className="mt-5 d-flex justify-content-end"
          >
            <Button className="px-4 font-weight-semibold" onClick={handleCancel}>
              No,cancel
            </Button>
            <Button className="px-4 font-weight-semibold text-white bg-info" onClick={confirmUpload}>
              Yes,confirm
            </Button>
          </div>
        </div>
      </Modal>
      <Modal
        width={400}
        footer={null}
        visible={isSuccModalOpen}
        onCancel={()=>setIsSuccModalOpen(false)}
      >
        <div className="d-flex my-3 align-items-center flex-column justify-content-center">
          {/* <CustomIcon svg={Verified} /> */}
          <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32.5 0C37.4636 0 42.1609 1.13082 46.358 3.14781C44.64 4.50697 43.0471 5.81176 41.5629 7.06762C38.7358 6.04009 35.6859 5.48012 32.5054 5.48012C25.1823 5.48012 18.5496 8.44852 13.7545 13.2491C8.95396 18.0496 5.98556 24.6769 5.98556 32C5.98556 39.3231 8.95396 45.9504 13.7545 50.7509C18.555 55.5515 25.1823 58.5199 32.5054 58.5199C39.8286 58.5199 46.4613 55.5515 51.2564 50.7509C56.0569 45.9504 59.0253 39.3231 59.0253 32C59.0253 30.2603 58.8568 28.5532 58.536 26.9059C59.9115 25.1118 61.3196 23.3231 62.7603 21.5508C63.8911 24.8236 64.5054 28.3411 64.5054 32C64.5054 40.8345 60.9227 48.8372 55.1327 54.6273C49.3427 60.4173 41.34 64 32.5054 64C23.6709 64 15.6682 60.4173 9.87819 54.6273C4.08274 48.8372 0.5 40.8345 0.5 32C0.5 23.1655 4.08274 15.1628 9.87275 9.37275C15.6628 3.58274 23.6655 0 32.5 0ZM17.5928 26.7428L25.3998 26.6395L25.9815 26.7917C27.5581 27.6996 29.0423 28.738 30.4286 29.9123C31.429 30.7604 32.3858 31.6847 33.2938 32.685C36.0936 28.178 39.0783 24.0408 42.2316 20.2351C45.6838 16.0652 49.3481 12.2813 53.1973 8.82909L53.9584 8.53551H62.4776L60.7596 10.4438C55.4806 16.3099 50.691 22.3717 46.3634 28.6239C42.0359 34.8814 38.165 41.3401 34.7236 47.9891L33.6526 50.055L32.6685 47.9511C30.8527 44.053 28.6781 40.4757 26.0848 37.279C23.4915 34.0822 20.4742 31.2443 16.9567 28.8304L17.5928 26.7428Z" fill="#00AB6F" />
  </svg>
          <h3 className="font-weight-bold mt-4">XL File uploaded successfully!</h3>
          <span className="text-center font-size-sm w-75 font-weight-semibold">
          198 new student details are updated in the system
          </span>
        </div>
      </Modal>
    </div>
  );
}
