import {
  DashboardOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
// import Icon from '@ant-design/icons-svg'

import {DashboardActiveIcon, EventsActiveIcon, FacilityActiveIcon, MembershipActiveIcon} from './SideBarIcons'

const dashBoardNavTree = [{
  key: "d",
  // path: `${APP_PREFIX_PATH}/dashboard`,
  path: "",
  title: " ",
  icon: "",
  breadcrumb: false,
  submenu: [
    {
      key: "dashboard",
      // path: `${APP_PREFIX_PATH}/dashboard`,
      path: `${APP_PREFIX_PATH}/dashboard`,
      title: "dashboard",
      icon: DashboardActiveIcon,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'staff_management',
        path: `${APP_PREFIX_PATH}/staffManagement`,
        title: 'staff_management',
        icon: MembershipActiveIcon,
        breadcrumb: true,
        submenu: [
          // {
          //   key: 'members',
          //   path: `${APP_PREFIX_PATH}/membership/members`,
          //   title: 'members',
          //   // icon: DashboardOutlined,
          //   breadcrumb: true,
          //   submenu: []
          // },
          // {
          //   key: 'membership_request',
          //   path: `${APP_PREFIX_PATH}/membership/membership_request`,
          //   title: 'membership_request',
          //   // icon: DashboardOutlined,
          //   breadcrumb: true,
          //   submenu: []
          // },
          // {
          //   key: 'payments',
          //   path: `${APP_PREFIX_PATH}/membership/payments`,
          //   title: 'payments',
          //   // icon: DashboardOutlined,
          //   breadcrumb: true,
          //   submenu: []
          // },
          // {
          //   key: 'membership_plans',
          //   path: `${APP_PREFIX_PATH}/membership/membership_plans`,
          //   title: 'membership_plans',
          //   // icon: DashboardOutlined,
          //   breadcrumb: true,
          //   submenu: []
          // },
        ]
    },
    {
      key: 'Student_management',
        path: `${APP_PREFIX_PATH}/Student_management`,
        title: 'Student_management',
        icon: EventsActiveIcon,
        breadcrumb: true,
        submenu: [
          // {
          //   key: 'event_booking',
          //   path: `${APP_PREFIX_PATH}/events/event_booking`,
          //   title: 'event_booking',
          //   // icon: DashboardOutlined,
          //   breadcrumb: true,
          //   submenu: []
          // },
          // {
          //   key: 'event_list',
          //   path: `${APP_PREFIX_PATH}/events/event_list`,
          //   title: 'event_list',
          //   // icon: DashboardOutlined,
          //   breadcrumb: true,
          //   submenu: []
          // },
          // {
          //   key: 'sport-event-funds',
          //   path: `${APP_PREFIX_PATH}/events/sport-event-funds`,
          //   title: 'Sport Event Funds',
          //   // icon: DashboardOutlined,
          //   breadcrumb: true,
          //   submenu: []
          // },
        ]
    },
    {
      key: 'facility_management',
        path: `${APP_PREFIX_PATH}/Course_Curriculum`,
        title: 'facility_management',
        icon: FacilityActiveIcon,
        breadcrumb: true,
        submenu: [
         
        ]
    },
    
   
   


  ]
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
