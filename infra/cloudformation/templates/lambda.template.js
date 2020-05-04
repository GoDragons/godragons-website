const { REST_API_NAME } = require("../constants");

const ENVIRONMENT_VARIABLES_LAMBDA = {
  Variables: {
    KICKBOX_API_KEY:
      "live_32e87a6c7438ee48e03b6df603d8fa072971a0e0893a46d11302c083617ed514",
  },
};

function getRESTFunction({ name, method = "GET" }) {
  const data = {
    name,
    apiName: REST_API_NAME,
    route: {
      RouteKey: `${method} /${name}`,
    },
    integration: {
      PayloadFormatVersion: "2.0",
    },
    Role: { "Fn::GetAtt": ["GoDragonsAPIFunctionRole", "Arn"] },
    Environment: ENVIRONMENT_VARIABLES_LAMBDA,
    CodeUri: "../lambda_functions/rest/" + name.toLowerCase(),
  };

  return data;
}

function getPrivateFunction({ name }) {
  const data = {
    name,
    Role: { "Fn::GetAtt": ["GoDragonsAPIFunctionRole", "Arn"] },
    Environment: ENVIRONMENT_VARIABLES_LAMBDA,
    CodeUri: "../lambda_functions/private/" + name.toLowerCase(),
  };
  return data;
}

module.exports = [getRESTFunction({ name: "validate-email", method: "POST" })];
