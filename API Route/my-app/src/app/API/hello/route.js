export async function GET() {
  try {
    throw new Error('error');
    return new Response(
      JSON.stringify({ message: 'hello welcome to my web site' }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: 'Fiald to get it' }), {
      status: 500,
    });
  }
}
