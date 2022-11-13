import Head from "next/head";
import Link from "next/link";
export default function Header() {
  return (
    <div className="sticky top-0 bg-white z-50">
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="sticky top-0 z-50 mt-8 w-9/12 mx-auto  inline-flex pb-6 border-black ">
        <div className="  flex-1 ">
          <a href="/">
            <img
              href="/"
              src="/logo.png"
              width="200px"
              height="40px"
              className="rounded-xl left-0 relative"
            ></img>
          </a>
        </div>
        <div>
          <ul className="flex mr-4 font-sans font-light text-md tracking-wider flex-row hover:cursor-pointer ">
            <Link href="/blog">
              <li className=" p-2 rounded-md hover:text-blue-600/[.70]  border-black">
                Blog
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
