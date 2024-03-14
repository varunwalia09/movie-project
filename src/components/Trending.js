import React, { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { AiOutlinePlayCircle } from "react-icons/ai";
import YouTube from 'react-youtube';
import { useNavigate, Link } from "react-router-dom";

const Trending = ({ title, param }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isPlaying, setPlaying] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(param).then((res) => setTrendingMovies(res.data.results));
  }, [param]);

  useEffect(() => {
    // Retrieve favorites from localStorage on component mount
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    // Update localStorage whenever favorites change
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (item) => {
    // Implement your logic to toggle favorite status
    // For simplicity, here toggling based on existence in favorites state
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === item.id)
        ? prevFavorites.filter((fav) => fav.id !== item.id)
        : [...prevFavorites, item]
    );
  };

  const handlePlayVideo = (videoId) => {
    setPlaying(true);
    setActiveVideoId(videoId);
    // You can add your logic to start playing the video here
  };

  const handleCloseClick = () => {
    setPlaying(false);
    setActiveVideoId(null);
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="list">
      <div className="row">
         {/* Include Header component here */}
        <h2 className="text-white title">{title}</h2>
        <div className="col">
          <div className="row__posters">
            {trendingMovies.map((item) => (
              <div key={item.id} className="row__poster-container">
                <img
                  className="row__poster row__posterLarge"
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                />
                <div
                  key={`fav_${item.id}`} // Add a unique key for the favorite icon
                  className="favorite-icon"
                  onClick={() => handleToggleFavorite(item)}
                >
                  {favorites.some((fav) => fav.id === item.id) ? (
                    <IoHeart />
                  ) : (
                    <IoHeartOutline />
                  )}
                </div>
                {!isPlaying && (
                  <div
                    className="play-button"
                    onClick={() => handlePlayVideo(item.videoId)}
                  >
                    <AiOutlinePlayCircle />
                  </div>
                )}
                {isPlaying && activeVideoId === item.videoId && (
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
      <div>
        
      <div className="navbar">
            <ul className="navbar-nav me-auto">
              <nav className="navigation">
                <ul className="style1">
                  <Link className="btn btn-danger btn btn-outline-dark m-2" to="/dashboard">Dashboard</Link>
                  {/* <li><Link className="btn btn-danger btn btn-outline-dark m-2" to="/trending">Trending</Link></li> */}
                  {/* Add more navigation links as needed */}
                </ul>
              </nav>
            </ul>
      </div>
      </div>
    </div>
  );
};

export default Trending;






// import React, { useEffect, useState } from "react";
// import { fetchData } from "../api/api";
// import { IoHeartOutline, IoHeart } from "react-icons/io5";
// import { AiOutlinePlayCircle } from "react-icons/ai";
// import YouTube from 'react-youtube';

// const Trending = ({ title, param }) => {
//   const [trendingMovies, setTrendingMovies] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [isPlaying, setPlaying] = useState(false);
//   const [activeVideoId, setActiveVideoId] = useState(null);

//   useEffect(() => {
//     fetchData(param).then((res) => setTrendingMovies(res.data.results));
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

//   const handlePlayVideo = (videoId) => {
//     setPlaying(true);
//     setActiveVideoId(videoId);
//     // You can add your logic to start playing the video here
//   };

//   const handleStopVideo = () => {
//     setPlaying(false);
//     setActiveVideoId(null);
//     // You can add your logic to stop the video here
//   };

//   const handleCloseClick = () => {
//     setPlaying(false);
//     setActiveVideoId(null);
//   };

//   return (
//     <div className="list">
//       <div className="row">
//         <h2 className="text-white title">{title}</h2>
//         <div className="col">
//           <div className="row__posters">
//             {trendingMovies.map((item) => (
//               <div key={item.id} className="row__poster-container">
//                 <img
//                   className="row__poster row__posterLarge"
//                   src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
//                   alt={item.title}
//                 />
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
//                 {!isPlaying && (
//                   <div
//                     className="play-button"
//                     onClick={() => handlePlayVideo(item.videoId)}
//                   >
//                     <AiOutlinePlayCircle />
//                   </div>
//                 )}
//                 {isPlaying && activeVideoId === item.videoId && (
//                   <div className="video-player">
//                     <button className="close-button btn btn-outline-dark" onClick={handleCloseClick}>
//                       Close
//                     </button>
//                     <YouTube videoId={item.videoId} opts={{}} />
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

// export default Trending;
