import React, { Fragment, useEffect } from "react";

function Form() {
  var action =
    "https://tst-tsugi.curriki.org/lti/oidc_login/0EE38DD5-428F-2DB1-4E24-96F7F65C8C07";
  var method = "POST";

  var params = {
    client_id: "fASx3Xm4zgQV5DcP",
    iss: "https://client-stemuli.ngrok.io",
    "https://purl.imsglobal.org/spec/lti/claim/custom": {
      person_email_primary: "wade@stemuli.net",
    },
    "https://purl.imsglobal.org/spec/lti/claim/version": "1.3.0",
    target_link_uri: "https://tst-tsugi.curriki.org/mod/curriki/content",
    login_hint: "7",
    email: "wade@stemuli.net",
    lti_message_hint:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJpZmllciI6IjkyZDU3NzVkYWEwMmIwNTVkYjNhMGQxN2FkNWVkMjQ1MDJiMGUzYTk3ZDRhNmYxOGFlNWYwYjhiNTQ3ZmE0NmNlZDJkM2I5M2Y2ZDJjYmMxZWY1NDBiNTcxZTUyMmM2MGMwN2E1NTUxOTg1ZTZhOTY4MWNiZjg1MTNhN2RkYTA1IiwiY2FudmFzX2RvbWFpbiI6ImNhbnZhcy5jdXJyaWtpLm9yZyIsImNvbnRleHRfdHlwZSI6IkNvdXJzZSIsImNvbnRleHRfaWQiOjEwMDAwMDAwMDAwMjM5LCJleHAiOjE2MTQwOTQxMTd9.-JF5Iso_FJI_Jb4rZP0SfEylxigo0CiZ5RVASUZYhBo",
    lti_deployment_id: "1",
  };

  useEffect(() => {
    // Update the document title using the browser API
    var form = document.querySelector("#ltiForm");
    if (form) {
      form.action = action;
      form.method = method;
      for (var name in params) {
        var node = document.createElement("input");
        node.name = name;
        node.type = "hidden";
        node.value = params[name];
        form.appendChild(node);
      }
    }

    var output = document.querySelector("code");
    output.textContent = JSON.stringify(params, null, 2);
  });

  return (
    <Fragment>
      <pre>
        <code className="language-json"></code>
      </pre>
      <form id="ltiForm"></form>
      <button type="submit" form="ltiForm">
        POST to LTI Tool Provider!
      </button>
    </Fragment>
  );
}

export default Form;
