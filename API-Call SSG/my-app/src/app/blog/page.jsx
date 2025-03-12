import Link from 'next/link';

export default async function Blog() {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts/');
  let posts = await res.json();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
