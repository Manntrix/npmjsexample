import React, { useState } from "react";
import { FiSearch, FiSun } from "react-icons/fi";
import { LuBellRing } from "react-icons/lu";
import Mode from "./Mode";
type Props = {
  showMode: boolean;
  setShowMode: (a: boolean) => void;
};

const RightPanel = (props: Props) => {
  return (
    <div id="rightpanel">
      <ul>
        <li>
          <FiSearch />
        </li>
        <li>
          <LuBellRing />
        </li>
        <li
          onMouseOver={() => {
            props.setShowMode(true);
          }}
        >
          <FiSun />
          {props.showMode ? <Mode /> : ""}
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default RightPanel;
