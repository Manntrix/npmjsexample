"use client";
import * as React from "react";
import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import {
  selectCollapsedState,
  setCollapsedState,
} from "store/slices/menuSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { DiReact, DiNpm, DiAngularSimple } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const collapse = useSelector(selectCollapsedState);
  const dispatch = useDispatch();
  return (
    <div className="aside">
      <Sidebar
        collapsed={collapse}
        width="265px"
        collapsedWidth="80px"
        id="mainsidebar"
        transitionDuration={500}
      >
        <Menu className="logo">
          <MenuItem icon={<TbBrandJavascript />}>NPMJSEXAMPLE</MenuItem>
        </Menu>
        <Menu>
          <MenuItem icon={<LuLayoutDashboard />}> Dashboard</MenuItem>
        </Menu>
        <Menu className="cmenu">Pages</Menu>
        <Menu>
          <Menu>
            <SubMenu icon={<DiReact size={26} />} label="React">
              <MenuItem> Pie charts</MenuItem>
              <MenuItem> Line charts</MenuItem>
              <MenuItem> Bar charts</MenuItem>
            </SubMenu>
            <SubMenu icon={<FaVuejs size={26} />} label="Vue">
              <MenuItem> Google maps</MenuItem>
              <MenuItem> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu icon={<DiAngularSimple size={26} />} label="Angular">
              <MenuItem> Dark</MenuItem>
              <MenuItem> Light</MenuItem>
            </SubMenu>
            <SubMenu icon={<DiNpm size={24} />} label="NPM">
              <MenuItem> Dark</MenuItem>
              <MenuItem> Light</MenuItem>
            </SubMenu>
            <SubMenu icon={<SiWebpack size={20} />} label="Webpack">
              <MenuItem> Dark</MenuItem>
              <MenuItem> Light</MenuItem>
            </SubMenu>
            <SubMenu icon={<TbBrandJavascript size={20} />} label="JavaScript">
              <MenuItem> Dark</MenuItem>
              <MenuItem> Light</MenuItem>
            </SubMenu>
          </Menu>
        </Menu>
        <div
          className="menubtn"
          onClick={() => {
            dispatch(setCollapsedState(!collapse));
          }}
        >
          {collapse ? (
            <MdKeyboardDoubleArrowRight />
          ) : (
            <MdKeyboardDoubleArrowLeft />
          )}
        </div>
      </Sidebar>
    </div>
  );
}
