import { useState } from "react";
import SearchForm from "../components/SearchForm";
import BookCard from "../components/BookCard";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, Book } from "../redux/slices/favoritesSlice";
import { RootState, AppDispatch } from "../redux/store";

type SearchFormInputs = {
  title: string;
  author: string;
  genre: string;
};

const SearchPage = () => {
  const [results, setResults] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorites.books);

  const handleSearch = async (data: SearchFormInputs) => {
    setIsLoading(true);
    setSearched(true);
    let query = "";
    if (data.title) query += `intitle:${data.title}+`;
    if (data.author) query += `inauthor:${data.author}+`;
    if (data.genre) query += `${data.genre}`;

    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
      );
      const json = await res.json();

      const books: Book[] =
        json.items?.map((item: any) => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          description: item.volumeInfo.description,
          thumbnail: item.volumeInfo.imageLinks?.thumbnail,
        })) || [];

      setResults(books);
    } catch (error) {
      console.error("Error fetching books:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <SearchForm onSearch={handleSearch} />

 
      {isLoading && (
        <div className="text-center text-[#546681] mt-10 text-lg">
          🔄 Loading books...
        </div>
      )}

      {!isLoading && searched && results.length === 0 && (
        <div className="text-center mt-12 text-[#546681]">
          <h2 className="text-2xl font-semibold mb-2">No books found</h2>
          <p className="text-sm">
            Try a different title, author, or genre.
          </p>
        </div>
      )}

      {/* Results */}
      {!isLoading && results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {results.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onAddFavorite={() => dispatch(addFavorite(book))}
              isFavorite={favorites.some((b) => b.id === book.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
