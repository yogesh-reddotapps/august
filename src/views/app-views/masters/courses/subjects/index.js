import React,{useEffect,useState} from "react";
import { Divider, Button, Menu } from "antd";
import Icon from "@ant-design/icons";
import SearchBox from "components/shared-components/SearchBox";
import { Link } from "react-router-dom";
import CustomIcon from 'components/util-components/CustomIcon'
import { Edit, CsvIcon,ViewSubject,AlertTick } from "assets/svg/icon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import Helper from "../../../Helper";
import { useLocation,useHistory  } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
const ClassAttend = () => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertText, setAlertText] = useState('Course category added Successfully!');

  const addParam = queryParams.get("add");
  const attcolumn = [
    {
      title: "Id",
      dataIndex: "Id",
    },
    {
      title: "Subjects",
      dataIndex: "student_name",
    },
    {
      title: "Chapters",
      dataIndex: "age",
    },
    {
      title: "Lessons",
      dataIndex: "age",
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
                    <Link to="subjects/lessons"><ViewSubject className="mr-2 " /> View Lessons</Link>
                  </Menu.Item>
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

  let alertstyle = {
    position: "absolute",
    top: '0px',
    left: 0,
    width: " 100%",
    height: "50px",
    background: "#00AB6F",
    color: "white",
    transition:'all 0.5s ease 0s',
    zIndex:2
  };
  const showAlert = () => {
    if (addParam=="subject") {
      setAlertSuccess(true)
      setAlertText('New subject added successfully!')
      setTimeout(() => {
        history.push('/app/masters/courses/subjects')
        setAlertSuccess(false)
      }, 2000);
    }
  }

  useEffect(() => {
    showAlert()
  
  }, [])

  return (
    <div>
      {alertSuccess ? (
      <div
        className="d-flex align-items-center justify-content-center"
        style={alertstyle}
      >
        <AlertTick /> {alertText}
      </div>
    ) : (
      ""
    )}
      <div className="p-3 mb-4 bg-white">
        <div
          style={{ background: "#fafafb" }}
          className="w-100 rounded"
        >
          <div className="mb-4 d-flex align-items-start w-50 justify-content-between p-3">
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
        </div>
        <Button className="bg-info text-white">
          <Link to={"subjects/add_new"}> + Add New</Link>
        </Button>
      </div>
      <Helper clients={attData} attribiue={attcolumn} />
    </div>
  );
};

export default ClassAttend;
