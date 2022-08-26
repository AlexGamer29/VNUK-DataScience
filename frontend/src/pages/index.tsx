import type { NextPage } from "next";
import Image from "next/image";
import MainLayout from "@src/layouts/main";
import { sanityClient, urlFor } from "../config/sanity";
import { Post } from "../config/typings";
import Link from "next/link";
import HomeBanner from "@/public/assets/images/home-banner.png";
interface PageProps {
  posts: Post[];
}

const Home: NextPage<PageProps> = ({ posts }) => {
  return (
    <MainLayout>
      <div className="md:max-w-[1500px] mx-auto py-[30px] md:pt-[30px] pt-0">
        <div className="flex w-full flex-col items-center pb-10">
          <Image src={HomeBanner} className="h-full object-contain"></Image>
        </div>
        <div className="flex w-full flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-black pb-5 roboto-bold">
            A few words about this blog platform, VNUK Data Science, and how
            this site was made
          </h1>
          <h1 className="text-xl font-normal text-center text-vnuk-blue roboto-regular">
            Why you choose instead of other blog websites
          </h1>
        </div>
        <div className="flex flex-col items-center py-14">
          <div className="w-full divide-y-2 divide-black">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <h1 className="text-4xl w-1/2 font-bold text-center text-black pb-10">
            All articles
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6 p-2 md:p-6">
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="drop-shadow-xl group cursor-pointer overflow-hidden">
                <img
                  className="h-80 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                />
                <div className="flex justify-center p-5">
                  <div>
                    <p className="text-xl montserrat-regular">{post.title}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
   author -> {
      name,
      image
  },
    description,
    mainImage,
    slug,
  }`;

  const posts: Post[] = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
