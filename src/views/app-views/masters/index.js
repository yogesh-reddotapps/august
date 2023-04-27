import React, { useState,useEffect } from "react";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";
import { Button, Menu } from "antd";
import { FilterIcon, CsvIcon,Edit,ViewSubject, AlertTick } from "assets/svg/icon";
import Helper from "../Helper";
import CustomIcon from 'components/util-components/CustomIcon'
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import { DeleteOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { useLocation,Link ,useHistory  } from "react-router-dom";
const Masters = () => {
  const history = useHistory();
  const [key, setKey] = useState(1);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertText, setAlertText] = useState('Course category added Successfully!');

  const addParam = queryParams.get("add");

  const dummyData = [
    {
      Id: 1,
      Course_Category: "Mathematics - Basic",
      Description: "Basic Mathematics course",
      Created_By: "Teacher1",
      Created_On: "2023-04-10",
      Updated_By: "Teacher1",
      Updated_On: "2023-04-12",
    },
    {
      Id: 2,
      Course_Category: "English - Intermediate",
      Description: "Intermediate English course",
      Created_By: "Teacher2",
      Created_On: "2023-04-11",
      Updated_By: "Teacher2",
      Updated_On: "2023-04-13",
    },
    {
      Id: 3,
      Course_Category: "Science - Advanced",
      Description: "Advanced Science course",
      Created_By: "Teacher3",
      Created_On: "2023-04-09",
      Updated_By: "Teacher3",
      Updated_On: "2023-04-11",
    },
    {
      Id: 4,
      Course_Category: "History - Basic",
      Description: "Basic History course",
      Created_By: "Teacher4",
      Created_On: "2023-04-08",
      Updated_By: "Teacher4",
      Updated_On: "2023-04-10",
    },
  ];

  console.log(dummyData);

  const assData = [
    {
      Id: 1,
      Venue_Name: "ABC Conference Center",
      Address: "123 Main Street, Anytown, USA",
      Venue_Capacity: 500,
    },
    {
      Id: 2,
      Venue_Name: "XYZ Stadium",
      Address: "456 Elm Avenue, Othertown, USA",
      Venue_Capacity: 10000,
    },
    {
      Id: 3,
      Venue_Name: "123 Theater",
      Address: "789 Oak Road, Anothercity, USA",
      Venue_Capacity: 250,
    },
  ];

  const assessmentcolumn = [
    {
      title: "Id",
      dataIndex: "Id",
    },
    {
      title: "Venue Name",
      dataIndex: "Venue_Name",
    },
    {
      title: "Address",
      dataIndex: "Address",
    },
    {
      title: "Venue Capacity",
      dataIndex: "Venue_Capacity",
    },
    {
      title: "Created By",
      dataIndex: "Id",
      render: (text) => {
        return <div>Admin</div>;
      },
    },

    {
      title: "Created On",
      dataIndex: "status",
      render: (text) => {
        return <div>1 Jan 2023</div>;
      },
    },
    {
      title: "Updated By",
      dataIndex: "status",
      render: (text) => {
        return <div>Admin</div>;
      },
    },
    {
      title: "Updated On",
      dataIndex: "status",
      render: (text) => {
        return <div>2 Jan 2023</div>;
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
                    <Link to="course_enroll/assessment_submission">
                    <DeleteOutlined className='mr-2 ' /> Delete
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="course_enroll/assessment_submission">
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
  const facilityBookingColumns = [
    {
      title: "Id",
      dataIndex: "Id",
    },
    {
      title: "Course Category",
      dataIndex: "Course_Category",
    },
    {
      title: "Description",
      dataIndex: "Description",
    },
    {
      title: "Created By",
      dataIndex: "Created_By",
    },
    {
      title: "Created On",
      dataIndex: "Created_On",
    },
    {
      title: "Updated By",
      dataIndex: "Updated_By",
    },
    {
      title: "Updated On",
      dataIndex: "Updated_On",
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
                    <Link to="course_enroll/assignment_submission">
                    <DeleteOutlined className='mr-2 ' /> Delete
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="course_enroll/assignment_submission">
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
  const certData = [
    {
      User_ID: 1,
      Course_Category: "Programming",
      Course: "JavaScript",
      Medium: "Online",
      Duration: "6 weeks",
      Course_Price: 99.99,
    },
    {
      User_ID: 2,
      Course_Category: "Design",
      Course: "Graphic Design",
      Medium: "In-person",
      Duration: "8 weeks",
      Course_Price: 199.99,
    },
    {
      User_ID: 3,
      Course_Category: "Language",
      Course: "Spanish",
      Medium: "Online",
      Duration: "12 weeks",
      Course_Price: 149.99,
    },
  ];

  const certificatecolumn = [
    {
      title: "User ID",
      dataIndex: "User_ID",
    },
    {
      title: "Course Category",
      dataIndex: "Course_Category",
    },
    {
      title: "Course",
      dataIndex: "Course",
    },
    {
      title: "Medium",
      dataIndex: "Medium",
    },
    {
      title: "Duration",
      dataIndex: "Duration",
    },
    {
      title: "Course Price",
      dataIndex: "Course_Price",
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
                    <Link to="masters/courses/subjects">
                      <ViewSubject className="mr-2 " /> View Subjects
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="course_enroll/assignment_submission">
                      <DeleteOutlined className="mr-2 " /> Delete
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="course_enroll/assignment_submission">
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
  const items = [
    {
      label: `Course Category`,
      key: 1,
      children: (
        <div>
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
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
          </div>
          <Helper clients={dummyData} attribiue={facilityBookingColumns} />
        </div>
      ),
    },
    {
      label: `Venue`,
      key: 2,
      children: (
        <div>
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
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
          </div>
          <Helper clients={assData} attribiue={assessmentcolumn} />
        </div>
      ),
    },
    {
      label: `Courses`,
      key: 3,
      children: (
        <div>
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
            <Button
              icon={<Icon component={CsvIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Export
            </Button>
          </div>
          <Helper clients={certData} attribiue={certificatecolumn} />
        </div>
      ),
    },
  ];

  const operations = (
    <div className="mb-2 d-flex align-items-center">
      {key == 1 && (
        <Button className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4">
          <Link to={"masters/course_category/add_new"}> + Add New</Link>
        </Button>
      )}
      {key == 2 && (
        <Button className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4">
          <Link to="masters/venue/add_new">Add New</Link>
        </Button>
      )}
      {key == 3 && (
        <Button className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4">
          <Link to="masters/courses/add_new">Add New Course</Link>
        </Button>
      )}
    </div>
  );

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
    if (addParam=="course_category") {
      setAlertSuccess(true)
      setAlertText('Course category added Successfully!')
      setTimeout(() => {
        history.push('/app/masters')
        setAlertSuccess(false)
      }, 2000);
    }
    if (addParam=="venue") {
      setAlertSuccess(true)
      setAlertText('New venue added Successfully!')
      setTimeout(() => {
        history.push('/app/masters')
        setAlertSuccess(false)
      }, 2000);
    }
    if (addParam=="course") {
      setAlertSuccess(true)
      setAlertText('New course added successfully!')
      setTimeout(() => {
        history.push('/app/masters')
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
        <Tabs tabBarExtraContent={operations} onChange={(e) => setKey(e)}>
          {items.map((item) => (
            <Tabs.TabPane tab={item.label} key={item.key}>
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Masters;
