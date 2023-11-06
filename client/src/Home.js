import React from "react";
import useFetch from "./hooks/useFetch";
import UserInfo from "./account/UserInfo";

function Home() {
  const { data: user, pending, error } = useFetch("/account");
  
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Ensures the container takes the full viewport height
  };

  const centeredStyle = {
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to the Home Page</h1>
      <div style={centeredStyle}>
        <UserInfo user={user} pending={pending} error={error} />
      </div>
    </div>
  );
}

export default Home;
