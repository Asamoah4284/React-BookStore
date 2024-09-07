import { createContext, useState } from "react";
import NavBar from "./NavBar";
// import { Outlet } from "react-router-dom";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import { PostContext, PostProvider } from "./PostContext";

function AppLayout() {
  //   const FakeBook = [
  //     {
  //       id: 1,
  //       name: "48 Laws of Power",
  //       img: "/images/4.jpeg",
  //     },
  //     {
  //       id: 2,
  //       name: "How to Influence People and Win Friends",
  //       img: "/images/3.png",
  //     },
  //   ];

  //   const [books, setBooks] = useState(FakeBook);
  //   console.log(books);

  return (
    // <PostContext.Provider
    //   value={{
    //     books: books,
    //     setBooks: setBooks,
    //   }}
    // >
    <PostProvider>
      <div className="bg-yellow">
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    </PostProvider>
  );
}

export default AppLayout;
