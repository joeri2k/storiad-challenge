import React from "react";

function Header({ title }) {
  return (
    <div
      style={{
        height: 75,
        backgroundColor: "#174554",
        color: "white",
        display: "flex",
      }}
    >
      <div style={{ fontSize: 25, alignSelf: "center", marginLeft: 20 }}>
        {title}
      </div>
    </div>
  );
}

export default Header;
