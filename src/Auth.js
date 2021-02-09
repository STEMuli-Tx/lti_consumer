import React, { Fragment, useEffect } from "react";
import urlParams from "./util/urlParams";
function Auth() {
  let action = "";
  var method = "POST";

  useEffect(() => {
    // Update the document title using the browser API
    var form = document.querySelector("#authForm");
    if (form) {
    }

    const params = {
      scope: urlParams("scope"),
      type: urlParams("response_type"),
      mode: urlParams("response_mode"),
      prompt: urlParams("prompt"),
      nonce: urlParams("nonce"),
      client_id: urlParams("client_id"),
      loginHint: urlParams("login_hint"),
      state: urlParams("state"),
      id_token: "jwt_token",
    };

    action = urlParams("redirect_uri");

    for (var name in params) {
      var node = document.createElement("input");
      node.name = name;
      node.type = "hidden";
      node.value = params[name];
      form.appendChild(node);
    }
    // var output = document.querySelector("code");
    // output.textContent = JSON.stringify(params, null, 2);
    form.action = action;
    form.method = method;
    console.log(form.action);
    console.log(form);
    // document.getElementById("authForm").submit();
  });
  console.log("here");
  return (
    <Fragment>
      <form id="authForm"></form>
    </Fragment>
  );
}

export default Auth;
