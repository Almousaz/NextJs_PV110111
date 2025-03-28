'use client';

import '../styles/globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CartProvider from '@/context/CartContext';
import {SessionProvider} from 'next-auth/react';

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <CartProvider>
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
