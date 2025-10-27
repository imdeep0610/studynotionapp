const BASE_URL=process.env.REACT_APP_BASE_URL;

//Categories Endpoints
export const categories={
//showAllCategories -> taken from controller -> Category -> showAllCategories function name(as endpoint)
    CATEGORIES_API:BASE_URL+"/course/showAllCategories", 
}

//Auth Endpoints
export const endpoints={
  SENDOTP_API:BASE_URL+"/auth/sendotp",
  SIGNUP_API:BASE_URL+"/auth/signup",
  LOGIN_API:BASE_URL+"/auth/login",
  RESETPASSTOKEN_API:BASE_URL+"/auth/reset-password-token",
  RESETPASSWORD_API:BASE_URL+"/auth/reset-password"
}

//Contact Endpoints
export const contactusEndpoints={
  CONTACT_US_API:BASE_URL+"/reach/contact",
}

//Profile Endpoints
export const profileEndpoints={
  GET_USER_DETAILS_API:BASE_URL + "profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "profile/getEnrolledCourses"
}

//Course Endpoints
export const courseEndpoints={
  GET_ALL_COURSE_API:BASE_URL + "/course/getAllCourses",
  COURSE_DETAILS_API:BASE_URL + "/course/getCourseDetails",
  EDIT_COURSE_API:BASE_URL + "/course/editCourse",
  COURSE_CATEGORIES_API:BASE_URL + "/course/showAllCategories",
  CREATE_COURSE_API: BASE_URL + "/course/createCourse",
  CREATE_SECTION_API: BASE_URL + "/course/addSection",
  CREATE_SUBSECTION_API: BASE_URL + "/course/addSubSection",
  UPDATE_SECTION_API: BASE_URL + "/course/updateSection",
  UPDATE_SUBSECTION_API: BASE_URL + "/course/updateSubSection",
  GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/course/getInstructorCourses",
  DELETE_SECTION_API: BASE_URL + "/course/deleteSection",
  DELETE_SUBSECTION_API: BASE_URL + "/course/deleteSubSection",
  DELETE_COURSE_API: BASE_URL + "/course/deleteCourse",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    BASE_URL + "/course/getFullCourseDetails",
  LECTURE_COMPLETION_API: BASE_URL + "/course/updateCourseProgress",
  CREATE_RATING_API: BASE_URL + "/course/createRating",
}

//Rating and Review endpoints
export const ratingEndpoints={
   REVIEWS_DETAILS_API:BASE_URL + "/course/getReviews",
}

//Catalog Page data
export const catalogData={
  CATALOGPAGEDATA_API:BASE_URL + "/course/getCategoryPageDetails",
}

//Setting Page API
export const settingsEndpoints={
   UPDATE_DISPLAY_PICTURE_API:BASE_URL + "/profile/updateDisplayPicture",
   UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
   CHANGE_PASSWORD_API :BASE_URL + "/profile/changePassword",

}

