// import React, { Component } from "react";
// import {
//   SettingOutlined,
//   UserOutlined,
//   BellOutlined,
//   SearchOutlined,
// } from "@ant-design/icons";
// import { Avatar, Badge, Drawer, Menu } from "antd";
// import ThemeConfigurator from "./ThemeConfigurator";
// import { connect } from "react-redux";
// import { DIR_RTL } from "constants/ThemeConstant";
// import {  EditPro, HaveNoti, Noti, SignOut } from "assets/svg/icon";

// export class NavPanel extends Component {
//   state = { visible: false };

//   showDrawer = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   onClose = () => {
//     this.setState({
//       visible: false,
//     });
//   };


//   render() {
//     return (
//       <>
//       <div className="d-flex align-items-center">
//         <Menu mode="horizontal">
//           <Menu.Item key="search">
//             <span>
//               <SearchOutlined className="nav-icon mr-0" />
//             </span>
//           </Menu.Item>
//           <Menu.SubMenu key="noto" title={
            
//             <span onClick={this.NotiToggle}>
//               <BellOutlined className="nav-icon mr-0" />
//             </span>
          
//           }>
//             <div className="notificationBox rounded py-2">
//             <div className="d-flex justify-content-between px-3 py-2">
//               <h5>Notification (04) </h5>
//               <h5>Mark all as read</h5>
//             </div>
//             <div className="notiBox">
//               <div className="d-flex pt-2 notificationHover">
//                 <div style={{ width: "80px" }} className="px-3">
//                   <HaveNoti />
//                 </div>
//                 <div className="pr-2">
//                   <p style={{ color: "black" }} className="text-black mb-1">
//                     Teach assigning is pending for “Workplace Safety and Health
//                     in Construction Sites” course dated 16 jan 2022
//                   </p>
//                   <p>Today at 9:42 AM</p>
//                 </div>
//               </div>
//               <div className="d-flex pt-2 notificationHover">
//                 <div style={{ width: "80px" }} className="px-3">
//                   <Noti />
//                 </div>
//                 <div className="pr-2">
//                   <p style={{ color: "black" }} className="text-black mb-1">
//                     Teach assigning is pending for “Workplace Safety and Health
//                     in Construction Sites” course dated 16 jan 2022
//                   </p>
//                   <p>Today at 9:42 AM</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </Menu.SubMenu>
//           <Menu.SubMenu
//             key="item1"
//             title={
//               <Badge dot>
//                 <Avatar
//                   size={30}
//                   className="nav-icon mr-0"
//                   style={{ backgroundColor: "#87d068" }}
//                   icon={<UserOutlined />}
//                 />
//               </Badge>
//             }
//           >
//               <div style={{width:'250px'}} className="d-flex p-3 align-items-start">
//                 <div className="mt-1">
//                     <img src="/img/Avatar.png" alt="img"/>
//                 </div>
//                 <div className="ml-3">
//                     <h4 className="m-0">John Smith</h4>
//                     <p className="m-0">System Admin</p>
//                 </div>
//               </div>
//               <div style={{width:'250px'}} className="d-flex px-3 py-1 align-items-center">
//                 <div className="mt-1">
//                   <EditPro />
//                 </div>
//                 <div className="ml-3">
//                     <h4 className="m-0">Edit Profile</h4>
//                 </div>
//               </div>
//               <div style={{width:'250px'}} className="d-flex px-3 py-1 pb-2 align-items-center">
//                 <div className="mt-1">
//                   <SignOut/>
//                 </div>
//                 <div className="ml-3">
//                     <h4 className="m-0">Sign Out</h4>
//                 </div>
//               </div>
//           </Menu.SubMenu>
//         </Menu>
//         <div className="">
//                     <h5 className="m-0 text-white">John Smith</h5>
//                     <h5 style={{color:'grey'}} className="m-0">System Admin</h5>
//                 </div>
//       </div>
//       </>
//     );
//   }
// }

// const mapStateToProps = ({ theme }) => {
//   const { locale } = theme;
//   return { locale };
// };

