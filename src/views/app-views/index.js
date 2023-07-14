import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route exact path="/app">
          <Redirect to={`${APP_PREFIX_PATH}/dashboard`} />
        </Route>
        <Route path={`${APP_PREFIX_PATH}/dashboard`} component={lazy(() => import(`./Dashboard`))} />
        {/* <Route exact path={`${APP_PREFIX_PATH}/membership/members`} component={lazy(() => import(`./Members`))} />
        <Route exact path={`${APP_PREFIX_PATH}/membership/members/membersdetails/:id`} component={lazy(() => import(`./Members/MembersDetails.js`))} /> */}
        <Route exact path={`${APP_PREFIX_PATH}/staffManagement`} component={lazy(() => import(`./Membership_Request`))} />
        <Route exact path={`${APP_PREFIX_PATH}/staffManagement/admin_management`} component={lazy(() => import(`./admin-management`))} />
        <Route exact path={`${APP_PREFIX_PATH}/staffManagement/admin_management/add_new`} component={lazy(() => import(`./admin-management/add_new`))} />
        <Route exact path={`${APP_PREFIX_PATH}/staffManagement/admin_management/edit`} component={lazy(() => import(`./admin-management/add_new`))} />
        <Route exact path={`${APP_PREFIX_PATH}/staffManagement/add_new`} component={lazy(() => import(`./Membership_Request/AddNew.js`))} />
        {/* <Route exact path={`${APP_PREFIX_PATH}/membership/payments`} component={lazy(() => import(`./Payments`))} />
        <Route exact path={`${APP_PREFIX_PATH}/membership/membership_plans`} component={lazy(() => import(`./Membership_plans`))} />
        <Route exact path={`${APP_PREFIX_PATH}/membership/membership_plans/add_new`} component={lazy(() => import(`./Membership_plans/AddNew.js`))} />
        <Route exact path={`${APP_PREFIX_PATH}/membership/membership_plans/update/:id`} component={lazy(() => import(`./Membership_plans/AddNew.js`))} /> */}
        {/* <Route exact path={`${APP_PREFIX_PATH}/Student_management`} component={lazy(() => import(`./Events_Booking`))} /> */}
        <Route exact path={`${APP_PREFIX_PATH}/Student_management`} component={lazy(() => import(`./Events`))} />
        {/* <Route exact path={`${APP_PREFIX_PATH}/events/sport-event-funds`} component={lazy(() => import(`./Sport_Event_Funds`))} /> */}
        {/* <Route exact path={`${APP_PREFIX_PATH}/events/sport-event-funds/add-new`} component={lazy(() => import(`./Sport_Event_Funds/AddNew`))} /> */}
        {/* <Route exact path={`${APP_PREFIX_PATH}/events/sport-event-funds/details`} component={lazy(() => import(`./Sport_Event_Funds/Invoice`))} /> */}
        <Route exact path={`${APP_PREFIX_PATH}/Student_management/add_new`} component={lazy(() => import(`./Events/AddNew.js`))} />
        <Route exact path={`${APP_PREFIX_PATH}/Student_management/edit`} component={lazy(() => import(`./Events/AddNew.js`))} />
        {/* <Route exact path={`${APP_PREFIX_PATH}/events/event_list/update/:id`} component={lazy(() => import(`./Events/AddNew.js`))} /> */}
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/course_batches`} component={lazy(() => import(`./course_batches`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/course_batches/add_new_batch`} component={lazy(() => import(`./course_batches/add_new_batch`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/curriculum_list`} component={lazy(() => import(`./curriculum_list`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/course_batches/enroll-new-student`} component={lazy(() => import(`./course_batches/EnrollStudent`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/curriculum_list/curriculam_details/batch/classes`} component={lazy(() => import(`./curriculum_list/batch/classes`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/curriculum_list/curriculam_details/batch/classes/attendance`} component={lazy(() => import(`./curriculum_list/batch/classes/attendance`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/curriculum_list/curriculam_details/batch/classes/view_subjects`} component={lazy(() => import(`./curriculum_list/batch/classes/view_subjects`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/curriculum_list/curriculam_details/batch/classes/view_subjects/lessons`} component={lazy(() => import(`./curriculum_list/batch/classes/view_subjects/lessons`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/curriculum_list/curriculam_details/batch/classes/view_subjects/lessons/lesson_details`} component={lazy(() => import(`./curriculum_list/batch/classes/view_subjects/lessons/lesson_details`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/curriculum_list/curriculam_details/batch/classes/view_subjects/lessons/lesson_details/add_new_assignment`} component={lazy(() => import(`./curriculum_list/batch/classes/view_subjects/lessons/lesson_details/add_new_assignment`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/curriculum_list/curriculam_details/batch/classes/view_subjects/lessons/lesson_details/assignment_submission/view_submission`} component={lazy(() => import(`./curriculum_list/batch/classes/view_subjects/lessons/lesson_details/view_submission`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/curriculum_list/curriculam_details/batch/classes/view_subjects/lessons/lesson_details/assignment_submission`} component={lazy(() => import(`./curriculum_list/batch/classes/view_subjects/lessons/lesson_details/assignment_submission`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/curriculam_details`} component={lazy(() => import(`./curriculam_details`))} />
        <Route exact path={`${APP_PREFIX_PATH}/curriculam_details/add_new_lesson`} component={lazy(() => import(`./curriculam_details/add_new_lesson`))} />
        <Route exact path={`${APP_PREFIX_PATH}/curriculam_details/view_lesson_preview`} component={lazy(() => import(`./curriculam_details/view_lesson_preview`))} />
        <Route exact path={`${APP_PREFIX_PATH}/curriculam_details/award_certificate`} component={lazy(() => import(`./curriculam_details/award_certificate`))} />
        <Route exact path={`${APP_PREFIX_PATH}/assessment`} component={lazy(() => import(`./assessment`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/curriculam_details/assessment/add_new`} component={lazy(() => import(`./assessment/AddNew`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/curriculam_details/assessment/submission`} component={lazy(() => import(`./assessment/Submission`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/curriculam_details/assessment/submission/view-submission`} component={lazy(() => import(`./assessment/ViewSubmission`))} />
        <Route exact path={`${APP_PREFIX_PATH}/assignment`} component={lazy(() => import(`./assignment/index`))} />
        <Route exact path={`${APP_PREFIX_PATH}/assignment/submission`} component={lazy(() => import(`./assignment/Submission`))} />
        <Route exact path={`${APP_PREFIX_PATH}/assignment/view-submission`} component={lazy(() => import(`./assignment/ViewSubmission`))} />
        <Route exact path={`${APP_PREFIX_PATH}/assignment/add_new`} component={lazy(() => import(`./assignment/AddNew`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_material`} component={lazy(() => import(`./course_material`))} />
        <Route exact path={`${APP_PREFIX_PATH}/course_curriculum/curriculam_details/course_material/add_new`} component={lazy(() => import(`./course_material/AddNew`))} />
        <Route exact path={`${APP_PREFIX_PATH}/staffManagement/teacher_management`} component={lazy(() => import(`./teacher_management`))} />
        <Route exact path={`${APP_PREFIX_PATH}/staffManagement/teacher_management/add_new`} component={lazy(() => import(`./teacher_management/add_new`))} />
        <Route exact path={`${APP_PREFIX_PATH}/staffManagement/teacher_management/edit`} component={lazy(() => import(`./teacher_management/add_new`))} />
        <Route exact path={`${APP_PREFIX_PATH}/staffManagement/teacher_management/teacher_detail`} component={lazy(() => import(`./teacher_management/view_details`))} />
        <Route exact path={`${APP_PREFIX_PATH}/upcoming_classes`} component={lazy(() => import(`./upcoming_classes`))} />
        <Route exact path={`${APP_PREFIX_PATH}/upcoming_classes/class_attendance`} component={lazy(() => import(`./upcoming_classes/class_attendance`))} />
        <Route exact path={`${APP_PREFIX_PATH}/upcoming_classes/schedule_new_class`} component={lazy(() => import(`./upcoming_classes/schedule_new_class`))} />
        <Route exact path={`${APP_PREFIX_PATH}/notification`} component={lazy(() => import(`./notification`))} />
        <Route exact path={`${APP_PREFIX_PATH}/notification/edit`} component={lazy(() => import(`./notification/edit`))} />
        <Route exact path={`${APP_PREFIX_PATH}/notification/add_notification`} component={lazy(() => import(`./notification/edit`))} />
        <Route exact path={`${APP_PREFIX_PATH}/Student_management/student_detail`} component={lazy(() => import(`./student_detail`))} />
        <Route exact path={`${APP_PREFIX_PATH}/Student_management/student_detail/classes`} component={lazy(() => import(`./student_detail/classes`))} />
        <Route exact path={`${APP_PREFIX_PATH}/Student_management/student_detail/classes/class_details`} component={lazy(() => import(`./student_detail/classes/class_details`))} />
        <Route exact path={`${APP_PREFIX_PATH}/Student_management/student_detail/classes/class_details/lessons`} component={lazy(() => import(`./student_detail/classes/class_details/lessons`))} />
        <Route exact path={`${APP_PREFIX_PATH}/Student_management/student_detail/classes/class_details/lessons/lesson_details`} component={lazy(() => import(`./student_detail/classes/class_details/lessons/lesson_details`))} />
        <Route exact path={`${APP_PREFIX_PATH}/Student_management/student_detail/classes/class_details/lessons/lesson_details/view_submission`} component={lazy(() => import(`./student_detail/classes/class_details/lessons/lesson_details/view_submission`))} />
        <Route exact path={`${APP_PREFIX_PATH}/Student_management/student_detail/assessments/view_result`} component={lazy(() => import(`./student_detail/assessment_result`))} />
        <Route exact path={`${APP_PREFIX_PATH}/Student_management/student_detail/course_enroll`} component={lazy(() => import(`./student_detail/course_enroll`))} />
        <Route exact path={`${APP_PREFIX_PATH}/Student_management/student_detail/course_enroll/assessment_submission`} component={lazy(() => import(`./student_detail/course_enroll/assessment_submission`))} />
        <Route exact path={`${APP_PREFIX_PATH}/masters`} component={lazy(() => import(`./masters`))} />
        <Route exact path={`${APP_PREFIX_PATH}/masters/language/add_new_language`} component={lazy(() => import(`./masters/add_new_language`))} />
        <Route exact path={`${APP_PREFIX_PATH}/masters/course_category/add_new`} component={lazy(() => import(`./masters/course_category/add_new`))} />
        <Route exact path={`${APP_PREFIX_PATH}/masters/venue/add_new`} component={lazy(() => import(`./masters/venue/add_new`))} />
        <Route exact path={`${APP_PREFIX_PATH}/masters/courses/add_new`} component={lazy(() => import(`./masters/courses/add_new`))} />
        <Route exact path={`${APP_PREFIX_PATH}/masters/courses/subjects`} component={lazy(() => import(`./masters/courses/subjects`))} />
        <Route exact path={`${APP_PREFIX_PATH}/masters/courses/subjects/add_new`} component={lazy(() => import(`./masters/courses/subjects/add_new`))} />
        <Route exact path={`${APP_PREFIX_PATH}/masters/courses/subjects/lessons`} component={lazy(() => import(`./masters/courses/subjects/lessons`))} />
        <Route exact path={`${APP_PREFIX_PATH}/masters/courses/subjects/lessons/add_new`} component={lazy(() => import(`./masters/courses/subjects/lessons/add_new`))} />
        {/* <Route exact path={`${APP_PREFIX_PATH}/facilities/facility_list`} component={lazy(() => import(`./Facility`))} />
        <Route exact path={`${APP_PREFIX_PATH}/facilities/facility_list/add_new`} component={lazy(() => import(`./Facility/AddNew.js`))} />
        <Route exact path={`${APP_PREFIX_PATH}/facilities/facility_list/:facility_types`} component={lazy(() => import(`./Facility/FacilityType.js`))} />
        <Route exact path={`${APP_PREFIX_PATH}/facilities/facility_list/:facility_types/add_new`} component={lazy(() => import(`./Facility/AddNewFacilityTypes.js`))} /> */}
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);