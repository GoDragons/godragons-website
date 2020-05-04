const { REST_API_NAME } = require("../constants");

function getRESTApi() {
  return {
    [REST_API_NAME]: {
      Type: "AWS::ApiGatewayV2::Api",
      Properties: {
        Name: REST_API_NAME,
        ProtocolType: "HTTP",
        CorsConfiguration: {
          AllowHeaders: ["*"],
          AllowMethods: ["*"],
          AllowOrigins: ["*"],
        },
      },
    },
    RESTDeployment: {
      Type: "AWS::ApiGatewayV2::Deployment",
      DependsOn: [],
      Properties: {
        ApiId: {
          Ref: REST_API_NAME,
        },
      },
    },
    RESTProdStage: {
      Type: "AWS::ApiGatewayV2::Stage",
      Properties: {
        StageName: "Prod",
        DeploymentId: {
          Ref: "RESTDeployment",
        },
        ApiId: {
          Ref: REST_API_NAME,
        },
      },
    },
  };
}

const data = {
  ...getRESTApi(),
};

module.exports = data;
