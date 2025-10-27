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
  COURSE_DETAILS_API:BASE_URL + ""
}


