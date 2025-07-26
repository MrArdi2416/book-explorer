import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface VolumeInfo {
  title: string;
  authors?: string[];
  description?: string;
  imageLinks?: {
    thumbnail: string;
  };
  publisher?: string;
  publishedDate?: string;
}

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState<VolumeInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
      const data = await res.json();
      setBook(data.volumeInfo);
      setLoading(false);
    };
    fetchBook();
  }, [id]);

  if (loading) return <div className="p-4 text-secondary">Loading...</div>;
  if (!book) return <div className="p-4 text-red-500">Book not found.</div>;

  return (
    <div className="p-4 flex flex-col md:flex-row gap-8 bg-white rounded shadow-md">
      <img
        src={book.imageLinks?.thumbnail}
        alt={book.title}
        className="w-64 h-auto object-contain mx-auto md:mx-0"
      />
      <div>
        <h2 className="text-2xl font-bold text-primary">{book.title}</h2>
        <p className="text-secondary">By: {book.authors?.join(', ')}</p>
        <p className="mt-2 text-sm text-secondary">
          Published: {book.publishedDate} | Publisher: {book.publisher}
        </p>
        <p className="mt-4 text-base text-gray-700 whitespace-pre-line">
          {book.description || 'No description available.'}
        </p>
      </div>
    </div>
  );
};

export default BookDetailsPage;
