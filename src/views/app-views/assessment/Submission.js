import { Button, Divider, Menu, Modal, Select } from "antd";
import {
  Export,
  ExportIcon,
  FilterIcon,
  History,
  Edit,
  AcceptTick,
  CancelCross,
  AssessQue,
} from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import CustomIcon from "components/util-components/CustomIcon";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { membershipFacilityBooking } from "../data";
import { membershipEventBooking } from "../data";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import Helper, { capitalizeFirstLetter } from "../Helper";
import "./assessment.css";
import { useState } from "react";
import axios from "../../../axios";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";
import { Tabs } from "antd";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import moment from "moment";
import { API_BASE_URL } from "constants/ApiConstant";
function Submission() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const assesmentId = queryParams.get("assessmentId");
  const [facilityBooking, setFacilityBooking] = useState(
    membershipFacilityBooking
  );
  const [membershipRequestData, setmembershipRequestData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const membershipRequestColumns = [
    {
      title: "User ID",
      dataIndex: "id",
    },
    {
      dataIndex: "profile_pic",
      render: (avatar) => {
        return <img style={{width:'50px',height:"50px",borderRadius:"50%"}} src={`${avatar}`} alt="..." />;
      },
    },
    {
      title: "Student Name",
      dataIndex: "student_name",
    },
    {
      title: "Batch ID",
      dataIndex: "batch_name",
    },
    {
      title: "Verified On",
      dataIndex: "verified_on",
      render:(date)=>{
        return moment(date).format("DD-MM-YYYY")
      }
    },
    {
      title: "Submission On",
      dataIndex: "submitted_at",
      render:(date)=>{
        return moment(date).format("DD-MM-YYYY")
      }
    },
    {
      title: "Result",
      // dataIndex: "score"
      render:(data)=>{
        return <>{data.score}/{JSON.parse(data.description).length}</>
      }
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        return <div>{text}</div>;
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
                    <Link to={`submission/view-submission?studentId=${record.student_id}&assId=${record.assessment_id}`}>
                      {" "}
                      <div className="d-flex align-items-center">
                        <AssessQue color={"#455560"} className="mr-2 " />
                        <span className="ml-2">View Result</span>
                      </div>
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

  const showModal = () => {
    setIsModalOpen(true);
    // handleOk()
  };

  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 10000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const sendStatus = async (status,student_id)=>{
    console.log(status,student_id);
    const res1 = await axios.post(`${API_BASE_URL}/accepet-or-reject-assessment/${assesmentId}`,{
      student_id:student_id,
      status:status
    })
    console.log(res1)
  }
  const facilityBookingColumns = [
    {
      title: "User Id",
      dataIndex: "student_id",
    },
    {
      dataIndex: "profile_pic",
      render: (avatar) => {
        return <img style={{width:'60px'}} src={`${avatar}`} />;
      },
    },
    {
      title: "Student Name",
      dataIndex: "student_name",
      // render: (avatar) => {
      //   return <h5>Jane Cooper</h5>;
      // },
    },
    {
      title: "Enrolled On",
      dataIndex: "enrollment_date",
      render: (text) => {
        return <h5>{moment(text).format("DD-MM-YYYY")}</h5>;
      },
    },
    {
      title: "Batch ID",
      dataIndex: "batch_name",
      // render: (avatar) => {
      //   return <h5>#W1-BS</h5>;
      // },
    },
    {
      title: "Face Recognition",
      dataIndex: "photo",
      render: (avatar) => {
        return <img src={`${avatar}`} />;
      },
    },
    {
      title: "Id Uploaded",
      dataIndex: "identity",
      render: (avatar) => {
        return <img src={avatar} />;
      },
    },
    {
      title: "Status",
      dataIndex: "id_verified",
      render: (status) => {
        return <div className={`${status==='pending'?'text-warning':'text-success'}`}> {status} </div>;
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
                  <Menu.Item onClick={()=>sendStatus('accept',record.student_id)}>
                    <span>
                      {" "}
                      <div className="d-flex align-items-center">
                        <AcceptTick />
                        Accept Verification
                      </div>
                    </span>
                  </Menu.Item>
                  <Menu.Item onClick={()=>sendStatus('reject',record.student_id)}>
                    <span>
                      {" "}
                      <div className="d-flex align-items-center">
                        <CancelCross />
                        Reject Verification
                      </div>
                    </span>
                  </Menu.Item>
                </Menu>
              }
            />
          </>
        );
      },
    },
  ];
  const operations = (
    <div className="" style={{ display: "flex", marginBottom: "10px" }}>
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
  );
  const items = [
    {
      label: `Enrolled Students`,
      key: 1,
      children: (
        <div>
          <div className="" style={{ display: "flex", marginBottom: "10px" }}>
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
          <Helper
            clients={facilityBooking}
            attribiue={facilityBookingColumns}
          />
        </div>
      ),
    },
    {
      label: `Id Verified Students`,
      key: 2,
      children: (
        <div>
          <div className="" style={{ display: "flex", marginBottom: "10px" }}>
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
          <Helper
            clients={membershipRequestData}
            attribiue={membershipRequestColumns}
          />
        </div>
      ),
    },
  ];

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

  const deleteFacilityBooking = (record, dataSet, Id) => {
    axios
      .delete("/bookings/delete", {
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

  const getSubmissions = async (id) => {
    const res1 = await axios.get(`${API_BASE_URL}/view-submission/${id}`)
    setFacilityBooking(res1.data.data);
  }
  const getIdVerified = async (id) => {
    const res1 = await axios.get(`${API_BASE_URL}/verified-student/${id}`)
    setmembershipRequestData(res1.data.data);
    // console.log(res1.data.data);
  }

  useEffect(() => {
      if (assesmentId) {
      getSubmissions(assesmentId);
      getIdVerified(assesmentId)
    }
  }, [])
  

  return (
    <div className="tabbarWhite">
      <div className="p-3 bg-white">
      <div
          style={{ background: "#fafafb" }}
          className="mb-4 rounded d-flex justify-content-between align-items-start w-100 p-3"
        >
          <div
            style={{ gap: "10px",width:'80%' }}
            className="d-flex align-items-start p-3 w-100 justify-content-between"
          >
            <div>
              <div>
                <h5 className="m-0">ID</h5>
                <p className="m-0">#21</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div style={{ gap: "10px" }} className="d-flex align-items-top">
              <div>
                <img height={40} width={40} src="/img/avatar3.png" alt="img" />
              </div>
              <div style={{ width: "330px" }}>
                <h5 className="m-0">Course</h5>
                <div className="d-flex align-items-center">
                  Workplace Safety and Health in Construction Sites
                </div>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Course Category</h5>
                <p className="m-0">Safety courses</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Assessment Title</h5>
                <p className="m-0">Assessment 1</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Submitted By</h5>
                <p className="m-0">10</p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Pending Submissions</h5>
                <p className="m-0">20</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* <Tabs tabBarExtraContent={operations}> */}
      </div>
        <Tabs>
          {items.map((item) => (
            <Tabs.TabPane tab={item.label} key={item.key}>
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs>

      <div className="d-flex justify-content-between mb-3">
        {/* <div className="" style={{ display: "flex" }}>
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
        </div> */}
        {/* <Link
          to="staffManagement/add_new"
          className="bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
        >
          Add New Staff
        </Link> */}
      </div>
      {/* <div>
        <Helper clients={facilityBooking} attribiue={facilityBookingColumns} />
      </div> */}
      <Modal
        width={400}
        footer={null}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="d-flex my-3 flex-column">
          {/* <CustomIcon svg={Verified} /> */}
          <h3 className="font-weight-bold mt-4">
            Assign curriculam to teacher
          </h3>
          <span className=" font-size-sm w-75 font-weight-semibold">
            Workplace Safety and Health in Construction Sites
          </span>
          <br />
          <h5 className="font-weight-bold mt-4">Select Teacher</h5>
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Teacher 1",
              },
              {
                value: "2",
                label: "Teacher 2",
              },
            ]}
          />
        </div>
      </Modal>
    </div>
  );
}

export default Submission;
