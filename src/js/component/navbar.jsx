import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light px-5 justify-content-between">
   				<a className="navbar-brand p-0 d-flex align-items-center" href="#"><img height={"40px"} src="https://img.icons8.com/ios-filled/50/000000/instinct-pokemon.png"/><p className="ps-2 m-0 fs-3">Pokemon Center</p></a>
			<div className="d-flex justify-content-end">
					<a className="btn btn-primary dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</a>
					<ul style={{left: "auto"}} className="dropdown-menu" aria-labelledby="navbarDropdown">
						{store.favorite ? store.favorite.map((item, index) => (<li key={item.name + index}><p className="dropdown-item" href="#"><img src={item.img} alt={item.name} />{item.name} - [{item.dexEntry}]</p></li>)) : null}
						<li><hr className="dropdown-divider"/></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</nav>
	);
};
