const products = [
  { name: 'product a', price: '250' },
  { name: 'product b', price: '800' },
  { name: 'product c', price: '300' },
];

export async function GET(request) {
  try {
    return new Response(
      JSON.stringify(products, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  try {
    let newProduct = await request.json();
    products.push(newProduct);
    return new Response(JSON.stringify(products), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ alert: 'invalid data' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
