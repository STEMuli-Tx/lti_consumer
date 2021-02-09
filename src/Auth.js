import React, { Fragment, useEffect } from "react";
import urlParams from "./util/urlParams";
import jwt from "jsonwebtoken";
function Auth() {
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
      id_token: jwt.sign(payload, "shhhh", { algorithm: "RS256" }),
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
    const payload = {
      iss: "https://salmon-mushroom-0db3b0d10.azurestaticapps.net",
      aud: ["d42df408-70f5-4b60-8274-6c98d3b9468d"],
      sub: "0ae836b9-7fc9-4060-006f-27b2066ac545",
      nonce: urlParams("nonce"),
      "https://purl.imsglobal.org/spec/lti/claim/deployment_id": "1",
      "https://purl.imsglobal.org/spec/lti/claim/message_type":
        "LtiResourceLinkRequest",
      "https://purl.imsglobal.org/spec/lti/claim/version": "1.3.0",
      "https://purl.imsglobal.org/spec/lti/claim/target_link_uri":
        "https://tst-tsugi.curriki.org/mod/curriki/?activity=600",
      "https://purl.imsglobal.org/spec/lti/claim/roles": [
        "http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor",
      ],
    };

    document.getElementById("authForm").submit();
  });

  return (
    <Fragment>
      <form id="authForm"></form>
    </Fragment>
  );
}

export default Auth;
