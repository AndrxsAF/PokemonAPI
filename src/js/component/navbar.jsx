import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light px-5 justify-content-between">
   				<a className="navbar-brand p-0 d-flex align-items-center" href="#"><img height={"40px"} src="https://img.icons8.com/ios-filled/50/000000/instinct-pokemon.png"/><p className="ps-2 m-0 fs-3">Pokemon Center</p></a>
			<div className="d-flex justify-content-end">
					<a className="btn btn-primary dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</a>
					<ul style={{left: "auto"}} className="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><hr className="dropdown-divider"/></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</nav>
	);
};
