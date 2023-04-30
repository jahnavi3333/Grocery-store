import Cookies from "js-cookie";
import React, { useContext,useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Radio, Icon, Label, Menu ,Image} from "semantic-ui-react";
import ThemeContext from "../../context/ThemeContext";
import "./NavBar.css";
const NavBar = ({ carts, setIsDarkTheme }) => {
  const navigate = useNavigate();
  const isDarkTheme = useContext(ThemeContext);
  return (
    
    <Menu attached="top" fluid inverted={isDarkTheme}>
      <Image src='https://tse3.mm.bing.net/th?id=OIP.DcAnpXG-iolhTkylMpGE4QHaE8&pid=Api&P=0' width={200} height={84}></Image>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GROCERY MANIA STORE </h1>
      <Menu.Menu position="right">
        <Menu.Item
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/shop")
          }}
        >
          <Icon style={{ cursor: "pointer" }} name="home" inverted={isDarkTheme}></Icon>
        </Menu.Item>
        <Menu.Item
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/cart")
          }}
        >
          <Icon name="shopping cart" inverted={isDarkTheme}></Icon>
          <Label>{carts ? carts.length : 0}</Label>
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            Cookies.set("isAuthenticated", false, { expires: 7 })
            navigate("/login")
          }}
         
        >
          <Icon name="sign-out" inverted={isDarkTheme}></Icon>
        </Menu.Item>
        <Menu.Item>
          <Icon name={"sun"} inverted={isDarkTheme}></Icon>
          <Radio
            toggle
            checked={isDarkTheme}
            onClick={() => {
              setIsDarkTheme(!isDarkTheme)
            }}
          ></Radio>
          <Icon name={"moon"} inverted={isDarkTheme}></Icon>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
export default NavBar