import type { NextPage } from "next";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import MainLayout from "@src/layouts/main";
import { sanityClient, urlFor } from "@/src/config/sanity";
import { Post } from "@/src/config/typings";
import { toHTML } from "@portabletext/to-html";

interface PageProps {
  post: Post;
  posts: Post[];
  title: string;
}

const PostPage: NextPage<PageProps> = ({ posts, post }) => {
  return (
    <MainLayout>
      <div className="md:max-w-[900px] mx-auto py-[30px] md:pt-[30px] pt-0">
        <div className="flex w-full flex-col items-center pb-10">
          <img
            src={urlFor(post.mainImage).url()!}
            className="h-full object-contain"
          />
        </div>
        <div className="flex flex-col items-center py-14">
          <div className="w-1/2 divide-y-2 divide-black">
            <div></div>
            <div></div>
          </div>
        </div>
        <div
          className="w-full"
          dangerouslySetInnerHTML={{
            __html: toHTML(post?.body, {
              components: {
                /* optional object of custom components to use */
              },
            }),
          }}
        ></div>
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
      </div>
    </MainLayout>
  );
};

export default PostPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const title = context?.query?.title;
  const postDetailQuery = `*[_type == "post" && slug.current=="${title}"]{
    _id,
    title,
   author -> {
      name,
      image
  },
    description,
    mainImage,
    slug,
    body
  }`;

  const postsDetail: Post[] = await sanityClient.fetch(postDetailQuery);

  const postsQuery = `*[_type == "post"]{
    _id,
    title,
   author -> {
      name,
      image
  },
    description,
    mainImage,
    slug,
    body
  }`;

  const posts: Post[] = await sanityClient.fetch(postsQuery);

  return {
    props: {
      post: postsDetail.length > 0 ? postsDetail[0] : null,
      posts,
      title,
    },
  };
};
