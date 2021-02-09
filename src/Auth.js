import React, { Fragment, useEffect } from "react";
import urlParams from "./util/urlParams";
import jwt from "jsonwebtoken";
import key from "./db/key.js";
import axios from "axios";
function Auth() {
  var method = "POST";

  useEffect(() => {
    // Update the document title using the browser API
    var form = document.querySelector("#authForm");
    var today = new Date();
    const exp = today.setHours(today.getHours() + 4);

    axios
      .get(
        "https://stemuli-backend-sandbox.azurewebsites.net/api/lti/token?nonce=`${urlParams('nonce')}`"
      )
      .then((res) => {
        const params = {
          scope: urlParams("scope"),
          type: urlParams("response_type"),
          mode: urlParams("response_mode"),
          prompt: urlParams("prompt"),
          nonce: urlParams("nonce"),
          client_id: urlParams("client_id"),
          loginHint: urlParams("login_hint"),
          state: urlParams("state"),
          id_token: res.data,
        };

        form.action = urlParams("redirect_uri");
        form.method = method;
        for (var name in params) {
          var node = document.createElement("input");
          node.name = name;
          node.type = "hidden";
          node.value = params[name];
          form.appendChild(node);
        }
        // var output = document.querySelector("code");
        // output.textContent = JSON.stringify(params, null, 2);

        document.getElementById("authForm").submit();
      });
  });

  return (
    <Fragment>
      <form id="authForm"></form>
    </Fragment>
  );
}

export default Auth;
