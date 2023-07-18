import { DashboardOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";
// import Icon from '@ant-design/icons-svg'

import {
  DashboardActiveIcon,
  EventsActiveIcon,
  FacilityActiveIcon,
  MembershipActiveIcon,
} from "./SideBarIcons";
import {
  Masters,
  TeacherManage,
  Notification,
  UpcomingClass,
  Dashboard,
  StaffManage,
  StudentManage,
  CourseAndCurriculam,
  BatchCal,
  CourseBatches,
  CurriculumList
} from "assets/svg/icon";

const dashBoardNavTree = [
  {
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
        icon: Dashboard,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "staff_management",
        path: `${APP_PREFIX_PATH}/staffManagement`,
        title: "staff_management",
        icon: StaffManage,
        breadcrumb: true,
        submenu: [
          {
            key: 'Admin_Management',
            path: `${APP_PREFIX_PATH}/staffManagement/admin_management`,
            title: 'Admin Management',
            icon: Masters,
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'Teacher_Management',
            path: `${APP_PREFIX_PATH}/staffManagement/teacher_management`,
            title: 'Teacher Management',
            icon: TeacherManage,
            breadcrumb: true,
            submenu: []
          },
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
        ],
      },
      {
        key: "Student_management",
        path: `${APP_PREFIX_PATH}/Student_management`,
        title: "Student_management",
        icon: StudentManage,
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
        ],
      },
      {
        key: "Course_Curriculum",
        path: `${APP_PREFIX_PATH}/course_curriculum`,
        title: "Course Curriculum",
        icon: CourseAndCurriculam,
        breadcrumb: true,
        submenu: [
          {
            key: 'curriculum_list',
            path: `${APP_PREFIX_PATH}/course_curriculum/curriculum_list`,
            title: 'Curriculum List',
            icon: CurriculumList,
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'course_batches',
            path: `${APP_PREFIX_PATH}/course_curriculum/course_batches`,
            title: 'Course Batches',
            icon: CourseBatches,
            breadcrumb: true,
            submenu: []
          },
        ],
      },
      {
        key: "notification",
        path: `${APP_PREFIX_PATH}/notification`,
        title: "Notifications",
        icon: Notification,
        breadcrumb: true,
        submenu: [],
      },
      // {
      //   key: "teacher_management",
      //   path: `${APP_PREFIX_PATH}/teacher_management`,
      //   title: "Teacher Management",
      //   icon: TeacherManage,
      //   breadcrumb: true,
      //   submenu: [],
      // },
      {
        key: "upcoming_classes",
        path: `${APP_PREFIX_PATH}/upcoming_classes`,
        title: "Upcoming Classes",
        icon: UpcomingClass,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "masters",
        path: `${APP_PREFIX_PATH}/masters`,
        title: "Masters",
        icon: Masters,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
