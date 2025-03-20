import { env } from "@/env/env.mjs";
import Link from "next/link";


export async function generateMetadata({params}){

  const {id} = params;
  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/${id}`)
  const product = await response.json()


  return {
      title: product.title,
      description: product.description,
      openGraph: {
          title: product.title ,
          description: product.description ,
      }
  }
}

export default async function ProductDetail({params}) {

  const {id} = params;
  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/${id}`)
  const product = await response.json()

  return (
    <div className="product-detail">
      <img src={product.image} />
      <h2>{product.title}</h2>
      <h4>{product.description}</h4>
      <h5>{product.rating.rate}</h5>
      <p>{product.price}</p>

      <Link href="/">Back to shop</Link>
    </div>
  );
}
