const bigquery = require('../../../lib/bigquery');
import { NextResponse } from 'next/server';
import { filterFields } from '../../../lib/filterfunc';

export async function GET() {
  const query = `
    SELECT * FROM \`latest.ethereum\` LIMIT 10;
  `;
  try {
    const [rows] = await bigquery.query(query);
    const filteredRows = filterFields(rows);
    return NextResponse.json(filteredRows, { status: 200 });
  } catch (error) {
    console.error('ERROR:', error);
    return NextResponse.json({ error: 'Error querying BigQuery' }, { status: 500 });
  }
}