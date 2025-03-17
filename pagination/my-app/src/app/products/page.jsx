import Link from 'next/link';
import React from 'react';

export default async function Products({searchParams}) {
  const productPerPage = 3;
  const page = parseInt(searchParams.page) || 1;

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const allProducts = await res.json();

  const startIndex = (page - 1) * productPerPage;
  const endIndex = startIndex + 3;
  const productsToDisplay = allProducts.slice(startIndex, endIndex);
  const allpage = Math.ceil(allProducts.length / productPerPage);
  const hasNextPage = endIndex < allProducts.length;
  const hasPrevPage = page > 1;

  return (
    <div>
      <h1>Available Products</h1>
      <ul>
        {productsToDisplay.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.body}
          </li>
        ))}
      </ul>

      <div>
        {hasPrevPage ? (
          <Link href={`?page=${page - 1}`}>Previous</Link>
        ) : (
          <span>Previous</span>
        )}

        <span>
          {' '}
          | Page {page} of {allpage}{' '}
        </span>

        {hasNextPage ? (
          <Link href={`?page=${page + 1}`}>Next</Link>
        ) : (
          <span>Next</span>
        )}
      </div>
    </div>
  );
}
