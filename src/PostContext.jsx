import { createContext, useEffect, useState } from "react";

const PostContext = createContext();

function PostProvider({ children }) {
  const [reading, setReading] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/books"); // Make sure this URL is correct
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setReading(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBooks(); // <-- Make sure you are calling the function here
  }, []);


  return (
    <PostContext.Provider
      value={{
        reading: reading,
        setReading: setReading
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
export { PostContext, PostProvider };
