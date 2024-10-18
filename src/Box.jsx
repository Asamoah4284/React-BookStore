import { useContext, useState } from "react";
import { PostContext } from "./PostContext";

function BookShow({ title, name, read, onDeleteItem }) {
  const [color, setColor] = useState("red");

  return (
    <div className="border w-80 ml-5 justify-center items-center">
      <div className="bg-gray-600 flex items-center px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={color ? "none" : "gold"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 m"
          onClick={() => setColor(!color)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 ml-auto my-2 mx-2 cursor-pointer"
          onClick={() => onDeleteItem(read._id)} // Call onDeleteItem with the book's ID
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <img
        className="w-full h-48 object-cover py-4 px-4"
        src={image}
        alt={name}
      />
      <p className="mr-auto text-center text-gray-800 font-semibold">{name}</p>
    </div>
  );
}

function Box() {
  const { reading, setReading } = useContext(PostContext);

  const handleDeleteItem = async (id) => { // Accept id as parameter
    if (!id) {
      console.error("Cannot delete item: ID is undefined");
      return; // Exit if ID is undefined
    }

    try {
      const response = await fetch(`http://localhost:4000/api/books/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setReading((prevBooks) => prevBooks.filter((book) => book._id !== id));
        console.log(`Book with id ${id} has been deleted`);
      } else {
        console.error('Failed to delete the book');
      }
    } catch (error) {
      console.error('Error deleting the book:', error);
    }
  };

  return (
    <div>
      <ul className="flex flex-wrap w-100 gap-5 justify-center">
        {reading && reading.map((read) => (
          <BookShow
            key={read._id} // Use the correct id as the key
            title={read.title} // Adjust this to the actual image property if available
            name={read.author}
            read={read}
            onDeleteItem={handleDeleteItem} // Pass the delete function to BookShow component

          />
        ))}
      </ul>
    </div>
  );
}

export default Box;
