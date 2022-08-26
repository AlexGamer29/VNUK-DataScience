import type { NextPage } from "next";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import MainLayout from "@src/layouts/main";
import { sanityClient, urlFor } from "@/src/config/sanity";
import { Post } from "@/src/config/typings";
// import { toHTML } from "@portabletext/to-html";
import PortableText from "react-portable-text";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import { useRouter } from "next/router";

interface PageProps {
  post: Post;
  posts: Post[];
  title: string;
}

const PostPage: NextPage<PageProps> = ({ posts, post }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const router = useRouter();
  return (
    <MainLayout>
      <div className="md:max-w-[1000px] mx-auto py-[30px] md:pt-[30px] pt-0">
        <div className="flex w-full flex-col items-center pb-10">
          <img
            src={urlFor(post.mainImage).url()!}
            className="h-full object-contain"
          />
        </div>
        {/* <h1 className="font-bold text-5xl">{post.title}</h1> */}
        <div className="flex flex-col items-center pt-14 pb-5">
          <div className="w-1/2 divide-y-2 divide-black">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="flex items-center space-x-2 mb-5">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={urlFor(post.author.image).url()!}
            alt="" />
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col">
              <p className="font-bold text-sm">{post.author.name}</p>
              <p className="font-base text-sm">
                {new Date(post._createdAt).toLocaleDateString("en-US", options)}
              </p>
            </div>

            <div className="flex flex-row space-x-3">
              <FacebookShareButton url={router.asPath}>
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              <TwitterShareButton url={router.asPath}>
                <TwitterIcon size={40} round />
              </TwitterShareButton>
            </div>
          </div>
        </div>
        <div>
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="text-2xl font-bold my-5" {...props} />
              ),
              h2: (props: any) => (
                <h1 className="text-xl font-bold my-5" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-vnuk-blue hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>

        <div className="flex flex-col items-center pt-14 pb-5">
          <div className="w-1/2 divide-y-2 divide-black">
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
    _createdAt,
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
