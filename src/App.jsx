import { useState, useEffect } from "react";
import { fetchImages } from "./services/unsplashAPI";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(null);
  };

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(null);

    fetchImages(query, page)
      .then((data) => {
        if (data.results.length === 0) {
          setError("No results found!");
          setImages([]);
        } else {
          setImages((prevImages) => 
            page === 1 ? data.results : [...prevImages, ...data.results]
          );
        }
      })
      .catch(() => setError("An error occurred while loading images!"))
      .finally(() => setLoading(false));
  }, [query, page]);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage message={error} />}

      <ImageGallery images={images} onImageClick={setSelectedImage} />

      {loading && <Loader />}

      {images.length > 0 && !loading && !error && (
        <LoadMoreBtn onClick={() => setPage((prevPage) => prevPage + 1)} />
      )}

      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        image={selectedImage} 
      />
    </div>
  );
};

export default App;
