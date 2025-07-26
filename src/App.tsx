import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import LandingPage from "./pages/LandingPage"; // ✅ Add this
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";

const BookDetailsPage = lazy(() => import("./pages/BookDetailsPage"));

function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-primary text-white px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">📚 Book Explorer</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          <Link to="/explore" className="hover:text-accent">
            Search
          </Link>
          <Link to="/favorites" className="hover:text-accent">
            Favorites
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* 👈 Landing Page */}
        <Route path="/explore" element={<SearchPage />} />
        <Route
          path="/book/:id"
          element={
            <Suspense fallback={<div className="p-4 text-secondary">Loading book...</div>}>
              <BookDetailsPage />
            </Suspense>
          }
        />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
