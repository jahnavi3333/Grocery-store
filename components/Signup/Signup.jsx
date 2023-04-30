import React, { useState } from "react";
import {
  Grid,
  Header,
  Segment,
  Image,
  Form,
  Input,
  GridRow,
  Message,
  Button,
} from "semantic-ui-react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState("9972057677");
  const [password, setPassword] = useState("123@abc");
  const [isAuthenticated, setIsAuthenticated] = useState(Cookies.get("isAuthenticated"));
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault()
    if (password === "123" && phoneNumber === "9972057677") {
      Cookies.set("isAuthenticated", true, { expires: 7 });
      Cookies.set("phoneNumber", phoneNumber, { expires: 7 });
      Cookies.set("password", password, { expires: 7 });
      setIsAuthenticated(isAuthenticated, true);
      navigate("/shop");
    }
  }
  if (Cookies.get("isAuthenticated")) {
    navigate("/shop");
    return <></>
  }
  return (
    <Grid style={{ height: "99vh" }} verticalAlign="middle">
      <Grid.Row centered>
        <Grid.Column width="5" verticalAlign="middle">
          <Header as={"h2"} style={{ color: "#ff8c00" }}>
            <Image src="images/logo.jpg" />
           Sign-Up
          </Header>
          <Form size="large">
            <Segment color="red">
              
              
              <Form.Input
                icon={"address card"}
                fluid
                iconPosition="left"
                placeholder="Name"
               
              ></Form.Input>
              <Form.Input
                icon={"mail"}
                fluid
                iconPosition="left"
                placeholder="E-mail"
               
              ></Form.Input>
              <Form.Input
                icon={"birthday cake"}
                fluid
                iconPosition="left"
                placeholder="Date Of Birth"
               
              ></Form.Input>
              <Form.Input
                fluid
                icon={"mobile alternate"}
                iconPosition="left"
                placeholder="Phone number"
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
                value={phoneNumber}
              ></Form.Input>
              <Form.Input
                icon={"key"}
                fluid
                iconPosition="left"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              ></Form.Input>

              <Button color={"orange"} onClick={onSubmit}>
                {" "}
                Sign-in
              </Button>
            </Segment>
          </Form>
         
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default Signup;