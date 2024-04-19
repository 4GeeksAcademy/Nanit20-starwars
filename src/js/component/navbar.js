import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useEffect, useContext } from "react";



export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="container-fluid px-5">
			<nav className="navbar navbar-expand-lg navbar-light">
				<Link to={"/"}>
					<p className="btn btn-outline-danger fw-bold btn-lg m-3">STAR WARS</p>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse flex-row-reverse " id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item dropstart">
							<a className="nav-link dropdown-toggle btn btn-danger text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favoritos {store.favorite.length}
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{ display: !store.favorite.length>0 && "none", }}>
								{store.favorite.map((ele, ind) => (
									<li>
										<div className="d-flex flex-row ">
											<Link to={""+(ele.type)+"/" + (ele.id)}> <div className="dropdown-item">{ele.name} </div></Link> <i className="fas fa-trash-alt" onClick={() => actions.deleteFavorite(ind)} style={{ flex: "none", margin: "10px" }}/> 
										</div>
									</li>
								))}

							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};