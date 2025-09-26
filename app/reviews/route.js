export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const activityId = searchParams.get('activityId') || 'default-activity';

  // Demo seed reviews per activity
  const seed = {
    'default-activity': [
      { id:'seed-1', activityId, name:'Alicia', rating:5, text:'Mesmerizing sunset boat tour. Great guide!', date:'2025-06-20' },
      { id:'seed-2', activityId, name:'Jon', rating:4, text:'Worth it, but get there early to avoid lines.', date:'2025-06-18' }
    ]
  };

  return new Response(JSON.stringify(seed[activityId] || []), {
    headers: { 'Content-Type':'application/json', 'Cache-Control':'no-store' }
  });
}
