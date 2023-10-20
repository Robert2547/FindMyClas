import React from "react";
import useFetch from "./hooks/useFetch";
import UserInfo from "./account/UserInfo";

function Home() {
  const { data: user, pending, error } = useFetch("/account");

  return (
    <div className="centered-container">
      <UserInfo user={user} pending={pending} error={error} />
    </div>
  );
}

export default Home;
