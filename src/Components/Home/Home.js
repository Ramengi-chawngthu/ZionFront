import React from "react";
import useStyles from "./styles";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: "20%" }}>Hello WOrld</div>
    </>
  );
}

export default Home;
