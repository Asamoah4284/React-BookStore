import { createContext, useState } from "react";

const PostContext = createContext();

function PostProvider({ children }) {
  const FakeBook = [
    {
      id: 1,
      name: "48 Laws of Power",
      img: "/images/4.jpeg",
    },
    {
      id: 2,
      name: "How to Influence People and Win Friends",
      img: "/images/3.png",
    },
  ];

  const [books, setBooks] = useState(FakeBook);

  return (
    <PostContext.Provider
      value={{
        books: books,
        setBooks: setBooks,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
export { PostContext, PostProvider };
