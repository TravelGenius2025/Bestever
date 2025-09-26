const p = encodeURIComponent;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city') ?? 'Paris';
  const pickup = searchParams.get('pickup') ?? '2025-10-10T10:00';
  const dropoff = searchParams.get('dropoff') ?? '2025-10-13T10:00';
  const adults = Number(searchParams.get('adults') ?? 2);
  const children = Number(searchParams.get('children') ?? 0);
  const seniors = Number(searchParams.get('seniors') ?? 0);

  const links = [
    { name:'DiscoverCars (demo)', url:`https://www.discovercars.com/?search=${p(city)}&pickup=${p(pickup)}&dropoff=${p(dropoff)}&adults=${adults}&children=${children}` },
    { name:'Kayak Cars (demo)', url:`https://www.kayak.com/cars/${p(city)}?pickup=${p(pickup)}&dropoff=${p(dropoff)}&drivers=${adults + seniors}` }
  ];
  return new Response(JSON.stringify({ links }), { headers: { 'Content-Type':'application/json' }});
}
