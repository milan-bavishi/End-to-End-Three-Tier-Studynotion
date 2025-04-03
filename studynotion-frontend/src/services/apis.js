// const BASE_URL = process.env.REACT_APP_BASE_URL;

export const endpoints = {
  SENDOTP_API: "http://localhost:5000/api" + "/auth/sendotp",
  SIGNUP_API: "http://localhost:5000/api" + "/auth/signup",
  LOGIN_API: "http://localhost:5000/api" + "/auth/login",
  RESETPASSTOKEN_API: "http://localhost:5000/api" + "/auth/reset-password-token",
  RESETPASSWORD_API: "http://localhost:5000/api" + "/auth/reset-password",
};

export const categories = {
  CATEGORIES_API: "http://localhost:5000/api" + "/course/showAllCategories",
};

export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API:
    "http://localhost:5000/api" + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: "http://localhost:5000/api" + "/profile/updateProfile",
  CHANGE_PASSWORD_API: "http://localhost:5000/api" + "/auth/changepassword",
  DELETE_PROFILE_API: "http://localhost:5000/api" + "/profile/deleteProfile",
};

export const profileEndpoints = {
  GET_USER_DETAILS_API: "http://localhost:5000/api" + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API:
    "http://localhost:5000/api" + "/profile/getEnrolledCourses",
  GET_ALL_INSTRUCTOR_DASHBOARD_DETAILS_API:
    "http://localhost:5000/api" + "/profile/getInstructorDashboardDetails",
};

export const contactusEndpoint = {
  CONTACT_US_API: "http://localhost:5000/api" + "/contact/contactUs",
};

export const courseEndpoints = {
  GET_ALL_COURSE_API: "http://localhost:5000/api" + "/course/getAllCourses",
  COURSE_DETAILS_API: "http://localhost:5000/api" + "/course/getCourseDetails",
  EDIT_COURSE_API: "http://localhost:5000/api" + "/course/editCourse",
  COURSE_CATEGORIES_API:
    "http://localhost:5000/api" + "/course/showAllCategories",
  CREATE_COURSE_API: "http://localhost:5000/api" + "/course/createCourse",
  CREATE_SECTION_API: "http://localhost:5000/api" + "/course/addSection",
  CREATE_SUBSECTION_API: "http://localhost:5000/api" + "/course/addSubSection",
  UPDATE_SECTION_API: "http://localhost:5000/api" + "/course/updateSection",
  UPDATE_SUBSECTION_API: "http://localhost:5000/api" + "/course/updateSubSection",
  GET_ALL_INSTRUCTOR_COURSES_API:
    "http://localhost:5000/api" + "/course/getInstructorCourses",
  DELETE_SECTION_API: "http://localhost:5000/api" + "/course/deleteSection",
  DELETE_SUBSECTION_API: "http://localhost:5000/api" + "/course/deleteSubSection",
  DELETE_COURSE_API: "http://localhost:5000/api" + "/course/deleteCourse",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    "http://localhost:5000/api" + "/course/getFullCourseDetails",
  LECTURE_COMPLETION_API:
    "http://localhost:5000/api" + "/course/updateCourseProgress",
  CREATE_RATING_API: "http://localhost:5000/api" + "/course/createRating",
  ADD_COURSE_TO_CATEGORY_API:
    "http://localhost:5000/api" + "/course/addCourseToCategory",
  SEARCH_COURSES_API: "http://localhost:5000/api" + "/course/searchCourse",
  CREATE_CATEGORY_API: "http://localhost:5000/api" + "/course/createCategory",
};

export const catalogData = {
  CATALOGPAGEDATA_API:
    "http://localhost:5000/api" + "/course/getCategoryPageDetails",
};

export const studentEndpoints = {
  COURSE_PAYMENT_API: "http://localhost:5000/api" + "/payment/capturePayment",
  COURSE_VERIFY_API: "http://localhost:5000/api" + "/payment/verifyPayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API:
    "http://localhost:5000/api" + "/payment/sendPaymentSuccessEmail",
};

export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: "http://localhost:5000/api" + "/course/getReviews",
};
