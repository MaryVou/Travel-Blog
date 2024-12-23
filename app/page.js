"use client";

import Card from "./components/Card";
import { useState, useEffect } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      photo:
        "https://plus.unsplash.com/premium_photo-1680721310107-46b29d3b1d7f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVkYXBlc3R8ZW58MHx8MHx8fDA%3D",
      title: "Budapest",
      description: "Budapest was nice...",
    },
    {
      id: 2,
      photo:
        "https://www.agoda.com/wp-content/uploads/2024/04/Featured-image-Scenic-Prague-panorama-with-Hradcany-castle-and-Vltava-river-in-spring-Czech-Republic-1244x700.jpg",
      title: "Prague",
      description: "Prague was nice...",
    },
    {
      id: 3,
      photo:
        "https://media.cntraveler.com/photos/591f1c7d1f187a2af3dedef0/master/w_1920%2Cc_limit/barcelona-park-guell-GettyImages-512152500.jpg",
      title: "Barcelona",
      description: "Barcelona was nice...",
    },
    {
      id: 4,
      photo:
        "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F80352cd4-d2fd-46cf-ba88-aa7d32bf1442.jpg?crop=1564%2C880%2C318%2C0&resize=1500",
      title: "Vienna",
      description: "Vienna was nice...",
    },
  ]);

  return (
    <main className="flex flex-col gap-8 row-start-2 sm:items-start font-mono m-2">
      <div className="flex flex-row w-full mb-4 p-4">
        <div className="basis-2/6">
          <h1 className="sm:text-4xl xs:text-xl font-bold">
            <a href="#">Travel Blog</a>
          </h1>
        </div>
        <div className="basis-3/6">
          <div className="md:hidden justify-self-end w-full">
            <button
              type="button"
              data-collapse-target="collapse"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="relative w-full md:block hidden place-self-center">
            <form>
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search anything..."
                className="bg-slate-100 p-4 rounded-lg w-4/5 pl-10 focus:outline-none focus:ring-1 focus:ring-slate-500"
              ></input>
            </form>
          </div>
        </div>
        <div className="basis-1/6 items-center justify-between hidden w-full md:flex md:w-auto mr-10">
          <div>
            <a href="#" className="font-bold focus:font-bold hover:font-bold">
              Home
            </a>
          </div>
          <div>
            <a href="#" className="focus:font-bold hover:font-bold">
              Post
            </a>
          </div>
          <div>
            <a href="#" className="focus:font-bold hover:font-bold">
              About
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full" data-collapse="collapse">
        <div
          className="items-center justify-between md:hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search anything..."
            />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Post
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full m-5">
        <div className="w-1/6">
          <h2 className="text-2xl mb-2">View by country</h2>
          <ul>
            <li>
              <a href="#" className="focus:font-bold hover:font-bold">
                Greece
              </a>
            </li>
            <li>
              <a href="#" className="focus:font-bold hover:font-bold">
                Hungary
              </a>
            </li>
          </ul>
        </div>
        <div className="w-5/6 mr-10 items-stretch z-10 place-content-center justify-between font-mono text-sm">
          <div className="grid grid-cols-3 gap-4 m-2 items-center">
            {blogs.length > 0 ? (
              blogs.map((b) => (
                <Card
                  photo={b.photo}
                  title={b.title}
                  description={b.description}
                ></Card>
              ))
            ) : (
              <p>No blogs yet</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
