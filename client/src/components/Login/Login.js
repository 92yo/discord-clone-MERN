import React from "react";

import { ErrMsg } from "../../helpers/toastr";
import { auth, provider } from "../../firebase/index";
import { Button } from "@material-ui/core";
import discordLogo from "../../assets/discordLogo.png";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => ErrMsg(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={discordLogo} alt="discordLogo" />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
