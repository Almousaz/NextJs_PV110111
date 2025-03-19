// 'use client';

import '../styles/globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CartProvider from '@/context/CartContext';

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
