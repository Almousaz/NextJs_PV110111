import ClientFile from "./clientFile";



export function generateMetadata(){
  return {
      title: "Home | Your Online cart",
      description: "Discover a wide range of amazing cart products.",
      openGraph: {
          title: "Home | Your Online cart Shop",
          description: "Explore top-quality cart products at your fingertips.",
      }
  }
}


export default function Cart(){

  return (
    <ClientFile />
  )
}