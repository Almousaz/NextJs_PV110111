async function fetchProducts() {
  let res = await fetch('https://fakestoreapi.com/products');
  let data = await res.json();
  return data;
}

export default async function ServerComponent() {
  let products = await fetchProducts();

  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.title} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
