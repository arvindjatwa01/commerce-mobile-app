import axios from "axios";
import { SYSTEM_ERROR } from "./ResponseCode";
import { SEARCH_SPARC_PART_GET } from "./ApiConstants";
// import Cookies from "js-cookie";

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

//Search Parts based on the search criteria
export const partsSearch = async (searchStr) => {
  console.log("searchServices > partsSearch called...");
  return new Promise(async (resolve, reject) => {
    try {
      await axios
        .get(SEARCH_SPARC_PART_GET(searchStr), getAccessToken())
        .then((res) => {
          console.log("partsSearch > axios res=", res);
          if (res.status === 200) {
            resolve(res.data);
          } else {
            console.log("Status:", res.status);
            reject("Error in Search Sparepart axios!");
          }
        })
        .catch((err) => {
          console.log("partsSearch > axios err=", err);
          reject("Error in itemSearch axios!");
        });
    } catch (error) {
      console.error("in RepairBuilder > partsSearch, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};
