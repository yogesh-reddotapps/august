export const headersForAdmin =[
    {label:"id", key:"id"},
    {label:"Admin Username", key:"name"},
    {label:"Mobile Number", key:"phone_number"},
    {label:"Email", key:"email"},
    {label:"Date of Birth",key:"dob"},
    {label:"Last Login Time",key:"lastLoginTime"},
    {label:"Status",key:"status"}
]

export const headersForTeachers=[
    {label:"User Id", key:"user_id"},
    {label:"Name", key:"name"},
    {label:"Mobile Number",key:"phone_number"},
    {label:"Email Id",key:"email"},
    {label:"Date Of Birth",key:"dob"},
    {label:"Last Login Date",key:"lastLoginTime"},
    {label:"Status",key:"status"}
]

export const headersForStudent=[
    {label:"User Id",key:"id"},
    {label:"Student Name", key:"name"},
    {label:"Date of Birth", key:"dob"},
    {label:"Mobile Number",key:"phone_number"},
    {label:"Email",key:"email"},
    {label:"verificationRequestDone",key:"verificationRequestDate"},
    // {label:"Course Enroll",key:""},
]

export const headerForCurriculum=[
    {label:"Id", key:"id"},
    {label:"Course Name", key:"course_name"},
    {label:"Course Category",key:"course_category"},
    {label:"Medium",key:"medium"},
    {label:"Subject",key:"subjects_count"},
    {label:"Lesson",key:"lesson_count"},
    {label:"Status",key:"status"}
]

export const headerForCourseBatches =[
    {label:"Course Id",key:"course_id"},
    {label:"Course Name",key:"batch_id"},
    {label:"Batch Id",key:"id"},
    {label:"Start Date",key:"start_date"},
    {label:"End Date",key:"end_date"},
    {label:"Capacity",key:"capacity"},
    {label:"Status",key:"status"},
]

export const headerForUpcomingClasses = [
    {label:"Course Id",key:"course_id"},
    {label:"Upcoming Classes",key:"class_name"},
    {label:"Batch Id",key:"batch_id"},
    {label:"Class Id",key:"class_id"},
    {label:"Class Date",key:"class_date"},
    {label:"Start Time",key:"start_time"},
    {label:"End Time",key:"end_time"},
    {label:"Teachers Invited",key:"teacher_id"},
    // {label:"Accepted By",key:"phoneNumber"},
    // {label:"Rejected By",key:"phoneNumber"},
]

export const headersForMasterLanguage=[
    {label:"Id",key:"id"},
    {label:"Language Code",key:"language_code"},
    {label:"Language Name",key:"language_name"},
    {label:"Updated on",key:"updated_at"},
]

export const headersForMasterCourseCategory=[
    {label:"Id",key:"id"},
    {label:"Course Name",key:"language_code"},
    {label:"Updated on",key:"updated_at"},
]

export const headersForMasterVenue=[
    {label:"Id",key:"id"},
    {label:"Venue Name",key:"venue_name"},
    {label:"Address",key:"key"},
    {label:"Venue Capacity",key:"venue_capacity"},
    {label:"Update on",key:"updated_at"},
]

export const headersForMasterCourse=[
    {label:"Id",key:"id"},
    {label:"Course Name",key:"course_name"},
    {label:"Course Category",key:"course_category"},
    {label:"Language Available",key:"language"},
    {label:"Duration",key:"course_duration"},
  
]


export const headersForCourseAccess=[
    {label:"Sr No.",key:"course_id"},
    {label:"Courses",key:"course_name"},
    {label:"Access",key:"access"},
    {label:"Course Status",key:"course_status"},
  
]

