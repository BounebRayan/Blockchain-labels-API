import { NextResponse } from 'next/server';
import bigquery from '../../../../lib/bigquery';

export async function GET(req,{ params }) {
  const { address } = params;

  if (!address) {
    return NextResponse.json({ error: 'Address parameter is required' }, { status: 400 });
  }

  const query = `
    SELECT * FROM \`latest.ethereum_etherscan_arkham_processed\`
    WHERE address = @address and origin='arkham'
  `;

  const options = {
    query,
    location: 'US',
    params: { address },
  };

  try {
    const [rows] = await bigquery.query(options);
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error('ERROR:', error);
    return NextResponse.json({ error: 'Error querying BigQuery' }, { status: 500 });
  }
}
