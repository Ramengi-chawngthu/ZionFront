import React from "react";
import useStyles from "./styles";
import Sidebar from "./Sidebar";
import BookmarksSvg from "../../Svg/HomeSvg/BookmarksSvg";

function Home() {
  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: "20%" }}></div>
    </>
  );
}

export default Home;
