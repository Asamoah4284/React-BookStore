import { useContext, useState } from "react";
import { PostContext } from "./PostContext";
import { useNavigate } from "react-router-dom";

function Form() {
  const { setBooks } = useContext(PostContext);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function HandleFile(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    const preview = URL.createObjectURL(selectedFile);
    setPreviewUrl(preview);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  function HandleAddBook(e) {
    e.preventDefault();
    if (value.trim() === "" || !file) return;

    const newBook = {
      id: Date.now(),
      name: value,
      img: previewUrl,
    };

    setBooks((books) => [newBook, ...books]);

    setValue("");
    setFile(null);
    setPreviewUrl(null);

    navigate("/");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-5">
      <form
        onSubmit={HandleAddBook}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-700 text-center">
          Add a New Book
        </h1>

        <label
          htmlFor="bookTitle"
          className="block text-sm font-medium text-gray-700"
        >
          Name of Book
        </label>
        <input
          type="text"
          name="bookTitle"
          id="bookTitle"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter Book Title"
          required
          value={value}
          onChange={handleChange}
        />

        <label className="block mt-4 text-sm font-medium text-gray-700">
          Cover Photo
        </label>
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Selected File Preview"
            className="mt-2 mb-4 w-full h-64 object-cover rounded-md shadow-sm"
          />
        )}
        <input
          type="file"
          onChange={HandleFile}
          className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />

        <button
          type="submit"
          className="w-full mt-6 py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default Form;
