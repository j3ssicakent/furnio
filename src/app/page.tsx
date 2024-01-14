import Banner from "@/components/Banner";
import Collections from "@/components/Collections";
import Header from "@/components/Header";
import dining from "@/assets/images/dining.jpeg"
import living from "@/assets/images/living.jpeg"
import bedroom from "@/assets/images/bedroom.jpeg"


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
  return (
    <div className="container max-w-[1440px] mx-auto">
      <Header />
      <Banner />
      <Collections 
        title="Browse The Range"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        collections={collections}
      />
    </div>
  )
}