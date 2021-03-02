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
    let sandbox = "https://stemuli-backend-sandbox.azurewebsites.net";
    let local = "http://localhost:5000";
    console.log(local);
    axios
      .get(
        ` https://server-stemuli.ngrok.io/api/v1/lti/token?nonce=${urlParams(
          "nonce"
        )}`,
        {
          headers: {
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoSWQiOiI1Zjk2YjBlOWZiZWYzNzAwMjJhOTlmMWMiLCJ1c2VyVHlwZSI6IkRpc3RyaWN0QWRtaW4iLCJhY2NvdW50IjoiNWY4NWEyOThjZGI2MDQzMDYyMjRkYjgwIiwicm9sZSI6eyJfaWQiOiI1ZjliMTFlMmRhMjU1YTAwMjJiYjI3YTAiLCJhY2NvdW50IjoiNWY4NWEyOThjZGI2MDQzMDYyMjRkYjgwIiwibmFtZSI6IkRpc3RyaWN0QWRtaW4iLCJfX3YiOjAsImNyZWF0ZWRBdCI6IjIwMjAtMTAtMjlUMTk6MDI6NTguODY1WiIsInByaXZpbGVnZXMiOnsiYWNjb3VudCI6eyJvd24iOnsicmVhZCI6dHJ1ZSwid3JpdGUiOnRydWV9LCJhY2NvdW50Ijp7InJlYWQiOnRydWUsIndyaXRlIjpmYWxzZX0sImFsbCI6eyJyZWFkIjpmYWxzZSwid3JpdGUiOmZhbHNlfX0sInVzZXIiOnsib3duIjp7InJlYWQiOnRydWUsIndyaXRlIjp0cnVlfSwiYWNjb3VudCI6eyJyZWFkIjp0cnVlLCJ3cml0ZSI6ZmFsc2V9LCJhbGwiOnsicmVhZCI6ZmFsc2UsIndyaXRlIjpmYWxzZX19LCJldmVudHMiOnsib3duIjp7InJlYWQiOnRydWUsIndyaXRlIjp0cnVlfSwiYWNjb3VudCI6eyJyZWFkIjp0cnVlLCJ3cml0ZSI6ZmFsc2V9LCJhbGwiOnsicmVhZCI6ZmFsc2UsIndyaXRlIjpmYWxzZX19LCJjaGF0TWVzc2FnZSI6eyJvd24iOnsicmVhZCI6dHJ1ZSwid3JpdGUiOnRydWV9LCJhY2NvdW50Ijp7InJlYWQiOnRydWUsIndyaXRlIjpmYWxzZX0sImFsbCI6eyJyZWFkIjpmYWxzZSwid3JpdGUiOmZhbHNlfX0sImNoYW5uZWxzIjp7Im93biI6eyJyZWFkIjp0cnVlLCJ3cml0ZSI6dHJ1ZX0sImFjY291bnQiOnsicmVhZCI6dHJ1ZSwid3JpdGUiOmZhbHNlfSwiYWxsIjp7InJlYWQiOmZhbHNlLCJ3cml0ZSI6ZmFsc2V9fX0sInVwZGF0ZWRBdCI6IjIwMjAtMTItMDVUMjI6MjA6MDAuMTY3WiJ9LCJpYXQiOjE2MDcyMDY4MDAsImV4cCI6MTYzODc0MjgwMH0.LwrURezcSLwdd-tOiQRauqYUJONkwejMQFoywJun2iA",
          },
        }
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
          deep_link_return_url: "https://client-stemuli.ngrok.io/redirect",
        };
        console.log(urlParams("redirect_uri"));
        console.log(params);
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
