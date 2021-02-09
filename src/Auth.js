import React, { Fragment, useEffect, useState } from "react";
import urlParams from "./util/urlParams";
import axios from "axios";
function Auth() {
  const [state, setState] = useState({
    scope: urlParams("scope"),
    type: urlParams("response_type"),
    mode: urlParams("response_mode"),
    prompt: urlParams("prompt"),
    nonce: urlParams("nonce"),
    client_id: urlParams("client_id"),
    loginHint: urlParams("login_hint"),
    state: urlParams("state"),
    id_token: "jwt_token",
  });

  useEffect(() => {
    const url = urlParams("redirect_uri");

    axios
      .post("https://tst-tsugi.curriki.org/lti/oidc_launch", state, {
        headers: { "Content-Type": "x-www-form-urlencoded" },
        Authorization: urlParams("state"),
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <Fragment>
      <form id="authForm"></form>
    </Fragment>
  );
}

export default Auth;
