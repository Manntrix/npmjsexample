import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { setDarkModeState } from "store/slices/mode";
import { useDispatch } from "react-redux";

type Props = {};

const Mode = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="mode">
      <ul>
        <li
          onClick={() => {
            dispatch(setDarkModeState("light"));
          }}
        >
          <span>
            <FiSun />
          </span>
          Light
        </li>
        <li
          onClick={() => {
            dispatch(setDarkModeState("dark"));
          }}
        >
          <span>
            <FiMoon />
          </span>
          Dark
        </li>
      </ul>
    </div>
  );
};

export default Mode;
