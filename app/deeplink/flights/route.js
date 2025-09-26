const p = encodeURIComponent;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const from = searchParams.get('from') ?? 'LHR';
  const to = searchParams.get('to') ?? 'CDG';
  const depart = searchParams.get('depart') ?? '2025-10-10';
  const ret = searchParams.get('return') ?? '';
  const adults = Number(searchParams.get('adults') ?? 1);
  const children = Number(searchParams.get('children') ?? 0);
  const seniors = Number(searchParams.get('seniors') ?? 0);
  const pets = Number(searchParams.get('pets') ?? 0);

  // Many flight sites only take total passengers; seniors usually not separate
  const pax = adults + children + seniors;

  const links = [
    { name:'Google Flights', url:`https://www.google.com/travel/flights?hl=en#flt=${p(from)}.${p(to)}.${p(depart)}*${ret?`${p(to)}.${p(from)}.${p(ret)}`:''}` },
    { name:'Skyscanner (demo)', url:`https://www.skyscanner.net/transport/flights/${p(from)}/${p(to)}/${p(depart.replaceAll('-',''))}/?adults=${adults}&children=${children}&preferdirects=false` },
    { name:'Kayak (demo)', url:`https://www.kayak.com/flights/${p(from)}-${p(to)}/${p(depart)}${ret?`/${p(ret)}`:''}?adults=${adults}&children=${children}` }
  ];
  // pets hint (some sites ignore; harmless)
  if (pets>0) links.forEach(l => l.url += `&pets=${pets}`);
  return new Response(JSON.stringify({ links }), { headers: { 'Content-Type':'application/json' }});
}
