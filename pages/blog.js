import React from "react";
import Link from "next/link";
import Moment from "moment";
import { urlFor } from "../sanity";
import { getClient } from "../sanity";
import { groq } from "next-sanity";
import Header from "../components/Header";
import { AiFillCaretDown } from "react-icons/ai";
import Footer from "../components/Footer";
export default function Blog({ post }) {
  return (
    <>
      <div className="flex-row inline-flex pt-3  place-content-center w-full h-12 bg-black">
        <div className="bg-sky-300 px-2 h-5 pt-1/2 text-center font-AzoBold rounded-lg text-blue-700 mr-4 ">
          New
        </div>
        <div className="main-text font-AzoReg text-md text-gray-100 mr-2">
          Beta Launching Soon!
        </div>
        <a
          href="/"
          className="main-text cursor-pointer font-AzoBold text-md text-blue-300"
        >
          Sign up to Join the waitlist!
        </a>
        <a href="/">
          <AiFillCaretDown
            className="mx-1 cursor-pointer rotate-90"
            color="white"
            size={23}
          />
        </a>
      </div>
      <Header />
      <div className="bg-white  flex flex-col h-screen">
        {post.map((post) => (
          <Link href={`/blog/${post.slug.current}`} key={post._id}>
            <div className="flex flex-col flex-1 p-10 my-6 cursor-pointer w-1/3 mx-auto bg-slate-200 rounded-xl shadow-md overflow-visible md:max-w-2xl">
              <h2 className="text-2xl font-bold font-mono">{post.title}</h2>
              <div className="flex-row inline-flex items-center">
                <h1 className="px-2">
                  Last Updated: {Moment(post.lastUpdated).format("DD-MM-YYYY")}
                </h1>
                <h1>Author: {post.author.name}</h1>
                <img
                  className="mx-auto rounded-full ml-2 my-2"
                  src={urlFor(post.author.image).width(50).url()}
                ></img>
              </div>
              <img
                className="rounded-md mx-auto"
                src={urlFor(post.mainImage).width(500).url()}
              ></img>
              <p
                className="first-line:uppercase first-line:tracking-widest
first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900
first-letter:float-left"
              >
                {post.excerpt.slice(0, 65)}{" "}
                <a className="underline text-blue-500">Continue...</a>
              </p>
            </div>
          </Link>
        ))}
        <Footer />
      </div>
    </>
  );
}
export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postQuery);

  return {
    props: {
      post,
    },
  };
}
const postQuery = groq`
*[_type=="post"]{
  _id,
  title,
  slug,
  excerpt,
  author->{
  name,
  image
  },
  mainImage,
  lastUpdated,
  publishedAt,
}`;
