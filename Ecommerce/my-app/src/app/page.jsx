
import ProductList from "@/components/ProductList";
import { env } from "@/env/env.mjs";

export function generateMetadata(){
  return {
      title: "Home | Your Online Shop",
      description: "Discover a wide range of amazing products.",
      openGraph: {
          title: "Home | Your Online Shop",
          description: "Explore top-quality products at your fingertips.",
      }
  }
}


export default async function Home() {

  const response = await fetch(env.NEXT_PUBLIC_API_URL)
  const products =  await response.json()



  return (
    
    <div className="home">
      <ProductList products={products} />

    </div>
  );
}
