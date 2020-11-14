import React from "react";
import Navbar from "./Navbars";
import Body from "./Body";

const MainBody = (props) => {
  return (
    <div>
      <Navbar />
      <div className="body-content">
        <div className="body-wrap">
          <Body data={props.data}/>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