export const headersForClassInvite=[
    {label:"Batch Id",key:"batch_id"},
    {label:"Class Id",key:"class_id"},
    {label:"Course Name",key:"course_name"},
    {label:"Class Date",key:"class_date"},
    {label:"Start Time",key:"start_time"},
    {label:"End Time",key:"end_time"},  
    {label:"Date of Invite",key:"invite_date"},  
    {label:"Date of Accept/Reject",key:"date_of_action"},  
    {label:"Status",key:"status"},  
]

export const headersForLeaveApplication = [
    {label:"Batch Id",key:"batch_id"},
    {label:"Class Id",key:"class_id"},
    {label:"Course Name",key:"course_name"},
    {label:"Class Date",key:"class_date"},
    {label:"Start Time",key:"start_time"},
    {label:"End Time",key:"end_time"},  
    {label:"Date of Application",key:"date_of_application"},  
    {label:"Reason",key:"date_of_action"},  
    {label:"Status",key:"status"}, 
]

export const headersForAdminRating = [
    {label:"User Id",key:"id"},
    {label:"Admin Name",key:"name"},
    {label:"Ratings Given",key:"rating"},
    {label:"Remarks",key:"description"},
    {label:"Status",key:"status"},
     
]

export const headersForUpcomingAttendance = [
    {label:"Id",key:"id"},
    {label:"Student Name",key:"student_name"},
    {label:"Age",key:"dob"},
    {label:"Gender",key:"gender"},
    {label:"Contact Number",key:"phone_number"},
    {label:"Email Id",key:"email"},
    {label:"Attendance",key:"present"}
     
]

export const headersForStudentEnroll = [
    {label:"Id",key:"enrollment_id"},
    {label:"Course Name",key:"course_name"},
    {label:"Category",key:"course_category"},
    {label:"Language",key:"language"},
    {label:"Date of Enroll",key:"enrollment_date"},
    {label:"Status",key:"status"},     
]

export const headersForBatchList = [
    {label:"Id",key:"id"},
    {label:"Course Name",key:"course_name"},
    {label:"Assessment",key:"asssessment_type"},
    {label:"Enrolled On",key:"enrollment_date"},
    // {label:"ID Uploaded",key:"total_classes"},
    {label:"Status",key:"status"}, 
]

export const headersForAssesmentList = [
    {label:"Course Id",key:"id"},
    {label:"Course Name",key:"course_name"},
    {label:"Batch Id",key:"batch_id"},
    {label:"Start Date",key:"start_date"},
    {label:"Total Classes",key:"total_classes"},
    {label:"Status",key:"status"}, 
]

export const headersForCertificateList = [
    {label:"Id",key:"id"},
    {label:"Course Name",key:"course_name"},
    {label:"Certificate Title",key:"certification_title"},
    // {label:"Assessment",key:"asssessment_type"},
    {label:"Awarded On",key:"issue_date"},
    {label:"Certificate",key:"thumbnail"}, 
]

export const headersForClasses = [
    {label:"Id",key:"id"},
    {label:"Date",key:"class_date"},
    {label:"Start Time",key:"start_time"},
    {label:"End Time",key:"end_time"},
    {label:"Teacher Assigned",key:"teacher_name"},
    {label:"Status",key:"status"}
]

export const headersForSubject = [
    {label:"Id",key:"id"},
    {label:"Subject Name",key:"subject_name"},
    {label:"Lessons",key:"lesson_count"},
    // {label:"Lesson Type",key:"end_time"},
    {label:"Estimate Time(Mins)",key:"lessonCounts"},
    // {label:"Status",key:"status"}
]

export const headerForClassRating = [
    {label:"User Id",key:"id"},
    {label:"Class Id",key:"class_id"},
    {label:"Student",key:"student_name"},
    {label:"Remarks Given",key:"rating"},
    {label:"Remarks",key:"description"}
]


export const headersForLessonColumn = [
    {label:"Id",key:"id"},
    {label:"Lesson",key:"lesson_name"},
    {label:"Lesson Type",key:"lesson_type_"},
    {label:"Estimated Time (Mins)",key:"estimated_time"},
]