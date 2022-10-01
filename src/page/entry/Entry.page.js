import React, { useState, useContext } from "react";
import "./entry.style.css";
import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";
import { Register } from "../../components/Register-form/Register";
import { historyContext, authContext } from "./context";
import { useHistory } from "react-router-dom";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
    console.log(name, value);
  };

  let history = useHistory();
  const handleClick = () => {
    history.push("./dashboard");
  };

  const contextAuth = useContext(authContext);

  const handleAuth = () => {
    contextAuth.isAuth = true;
    // console.log(isAuth);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const frmSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
    <historyContext.Provider value={{ handleClick, handleAuth, contextAuth }}>
      <div
        className="entry-page"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(219 223 232), rgb(255 255 255),rgb(0 90 255))`,
        }}
      >
        <Jumbotron>
          {frmLoad === "login" && (
            <LoginForm
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
              email={email}
              frmSwitcher={frmSwitcher}
              password={password}
              handleClick={handleClick}
              handleAuth={handleAuth}
              contextAuth={contextAuth}
            />
          )}
          {frmLoad === "reset" && (
            <Register email={email} frmSwitcher={frmSwitcher} />
          )}
        </Jumbotron>
      </div>
    </historyContext.Provider>
  );
};
