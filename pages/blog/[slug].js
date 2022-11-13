import { sanityClient, urlFor } from "../../sanity";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PortableText from "react-portable-text";
function Post({ post }) {
  return (
    <>
      <Header />
      <h1 className="font-inter font-extrabold text-4xl mt-10 mb-3 mx-auto">
        {post.title}
      </h1>
      <div className="mx-auto inline-flex">
        <p className="font-bold font-mono mx-4 mt-2">
          Published on:{" "}
          <span className="font-normal">{post.publishedAt.slice(0, 10)}</span>
        </p>
        <h1 className="mt-2  mx-2 font-bold">
          Written by: <span className="font-normal">{post.author.name}</span>
        </h1>
        <img
          alt="author image"
          width={50}
          height={50}
          className="rounded-full mb-2"
          src={urlFor(post.author.image).width(50).url()}
        ></img>
      </div>
      <img
        alt="blog post header image"
        width={650}
        height={350}
        className="mx-auto rounded-lg mb-10"
        src={urlFor(post.mainImage).url()}
      ></img>
      <div className=" w-1/2 mx-auto">
        <PortableText
          className="text-left first-line:uppercase first-line:tracking-widest
        first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
        first-letter:mr-3 first-letter:float-left mx-0
      "
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          content={post.body}
        />
      </div>
      <Footer />
    </>
  );
}

export default Post;
export const getStaticPaths = async () => {
  const query = `*[_type=="post"]{
        _id,
        slug {
            current
        },
    }`;
  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}; //Tells next which paths to preREnder
export const getStaticProps = async ({ params }) => {
  const query = `*[_type=="post" && slug.current == $slug][0]{
            _id,
            title,
            author->{
                name,
                image
            },
            excerpt,
            body,
            mainImage,
            lastUpdated,
            publishedAt,
            slug
        }`;
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
