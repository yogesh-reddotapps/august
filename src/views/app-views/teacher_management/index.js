import { Button, Menu, Modal, Form, Input, Select, DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { Edit, ExportIcon, FilterIcon } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import Helper from "../Helper";
import "./teacher_management.css";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon, { DeleteOutlined } from "@ant-design/icons";
import CustomIcon from "components/util-components/CustomIcon";
import axios from "../../../axios";
import { Option } from "antd/lib/mentions";

const teacherArray = [
  {
    value: "Teacher 1",
    label: (
      <div>
        <img
          className="circleTeacherImage mr-2"
          src="/img/avatars/thumb-1.jpg"
          alt="img"
        />
        Teacher 1
      </div>
    ),
  },
  {
    value: "Teacher 2",
    label: (
      <div>
        <img
          className="circleTeacherImage mr-2"
          src="/img/avatars/thumb-2.jpg"
          alt="img"
        />
        Teacher 2
      </div>
    ),
  },
  {
    value: "Teacher 3",
    label: (
      <div>
        <img
          className="circleTeacherImage mr-2"
          src="/img/avatars/thumb-3.jpg"
          alt="img"
        />
        Teacher 3
      </div>
    ),
  },
  {
    value: "Teacher 4",
    label: (
      <div>
        <img
          className="circleTeacherImage mr-2"
          src="/img/avatars/thumb-4.jpg"
          alt="img"
        />
        Teacher 4
      </div>
    ),
  },
  // Add more objects with similar format here
  // ...
  {
    value: "Teacher 5",
    label: (
      <div>
        <img
          className="circleTeacherImage mr-2"
          src="/img/avatars/thumb-5.jpg"
          alt="img"
        />
        Teacher 5
      </div>
    ),
  },
  {
    value: "Teacher 6",
    label: (
      <div>
        <img
          className="circleTeacherImage mr-2"
          src="/img/avatars/thumb-6.jpg"
          alt="img"
        />
        Teacher 6
      </div>
    ),
  },
];
const dummyArray = [
  {
    id: 1,
    Assessment: "Jane Cooper",
    Assessment_Questions: "M",
    Attended_By: "SG",
    Due_Date: "+65 2541 3652",
    Created_By: "jane@gmail.com",
    Created_On: "11 Jan 1990",
    invite_sent: "11 May 2023, 10:00:25 Am",
  },
  {
    id: 2,
    Assessment: "Jane Cooper",
    Assessment_Questions: "M",
    Attended_By: "SG",
    Due_Date: "+65 2541 3652",
    Created_By: "jane@gmail.com",
    Created_On: "11 Jan 1990",
    invite_sent: "11 May 2023, 10:00:25 Am",
  },
  {
    id: 3,
    Assessment: "Jane Cooper",
    Assessment_Questions: "M",
    Attended_By: "SG",
    Due_Date: "+65 2541 3652",
    Created_By: "jane@gmail.com",
    Created_On: "11 Jan 1990",
    invite_sent: "11 May 2023, 10:00:25 Am",
  },
];

function TeacherManagement() {
  const [refereshTog, setRefereshTog] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [data, setData] = useState(dummyArray);
  const [courses, setCourses] = useState([])
  const [batchesOpt, setBatchesOpt] = useState([])
  const [classOpt, setClassOpt] = useState([])
  const [form] = Form.useForm();

  const onDeleteData = async (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this members record ?",
      okText: "Yes",
      okType: "danger",
      onOk: async () => {
        let res1 = await axios.post(
          "http://18.140.159.50:3333/api/delete-teacher",
          {
            user_id: record,
          }
        );
        if (res1.data.success) {
          console.log(refereshTog);
          setRefereshTog(refereshTog ? false : true);
        }
      },
    });
  };

  const assesmentColumn = [
    {
      title: "User ID",
      dataIndex: "user_id",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src={`${avatar}`} alt="img" />;
      },
    },
    {
      title: "Teacher Name",
      dataIndex: "name",
    },
    {
      title: "Mobile Number",
      dataIndex: "phone_number",
    },
    {
      title: "Email Id",
      dataIndex: "email",
    },
    {
      title: "DOB",
      dataIndex: "dob",
      render: (val) => {
        return <>{val === null ? "11 May 2023" : val}</>;
      },
    },
    {
      title: "Last Login Date",
      dataIndex: "invite_sent",
      render: () => {
        return <>11 May 2023, 10:00:25 Am</>;
      },
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
                    <Link
                      to={`/app/staffManagement/teacher_management/teacher_detail?id=${record.user_id}`}
                    >
                      {" "}
                      <EyeOutlined className="mr-2 " />
                      View Detail
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <span onClick={() => onDeleteData(record.user_id)}>
                      {" "}
                      <DeleteOutlined className="mr-2 " />
                      Delete
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={`teacher_management/edit?id=${record.user_id}`}>
                      <span className="d-flex align-items-center">
                        <CustomIcon className="mr-2" svg={Edit} />
                        Edit
                      </span>
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
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 10000);
  };
  const onFinish = async (e) => {
    console.log(e);
    const data = {
      "course_id": e.select_course,
      "batch_id": e.batch,
      "class_id": e.class,
      "teacher_ids": e.teachers
    }
    const res1 = axios.post('http://18.140.159.50:3333/api/send-classes-invitaion',data)
    console.log(res1);
    form.resetFields()
  };

  let alertstyle = {
    position: "absolute",
    top: "0px",
    left: 0,
    width: " 100%",
    height: "50px",
    background: "#00AB6F",
    color: "white",
    transition: "all 0.5s ease 0s",
  };
  const handleCourseChange = async (id) => {
    let res1 = await axios.post('http://18.140.159.50:3333/api/get-batches-course-id',{ "course_id": id})
    setBatchesOpt(res1.data.data);
  }
  const handleBatchChange = async (id) => {
    let res1 = await axios.post('http://18.140.159.50:3333/api/get-classes-By-batch-id',{ "batch_id": id})
    setClassOpt(res1.data.data);
  }

  const getTeacher = () => {
    axios
      .post("/api/admin-teacher", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setData(res.data);
        // console.log("teacge",res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getCourses = () => {
    axios
      .get("http://18.140.159.50:3333/api/courses-list", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setCourses(res.data.data);
        console.log("teacge",res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTeacher();
  }, [refereshTog]);
  useEffect(() => {
    getCourses()
  }, []);

  return (
    <div>
      {alertSuccess ? (
        <div
          className="d-flex align-items-center justify-content-center"
          style={alertstyle}
        >
          Class Invite Sent Successfully
        </div>
      ) : (
        ""
      )}

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
          <Button
            icon={<Icon component={ExportIcon} />}
            className="d-flex align-items-center ml-2"
          >
            Export
          </Button>
        </div>
        <div style={{ gap: "10px" }} className="d-flex">
          <Button
            // className="text-info d-flex align-items-center rounded font-weight-semibold"
            onClick={() => setIsModalOpen(true)}
            type="primary"
            ghost
          >
            Send Class Invite
          </Button>
          <Button className="bg-info d-flex align-items-center rounded text-white font-weight-semibold">
            <Link to={`teacher_management/add_new`}>Add New Teacher</Link>
          </Button>
        </div>
      </div>
      <Modal
        width={600}
        footer={null}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="d-flex my-3 flex-column">
          <h4 className="mb-3">Send invite for class</h4>
          <Form
            layout="vertical"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            form={form}
            name="control-hooks"
          >
            <Form.Item
              className="w-75"
              name="select_course"
              label="Select Course"
            >
              <Select
                style={{
                  width: "100%",
                }}
                placeholder="Select"
                onChange={(value) =>handleCourseChange(value)}
              >
                {
                  courses.length!==0 && courses.map((elem,i)=>{
                    return (
                      <Option key={i} value={elem.id}>{elem.course_name}</Option>
                    )
                  })
                }
              </Select>
            </Form.Item>
            <Form.Item className="w-75" name="batch" label="Batch">
            <Select
                style={{
                  width: "100%",
                }}
                placeholder="Select"
                onChange={(value) =>handleBatchChange(value)}
              >
                {
                  batchesOpt.length!==0 && batchesOpt.map((elem,i)=>{
                    return (
                      <Option key={i} value={elem.id}>{elem.batch_id}</Option>
                    )
                  })
                }
              </Select>
            </Form.Item>
            <Form.Item className="w-75" name="class" label="Class">
            <Select
                style={{
                  width: "100%",
                }}
                placeholder="Select"
                onChange={(value) =>handleBatchChange(value)}
              >
                {
                  classOpt.length!==0 && classOpt.map((elem,i)=>{
                    return (
                      <Option key={i} value={elem.id}>{elem.id}</Option>
                    )
                  })
                }
              </Select>
            </Form.Item>
            <Form.Item className="w-75" name="teachers" label="Teachers">
              <Select
                style={{
                  width: "100%",
                }}
                mode="multiple"
                placeholder="Select"
                onChange={(value) => console.log(`selected ${value}`)}
              >
                {data.map((teacher, i) => (
                  <Option key={i} value={teacher.user_id}>
                    <div>
                      <img
                        className="circleTeacherImage mr-2"
                        src="/img/avatars/thumb-1.jpg"
                        alt="img"
                      />
                      {teacher.name}
                    </div>
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <div className="d-flex justify-content-end mb-3">
                <Button
                  className=" d-flex align-items-center rounded font-weight-semibold px-4"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
                  onClick={() => {
                    setIsModalOpen(false);
                    setAlertSuccess(true);
                    setTimeout(() => {
                      setAlertSuccess(false);
                    }, 2000);
                  }}
                  htmlType="submit"
                >
                  Send Invite
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Modal>

      <div className="mb-3">
        <Helper clients={data} attribiue={assesmentColumn} />
      </div>
    </div>
  );
}

export default TeacherManagement;
