import  { useState, useEffect } from "react";
import axios from "axios";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5&key=AIzaSyCjljsE6C-aUzP8TXG9hV9w2Yz7yjMLQ7A`
        );
        setSuggestions(response.data.items || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
      setLoading(false);
    };

    const debounce = setTimeout(fetchBooks, 300); // Debounce input
    return () => clearTimeout(debounce);
  }, [query]);

  const handleSelectBook = (book) => {
    setSelectedBook(book);
    setQuery(book.volumeInfo.title);
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      {loading && <p>Loading...</p>}

      {/* Auto-Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((book, index) => (
            <li key={index} onClick={() => handleSelectBook(book)}>
              {book.volumeInfo.title}
            </li>
          ))}
        </ul>
      )}

      {/* Display Book Details */}
      {selectedBook && (
        <div className="book-details">
          <h2>{selectedBook.volumeInfo.title}</h2>
          {selectedBook.volumeInfo.imageLinks?.thumbnail && (
            <img src={selectedBook.volumeInfo.imageLinks.thumbnail} alt="Book Cover" />
          )}
          <p><strong>Author:</strong> {selectedBook.volumeInfo.authors?.join(", ")}</p>
          <p>{selectedBook.volumeInfo.description}</p>
        </div>
      )}
    </div>
  );
};

export default BookSearch;
