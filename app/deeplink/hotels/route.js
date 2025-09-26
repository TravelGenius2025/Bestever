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

  const totalAdults = adults + seniors;

  const links = [
    { name:'Google Hotels', url:`https://www.google.com/travel/hotels?dest=${p(city)}&q=${p(city)}&dates=${p(checkin)}%2C${p(checkout)}&adults=${totalAdults}` },
    { name:'Booking.com (demo)', url:`https://www.booking.com/searchresults.html?ss=${p(city)}&checkin=${p(checkin)}&checkout=${p(checkout)}&group_adults=${totalAdults}&group_children=${children}&no_rooms=1&aid=DEMO_AID` },
    { name:'Hotels.com (demo)', url:`https://www.hotels.com/Hotel-Search?destination=${p(city)}&startDate=${p(checkin)}&endDate=${p(checkout)}&adults=${totalAdults}&children=${children}&partnerid=DEMO_PID` }
  ];
  if (pets>0) links.forEach(l => l.url += `&pets=1`);
  return new Response(JSON.stringify({ links }), { headers: { 'Content-Type':'application/json' }});
}
