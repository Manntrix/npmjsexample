import React, { useState } from "react";
import { selectCollapsedState } from "store/slices/menuSlice";
import { useSelector } from "react-redux";
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";
import anime from "animejs";

type Props = {};

const Header = (props: Props) => {
  const collapse = useSelector(selectCollapsedState);
  const [showMode, setShowMode] = useState(false);

  const showModebar = () => {
    anime({
      targets: ".mode",
      easing: "linear",
      opacity: 1,
      duration: 200,
    });
    setShowMode(true);
  };

  return (
    <div
      id="header"
      style={{ width: `calc(100% - ${collapse ? 80 : 265}px)` }}
      onMouseLeave={() => {
        setShowMode(false);
      }}
    >
      <LeftPanel />
      <RightPanel showMode={showMode} setShowMode={showModebar} />
    </div>
  );
};

export default Header;
