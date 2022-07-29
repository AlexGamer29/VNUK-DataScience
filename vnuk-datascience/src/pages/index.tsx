import type { NextPage } from "next";
import Image from "next/image";
import MainLayout from "@src/layouts/main";
import styles from "@/styles/Home.module.css";
import { sanityClient, urlFor } from "../config/sanity";
import { Post } from "../config/typings";
import Link from "next/link";
import HeaderImage from "../../public/assets/images/header.jpg";

interface Props {
  posts: [Post];
}

const Home: NextPage = ({ posts }: Props) => {
  console.log(posts);

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className="flex w-full flex-col items-center py-10">
          <Image src={HeaderImage} className="h-full object-contain"></Image>
        </div>
        <div className="flex w-full flex-col items-center p-10">
          <h1 className="text-4xl w-1/2 font-bold text-center text-vnuk-red pb-5">
            A few words about this blog platform, VNUK Data Science, and how
            this site was made
          </h1>
          <h1 className="text-xl font-normal text-center text-vnuk-blue">
            Why you choose instead of other blog websites
          </h1>
        </div>
        <div className="flex flex-col items-center py-14">
          <div className="w-1/4 divide-y-2 divide-black">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <h1 className="text-4xl w-1/2 font-bold text-center text-vnuk-red pb-10">
            All articles
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
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
                    <p className="text-2xl font-light">{post.title}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="border rounded-md drop-shadow-xl group cursor-pointer overflow-hidden">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                />
                <div className="flex justify-between p-5 bg-white">
                  <div>
                    <p className="text-2xl font-bold">{post.title}</p>
                    <p className="text-sm">
                      {post.description.slice(0, 50).concat("...")} by
                      <span className="text-red-500 hover:text-violet-800">
                        {" "}
                        {post.author.name}
                      </span>
                    </p>
                  </div>
                  <img
                    className="h-12 w-12 rounded-full"
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    src={urlFor(post.author.image).url()!}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          ))}
        </div> */}
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
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
