import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from "styled-components";

const Nav = styled.section`
.dropdown-toggle:active {
  background-color: #003B36;
  }

`


const NavDrop = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Nav>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} setActiveFromChild>
        <DropdownToggle caret>
          Games
          </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>{props.children}</DropdownItem>

        </DropdownMenu>
      </Dropdown>
    </Nav>
  );
}


export default NavDrop;