export default async function handler(req, res) {

  const response = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/Callers`,
    {
      method: "POST",
      headers: {
        "apikey": process.env.SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${process.env.SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation"
      },
      body: JSON.stringify([
        {
          name: "Coen Test"
        }
      ])
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}
