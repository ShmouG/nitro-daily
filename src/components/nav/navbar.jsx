import React from 'react';
import './navbar.css';

import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
    };
  }

  toggle() {
    this.setState(isOpen => ({
      isOpen: !isOpen.state.value,
    }));
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home Screen</NavbarBrand>
          <Collapse isOpen={this.state} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem>
                    Option 3
                  </DropdownItem>
                  <DropdownItem>
                    Option 4
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavbarBrand className="groupName">&#169;Nitro-Sorcerers!</NavbarBrand>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
