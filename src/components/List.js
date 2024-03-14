// List.js
import React, { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { AiOutlinePlayCircle, AiOutlineSearch } from "react-icons/ai";
import YouTube from 'react-youtube';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

const List = ({ title, param }) => {
  const [list, setList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isPlaying, setPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // New state to track selected movie
  const navigate = useNavigate(); // Use useNavigate to navigate between routes

  useEffect(() => {
    fetchData(param).then((res) => {
      setList(res.data.results);
      setFilteredMovies(res.data.results);
    });
  }, [param]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (item) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === item.id)
        ? prevFavorites.filter((fav) => fav.id !== item.id)
        : [...prevFavorites, item]
    );
  };

  const handlePlayVideo = () => {
    setPlaying(true);
  };

  const handleCloseClick = () => {
    setPlaying(false);
  };

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = list.filter((movie) => 
      movie.title.toLowerCase().includes(searchTerm)
    );
    setFilteredMovies(filtered);
  };

  const handleNowTrendingClick = () => {
    navigate('/trending');
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="list">
      <div className="row">
        <h2 className="text-white title">{title}</h2>
        <Link to="/trending" onClick={handleNowTrendingClick}>
          Now Trending
        </Link>
        <div className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchInputChange}
            placeholder="Search..."
          />
          <AiOutlineSearch className="search-icon" />
        </div>
        <div className="col">
          <div className="row__posters">
            {filteredMovies.map((item) => (
              <div key={item.id} className="row__poster-container" onClick={() => handleMovieClick(item)}>
                <img
                  className="row__poster row__posterLarge"
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                />
                <div className="movie-name">{item.title}</div>
                <div
                  key={`fav_${item.id}`}
                  className="favorite-icon"
                  onClick={() => handleToggleFavorite(item)}
                >
                  {favorites.some((fav) => fav.id === item.id) ? (
                    <IoHeart />
                  ) : (
                    <IoHeartOutline />
                  )}
                </div>
                <div className="rating">{item.vote_average}</div>
                {!isPlaying && (
                  <div
                    className="play-button"
                    onClick={handlePlayVideo}
                  >
                    <AiOutlinePlayCircle />
                  </div>
                )}
                {isPlaying && (
                  <div className="video-player">
                    <button className="close-button btn btn-outline-dark" onClick={handleCloseClick}>
                      Close
                    </button>
                    <YouTube videoId="d9MyW72ELq0" opts={{}} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedMovie && (
        <div className="movie-info-popup">
          <div className="movie-info">
            <h3>{selectedMovie.title}</h3>
            <p>{selectedMovie.overview}</p>
            <button onClick={() => setSelectedMovie(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;


// import React, { useEffect, useState } from "react";
// import { fetchData } from "../api/api";
// import { IoHeartOutline, IoHeart } from "react-icons/io5";
// import { AiOutlinePlayCircle, AiOutlineSearch } from "react-icons/ai";
// import YouTube from 'react-youtube';
// import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

// const List = ({ title, param }) => {
//   const [list, setList] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [isPlaying, setPlaying] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null); // New state to track selected movie
//   const navigate = useNavigate(); // Use useNavigate to navigate between routes

//   useEffect(() => {
//     fetchData(param).then((res) => {
//       setList(res.data.results);
//       setFilteredMovies(res.data.results);
//     });
//   }, [param]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const handleToggleFavorite = (item) => {
//     setFavorites((prevFavorites) =>
//       prevFavorites.some((fav) => fav.id === item.id)
//         ? prevFavorites.filter((fav) => fav.id !== item.id)
//         : [...prevFavorites, item]
//     );
//   };

//   const handlePlayVideo = () => {
//     setPlaying(true);
//   };

//   const handleStopVideo = () => {
//     setPlaying(false);
//   };

//   const handleCloseClick = () => {
//     setPlaying(false);
//   };

//   const handleSearchInputChange = (e) => {
//     const searchTerm = e.target.value.toLowerCase();
//     setSearchTerm(searchTerm);

//     const filtered = list.filter((movie) => 
//       movie.title.toLowerCase().includes(searchTerm)
//     );
//     setFilteredMovies(filtered);
//   };

//   const handleNowTrendingClick = () => {
//     navigate('/trending');
//   };

//   const handleMovieClick = (movie) => {
//     setSelectedMovie(movie);
//   };

//   return (
//     <div className="list">
//       <div className="row">
//         <h2 className="text-white title">{title}</h2>
//         <Link to="/trending" onClick={handleNowTrendingClick}>
//           Now Trending
//         </Link>
//         <div className="search-bar">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchInputChange}
//             placeholder="Search..."
//           />
//           <AiOutlineSearch className="search-icon" />
//         </div>
//         <div className="col">
//           <div className="row__posters">
//             {filteredMovies.map((item) => (
//               <div key={item.id} className="row__poster-container" onClick={() => handleMovieClick(item)}>
//                 <img
//                   className="row__poster row__posterLarge"
//                   src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
//                   alt={item.title}
//                 />
//                 <div className="movie-name">{item.title}</div>
//                 <div
//                   key={`fav_${item.id}`}
//                   className="favorite-icon"
//                   onClick={() => handleToggleFavorite(item)}
//                 >
//                   {favorites.some((fav) => fav.id === item.id) ? (
//                     <IoHeart />
//                   ) : (
//                     <IoHeartOutline />
//                   )}
//                 </div>
//                 <div className="rating">{item.vote_average}</div>
//                 {!isPlaying && (
//                   <div
//                     className="play-button"
//                     onClick={handlePlayVideo}
//                   >
//                     <AiOutlinePlayCircle />
//                   </div>
//                 )}
//                 {isPlaying && (
//                   <div className="video-player">
//                     <button className="close-button btn btn-outline-dark" onClick={handleCloseClick}>
//                       Close
//                     </button>
//                     <YouTube videoId="d9MyW72ELq0" opts={{}} />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {selectedMovie && (
//         <div className="movie-info-popup">
//           <div className="movie-info">
//             <h3>{selectedMovie.title}</h3>
//             <p>{selectedMovie.overview}</p>
//             <button onClick={() => setSelectedMovie(null)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default List;


// import React, { useEffect, useState } from "react";
// import { fetchData } from "../api/api";
// import { IoHeartOutline, IoHeart } from "react-icons/io5";
// import { AiOutlinePlayCircle, AiOutlineSearch } from "react-icons/ai";
// import YouTube from 'react-youtube';
// import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

// const List = ({ title, param }) => {
//   const [list, setList] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [isPlaying, setPlaying] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const navigate = useNavigate(); // Use useNavigate to navigate between routes

//   useEffect(() => {
//     fetchData(param).then((res) => {
//       setList(res.data.results);
//       setFilteredMovies(res.data.results);
//     });
//   }, [param]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const handleToggleFavorite = (item) => {
//     setFavorites((prevFavorites) =>
//       prevFavorites.some((fav) => fav.id === item.id)
//         ? prevFavorites.filter((fav) => fav.id !== item.id)
//         : [...prevFavorites, item]
//     );
//   };

//   const handlePlayVideo = () => {
//     setPlaying(true);
//   };

//   const handleStopVideo = () => {
//     setPlaying(false);
//   };

//   const handleCloseClick = () => {
//     setPlaying(false);
//   };

//   const handleSearchInputChange = (e) => {
//     const searchTerm = e.target.value.toLowerCase();
//     setSearchTerm(searchTerm);

//     const filtered = list.filter((movie) => {
//       // Check if the movie is defined and has a title property before accessing it
//       return movie && movie.title && movie.title.toLowerCase().includes(searchTerm);
//     });
  
//     setFilteredMovies(filtered);
//   };

//   const handleNowTrendingClick = () => {
//     // Navigate to the /trending route when Now Trending is clicked
//     navigate('/trending');
//   };

//   return (
//     <div className="list">
//       <div className="row">
//         <h2 className="text-white title">{title}</h2>
//         {/* Add the Now Trending link */}
//         <Link to="/trending" onClick={handleNowTrendingClick}>
         
//         </Link>
//         <div className="search-bar">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchInputChange}
//             placeholder="Search..."
//           />
//           <AiOutlineSearch className="search-icon" />
//         </div>
//         <div className="col">
//           <div className="row__posters">
//             {filteredMovies.map((item) => (
//               <div key={item.id} className="row__poster-container">
//                 <img
//                   className="row__poster row__posterLarge"
//                   src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
//                   alt={item.title}
//                 />
//                 <div className="movie-name">{item.title}</div>
//                 <div
//                   key={`fav_${item.id}`}
//                   className="favorite-icon"
//                   onClick={() => handleToggleFavorite(item)}
//                 >
//                   {favorites.some((fav) => fav.id === item.id) ? (
//                     <IoHeart />
//                   ) : (
//                     <IoHeartOutline />
//                   )}
//                 </div>
//                 <div className="rating">{item.vote_average}</div>
//                 {!isPlaying && (
//                   <div
//                     className="play-button"
//                     onClick={handlePlayVideo}
//                   >
//                     <AiOutlinePlayCircle />
//                   </div>
//                 )}
//                 {isPlaying && (
//                   <div className="video-player">
//                     <button className="close-button btn btn-outline-dark" onClick={handleCloseClick}>
//                       Close
//                     </button>
//                     <YouTube videoId="d9MyW72ELq0" opts={{}} />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default List;


// import React, { useEffect, useState } from "react";
// import { fetchData } from "../api/api";
// import { IoHeartOutline, IoHeart } from "react-icons/io5";
// import { AiOutlinePlayCircle, AiOutlineSearch } from "react-icons/ai";
// import YouTube from 'react-youtube';

// const List = ({ title, param }) => {
//   const [list, setList] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [isPlaying, setPlaying] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredMovies, setFilteredMovies] = useState([]); // State for filtered movies

//   useEffect(() => {
//     fetchData(param).then((res) => {
//       setList(res.data.results);
//       setFilteredMovies(res.data.results); // Initialize filteredMovies with all movies
//     });
//   }, [param]);

//   useEffect(() => {
//     // Retrieve favorites from localStorage on component mount
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   useEffect(() => {
//     // Update localStorage whenever favorites change
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const handleToggleFavorite = (item) => {
//     // Implement your logic to toggle favorite status
//     // For simplicity, here toggling based on existence in favorites state
//     setFavorites((prevFavorites) =>
//       prevFavorites.some((fav) => fav.id === item.id)
//         ? prevFavorites.filter((fav) => fav.id !== item.id)
//         : [...prevFavorites, item]
//     );
//   };

//   const handlePlayVideo = () => {
//     setPlaying(true);
//     // You can add your logic to start playing the video here
//   };

//   const handleStopVideo = () => {
//     setPlaying(false);
//     // You can add your logic to stop the video here
//   };

//   const handleCloseClick = () => {
//     setPlaying(false);
//   };

//   const handleSearchInputChange = (e) => {
//     const searchTerm = e.target.value.toLowerCase();
//     setSearchTerm(searchTerm);

//     // Filter movies based on search term
//     const filtered = list.filter((movie) =>
//       movie.title.toLowerCase().includes(searchTerm)
//     );
//     setFilteredMovies(filtered);
//   };

//   return (
//     <div className="list">
//       <div className="row">
//         <h2 className="text-white title">{title}</h2>
//         <div className="search-bar">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchInputChange}
//             placeholder="Search..."
//           />
//           <AiOutlineSearch className="search-icon" />
//         </div>
//         <div className="col">
//           <div className="row__posters">
//             {filteredMovies.map((item) => (
//               <div key={item.id} className="row__poster-container">
//                 <img
//                   className="row__poster row__posterLarge"
//                   src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
//                   alt={item.title}
//                 />
//                 <div className="movie-name">{item.title}</div> {/* Display movie name */}
//                 <div
//                   key={`fav_${item.id}`} // Add a unique key for the favorite icon
//                   className="favorite-icon"
//                   onClick={() => handleToggleFavorite(item)}
//                 >
//                   {favorites.some((fav) => fav.id === item.id) ? (
//                     <IoHeart />
//                   ) : (
//                     <IoHeartOutline />
//                   )}
//                 </div>
//                 <div className="rating">{item.vote_average}</div> {/* Display movie rating */}
//                 {!isPlaying && (
//                   <div
//                     className="play-button"
//                     onClick={handlePlayVideo}
//                   >
//                     <AiOutlinePlayCircle />
//                   </div>
//                 )}
//                 {isPlaying && (
//                   <div className="video-player">
//                     <button className="close-button btn btn-outline-dark" onClick={handleCloseClick}>
//                       Close
//                     </button>
//                     <YouTube videoId="d9MyW72ELq0" opts={{}} />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default List;
