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
    {label:"Address",key:"postal_code"},
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


export const headersForVerificationRequest=[
    {label:"Name",key:"fullName"},
    {label:"Phone Number",key:"phoneNumber"},
    {label:"Register Date",key:"regDate"},
    {label:"Account Status",key:"accountStatus"},
    {label:"Verification Request",key:"verificationRequest"},
    {label:"Verification Request Date",key:"verificationRequestDate"},
]

export const headersForEvents=[
    {label:"Event Name",key:"eventName"},
    {label:"eventCaption",key:"eventCaption"},
    {label:"Start Time",key:"startTime"},
    {label:"End Time",key:"endTime"},
    {label:"Event Date",key:"eventDate"},
    {label:"Building Name",key:"buildingName"},  
    {label:"Address",key:"address"},  
    {label:"About Event",key:"aboutEvent"},  
    {label:"Status",key:"eventStatus"},  
    {label:"Status Changed Date",key:"eventStatusChangeDate"},  
    {label:"Created on",key:"createdAt"},  
    {label:"Last Updated",key:"updatedAt"},  

]