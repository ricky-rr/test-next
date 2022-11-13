import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AiFillCaretDown } from "react-icons/ai";
import axios from "axios";
export default function Homepage() {
  useEffect(() => {
    const formCompleted = localStorage.getItem("formCompleted");
    if (formCompleted) {
      setFormData({ ...formData, formCompleted: formCompleted });
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    formCompleted: false,
  });
  async function handleFormSubmission(evt) {
    evt.preventDefault();
    try {
      await axios
        .post("/api/mailinglist", { formData })
        .then((res) => res.json)
        .catch((err) => console.log(err));
      setFormData({ ...formData, formCompleted: true });
      localStorage.setItem("formCompleted", true);
    } catch (e) {
      console.log(e.response.data.error);
    }
  }
  function handleFormChange(evt) {
    const value = evt.target.value;
    setFormData({
      ...formData,
      [evt.target.name]: value,
    });
  }
  return (
    <>
      <Head>
        <title>Finalcrop - Quick & easy picture generation - [Takes 3s]</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex-row inline-flex pt-3  place-content-center w-full h-12 bg-black">
        <div className="bg-sky-300 px-2 h-5 pt-1/2 text-center font-AzoBold font- rounded-lg text-blue-700 mr-4 ">
          New
        </div>
        <div className="main-text font-AzoReg text-md text-gray-100 mr-2">
          Beta Launching Soon!
        </div>
        <a className="main-text cursor-pointer font-AzoBold text-md text-blue-300">
          Sign up to Join the waitlist!
        </a>
        <AiFillCaretDown
          className="mx-1 cursor-pointer"
          color="white"
          size={23}
        />
        <></>
      </div>
      <Header />
      <div className="w-9/12 flex flex-col justify-center mt-4 text-6xl text-white font-EuclidBold mx-auto text-center rounded-3xl bg-black h-60">
        Generate awesome content in seconds!
      </div>
      <div className="mt-8 w-1/2 mx-auto">
        <div className="absolute text-4xl ml-12 w-1/4 text-center mt-4 text-black font-EuclidSemibold">
          Turn this
        </div>
        <img
          className="rounded-3xl"
          src="./homepage/image-upload-example-dog.png"
        ></img>
      </div>
      <div className="mt-8  mx-auto text-4xl w-1/4 text-center  text-black font-EuclidSemibold">
        To this
      </div>
      <div className=" mx-auto w-9/12 mt-8 columns-4">
        <img
          className="rounded-3xl my-8"
          src="./homepage/blog-templates-example.png"
        ></img>
        <div className="bg-black w-1/2 font-semibold mx-auto text-white text-lg rounded-3xl">
          Blog Headers
        </div>
        <img
          className="rounded-3xl my-8"
          src="./homepage/e-commerce-templates-example.png"
        ></img>
        <div className="bg-black w-1/2 font-semibold mx-auto text-white text-lg rounded-3xl">
          Product Pages
        </div>
        <img
          alt="other templates examples"
          className="rounded-3xl my-8"
          src="./homepage/other-templates-example.png"
        ></img>
        <div className="bg-black w-1/2 font-semibold mx-auto text-white text-lg rounded-3xl">
          Profile Pictures
        </div>
        <div className="flex flex-col h-9/12 w-1/2 mx-auto ">
          <img
            className="rounded-3xl my-8"
            src="./homepage/meme-generator-example-dog.png"
          ></img>
          <div className="bg-black px-4 font-semibold mx-auto text-white text-lg rounded-3xl">
            Memes
          </div>
        </div>
        <img
          className="rounded-3xl my-8"
          src="./homepage/reels-example.png"
        ></img>
        <div className="bg-black w-1/3 font-semibold mx-auto text-white text-lg rounded-3xl">
          Stories
        </div>
        <img
          className="rounded-3xl my-8"
          src="./homepage/instagram-template-example.png"
        ></img>
        <div className="bg-black w-3/5 font-semibold mx-auto text-white text-lg rounded-3xl">
          Instagram Posts
        </div>
        <img
          className="rounded-3xl my-8"
          src="./homepage/youtube-banners-templates-example.png"
        ></img>
        <div className="bg-black w-3/5 font-semibold mx-auto text-white text-lg rounded-3xl">
          Youtube Banners
        </div>
      </div>
      <div className="mt-8  mx-auto text-4xl w-1/4 text-center  text-black font-EuclidSemibold">
        All within a few clicks!
      </div>
      <div className="w-9/12 mt-20 mb-16 p-20 mx-auto rounded-3xl bg-black">
        <div className="text-white -pt-12 text-6xl  font-EuclidSemibold">
          Join the waitlist now!
        </div>
        <form
          onSubmit={handleFormSubmission}
          className="bg-white mx-auto py-8 mt-12 rounded-3xl w-1/2 h-auto"
        >
          <div className="font-EuclidBold w-8/12 mx-auto text-3xl">
            Name:{" "}
            <input
              onChange={handleFormChange}
              name="name"
              placeholder="Jack Lee"
              className="border-gray-700 mx-auto bg-sky-100 w-1/2 font-EuclidReg border rounded-lg p-2 outline-none"
              type="name"
              required
            ></input>
          </div>
          <div className="mt-4 font-EuclidBold w-11/12 mx-auto text-3xl">
            Email:{" "}
            <input
              required
              name="email"
              onChange={handleFormChange}
              placeholder="jack@email.com"
              className="border-gray-700 bg-sky-100  w-3/5 font-EuclidReg border rounded-lg p-2 outline-none"
              type="email"
            ></input>
          </div>

          <input
            value="Submit"
            type="submit"
            className="bg-sky-300 text-gray-700 cursor-pointer rounded-3xl text-2xl  font-EuclidReg p-3 mb-4 w-1/4 mx-auto mt-4"
          ></input>
          {formData.formCompleted && (
            <div>Your details have been registered, stay tuned!</div>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
}
