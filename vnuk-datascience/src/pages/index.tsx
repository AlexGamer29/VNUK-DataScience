import type { NextPage } from "next";
import MainLayout from "@src/layouts/main";
import styles from "@/styles/Home.module.css";
import { sanityClient, urlFor } from "../config/sanity"
import { Post } from "../config/typings";
import Link from "next/link";

interface Props {
  posts: [Post],
}

const Home: NextPage = ({ posts }: Props) => {
  console.log(posts);

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
          {posts.map(post => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="border rounded-md drop-shadow-xl group cursor-pointer overflow-hidden">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  src={urlFor(post.mainImage).url()!}
                  alt="" />
                <div className="flex justify-between p-5 bg-white">
                  <div>
                    <p className="text-2xl font-bold">{post.title}</p>
                    <p className="text-sm">{post.description} by
                      <span className="text-red-500 hover:text-violet-800"> {post.author.name}</span>
                    </p>
                  </div>
                  <img
                    className="h-12 w-12 rounded-full"
                    src={urlFor(post.author.image).url()!} alt="" />
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
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  }
}
