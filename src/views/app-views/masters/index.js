import React, { useState, useEffect } from "react";
import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import Icon from "@ant-design/icons";
import { Button, Menu, Select ,Modal } from "antd";
import {
  FilterIcon,
  CsvIcon,
  Edit,
  ViewSubject,
  AlertTick,
  ExportIcon,
} from "assets/svg/icon";
import Helper from "../Helper";
import CustomIcon from "components/util-components/CustomIcon";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import { DeleteOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { useLocation, Link, useHistory } from "react-router-dom";
import Search from "antd/lib/transfer/search";
import axios from "../../../axios";
import { formatDate } from "constants/DateConstant";
import ExportButton from "../Export/ExportButton";
import { headersForMasterCourse, headersForMasterCourseCategory, headersForMasterLanguage, headersForMasterVenue } from "../Export/Headers";
import { API_BASE_URL } from "constants/ApiConstant";
const { Option } = Select;
const languageArr = [
  {
    ID: 1,
    Language_Code: "en",
    Language_Name: "English",
    Updated_On: "2023-05-17",
  },
  {
    ID: 2,
    Language_Code: "fr",
    Language_Name: "French",
    Updated_On: "2023-05-17",
  },
  {
    ID: 3,
    Language_Code: "es",
    Language_Name: "Spanish",
    Updated_On: "2023-05-17",
  },
];
// const certData = [
//   {
//     User_ID: 1,
//     Course_Category: "Programming",
//     Course: "JavaScript",
//     Medium: "English",
//     Duration: "6 weeks",
//     Course_Price: 99.99,
//   },
//   {
//     User_ID: 2,
//     Course_Category: "Design",
//     Course: "Graphic Design",
//     Medium: "English, Chinese, Tamil, Bengali, Hindi, Malay, Thai, Burmese",
//     Duration: "8 weeks",
//     Course_Price: 199.99,
//   },
//   {
//     User_ID: 3,
//     Course_Category: "Language",
//     Course: "Spanish",
//     Medium: "English",
//     Duration: "12 weeks",
//     Course_Price: 149.99,
//   },
// ];
const Masters = () => {
  const history = useHistory();
  const [key, setKey] = useState(1);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [allCourses, setAllCourses] = useState([]);
  const [allLang, setAllLang] = useState([]);
  const [allCate, setallCate] = useState([]);
  const [allVenues, setallVenues] = useState([]);
  const [modal2Open,setModal2Open]=useState(false);
  const [type,setType]=useState();
  const [idToDelete,setIdTodelete]=useState();
  const [alertText, setAlertText] = useState(
    "Course category added Successfully!"
  );

  const addParam = queryParams.get("add");

  const [newAllUsersData,setNewAllUsersData] = useState([]);
  const [newAllCourseData,setNewAllCourseData] = useState([]);
  const [newAllMasterVenue,setNewAllMasterVenue] = useState([]);

useEffect(()=>{
  let nAllUsersData = allLang
  nAllUsersData.map((item)=>{
    item.updated_at=formatDate(item.updated_at,true);
    
  })
  setNewAllUsersData(nAllUsersData)
},[allLang])

useEffect(()=>{
  let nAllUsersData = allCate
  nAllUsersData.map((item)=>{
    item.updated_at=formatDate(item.updated_at,true);
    
  })
  setNewAllCourseData(nAllUsersData)
},[allCate])
useEffect(()=>{
  let nAllUsersData = allVenues
  nAllUsersData.map((item)=>({
        ...item,
    key:item.postal_code+item.street_number+item.block_number+item.unit_number+item.country
    // item.postal_code=item.postal_code+item.street_number+item.block_number+item.unit_number+item.country;
    
  }))
  setNewAllMasterVenue(nAllUsersData)
},[allVenues])


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

  // const assData = [
  //   {
  //     Id: 1,
  //     Venue_Name: "ABC Conference Center",
  //     Address: "123 Main Street, Anytown, USA",
  //     Venue_Capacity: 500,
  //   },
  //   {
  //     Id: 2,
  //     Venue_Name: "XYZ Stadium",
  //     Address: "456 Elm Avenue, Othertown, USA",
  //     Venue_Capacity: 10000,
  //   },
  //   {
  //     Id: 3,
  //     Venue_Name: "123 Theater",
  //     Address: "789 Oak Road, Anothercity, USA",
  //     Venue_Capacity: 250,
  //   },
  // ];

  const assessmentcolumn = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Venue Name",
      dataIndex: "venue_name",
    },
    {
      title: "Address",
      dataIndex: "postal_code",
    },
    {
      title: "Venue Capacity",
      dataIndex: "venue_capacity",
    },
    {
      title: "Updated On",
      dataIndex: "updated_at",
      render(text) {
        return {
          children: formatDate(text),
        };
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
                  <Menu.Item onClick={()=>onDeleteData('venue',record.id)}>
                    <span>
                      <DeleteOutlined className="mr-2 " /> Delete
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={`masters/venue/edit?id=${record.id}`}>
                      <CustomIcon className="mr-2" svg={Edit} /> Edit
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

  
  const onDeleteData = (type, id) => {
    setModal2Open(true);
    setType(type);
    setIdTodelete(id);
    // console.log(Id)
    // console.log(record)
    // Modal.confirm({
    //   title: "Are you sure, you want to delete this members record ?",
    //   okText: "Yes",
    //   okType: "danger",
    //   centered:"true",
    //   width:"200",
    //   bodyStyle:{

    //   },
    //   onOk: () => {
    //     handleDelete(type,id)
    //   }
    // })
  }
  const languageColumn = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Language Code",
      dataIndex: "language_code",
    },
    {
      title: "Language Name",
      dataIndex: "language_name",
    },
    {
      title: "Updated On",
      dataIndex: "updated_at",
      render(text) {
        return {
          children: formatDate(text),
        };
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
                  <Menu.Item onClick={()=> onDeleteData('language',record.id)}>
                    <span>
                      <DeleteOutlined className="mr-2 " /> Delete
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={`masters/language/edit_language?id=${record.id}`}>
                      <CustomIcon className="mr-2" svg={Edit} /> Edit
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

  const Course_Category = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Course Name",
      dataIndex: "course_category",
    },
    {
      title: "Updated On",
      dataIndex: "updated_at",
      render(text) {
        return {
          children: formatDate(text),
        };
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
                  <Menu.Item onClick={()=> onDeleteData('category',record.id)}>
                    <span>
                      <DeleteOutlined className="mr-2 " /> Delete
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={`/app/masters/course_category/edit?id=${record.id}`}>
                      <CustomIcon className="mr-2" svg={Edit} /> Edit
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
  const certificatecolumn = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      dataIndex: "avatar",
      render: (avatar) => {
        return <img src={`/img/avatar.png`} alt="..." />;
      },
    },
    {
      title: "Course Name",
      dataIndex: "course_name",
    },
    {
      title: "Course Category",
      dataIndex: "course_category",
    },
    {
      title: "Language Available",
      dataIndex: "medium",
      width: 300,
    },
    {
      title: "Duration",
      dataIndex: "course_duration",
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
                    <Link to={`masters/courses/subjects?id=${record.id}`}>
                      <ViewSubject className="mr-2 " /> View Subjects
                    </Link>
                  </Menu.Item>
                  <Menu.Item onClick={()=> onDeleteData('course',record.id)}>
                    <span>
                      <DeleteOutlined className="mr-2 " /> Delete
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={`/app/masters/courses/edit?id=${record.id}`}>
                      <CustomIcon className="mr-2" svg={Edit} /> Edit
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
  const handleDelete = async (type,id) => {
    let data = {
      id:id
    };
    if (type==='venue') {
      const response = await axios.post(
        `${API_BASE_URL}/admin-delete-venues`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(response.data.success){
        getAllVenues();
        
      }
      else{
        alert("Cant Delete")
      }
      
    }
    if (type==='language') {
      const response = await axios.post(
        `${API_BASE_URL}/admin-delete-languages`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(response.data.success){
        getAllLanguage();

      }
      else{
        alert("Cant Delete")
      }
      
    }
    if (type==='category') {
      const response = await axios.post(
        `${API_BASE_URL}/admin-delete-category`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(response.data.success){
        getAllCourseCate();
        
      }
      else{
        alert("Cant Delete")
      }
      
    }
  }
  const items = [
    {
      label: `Languages`,
      key: 1,
      children: (
        <div>
          <div className="membershipPlanTableSearchFilter d-flex justify-content-between mb-3">
            <div className="d-flex">
              <Search
                placeholder="Search"
                onSearch={(value) => console.log(value)}
              />
              {/* <Button
                icon={<Icon component={ExportIcon} />}
                className="d-flex align-items-center ml-2"
              >
                Export
              </Button> */}
              <ExportButton data={newAllUsersData} passing={headersForMasterLanguage}/> 
            </div>
            <Button className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4">
              <Link to={"masters/language/add_new_language"}> + Add New</Link>
            </Button>
          </div>
          <Helper clients={allLang} attribiue={languageColumn} />
        </div>
      ),
    },
    {
      label: `Course Category`,
      key: 2,
      children: (
        <div>
          <div className="membershipPlanTableSearchFilter d-flex justify-content-between mb-3">
            <div className="d-flex">
              <Search
                placeholder="Search"
                onSearch={(value) => console.log(value)}
              />
              {/* <Button
                icon={<Icon component={ExportIcon} />}
                className="d-flex align-items-center ml-2"
              >
                Export
              </Button> */}
              <ExportButton data={newAllCourseData} passing={headersForMasterCourseCategory}/> 
            </div>
            <Button className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4">
              <Link to={"masters/course_category/add_new"}> + Add New</Link>
            </Button>
          </div>
          <Helper clients={allCate} attribiue={Course_Category} />
        </div>
      ),
    },
    {
      label: `Venue`,
      key: 3,
      children: (
        <div>
          <div className="membershipPlanTableSearchFilter d-flex justify-content-between mb-3">
            <div className="d-flex">
              <Search
                placeholder="Search"
                onSearch={(value) => console.log(value)}
              />
              {/* <Button
                icon={<Icon component={ExportIcon} />}
                className="d-flex align-items-center ml-2"
              >
                Export
              </Button> */}
              <ExportButton data={newAllMasterVenue} passing={headersForMasterVenue}/> 
            </div>
            <Button className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4">
              <Link to="masters/venue/add_new">+ Add New</Link>
            </Button>
          </div>
          <Helper clients={allVenues} attribiue={assessmentcolumn} />
        </div>
      ),
    },
    {
      label: `Courses`,
      key: 4,
      children: (
        <div>
          <div className="membershipPlanTableSearchFilter d-flex justify-content-between mb-3">
            <div className="d-flex">
              <div className="d-flex">
                <Search
                  placeholder="Search"
                  onSearch={(value) => console.log(value)}
                />
                {/* <Button
                  icon={<Icon component={ExportIcon} />}
                  className="d-flex align-items-center ml-2"
                >
                  Export
                </Button> */}
                <ExportButton data={allCourses} passing={headersForMasterCourse}/> 
              </div>
              <Select
                className="ml-2"
                style={{ width: 200 }}
                placeholder="Course Category"
              >
                <Option value="text">Test</Option>
              </Select>
            </div>
            <Button className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4">
              <Link to="masters/courses/add_new">+ Add New Course</Link>
            </Button>
          </div>
          <Helper clients={allCourses} attribiue={certificatecolumn} />
        </div>
      ),
    },
  ];

  const operations = <div className="mb-2 d-flex align-items-center"></div>;

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
    if (addParam === "course_category") {
      setAlertSuccess(true);
      setAlertText("Course category added Successfully!");
      setTimeout(() => {
        history.push("/app/masters");
        setAlertSuccess(false);
      }, 2000);
    }
    if (addParam === "venue") {
      setAlertSuccess(true);
      setAlertText("New venue added Successfully!");
      setTimeout(() => {
        history.push("/app/masters");
        setAlertSuccess(false);
      }, 2000);
    }
    if (addParam === "course") {
      setAlertSuccess(true);
      setAlertText("New course added successfully!");
      setTimeout(() => {
        history.push("/app/masters");
        setAlertSuccess(false);
      }, 2000);
    }
  };
  const getAllCourses = () => {
    axios
      .get(
        `${API_BASE_URL}/get-all-courses`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setAllCourses(res.data);
        console.log("getAllCourses",res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAllLanguage = () => {
    axios
      .post(
        `${API_BASE_URL}/admin-languages`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setAllLang(res.data.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAllCourseCate = () => {
    axios
      .post(
        `${API_BASE_URL}/admin-category`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setallCate(res.data.data);
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAllVenues = () => {
    axios
      .post(
        `${API_BASE_URL}/admin-venues`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setallVenues(
          res.data.data.map((elem) => {
            return {
              id: elem.id,
              venue_name: elem.venue_name,
              venue_capacity: elem.venue_capacity,
              updated_at: elem.updated_at,
              postal_code:`${elem.postal_code} ${elem.street_number} ${elem.block_number} ${elem.unit_number} ${elem.country}`
            };
          })
        );
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllCourseCate();
    getAllCourses();
    getAllLanguage();
    getAllVenues();
    showAlert();
  }, []);

 

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
      <div className="p-3 mb-4 tabbarWhite">
        <Tabs tabBarExtraContent={operations} onChange={(e) => setKey(e)}>
          {items.map((item) => (
            <Tabs.TabPane tab={item.label} key={item.key}>
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
      <Modal
        // title="Vertically centered modal dialog"
        centered
        visible={modal2Open}
        onOk={() =>{setModal2Open(false)
            handleDelete(type,idToDelete);
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

export default Masters;
