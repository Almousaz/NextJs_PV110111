
import ProductList from "@/components/ProductList";
import { env } from "@/env/env.mjs";




export default async function Home() {

  const response = await fetch(env.NEXT_PUBLIC_API_URL)
  const products =  await response.json()



  return (
    
    <div className="home">
      <ProductList products={products} />

    </div>
  );
}
