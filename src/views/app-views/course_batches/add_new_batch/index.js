import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  DatePicker,
  Modal,
  Tabs,
} from "antd";
import { ClassInvite, TeacherAssignedIcon } from "assets/svg/icon";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Helper from "views/app-views/Helper";
const { Search } = Input;

const MyForm = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const Id = queryParams.get("id");
  const [successModal, setSuccessModal] = useState(false);
  const [coursenameid, setCoursenameid] = useState([]);
  const [enrollTabTog, setEnrollTabTog] = useState(true)
  const [idOfNewBatch, setIdOfNewBatch] = useState(null)
  const attcolumn = [
    {
      title: "Id",
      dataIndex: "Id",
    },
    {
      title: "Student Name",
      dataIndex: "student_name",
    },
    {
      title: "DOB",
      dataIndex: "lessons",
      render:(lessons)=>{
        return<>26 Aug 1996</>
      }
    },
    {
      title: "Mobile Number",
      dataIndex: "lessons",
      render:(lessons)=>{
        return<>+65 1359 7283</>
      }
    },
    {
      title: "Email ID",
      dataIndex: "lessons",
      render:(lessons)=>{
        return<>jane@gmail.com</>
      }
    },
    {
      title: "Date of Enroll",
      dataIndex: "lessons",
      render:(lessons)=>{
        return<>16 May 2023</>
      }
    },
    {
      title: "Status",
      dataIndex: "lessons",
      render:(lessons)=>{
        return<>Active</>
      }
    },
    {
      title: "Action",
      // dataIndex: 'action',
      render: (record) => {
        return (
          <>
            del
          </>
        );
      },
    },
  ];
  const attData = [
    {
      Id: 1,
      student_name: "John Doe",
      age: 18,
      gender: "Male",
      contact_no: "1234567890",
      email: "johndoe@example.com",
      attendance: "Present",
    },
    {
      Id: 2,
      student_name: "Jane Smith",
      age: 19,
      gender: "Female",
      contact_no: "9876543210",
      email: "janesmith@example.com",
      attendance: "Absent",
    },
    {
      Id: 3,
      student_name: "Tom Johnson",
      age: 17,
      gender: "Male",
      contact_no: "7890123456",
      email: "tomjohnson@example.com",
      attendance: "Present",
    },
    {
      Id: 4,
      student_name: "Alice Brown",
      age: 18,
      gender: "Female",
      contact_no: "3456789012",
      email: "alicebrown@example.com",
      attendance: "Absent",
    },
  ];
  const onFinish = async (values) => {
    let course = values.course.split(",");
    let start_date = moment(values.startDate).format("YYYY-MM-DD");
    let end_date = moment(values.endDate).format("YYYY-MM-DD");
    console.log(values, start_date, end_date);
    let data = await axios.post("http://18.140.159.50:3333/api/batches", {
      course_name: course[1],
      course_id: course[0],
      start_date: start_date,
      end_date: end_date,
      capacity: values.batchCapacity,
      status: 1,
      batch_id: values.batchId,
    });
    setIdOfNewBatch(data.data.data[0]);
    if (data.status===201) {
      setEnrollTabTog(false)
    }
    setSuccessModal(true);
    setTimeout(() => {
      setSuccessModal(false);
    }, 900);
  };

  const getCoursesNameAndId = async () => {
    let res = await axios.get("http://18.140.159.50:3333/api/courses-list");
    setCoursenameid(
      res.data.data.map((elem, i) => {
        return {
          value: `${elem.id},${elem.course_name}`,
          label: elem.course_name,
        };
      })
    );
  };

  useEffect(() => {
    getCoursesNameAndId();
    if (Id) {
      console.log(Id);
      
      setEnrollTabTog(false)
    }
  }, []);

  return (
    <>
      <Tabs className="whiteBack">
        <Tabs.TabPane
          tab={
            <div className="d-flex align-items-center">
              <ClassInvite /> <span className="ml-2">Batch Details</span>
            </div>
          }
          key="item-1"
        >
          <Form form={form} onFinish={onFinish}>
            <div className="border rounded p-3 mb-4 bg-white">
              <h5 className="text-info mb-4">Add New Batch</h5>
              <div className="mt-4">
                <h5>Batch Id</h5>
                <Form.Item name="batchId">
                  <Input className="w-50" placeholder="Batch Id" />
                </Form.Item>
              </div>
              <div className="mt-4">
                <h5>Course</h5>
                <Form.Item name="course">
                  <Select
                    placeholder="Select"
                    className="w-50"
                    options={coursenameid}
                  />
                </Form.Item>
              </div>
              <div className="mt-4">
                <h5>Batch Capacity</h5>
                <Form.Item name="batchCapacity">
                  <InputNumber className="w-50" defaultValue={0} />
                </Form.Item>
              </div>
              <div className="mt-4">
                <h5>Start Date</h5>
                <Form.Item name="startDate">
                  <DatePicker className="w-50" />
                </Form.Item>
              </div>
              <div className="mt-4">
                <h5>End Date</h5>
                <Form.Item name="endDate">
                  <DatePicker className="w-50" />
                </Form.Item>
              </div>
            </div>
            <div className="d-flex mt-3 justify-content-end">
              <Form.Item>
                <Button>Cancel</Button>
              </Form.Item>
              <Form.Item>
                <Button className="text-white bg-info ml-3" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Tabs.TabPane>
        <Tabs.TabPane
        disabled={enrollTabTog}
          tab={
            <div className="d-flex align-items-center">
              <TeacherAssignedIcon />{" "}
              <span className="ml-2">Enrolled Students</span>
            </div>
          }
          key="item-2"
        >
          <div className="d-flex justify-content-between">
            <div>
              <Search
                placeholder="Search"
                onSearch={(value) => console.log(value)}
                style={{
                  width: 200,
                }}
              />
            </div>
            <div>
              <Button className="bg-info text-white">
                <Link to={"enroll-new-student"}>
                  {" "}
                  + Enroll New Student
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-3">
          <Helper clients={attData} attribiue={attcolumn} />
          </div>
        </Tabs.TabPane>
      </Tabs>

      <Modal width={500} footer={null} visible={successModal}>
        <div className="d-flex my-3 align-items-center flex-column justify-content-center">
          {/* <CustomIcon svg={Verified} /> */}
          <svg
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5 0C37.4636 0 42.1609 1.13082 46.358 3.14781C44.64 4.50697 43.0471 5.81176 41.5629 7.06762C38.7358 6.04009 35.6859 5.48012 32.5054 5.48012C25.1823 5.48012 18.5496 8.44852 13.7545 13.2491C8.95396 18.0496 5.98556 24.6769 5.98556 32C5.98556 39.3231 8.95396 45.9504 13.7545 50.7509C18.555 55.5515 25.1823 58.5199 32.5054 58.5199C39.8286 58.5199 46.4613 55.5515 51.2564 50.7509C56.0569 45.9504 59.0253 39.3231 59.0253 32C59.0253 30.2603 58.8568 28.5532 58.536 26.9059C59.9115 25.1118 61.3196 23.3231 62.7603 21.5508C63.8911 24.8236 64.5054 28.3411 64.5054 32C64.5054 40.8345 60.9227 48.8372 55.1327 54.6273C49.3427 60.4173 41.34 64 32.5054 64C23.6709 64 15.6682 60.4173 9.87819 54.6273C4.08274 48.8372 0.5 40.8345 0.5 32C0.5 23.1655 4.08274 15.1628 9.87275 9.37275C15.6628 3.58274 23.6655 0 32.5 0ZM17.5928 26.7428L25.3998 26.6395L25.9815 26.7917C27.5581 27.6996 29.0423 28.738 30.4286 29.9123C31.429 30.7604 32.3858 31.6847 33.2938 32.685C36.0936 28.178 39.0783 24.0408 42.2316 20.2351C45.6838 16.0652 49.3481 12.2813 53.1973 8.82909L53.9584 8.53551H62.4776L60.7596 10.4438C55.4806 16.3099 50.691 22.3717 46.3634 28.6239C42.0359 34.8814 38.165 41.3401 34.7236 47.9891L33.6526 50.055L32.6685 47.9511C30.8527 44.053 28.6781 40.4757 26.0848 37.279C23.4915 34.0822 20.4742 31.2443 16.9567 28.8304L17.5928 26.7428Z"
              fill="#00AB6F"
            />
          </svg>
          <h3 className="font-weight-bold mt-4">
            New batch for course created successfully!
          </h3>
        </div>
      </Modal>
    </>
  );
};

export default MyForm;
