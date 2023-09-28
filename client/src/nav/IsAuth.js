import React, { useState, useEffect } from "react";
import axios from "axios";

function IsAuth() {
  //This function checks if the user is login or not

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await axios.get("/authorized"); //Make GET request to Flask Endpoint

        setIsAuthenticated(response.data.authenticated); //Set state to response (True or False)
      } catch (error) {
        console.error("Error fetching authentication!"), error;
      }
    };

    fetchAuthStatus();
  }, []); //useEffect runs once when the component render

  return (  
    children(isAuthenticated) //Return the children component with the authentication status
  );
}
  
export default IsAuth;
