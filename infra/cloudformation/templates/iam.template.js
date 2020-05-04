const data = {
  CallLambdaPolicy: {
    Type: "AWS::IAM::Policy",
    Properties: {
      Roles: [{ Ref: "GoDragonsAPIFunctionRole" }],
      PolicyDocument: {
        Statement: [
          {
            Effect: "Allow",
            Action: ["lambda:InvokeFunction"],
            Resource: ["*"],
          },
        ],
      },
      PolicyName: "CallLambdaPolicy",
    },
  },

  GoDragonsAPIFunctionRole: {
    Type: "AWS::IAM::Role",
    Properties: {
      Description: "Manage connections",
      RoleName: "GoDragonsAPIFunctionRole",
      ManagedPolicyArns: [
        "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
      ],
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: ["lambda.amazonaws.com"],
            },
            Action: ["sts:AssumeRole"],
          },
        ],
      },
    },
  },
};

module.exports = data;
