import { useForm } from 'react-hook-form';

type SearchFormInputs = {
  title: string;
  author: string;
  genre: string;
};

interface Props {
  onSearch: (query: SearchFormInputs) => void;
}

const SearchForm: React.FC<Props> = ({ onSearch }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<SearchFormInputs>();

  const onSubmit = (data: SearchFormInputs) => {
    const { title, author, genre } = data;
    if (!title && !author && !genre) {
      setError('title', { message: 'At least one field is required' });
      setError('author', { message: '' });
      setError('genre', { message: '' });
      return;
    }
    clearErrors();
    onSearch(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-4 rounded shadow-md">
      <div>
        <input
          type="text"
          placeholder="Title"
          {...register('title')}
          className="input"
        />
        {errors.title?.message && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Author"
          {...register('author')}
          className="input"
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Genre / Keyword"
          {...register('genre')}
          className="input"
        />
      </div>

      <button
        type="submit"
        className="bg-accent text-white px-4 py-2 rounded hover:bg-primary transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
