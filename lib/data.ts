import 'server-only';

const API_URL: string = process.env.API_URL || '';

export async function getData() {
  const res = await fetch(`${API_URL}/data`);

  return res.json();
}
