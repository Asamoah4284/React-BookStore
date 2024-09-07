import { useContext } from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="bg-gray-800 ">
      <div className="flex  gap-4 py-5 px-8 ml-5 justify-between">
        <ul className="flex gap-4 text-xl">
          {/* <h1 className="text-xl">As</h1> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            />
          </svg>

          <Link to="/" className="text-gray-300 cursor-pointer">
            Home
          </Link>
          <Link to="/like" className="text-gray-300 cursor-pointer">
            Favourite
          </Link>
          <Link to="/form" className="text-gray-300 cursor-pointer">
            Catalogue
          </Link>
        </ul>
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
            />
          </svg>
          <img
            src="/images/profile.jpg"
            alt="A profile Photo"
            className=" w-7 h-7 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
