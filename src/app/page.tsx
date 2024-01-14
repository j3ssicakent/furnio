import Banner from "@/components/Banner";
import Collections from "@/components/Collections";
import Header from "@/components/Header";
import dining from "@/assets/images/dining.jpeg"
import living from "@/assets/images/living.jpeg"
import bedroom from "@/assets/images/bedroom.jpeg"
import syltherine from "@/assets/images/products/syltherine.jpeg"
import leviosa from "@/assets/images/products/leviosa.jpeg"
import lolito from "@/assets/images/products/lolito.jpeg"
import respira from "@/assets/images/products/respira.jpeg"
import Products from "@/components/Products";


export default function Home() {
  const collections = [
    {
      title: "Dining",
      image: dining.src
    },
    {
      title: "Living",
      image: living.src
    },
    {
      title: "Bedroom",
      image: bedroom.src
    }
  ]
  const products = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      image: syltherine.src,
      price: 2500,
      oldPrice: 3500
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      image: leviosa.src,
      price: 2500,
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      image: lolito.src,
      price: 7000,
      oldPrice: 14000
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      image: respira.src,
      price: 500,
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      image: lolito.src,
      price: 7000,
      oldPrice: 14000
    },
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      image: syltherine.src,
      price: 2500,
      oldPrice: 3500
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      image: respira.src,
      price: 500,
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      image: leviosa.src,
      price: 2500,
    }
  ]


  return (
    <div className="container max-w-[1440px] mx-auto bg-cream px-8">
      <Header />
      <Banner />
      <Collections 
        title="Browse The Range"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        collections={collections}
      />
      <Products
        title="Our Products"
        products={products}
      />
    </div>
  )
}