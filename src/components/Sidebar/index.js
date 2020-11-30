import React from "react";
import {
  CloseIcons,
  Icons,
  SidebarContainer,
  SidebarLinks,
  SidebarMenu,
  SidebarWrapper,
  SidebarBtnWrap,
  SidebarBtn,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icons>
        <CloseIcons onClick={toggle} />
      </Icons>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="about" onClick={toggle}>
            About
          </SidebarLinks>
          <SidebarLinks to="discover" onClick={toggle}>
            Discover
          </SidebarLinks>
          <SidebarLinks to="services" onClick={toggle}>
            Services
          </SidebarLinks>
          <SidebarLinks to="signup" onClick={toggle}>
            Sign Up
          </SidebarLinks>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarBtn to="/signin">Sign In</SidebarBtn>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
