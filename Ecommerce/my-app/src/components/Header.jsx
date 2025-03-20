'use client';

import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {useSession, signIn, signOut} from 'next-auth/react';

const Header = () => {
  const {data: session} = useSession();
  const [isRender, setIsRender] = useState(false);
  useEffect(() => setIsRender(true), []);

  if (!isRender) {
    return null;
  }

  return (
    <div>
      <h2>Header</h2>
      <Link href="/">
        <h1>Ecommerce</h1>
      </Link>

      <div>
        {session ? (
          <>
            <span>Hi {session.user.name} </span>
            <button
              onClick={() => {
                signOut();
              }}
            >
              sign out
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              signIn();
            }}
          >
            sign in
          </button>
        )}
      </div>

      <Link href="/cart" className="cartheader">
        <FontAwesomeIcon icon={faShoppingCart} /> cart
      </Link>
    </div>
  );
};

export default Header;
