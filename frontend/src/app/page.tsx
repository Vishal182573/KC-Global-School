import { HeroCarousel } from "@/components/shared/HeroCarousel";
import { CHAIRMEN } from "../../public";
import SchoolIntroduction from "@/components/shared/SchoolIntroPreview";
import PeopleInfo from "@/components/shared/PeopleInfo";
import Notifications from "@/components/shared/Notifications";
import Gallery from "@/components/shared/Gallery";
import VideoPreview from "@/components/shared/Video";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  const people = [
    {
      imageSrc: CHAIRMEN,
      imageAlt: "Chairman",
      title: "Chairman Message",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptate nisi ab quae nemo exercitationem. Fugit maxime officiis cumque consectetur laudantium praesentium? Inventore assumenda possimus in minima omnis, numquam dolorum ipsa! Consequatur voluptates doloremque error facilis ex tempore! Autem sed nostrum officiis quia alias, minima praesentium possimus quam natus, cupiditate iste et impedit laboriosam suscipit, provident placeat at voluptatem recusandae! Repellat cupiditate iure dolorum nulla quae assumenda autem, molestiae nemo harum nam! Similique, animi blanditiis quod laborum optio earum beatae.",
      name: "Mr. Ram Kumar Mavi",
      designation: "Chairman, Gyan Jyoti Public School",
      reverse: false
    },
    {
      imageSrc: CHAIRMEN,
      imageAlt: "Principal",
      title: "Principal Message",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio esse harum ad dolore ea fugit rerum ducimus perspiciatis dolorem, itaque architecto, veniam ipsa tenetur ut. Delectus eum optio vero eius dolor rerum ullam, reprehenderit explicabo? Temporibus nam a eius dignissimos impedit, at molestias. Saepe voluptatibus quam reprehenderit ab soluta itaque inventore minus iste atque aut delectus odit suscipit possimus corporis pariatur in aspernatur, asperiores vel. Expedita perferendis ipsa, recusandae praesentium voluptates quam molestias debitis tempora alias. Odit, adipisci dicta.",
      name: "Ms. Priya Sharma",
      designation: "Principal, Gyan Jyoti Public School",
      reverse: true
    }
  ];
  return (
    <div className="w-full overflow-x-hidden">
      <main className="px-4">
        <HeroCarousel images={["https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200", "https://via.placeholder.com/400x200"]} />
        <SchoolIntroduction />
        <PeopleInfo people={people} />
        <div className="p-4 grid gap-4 grid-cols-1 lg:grid-cols-3">
          <Notifications/>
          <Gallery/>
          <VideoPreview/>
        </div>
        <Testimonials/>
      </main>
    </div>
  );
}