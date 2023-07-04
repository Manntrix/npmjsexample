import React from "react";

type Props = {};

const LeftPanel = (props: Props) => {
  return (
    <div id="leftpanel">
      <ul>
        <li className="active">
          <a href="">Dashboard</a>
        </li>
        <li>
          <a href="">React</a>
        </li>
        <li>
          <a href="">Vue</a>
        </li>
        <li>
          <a href="">Angular</a>
        </li>
        <li>
          <a href="">React Native</a>
        </li>
        <li>
          <a href="">Help</a>
        </li>
      </ul>
    </div>
  );
};

export default LeftPanel;
