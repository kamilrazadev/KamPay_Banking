import React from "react";

const HeaderBox = ({
  type = "title",
  title,
  user,
  subtext,
}: HeaderBoxProps) => {
  return (
    <div>
      <h1 className="header-box-title">
        {title}{" "}
        {type === "greeting" && (
          <span className="text-bankGradient">{user}</span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};

export default HeaderBox;