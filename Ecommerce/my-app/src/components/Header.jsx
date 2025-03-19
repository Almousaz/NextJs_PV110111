import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      <h2>Header</h2>
      <Link href="/">
        <h1>Ecommerce</h1>
      </Link>

      <Link href="/cart">
        cart
      </Link>
    </div>
  );
};

export default Header;
