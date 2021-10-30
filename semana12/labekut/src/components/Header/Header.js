import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router";

const Header = ({rightButtonText, setRightButtonText}) => {
  const history = useHistory();
  const token = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText('login')
      goToLogin(history)
    } else {
        goToLogin(history)
    }
  };
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToFeed(history)} color="inherit">
          LabeKut
        </Button>
        <Button onClick={rightButtonAction} color="inherit">
          {rightButtonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles()(Header);
