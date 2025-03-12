export async function generateStaticParams() {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts/');
  let posts = await res.json();

  let ids = posts.map((post) => ({
    slug: post.id.toString(),
  }));
  return ids;
}

export default async function postDetail({ params }) {
  let { slug } = params;

  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  let targetPost = await res.json();

  return (
    <div>
      <h1>{targetPost.title}</h1>
      <h2>{targetPost.body}</h2>
    </div>
  );
}
