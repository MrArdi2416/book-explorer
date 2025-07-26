import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { removeFavorite } from '../redux/slices/favoritesSlice';
import BookCard from '../components/BookCard';

const FavoritesPage = () => {
  const favorites = useSelector((state: RootState) => state.favorites.books);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Favorite Books</h2>

      {favorites.length === 0 ? (
        <p className="text-secondary">No favorites yet. Go add some!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onRemoveFavorite={() => dispatch(removeFavorite(book.id))}
              isFavorite
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
