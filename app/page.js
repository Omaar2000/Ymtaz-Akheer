"use client";
// import SearchIcon from "@mui/icons-material/Search";
// import FilterListIcon from "@mui/icons-material/FilterList";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Doc from "./components/doc";
import Penbox from "./components/penbox";
import Searcher from "./components/searcher";
import Pen from "./components/pen";
import Person from "./components/person";
import Book from "./components/book";
export default function Home() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ymtaz.sa/api/client/digital-guide/categories"
        );

        if (
          response.data &&
          response.data.status &&
          response.data.data &&
          response.data.data.categories
        ) {
          const categories = response.data.data.categories;

          // Extract id and title from each category
          const extractedData = categories.map((category) => ({
            id: category.id,
            title: category.title,
          }));

          // console.log(categories[0]);
          console.log(categories);
          setRes(categories);
          // Do something with the extracted data
        } else {
          console.log("Error: Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mt-8 mb-8 text-center text-black">
        الدليل الرقمي
      </h1>

      <div className="relative flex items-center justify-center mx-auto mb-8 w-2/5">
        <div className="absolute left-3 top-1 mr-2">
          {/* <FilterListIcon color="action" fontSize="large" /> */}
          <svg
            width="22"
            height="25"
            viewBox="0 0 22 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-2 top-1 mr-2"
          >
            <path
              d="M6.9987 2.99269C6.64508 2.99269 6.30594 3.13316 6.05589 3.38321C5.80584 3.63326 5.66536 3.9724 5.66536 4.32602C5.66536 4.67964 5.80584 5.01878 6.05589 5.26883C6.30594 5.51888 6.64508 5.65935 6.9987 5.65935C7.35232 5.65935 7.69146 5.51888 7.94151 5.26883C8.19156 5.01878 8.33203 4.67964 8.33203 4.32602C8.33203 3.9724 8.19156 3.63326 7.94151 3.38321C7.69146 3.13316 7.35232 2.99269 6.9987 2.99269ZM3.22536 2.99269C3.50083 2.21198 4.01168 1.53593 4.6875 1.05774C5.36331 0.579548 6.17081 0.322754 6.9987 0.322754C7.82658 0.322754 8.63408 0.579548 9.3099 1.05774C9.98571 1.53593 10.4966 2.21198 10.772 2.99269H20.332C20.6857 2.99269 21.0248 3.13316 21.2748 3.38321C21.5249 3.63326 21.6654 3.9724 21.6654 4.32602C21.6654 4.67964 21.5249 5.01878 21.2748 5.26883C21.0248 5.51888 20.6857 5.65935 20.332 5.65935H10.772C10.4966 6.44007 9.98571 7.11611 9.3099 7.5943C8.63408 8.07249 7.82658 8.32929 6.9987 8.32929C6.17081 8.32929 5.36331 8.07249 4.6875 7.5943C4.01168 7.11611 3.50083 6.44007 3.22536 5.65935H1.66536C1.31174 5.65935 0.972604 5.51888 0.722556 5.26883C0.472507 5.01878 0.332031 4.67964 0.332031 4.32602C0.332031 3.9724 0.472507 3.63326 0.722556 3.38321C0.972604 3.13316 1.31174 2.99269 1.66536 2.99269H3.22536ZM14.9987 10.9927C14.6451 10.9927 14.3059 11.1332 14.0559 11.3832C13.8058 11.6333 13.6654 11.9724 13.6654 12.326C13.6654 12.6796 13.8058 13.0188 14.0559 13.2688C14.3059 13.5189 14.6451 13.6594 14.9987 13.6594C15.3523 13.6594 15.6915 13.5189 15.9415 13.2688C16.1916 13.0188 16.332 12.6796 16.332 12.326C16.332 11.9724 16.1916 11.6333 15.9415 11.3832C15.6915 11.1332 15.3523 10.9927 14.9987 10.9927ZM11.2254 10.9927C11.5008 10.212 12.0117 9.53593 12.6875 9.05774C13.3633 8.57955 14.1708 8.32275 14.9987 8.32275C15.8266 8.32275 16.6341 8.57955 17.3099 9.05774C17.9857 9.53593 18.4966 10.212 18.772 10.9927H20.332C20.6857 10.9927 21.0248 11.1332 21.2748 11.3832C21.5249 11.6333 21.6654 11.9724 21.6654 12.326C21.6654 12.6796 21.5249 13.0188 21.2748 13.2688C21.0248 13.5189 20.6857 13.6594 20.332 13.6594H18.772C18.4966 14.4401 17.9857 15.1161 17.3099 15.5943C16.6341 16.0725 15.8266 16.3293 14.9987 16.3293C14.1708 16.3293 13.3633 16.0725 12.6875 15.5943C12.0117 15.1161 11.5008 14.4401 11.2254 13.6594H1.66536C1.31174 13.6594 0.972604 13.5189 0.722556 13.2688C0.472507 13.0188 0.332031 12.6796 0.332031 12.326C0.332031 11.9724 0.472507 11.6333 0.722556 11.3832C0.972604 11.1332 1.31174 10.9927 1.66536 10.9927H11.2254ZM6.9987 18.9927C6.64508 18.9927 6.30594 19.1332 6.05589 19.3832C5.80584 19.6333 5.66536 19.9724 5.66536 20.326C5.66536 20.6796 5.80584 21.0188 6.05589 21.2688C6.30594 21.5189 6.64508 21.6594 6.9987 21.6594C7.35232 21.6594 7.69146 21.5189 7.94151 21.2688C8.19156 21.0188 8.33203 20.6796 8.33203 20.326C8.33203 19.9724 8.19156 19.6333 7.94151 19.3832C7.69146 19.1332 7.35232 18.9927 6.9987 18.9927ZM3.22536 18.9927C3.50083 18.212 4.01168 17.5359 4.6875 17.0577C5.36331 16.5795 6.17081 16.3228 6.9987 16.3228C7.82658 16.3228 8.63408 16.5795 9.3099 17.0577C9.98571 17.5359 10.4966 18.212 10.772 18.9927H20.332C20.6857 18.9927 21.0248 19.1332 21.2748 19.3832C21.5249 19.6333 21.6654 19.9724 21.6654 20.326C21.6654 20.6796 21.5249 21.0188 21.2748 21.2688C21.0248 21.5189 20.6857 21.6594 20.332 21.6594H10.772C10.4966 22.4401 9.98571 23.1161 9.3099 23.5943C8.63408 24.0725 7.82658 24.3293 6.9987 24.3293C6.17081 24.3293 5.36331 24.0725 4.6875 23.5943C4.01168 23.1161 3.50083 22.4401 3.22536 21.6594H1.66536C1.31174 21.6594 0.972604 21.5189 0.722556 21.2688C0.472507 21.0188 0.332031 20.6796 0.332031 20.326C0.332031 19.9724 0.472507 19.6333 0.722556 19.3832C0.972604 19.1332 1.31174 18.9927 1.66536 18.9927H3.22536Z"
              fill="#B0B0B0"
            />
          </svg>
        </div>
        <input
          type="text"
          className="border border-gray-400 rounded focus:outline-none focus:border-blue-500  py-2 pl-12 pr-8 w-full"
        />
        <svg
          width="34"
          height="35"
          viewBox="0 0 34 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-2 flex items-center justify-center pl-2"
        >
          <ellipse
            cx="14.8378"
            cy="14.8295"
            rx="13.8378"
            ry="13.5035"
            stroke="#B0B0B0"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.3516 24.8862L33.0002 33.326"
            stroke="#B0B0B0"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="mb-16 grid grid-cols-1 w-1/2 mx-auto md:grid-cols-3 gap-4 ">
        {/* <div className="bg-white box p-4 text-center flex flex-col justify-center items-center rounded-l-xl rounded-r-xl">
          <div className="p-6 rounded-full mb-6 shadow-md iconBox">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.9495 1.78324C22.2264 0.504455 24.2974 0.50367 25.5752 1.78149L31.3476 7.55386C32.6145 8.82078 32.6276 10.8718 31.3771 12.1549L27.5201 16.1121L17.0733 5.66533L20.9495 1.78324ZM15.3394 7.40193L25.8071 17.8697L12.5961 31.4243C11.6726 32.3717 10.4061 32.906 9.08366 32.9059L2.79693 32.9056C1.40167 32.9056 0.287407 31.7425 0.346088 30.3474L0.613907 23.9802C0.665603 22.7512 1.17641 21.5863 2.04526 20.7162L15.3394 7.40193ZM33.1498 33.9914C33.8272 33.9914 34.3764 33.4418 34.3764 32.7639C34.3764 32.086 33.8272 31.5364 33.1498 31.5364H21.1772C20.4998 31.5364 19.9506 32.086 19.9506 32.7639C19.9506 33.4418 20.4998 33.9914 21.1772 33.9914H33.1498Z"
                fill="#DDB762"
              />
            </svg>
          </div>

          <h2 className="text-xl font-semibold mb-4">{res.title}</h2>
          <h6 className="text-sm">متوفر عدد {res.id}</h6>
        </div> */}
        {res.map((category) => {
          return (
            <Link
              className="bg-white box p-4 text-center flex flex-col justify-center items-center rounded-l-xl rounded-r-xl"
              href="/lawyers"
            >
              {category.id % 6 == "1" && <Doc />}
              {category.id % 6 == "2" && <Person />}
              {category.id % 6 == "3" && <Pen />}
              {category.id % 6 == "4" && <Book />}
              {category.id % 6 == "5" && <Penbox />}
              {category.id % 6 == "0" && <Searcher />}
              <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
              <h6 className="text-sm">متوفر عدد {category.lawyers_count}</h6>
            </Link>
          );
        })}

        {/* <div className="bg-white box p-4 text-center flex flex-col justify-center items-center rounded-l-xl rounded-r-xl">
          <div className="p-6 rounded-full mb-6 shadow-md iconBox">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.9495 1.78324C22.2264 0.504455 24.2974 0.50367 25.5752 1.78149L31.3476 7.55386C32.6145 8.82078 32.6276 10.8718 31.3771 12.1549L27.5201 16.1121L17.0733 5.66533L20.9495 1.78324ZM15.3394 7.40193L25.8071 17.8697L12.5961 31.4243C11.6726 32.3717 10.4061 32.906 9.08366 32.9059L2.79693 32.9056C1.40167 32.9056 0.287407 31.7425 0.346088 30.3474L0.613907 23.9802C0.665603 22.7512 1.17641 21.5863 2.04526 20.7162L15.3394 7.40193ZM33.1498 33.9914C33.8272 33.9914 34.3764 33.4418 34.3764 32.7639C34.3764 32.086 33.8272 31.5364 33.1498 31.5364H21.1772C20.4998 31.5364 19.9506 32.086 19.9506 32.7639C19.9506 33.4418 20.4998 33.9914 21.1772 33.9914H33.1498Z"
                fill="#DDB762"
              />
            </svg>
          </div>

          <h2 className="text-xl font-semibold mb-4">موثق</h2>
          <h6 className="text-sm">متوفر عدد 17</h6>
        </div>
        <div className="bg-white box p-4 text-center flex flex-col justify-center items-center rounded-l-xl rounded-r-xl">
          <div className="p-6 rounded-full mb-6 shadow-md iconBox">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.9495 1.78324C22.2264 0.504455 24.2974 0.50367 25.5752 1.78149L31.3476 7.55386C32.6145 8.82078 32.6276 10.8718 31.3771 12.1549L27.5201 16.1121L17.0733 5.66533L20.9495 1.78324ZM15.3394 7.40193L25.8071 17.8697L12.5961 31.4243C11.6726 32.3717 10.4061 32.906 9.08366 32.9059L2.79693 32.9056C1.40167 32.9056 0.287407 31.7425 0.346088 30.3474L0.613907 23.9802C0.665603 22.7512 1.17641 21.5863 2.04526 20.7162L15.3394 7.40193ZM33.1498 33.9914C33.8272 33.9914 34.3764 33.4418 34.3764 32.7639C34.3764 32.086 33.8272 31.5364 33.1498 31.5364H21.1772C20.4998 31.5364 19.9506 32.086 19.9506 32.7639C19.9506 33.4418 20.4998 33.9914 21.1772 33.9914H33.1498Z"
                fill="#DDB762"
              />
            </svg>
          </div>

          <h2 className="text-xl font-semibold mb-4">مأذون أنكحة</h2>
          <h6 className="text-sm">متوفر عدد 17</h6>
        </div>
        <div className="bg-white box p-4 text-center flex flex-col justify-center items-center rounded-l-xl rounded-r-xl">
          <div className="p-6 rounded-full mb-6 shadow-md iconBox">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.9495 1.78324C22.2264 0.504455 24.2974 0.50367 25.5752 1.78149L31.3476 7.55386C32.6145 8.82078 32.6276 10.8718 31.3771 12.1549L27.5201 16.1121L17.0733 5.66533L20.9495 1.78324ZM15.3394 7.40193L25.8071 17.8697L12.5961 31.4243C11.6726 32.3717 10.4061 32.906 9.08366 32.9059L2.79693 32.9056C1.40167 32.9056 0.287407 31.7425 0.346088 30.3474L0.613907 23.9802C0.665603 22.7512 1.17641 21.5863 2.04526 20.7162L15.3394 7.40193ZM33.1498 33.9914C33.8272 33.9914 34.3764 33.4418 34.3764 32.7639C34.3764 32.086 33.8272 31.5364 33.1498 31.5364H21.1772C20.4998 31.5364 19.9506 32.086 19.9506 32.7639C19.9506 33.4418 20.4998 33.9914 21.1772 33.9914H33.1498Z"
                fill="#DDB762"
              />
            </svg>
          </div>

          <h2 className="text-xl font-semibold mb-4">ناظر وقف</h2>
          <h6 className="text-sm">متوفر عدد 17</h6>
        </div>
        <div className="bg-white box p-4 text-center flex flex-col justify-center items-center rounded-l-xl rounded-r-xl">
          <div className="p-6 rounded-full mb-6 shadow-md iconBox">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.9495 1.78324C22.2264 0.504455 24.2974 0.50367 25.5752 1.78149L31.3476 7.55386C32.6145 8.82078 32.6276 10.8718 31.3771 12.1549L27.5201 16.1121L17.0733 5.66533L20.9495 1.78324ZM15.3394 7.40193L25.8071 17.8697L12.5961 31.4243C11.6726 32.3717 10.4061 32.906 9.08366 32.9059L2.79693 32.9056C1.40167 32.9056 0.287407 31.7425 0.346088 30.3474L0.613907 23.9802C0.665603 22.7512 1.17641 21.5863 2.04526 20.7162L15.3394 7.40193ZM33.1498 33.9914C33.8272 33.9914 34.3764 33.4418 34.3764 32.7639C34.3764 32.086 33.8272 31.5364 33.1498 31.5364H21.1772C20.4998 31.5364 19.9506 32.086 19.9506 32.7639C19.9506 33.4418 20.4998 33.9914 21.1772 33.9914H33.1498Z"
                fill="#DDB762"
              />
            </svg>
          </div>

          <h2 className="text-xl font-semibold mb-4">باحث قانوني</h2>
          <h6 className="text-sm">متوفر عدد 17</h6>
        </div> */}
      </div>
    </>
  );
}
