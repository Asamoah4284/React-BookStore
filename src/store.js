// // import { createStore } from "redux";

// // const initialState = {
// //   loan: 0,
// //   balance: 0,
// //   loanPurpose: "",
// // };

// // function reducer(state = initialState, action) {
// //   switch (action.type) {
// //     case "account/deposit":
// //       return { ...state, balance: state.balance + action.payload };
// //     case "account/withdraw":
// //       return { ...state, balance: state.balance - action.payload };
// //     case "account/requestLoan":
// //       if (state.loan > 0) return state;

// //       //   later
// //       return { ...state, loan: action.payload };
// //     case "account/payLoan":
// //       return {
// //         ...state,
// //         loan: 0,
// //         loanPurpose: "",
// //         balance: state.balance - state.loan,
// //       };
// //   }
// // }

// // const store = createStore(reducer);
// // store.dispatch({ type: "account/deposit", payload: 500 });
// // console.log(store.getState());
// // store.dispatch({ type: "account/withdraw", payload: 200 });
// // console.log(store.getState());


// import { useContext, useState } from "react";
// import { PostContext } from "./PostContext";
// import { useNavigate } from "react-router-dom";

// function Form() {
//   const { setReading } = useContext(PostContext); // Access setReading from context
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [year, setYear] = useState('');
//   const [error, setError] = useState(null);
//   const [file, setFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   function HandleFile(event) {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);

//     const preview = URL.createObjectURL(selectedFile);
//     setPreviewUrl(preview);
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const book = { title, author, year };

//     try {
//       const response = await fetch('http://localhost:4000/api/books/', {
//         method: 'POST',
//         body: JSON.stringify(book),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const json = await response.json();
//       if (!response.ok) {
//         setError(json.error);
//       } else {
//         setReading((prevBooks) => [...prevBooks, json]); // Add the new book to the list
//         setTitle('');
//         setAuthor('');
//         setYear('');
//         setError(null);
//         console.log('New book added', json);
//         navigate('/'); // Redirect to the homepage on successful book addition
//       }
//     } catch (error) {
//       console.error('Error adding book:', error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-5">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
//       >
//         <h1 className="text-2xl font-bold mb-6 text-gray-700 text-center">
//           Add a New Book
//         </h1>

//         <label htmlFor="bookTitle" className="block text-sm font-medium text-gray-700">
//           Name of Book
//         </label>
//         <input
//           type="text"
//           name="bookTitle"
//           id="bookTitle"
//           className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           placeholder="Enter Book Title"
//           required
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <label htmlFor="bookAuthor" className="block text-sm font-medium text-gray-700">
//           Author of Book
//         </label>
//         <input
//           type="text"
//           name="bookAuthor"
//           id="bookAuthor"
//           className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           placeholder="Enter Book Author"
//           required
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />

//         <label htmlFor="bookYear" className="block text-sm font-medium text-gray-700">
//           Year of Publication
//         </label>
//         <input
//           type="text"
//           name="bookYear"
//           id="bookYear"
//           className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           placeholder="Enter Year of Publication"
//           required
//           value={year}
//           onChange={(e) => setYear(e.target.value)}
//         />

// <label className="block mt-4 text-sm font-medium text-gray-700">
//           Cover Photo
//         </label>
//         {previewUrl && (
//           <img
//             src={previewUrl}
//             alt="Selected File Preview"
//             className="mt-2 mb-4 w-full h-64 object-cover rounded-md shadow-sm"
//           />
//         )}
//         <input
//           type="file"
//           onChange={HandleFile}
//           className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
//         />

//         <button
//           type="submit"
//           className="w-full mt-6 py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Add Book
//         </button>
//         {error && <div className="text-red-500 mt-4">{error}</div>}
//       </form>
//     </div>
//   );
// }

// export default Form;
