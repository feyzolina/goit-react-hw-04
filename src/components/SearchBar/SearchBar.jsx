import { useState } from "react";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSubmit(searchTerm);
    setSearchTerm("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
