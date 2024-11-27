import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const createBook = async (title) => {
    let response = {};
    try {
      response = await axios.post("http://localhost:3001/books", {
        title: title,
      });
    } catch (error) {
      console.log("there was an error while making api call!!!");
    }

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      const updatedBooks = books.filter((book) => {
        return book.id !== id;
      });
      setBooks(updatedBooks);
    } catch (error) {
      console.log("there was an error while deleting a book!!");
    }
  };

  const editBookById = async (id, newTitle) => {
    try {
      const response = await axios.put(`http://localhost:3001/books/${id}`, {
        title: newTitle,
      });
      const updatedBooks = books.map((book) => {
        if (book.id === id) {
          // book.title = newTitle;
          return { ...book, ...response.data };
        }
        return book;
      });
      setBooks(updatedBooks);
    } catch (error) {
      console.log("there was an error when edit api called!!");
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/books");
      console.log("all the books are fetched and response is ", response);
      setBooks(response.data);
    } catch (error) {
      console.log("there was an error calling fetch Books api!!");
    }
  };

  const valueToShare = {
    books,
    createBook,
    deleteBookById,
    editBookById,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
