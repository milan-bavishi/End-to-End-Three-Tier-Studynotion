// const BASE_URL = process.env.REACT_APP_BASE_URL;

export const endpoints = {
  SENDOTP_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/auth/sendotp",
  SIGNUP_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/auth/signup",
  LOGIN_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/auth/login",
  RESETPASSTOKEN_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/auth/reset-password-token",
  RESETPASSWORD_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/auth/reset-password",
};

export const categories = {
  CATEGORIES_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/showAllCategories",
};

export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API:
    "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/profile/updateProfile",
  CHANGE_PASSWORD_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/auth/changepassword",
  DELETE_PROFILE_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/profile/deleteProfile",
};

export const profileEndpoints = {
  GET_USER_DETAILS_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API:
    "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/profile/getEnrolledCourses",
  GET_ALL_INSTRUCTOR_DASHBOARD_DETAILS_API:
    "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/profile/getInstructorDashboardDetails",
};

export const contactusEndpoint = {
  CONTACT_US_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/contact/contactUs",
};

export const courseEndpoints = {
  GET_ALL_COURSE_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/getAllCourses",
  COURSE_DETAILS_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/getCourseDetails",
  EDIT_COURSE_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/editCourse",
  COURSE_CATEGORIES_API:
    "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/showAllCategories",
  CREATE_COURSE_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/createCourse",
  CREATE_SECTION_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/addSection",
  CREATE_SUBSECTION_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/addSubSection",
  UPDATE_SECTION_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/updateSection",
  UPDATE_SUBSECTION_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/updateSubSection",
  GET_ALL_INSTRUCTOR_COURSES_API:
    "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/getInstructorCourses",
  DELETE_SECTION_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/deleteSection",
  DELETE_SUBSECTION_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/deleteSubSection",
  DELETE_COURSE_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/deleteCourse",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/getFullCourseDetails",
  LECTURE_COMPLETION_API:
    "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/updateCourseProgress",
  CREATE_RATING_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/createRating",
  ADD_COURSE_TO_CATEGORY_API:
    "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/addCourseToCategory",
  SEARCH_COURSES_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/searchCourse",
  CREATE_CATEGORY_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/createCategory",
};

export const catalogData = {
  CATALOGPAGEDATA_API:
    "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/getCategoryPageDetails",
};

export const studentEndpoints = {
  COURSE_PAYMENT_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/payment/capturePayment",
  COURSE_VERIFY_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/payment/verifyPayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API:
    "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/payment/sendPaymentSuccessEmail",
};

export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: "http://ec2-65-2-140-213.ap-south-1.compute.amazonaws.com/api" + "/course/getReviews",
};
