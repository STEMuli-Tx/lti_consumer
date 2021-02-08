import React, { Fragment, useEffect } from "react";

export default () => {
  var action =
    "https://tst-tsugi.curriki.org/lti/oidc_login/0EE38DD5-428F-2DB1-4E24-96F7F65C8C07";
  var method = "POST";

  var params = {
    client_id: "fASx3Xm4zgQV5DcP",
    iss: "https://salmon-mushroom-0db3b0d10.azurestaticapps.net",
    target_link_uri: "https://tst-tsugi.curriki.org/mod/curriki/?activity=600",
    login_hint: "7",
    lti_message_hint: "0",
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
};

/*
  iss:"https://stemuli.net",
  target_link_uri: https://lti.tool.com,
  login_hint:3,
  lti_message_hint:0,
  client_id:"RHFJKFKF",
  lti_deployment_id:1
  
  */
// Definitions
// var action = "https://saltire.lti.app/tool";
// var method = "POST";

// var params = {
//   iss: "https://saltire.lti.app/platform",
//   target_link_uri: "https://saltire.lti.app/tool",
//   login_hint: "3",
//   launch_presentation_css_url: "https://saltire.lti.app/css/tc.css",
//   launch_presentation_document_target: "iframe",
//   launch_presentation_locale: "en-GB",
//   launch_presentation_return_url: "https://saltire.lti.app/tc-return.php",
//   lti_message_type: "basic-lti-launch-request",
//   lti_version: "1.3.0",
//   user_id: "29123",
//   platform_id: "https://saltire.lti.app/platform",
//   oauth_consumer_key: "saltire.lti.app",
//   oauth_signature_method: "RS256",
//   custom_oauth2_access_token_url:
//     "https://saltire.lti.app/platform/token/s13c97ca92663edfa2bf1ceb6f9979aed"
// };
// var params = {
//   client_id: "saltire.lti.app",
//   iss: "https://saltire.lti.app/platform",
//   login_hint: "29123",
//   lti_deployment_id: "cLWwj9cbmkSrCNsckEFBmA",
//   lti_message_hint: "My LTI message hint!",
//   target_link_uri: "https://saltire.lti.app/tool"
// };
