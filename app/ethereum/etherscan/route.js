const bigquery = require('../../../lib/bigquery');
import { NextResponse } from 'next/server';

export async function GET() {
  const query = `
    SELECT * FROM \`latest.ethereum_etherscan_arkham_processed\` where origin='etherscan' LIMIT 10;
  `;
  try {
    const [rows] = await bigquery.query(query);
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error('ERROR:', error);
    return NextResponse.json({ error: 'Error querying BigQuery' }, { status: 500 });
  }
}