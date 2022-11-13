import Header from "../components/Header";
import Image from "next/image";
export default function fourofour() {
  return (
    <>
      <Header />
      <section>
        <div className="">
          <div className="flex flex-col w-full mb-12 text-left lg:text-center">
            <h2 className="mx-auto text-5xl text-center max-w-xl mt-8  lg:text-center font-spooky animate-pulse">
              404 You&apos;ve taken a wrong turn
            </h2>
            <p className="text-2xl max-w-xl mx-auto mt-4 text-left lg:text-center">
              Looks like you got lost in the party.
            </p>
            <Image
              className="mx-auto"
              src="./404.png"
              alt="404"
              width="500px"
              height="200px"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
