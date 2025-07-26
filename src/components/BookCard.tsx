import { Link } from 'react-router-dom';
import { Book } from '../redux/slices/favoritesSlice';

interface Props {
  book: Book;
  onAddFavorite?: () => void;
  onRemoveFavorite?: () => void;
  isFavorite?: boolean;
}

const BookCard: React.FC<Props> = ({ book, onAddFavorite, onRemoveFavorite, isFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
      <img src={book.thumbnail} alt={book.title} className="w-full h-60 object-contain" />
      <h2 className="text-lg font-semibold mt-2">{book.title}</h2>
      <p className="text-sm text-secondary">{book.authors?.join(', ')}</p>
      <div className="mt-2 flex justify-between items-center">
        <Link
          to={`/book/${book.id}`}
          className="text-accent font-medium underline"
        >
          Details
        </Link>
        {isFavorite ? (
          <button
            onClick={onRemoveFavorite}
            className="text-red-500 font-medium"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={onAddFavorite}
            className="text-accent font-medium"
          >
            Favorite
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
