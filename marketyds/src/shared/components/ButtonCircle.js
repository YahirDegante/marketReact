import React from "react";
import FeatherIcon from "feather-icons-react";

export const ButtonCircle = ({ type, onClickFunct, icon = "", size = 15 }) => {
  return (
    <button className={type} onClick={onClickFunct}>
      {icon && (
        <FeatherIcon icon={icon} size={size} style={{ strokedWidth: 2.5 }} />
      )}
    </button>
  );
};
