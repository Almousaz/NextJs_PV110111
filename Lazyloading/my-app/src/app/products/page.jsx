'use client';

import {useEffect, useState} from 'react';

const products = [
  {id: 0, name: 'product 0'},
  {id: 1, name: 'product 1'},
  {id: 2, name: 'product 2'},
  {id: 3, name: 'product 3'},
  {id: 4, name: 'product 4'},
  {id: 5, name: 'product 5'},
  {id: 6, name: 'product 6'},
  {id: 7, name: 'product 7'},
  {id: 8, name: 'product 8'},
  {id: 9, name: 'product 9'},
  {id: 10, name: 'product 10'},
  {id: 11, name: 'product 11'},
  {id: 12, name: 'product 12'},
  {id: 13, name: 'product 13'},
  {id: 14, name: 'product 14'},
  {id: 15, name: 'product 15'},
  {id: 16, name: 'product 16'},
  {id: 17, name: 'product 17'},
  {id: 18, name: 'product 18'},
  {id: 19, name: 'product 19'},
  {id: 20, name: 'product 20'},
  {id: 21, name: 'product 21'},
  {id: 22, name: 'product 22'},
  {id: 23, name: 'product 23'},
  {id: 24, name: 'product 24'},
  {id: 25, name: 'product 25'},
  {id: 26, name: 'product 26'},
  {id: 27, name: 'product 27'},
  {id: 28, name: 'product 28'},
  {id: 29, name: 'product 29'},
  {id: 30, name: 'product 30'},
];

export default function ProductList() {
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 5));

  useEffect(() => {
    const loadMore = document.getElementById('load-more');

    function observeHandler(entries) {
      const entry = entries[0];
      console.log(entries)
      if (entry.isIntersecting) {
        setVisibleProducts((prev) => [
          ...prev,
          ...products.slice(prev.length, prev.length + 5),
        ]);
      }
    }

    new IntersectionObserver(observeHandler, {rootMargin: '100px'}).observe(
      loadMore
    );
  }, [visibleProducts]);

  return (
    <div>
      <h1>Product List</h1>

      <ul>
        {visibleProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <div id="load-more">
        {visibleProducts.length < products.length
          ? 'Loading more...'
          : 'No more products'}
      </div>
    </div>
  );
}
