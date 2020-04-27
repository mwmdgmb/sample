import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import { isOpenMenu, isDropdown } from "../../../redux/menu/menu-actions";
import {} from "../../../redux/cart/cart-actions";
import { isLoginAction } from "../../../redux/login/login-actions";
import { connect } from "react-redux";
import DropdownCart from "../../DropdownCart";
import BadgeItems from "../../badgs/Badgs";

const Headers = ({
  toggle,
  isOpen,
  dropdownCart,
  isDropdown,
  isLogin,
  isLoginAction
}) => {
  console.log();
  return (
    <div>
      <Navbar color="transparent" className="shadow p-4" light expand="sm">
        <div className="container-fluid mx-4">
          <NavbarBrand href="/">لوگو</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {isLogin ? (
                <Button
                  onClick={isLoginAction}
                  className="text-dark bg-transparent"
                >
                  ورود / ثبت نام
                </Button>
              ) : (
                <Button onClick={isLoginAction} className="bg-success">
                  USER_CURRENET
                </Button>
              )}
              <NavItem className="d-flex flex-row justify-content-between align-items-baseline">
                <NavLink onClick={dropdownCart}>سبد خرید</NavLink>
                <BadgeItems dropdownCart={dropdownCart} />
                {isDropdown ? <DropdownCart /> : null}
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(isOpenMenu()),
  dropdownCart: () => dispatch(isDropdown()),
  isLoginAction: () => dispatch(isLoginAction())
});

const mapStateToProps = state => ({
  isOpen: state.toggle.isOpen,
  isDropdown: state.toggle.isDropdown,
  isLogin: state.user.isLogin
});

export default connect(mapStateToProps, mapDispatchToProps)(Headers);
