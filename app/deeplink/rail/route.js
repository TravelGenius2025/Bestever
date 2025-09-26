const p = encodeURIComponent;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const from = searchParams.get('from') ?? 'London';
  const to = searchParams.get('to') ?? 'Paris';
  const date = searchParams.get('date') ?? '2025-10-10';
  const adults = Number(searchParams.get('adults') ?? 2);
  const children = Number(searchParams.get('children') ?? 0);
  const seniors = Number(searchParams.get('seniors') ?? 0);

  // Train sites often have separate fields; we pass as hints where possible.
  const total = adults + children + seniors;

  const links = [
    { name:'Rail Europe (demo)', url:`https://www.raileurope.com/en/destinations?from=${p(from)}&to=${p(to)}&date=${p(date)}&adults=${adults}&children=${children}&seniors=${seniors}` },
    { name:'Trainline (demo)', url:`https://www.thetrainline.com/book/results?origin=${p(from)}&destination=${p(to)}&outwardDate=${p(date)}&passengers=${total}` }
  ];
  return new Response(JSON.stringify({ links }), { headers: { 'Content-Type':'application/json' }});
}
