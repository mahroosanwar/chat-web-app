import React from "react";
/** @jsxImportSource theme-ui */
import "./Sidebar.scss";

const Sidebar = (props) => {
  return (
    <div>
      <div
        className={`sidebar ${props.isSidebarActive ? "active" : ""}`}
        sx={{ bg: "primary", color: "inverseText" }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Sidebar;
