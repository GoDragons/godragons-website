// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const { KICKBOX_API_KEY } = process.env;

const axios = require("axios");

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const url = `https://api.kickbox.com/v2/verify?email=${body.email}&apikey=${KICKBOX_API_KEY}`;
  let response;
  try {
    response = await axios.get(url);
    return { valid: response.data.result === "deliverable" };
  } catch (e) {
    return {
      statusCode: 500,
    };
  }
};
