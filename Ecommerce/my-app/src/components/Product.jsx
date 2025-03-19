'use client';

import {CartContext} from '@/context/CartContext';
import Link from 'next/link';
import {useContext} from 'react';

const Product = ({product}) => {
  const {addToCart} = useContext(CartContext);

  return (
    <div className="product-item">
      <img src={product.image} />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <button
        onClick={() => {
          addToCart(product);
          alert('Product added:' + product.title);
        }}
      >
        Add to cart
      </button>

      <Link href={`/${product.id}`}> View more</Link>
    </div>
  );
};

export default Product;
