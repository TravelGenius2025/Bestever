const p = encodeURIComponent;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city') ?? 'Paris';
  const checkin = searchParams.get('checkin') ?? '2025-10-10';
  const checkout = searchParams.get('checkout') ?? '2025-10-13';
  const adults = Number(searchParams.get('adults') ?? 2);
  const children = Number(searchParams.get('children') ?? 0);
  const seniors = Number(searchParams.get('seniors') ?? 0);
  const pets = Number(searchParams.get('pets') ?? 0);

  // Airbnb supports adults, children, infants. We’ll pass seniors as adults.
  const totalAdults = adults + seniors;
  const infants = 0; // refine later if you separate under-2

  const url =
    `https://www.airbnb.com/s/${p(city)}/homes?checkin=${p(checkin)}&checkout=${p(checkout)}&adults=${totalAdults}&children=${children}&infants=${infants}${pets>0?'&pets=1':''}`;

  return new Response(JSON.stringify({ links:[{ name:'Airbnb (demo)', url }] }), {
    headers: { 'Content-Type':'application/json' }
  });
}
