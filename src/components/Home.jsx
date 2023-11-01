import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";


const Home = () => {
    const cardData = [
        {
          id: 1,
          title: "Card 1",
          description: "Description for Card 1",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f2034fe1-6183-4d16-9b8e-628e86d95728/dcqb7nj-c429f99b-24ff-4c4a-b27d-83a6683001e3.jpg",
        },
        {
          id: 2,
          title: "Card 2",
          description: "Description for Card 2",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f2034fe1-6183-4d16-9b8e-628e86d95728/dcqb7nj-c429f99b-24ff-4c4a-b27d-83a6683001e3.jpg",
        },
        {
          id: 3,
          title: "Card 3",
          description: "Description for Card 3",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f2034fe1-6183-4d16-9b8e-628e86d95728/dcqb7nj-c429f99b-24ff-4c4a-b27d-83a6683001e3.jpg",
        },
        {
          id: 4,
          title: "Card 4",
          description: "Description for Card 4",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f2034fe1-6183-4d16-9b8e-628e86d95728/dcqb7nj-c429f99b-24ff-4c4a-b27d-83a6683001e3.jpg",
        },
        {
          id: 5,
          title: "Card 5",
          description: "Description for Card 5",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f2034fe1-6183-4d16-9b8e-628e86d95728/dcqb7nj-c429f99b-24ff-4c4a-b27d-83a6683001e3.jpg",
        },
        {
          id: 6,
          title: "Card 6",
          description: "Description for Card 6",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f2034fe1-6183-4d16-9b8e-628e86d95728/dcqb7nj-c429f99b-24ff-4c4a-b27d-83a6683001e3.jpg",
        },
      ];
    
  return (
    <>
      <Header />
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="" data-carousel-item>
            <img
              src="https://www.listchallenges.com/f/lists/63879069-2c06-4430-9345-4325152efd73.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://www.listchallenges.com/f/lists/63879069-2c06-4430-9345-4325152efd73.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://www.listchallenges.com/f/lists/63879069-2c06-4430-9345-4325152efd73.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://www.listchallenges.com/f/lists/63879069-2c06-4430-9345-4325152efd73.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://cdn4.whatculture.com/images/2022/05/324e141782011cf0-600x338.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>

        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to="/view">
              <img
                className="rounded-t-lg"
                src={card.imageUrl}
                alt="image"
              />
            </Link>
            <div className="p-5">
              <Link to="/view">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {card.description}
              </p>
              <Link
                to="/view"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover-bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default Home;
