const p = encodeURIComponent;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city') ?? 'Paris';
  const date = searchParams.get('date') ?? '2025-10-11';
  const adults = Number(searchParams.get('adults') ?? 2);
  const children = Number(searchParams.get('children') ?? 0);
  const seniors = Number(searchParams.get('seniors') ?? 0);

  const total = adults + children + seniors;

  const links = [
    { name:'GetYourGuide (demo)', url:`https://www.getyourguide.com/s/?q=${p(city)}&date_from=${p(date)}&participants=${total}` },
    { name:'Viator (demo)', url:`https://www.viator.com/searchResults/all?text=${p(city)}&startDate=${p(date)}&adults=${adults}&children=${children}` }
  ];
  return new Response(JSON.stringify({ links }), { headers: { 'Content-Type':'application/json' }});
}
