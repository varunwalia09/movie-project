import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand btn btn-outline-dark" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>

          <div className="navbar">
            <ul className="navbar-nav me-auto">
              <nav className="navigation">
                <ul className="style1">
                  {/* <li><Link className="btn btn-danger btn btn-outline-dark m-2" to="/dashboard">Dashboard</Link></li> */}
                  {/* <li><Link className="btn btn-danger btn btn-outline-dark m-2" to="/trending">Trending</Link></li> */}
                  {/* Add more navigation links as needed */}
                </ul>
              </nav>
            </ul>

            <form className="d-flex" role="search">
              <select style={{ cursor: "pointer" }}>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="btn btn-danger btn btn-outline-dark" onClick={clickHandler}>SignIn</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;


// import React from "react";
// import { useNavigate, Link } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();

//   const clickHandler = (e) => {
//     e.preventDefault();
//     navigate('/login');
//   };

//   return (
//     <header className="topNav">
//       <nav className="navbar navbar-expand-md navbar-dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand btn btn-outline-dark" to="/">
//             <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
//           </Link>

//           <div className="navbar">
//             <ul className="navbar-nav me-auto">
//               <nav className="navigation">
//                 <ul className="style">
//                   <li><Link className="btn btn-danger btn btn-outline-dark m-2" to="/dashboard">Dashboard</Link></li>
//                   {/* <li><Link className="btn btn-danger btn btn-outline-dark m-2" to="/trending">Trending</Link></li> */}
//                   {/* Add more navigation links as needed */}
//                 </ul>
//               </nav>
//             </ul>

//             <form className="d-flex" role="search">
//               <select style={{ cursor: "pointer" }}>
//                 <option>English</option>
//                 <option>Hindi</option>
//               </select>
//               <button className="btn btn-danger btn btn-outline-dark" onClick={clickHandler}>SignIn</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;



// import React from "react";
// import { useNavigate, Link } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();

//   const clickHandler = (e) => {
//     e.preventDefault();
//     navigate('/login');
//   }

//   return(
//     <header className="topNav">
//       <nav className="navbar navbar-expand-md navbar-dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand btn btn-outline-dark" to="/">
           
//             <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
//           </Link>
          
//           <div className="navbar">
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item">
//                 <Link className="btn btn-danger btn-block btn btn-outline-dark m-2"  to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="btn btn-danger btn-block btn btn-outline-dark m-2"  to="/movies">Movies</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="btn btn-danger btn-block btn btn-outline-dark m-2"  to="/tv-series">TV Series</Link>
//               </li>
//             </ul>
            
//             <form className="d-flex" role="search">
//             <select style={{ cursor: "pointer" }}>
//              <option>English</option>
//              <option>Hindi</option>
//            </select>
//               <button className="btn btn-danger btn btn-outline-dark" onClick={clickHandler}>SignIn</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;