import React from 'react';
import Swal from 'sweetalert2';
import Header from './Header';

const View = () => {
  const handleBookTicketsClick = () => {
    Swal.fire({
      title: 'Success',
      text: 'Successfully Booked the ticket',
      icon: 'info', // You can change this to 'success', 'error', etc.
      confirmButtonText: 'OK',
    });
  };

  return (
    <>
    <Header />

    <div className="bg-white-700 text-white py-16">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f2034fe1-6183-4d16-9b8e-628e86d95728/dcqb7nj-c429f99b-24ff-4c4a-b27d-83a6683001e3.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              onClick={handleBookTicketsClick}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Book Tickets
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
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default View;
