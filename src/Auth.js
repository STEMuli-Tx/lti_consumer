import React, { Fragment, useEffect } from "react";
import urlParams from "./util/urlParams";
import jwt from "jsonwebtoken";
import key from "./db/key.js";
function Auth() {
  var method = "POST";

  useEffect(() => {
    // Update the document title using the browser API
    var form = document.querySelector("#authForm");
    var today = new Date();
    const exp = today.setHours(today.getHours() + 4);
    console.log(exp);
    const payload = {
      iss: "https://salmon-mushroom-0db3b0d10.azurestaticapps.net",
      nonce: "6022254d9c5df",
      iat: 1612850510,
      exp: 1612850570,
      aud: "fASx3Xm4zgQV5DcP",
      "https://purl.imsglobal.org/spec/lti/claim/deployment_id": "6",
      "https://purl.imsglobal.org/spec/lti/claim/target_link_uri":
        "https://tst-tsugi.curriki.org/mod/curriki/?activity=600",
      sub: "2",
      "https://purl.imsglobal.org/spec/lti/claim/lis": {
        person_sourcedid: "",
        course_section_sourcedid: "",
      },
      "https://purl.imsglobal.org/spec/lti/claim/roles": [
        "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Administrator",
        "http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor",
        "http://purl.imsglobal.org/vocab/lis/v2/system/person#Administrator",
      ],
      "https://purl.imsglobal.org/spec/lti/claim/context": {
        id: "49",
        label: "we-the-economy",
        title: "We the Economy",
        type: ["CourseSection"],
      },
      "https://purl.imsglobal.org/spec/lti/claim/resource_link": {
        title: "Chapter 1: What is the economy?",
        id: "227",
      },
      "https://purl.imsglobal.org/spec/lti-bos/claim/basicoutcomesservice": {
        lis_result_sourcedid:
          '{"data":{"instanceid":"227","userid":"2","typeid":"6","launchid":744535693},"hash":"2eea0502ab637bd447005e694a6af86731ffad4e789b9d73cf838687be6a8639"}',
        lis_outcome_service_url:
          "https://moodle39.curriki.org/mod/lti/service.php",
      },
      "https://purl.imsglobal.org/spec/lti/claim/launch_presentation": {
        locale: "en",
        document_target: "iframe",
        return_url:
          "https://moodle39.curriki.org/mod/lti/return.php?course=49&launch_container=3&instanceid=227&sesskey=qOn1g03Twl",
      },
      "https://purl.imsglobal.org/spec/lti/claim/ext": {
        lms: "moodle-2",
      },
      "https://purl.imsglobal.org/spec/lti/claim/tool_platform": {
        family_code: "moodle",
        version: "2020061500.03",
        guid: "8c2adc4e338377098e2d69e2a46fbbce",
        name: "CurrikiLMS",
        description: "Curriki Learning Management System",
      },
      "https://purl.imsglobal.org/spec/lti/claim/version": "1.3.0",
      "https://purl.imsglobal.org/spec/lti/claim/message_type":
        "LtiResourceLinkRequest",
      "https://purl.imsglobal.org/spec/lti/claim/custom": {
        playlist: "125",
        system_setting_url:
          "https://moodle39.curriki.org/mod/lti/services.php/tool/6/custom",
        context_setting_url:
          "https://moodle39.curriki.org/mod/lti/services.php/CourseSection/49/bindings/tool/6/custom",
        link_setting_url:
          "https://moodle39.curriki.org/mod/lti/services.php/links/{link_id}/custom",
      },
      "https://purl.imsglobal.org/spec/lti-ags/claim/endpoint": {
        scope: [
          "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem",
          "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem.readonly",
          "https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly",
          "https://purl.imsglobal.org/spec/lti-ags/scope/score",
        ],
        lineitems:
          "https://moodle39.curriki.org/mod/lti/services.php/49/lineitems?type_id=6",
        lineitem:
          "https://moodle39.curriki.org/mod/lti/services.php/49/lineitems/275/lineitem?type_id=6",
      },
      "https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice": {
        context_memberships_url:
          "https://moodle39.curriki.org/mod/lti/services.php/CourseSection/49/bindings/6/memberships",
        service_versions: ["1.0", "2.0"],
      },
    };
    console.log(key);
    const params = {
      scope: urlParams("scope"),
      type: urlParams("response_type"),
      mode: urlParams("response_mode"),
      prompt: urlParams("prompt"),
      nonce: urlParams("nonce"),
      client_id: urlParams("client_id"),
      loginHint: urlParams("login_hint"),
      state: urlParams("state"),
      id_token: jwt.sign(payload, key, { algorithm: "RS256" }),
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

  return (
    <Fragment>
      <form id="authForm"></form>
    </Fragment>
  );
}

export default Auth;