// export default connect(mapStateToProps)(NavPanel);

import React, { useState } from "react";
import { SettingOutlined, UserOutlined, BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Badge, Drawer, Menu } from "antd";
import ThemeConfigurator from "./ThemeConfigurator";
import { connect } from "react-redux";
import { DIR_RTL } from "constants/ThemeConstant";
import { EditPro, HaveNoti, Noti, SignOut } from "assets/svg/icon";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { API_BASE_URL } from "constants/ApiConstant";
const NavPanel = ({ locale }) => {
  const [visible, setVisible] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"))
  const history = useHistory()
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

 useEffect(() => {
  if(!localStorage.getItem("token")){
  history.push("/auth/login")
  }
    
 }, [])
 

  const NotiToggle = () => {
    // Implement the logic for NotiToggle if needed
  };

  const signOut = async () => {
    const res1 = await axios.post(`${API_BASE_URL}/admin/logout`,{
      fcmToken:localStorage.getItem('token')
    })
    if(res1.status===200){
    localStorage.clear()
    history.push('/auth/login')      
    }
  }
  return (
    <>
      <div className="d-flex align-items-center">
        <Menu mode="horizontal">
          <Menu.Item key="search">
            <span>
              <SearchOutlined className="nav-icon mr-0" />
            </span>
          </Menu.Item>
          <Menu.SubMenu
            key="noto"
            title={
              <span onClick={NotiToggle}>
                <BellOutlined className="nav-icon mr-0" />
              </span>
            }
          >
            <div className="notificationBox rounded py-2">
              <div className="d-flex justify-content-between px-3 py-2">
                <h5>Notification (04) </h5>
                <h5>Mark all as read</h5>
              </div>
              <div className="notiBox">
                <div className="d-flex pt-2 notificationHover">
                  <div style={{ width: "80px" }} className="px-3">
                    <HaveNoti />
                  </div>
                  <div className="pr-2">
                    <p style={{ color: "black" }} className="text-black mb-1">
                      Teach assigning is pending for “Workplace Safety and Health in Construction Sites” course dated 16 jan 2022
                    </p>
                    <p>Today at 9:42 AM</p>
                  </div>
                </div>
                <div className="d-flex pt-2 notificationHover">
                  <div style={{ width: "80px" }} className="px-3">
                    <Noti />
                  </div>
                  <div className="pr-2">
                    <p style={{ color: "black" }} className="text-black mb-1">
                      Teach assigning is pending for “Workplace Safety and Health in Construction Sites” course dated 16 jan 2022
                    </p>
                    <p>Today at 9:42 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="item1"
            title={
              <Badge dot>
                <Avatar
                  size={30}
                  className="nav-icon mr-0"
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Badge>
            }
          >
            <div style={{ width: '250px' }} className="d-flex p-3 align-items-start">
              <div className="mt-1">
                <img src="/img/Avatar.png" alt="img" />
              </div>
              <div className="ml-3">
                <h4 className="m-0">{userData && userData.name}</h4>
                <p className="m-0">System Admin</p>
              </div>
            </div>
            <div style={{ width: '250px' }} className="d-flex px-3 py-1 align-items-center">
              <div className="mt-1">
                <EditPro />
              </div>
              <div className="ml-3">
                <Link to={`/app/staffManagement/admin_management/edit?id=${userData && userData.user_id}`}>
                <h4 className="m-0">Edit Profile</h4>
                </Link>
              </div>
            </div>
            <div onClick={signOut} style={{ width: '250px' }} className="d-flex px-3 py-1 pb-2 align-items-center">
              <div className="mt-1">
                <SignOut />
              </div>
              <div className="ml-3">
                <h4 className="m-0">Sign Out</h4>
              </div>
            </div>
          </Menu.SubMenu>
        </Menu>
        <div className="">
          <h5 className="m-0 text-white">{userData && userData.name}</h5>
          <h5 style={{ color: 'grey' }} className="m-0">System Admin</h5>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ theme }) => {
  const { locale } = theme;
  return { locale };
};

export default connect(mapStateToProps)(NavPanel);
