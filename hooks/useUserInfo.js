import { useState, useEffect } from "react";
import api from "../utils/api";

const useUserInfo = () => {
  //************  Get User id from local storage ************ //
  const userID = localStorage.getItem("userID");
  //console.log("userID from localStorage:", userID); //for debugging

  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //************  Get User Information ************ //
  useEffect(() => {
    if (userID) {
      api.get(`/user/get/${userID}`).then(response => {
        // console.log("API response:", response.data.data);
        setUserInfo(response.data.data);
      }).catch(error => {
        console.error("Error fetching user info:", error);
      }).finally(() => { setIsLoading(false); });
    } else {
      console.error("No userID found in localStorage");
      setIsLoading(false);
    }
  }, [userID]);

  return { userInfo };
};


export default useUserInfo;
