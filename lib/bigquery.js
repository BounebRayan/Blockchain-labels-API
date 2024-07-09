// lib/bigquery.js
const { BigQuery} = require('@google-cloud/bigquery');

// Replace with your Google Cloud project ID
const projectId = process.env.NEXT_PUBLIC_GCP_PROJECT_ID;
const filePath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// Create a BigQuery client
const bigquery = new BigQuery({projectId,keyFilename:filePath});

module.exports = bigquery;
