/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with Version 3 (V3) of the AWS JavaScript SDK,
which is scheduled for release by September 2020. The pre-release version of the SDK is available
at https://github.com/aws/aws-sdk-js-v3. The 'SDK for JavaScript Developer Guide' for V3 is also
scheduled for release September 2020, and the topic containing this example will be hosted at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/ses-examples-ip-filters.html.

Purpose:
ses_listreceiptfilters.js demonstrates how to list the Amazon SES IP filters for an AWS account.

Inputs:
- REGION (into command line below)

Running the code:
node ses_listreceiptfilters.js REGION
*/
// snippet-start:[ses.JavaScript.v3.filters.listReceiptFilters]

// Import required AWS SDK clients and commands for Node.js
const {SES, ListReceiptFiltersCommand} = require("@aws-sdk/client-ses");
// Set the AWS Region
const region = process.argv[2];
// Create SES service object
const ses = new SES(region);
// Set the parameters

async function run() {
    try {
        const data = await ses.send(new ListReceiptFiltersCommand({}));
        console.log(data.Filters)
    } catch (err) {
        console.error(err, err.stack);
    }
};
run();
// snippet-end:[ses.JavaScript.v3.filters.listReceiptFilters]
exports.run = run; //for unit tests only
