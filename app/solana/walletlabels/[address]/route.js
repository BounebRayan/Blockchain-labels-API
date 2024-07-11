import { NextResponse } from 'next/server';
import bigquery from '../../../../lib/bigquery';
import { filterFields } from '../../../../lib/filterfunc';

export async function GET(req,{ params }) {
  const { address } = params;

  if (!address) {
    return NextResponse.json({ error: 'Address parameter is required' }, { status: 400 });
  }

  const query = `
    SELECT * FROM \`latest.solana\`
    WHERE address = @address
  `;

  const options = {
    query,
    location: 'US',
    params: { address },
  };

  try {
    const [rows] = await bigquery.query(options);
    const filteredRows = filterFields(rows);
    return NextResponse.json(filteredRows, { status: 200 });
  } catch (error) {
    console.error('ERROR:', error);
    return NextResponse.json({ error: 'Error querying BigQuery' }, { status: 500 });
  }
}
