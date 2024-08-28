import axios from "axios";
// import Cookies from "js-cookie";

// get the Authorization AuthToken data
export function getAccessToken() {
  // let storedCookie = Cookies.get("logincustomerinfo");
  // let getCookiesJsonData;
  // if (storedCookie != undefined) {
  //   getCookiesJsonData = JSON.parse(storedCookie);
  // }
  const config = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `${getCookiesJsonData?.access_token}`,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcm9kdWN0X2V4cGVydEBnbWFpbC5jb20iLCJzY29wZXMiOiJURU5BTlRfUFJPRFVDVF9FWFBFUlQiLCJpYXQiOjE2Njk3ODkyOTYsImV4cCI6MTY2OTgwNzI5Nn0.TAo4yL6d9i80HmPsUEJLyhuEpegKr5X2qTLpZtQ1KFA`,
    },
  };
  return config;
}

// API Success
const handleSuccess = (result, successCallBack) => {
  if (successCallBack !== null) {
    // if (result.status === 403) {
    //   Cookies.remove("loginTenantDtl");
    //   Cookies.remove("auxAuthToken");
    //   // window.location.href = "/login";
    //   return;
    // }
    // if(result.status !== 200){
    //     toast.
    //     return;
    // }
    successCallBack(result);
  }
};

const handleFailure = (error, failedCallBack) => {
  if (failedCallBack != null) {
    failedCallBack(error);
    return;
  }
};

export const callGetApi = (url, successCallBack, failureCallBack) => {
  axios
    .get(url, getAccessToken())
    .then((res) => handleSuccess(res, successCallBack))
    .catch((error) => handleFailure(error, failureCallBack));
};

export const callPostApi = (url, requestObj, successCallBack, failureCallBack) => {
  axios
    .post(url, requestObj, getAccessToken())
    .then((res) => handleSuccess(res, successCallBack))
    .catch((error) => handleFailure(error, failureCallBack));
};

export const callPutApi = (url, requestObj, successCallBack, failureCallBack) => {
  axios
    .put(url, requestObj, getAccessToken())
    .then((result) => handleSuccess(result, successCallBack))
    .catch((error) => handleFailure(error, failureCallBack));
};

export const callDeleteApi = (url, successCallBack, failedCallBack) => {
  axios
    .delete(url, getAccessToken())
    .then((result) => handleSuccess(result, successCallBack))
    .catch((error) => handleFailure(error, failedCallBack));
};
