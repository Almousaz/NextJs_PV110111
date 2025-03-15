'use client';

import { useEffect, useState } from 'react';

export default function ProductPage() {
    const [products, setProducts] = useState([]);
    const [newProductName, seNewProductName] = useState('');
    const [newPrice, setNewPrice] = useState('');

    function fetchProduct() {
        fetch(process.env.NEXT_PUBLIC_API_URL)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }

    function handleAddProduct() {
        fetch(process.env.NEXT_PUBLIC_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newProductName, price: newPrice }),
        })
            .then(fetchProduct)
            // .then(data => console.log(data))

            .catch((err) => console.error(err));
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div>
            <h1>Product List :</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>

            <div>
                <h2>Add new Product</h2>
                <input
                    type="text"
                    value={newProductName}
                    onChange={(e) => seNewProductName(e.target.value)}
                    placeholder="type product name ..."
                />

                <input
                    type="text"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    placeholder="type product price ..."
                />

                <button
                    onClick={() => {
                        handleAddProduct();
                        setNewPrice('');
                        seNewProductName('');
                    }}
                >
                    Add new Product
                </button>
            </div>
        </div>
    );
}
