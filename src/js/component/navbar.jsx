import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css"

export const Navbar = () => {

	const { store, actions } = useContext(Context)
	const [addClass, setClass] = useState("visually-hidden")
	const [searchLog, setSearch] = useState("")

	const classToggle = () => addClass == "d-block" ? setClass("visually-hidden") : setClass("d-block")

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
			<Link className="ps-4" to="/">
				<a className="navbar-brand p-0 d-flex align-items-center" href="#"><img height={"40px"} src="https://img.icons8.com/ios-filled/50/000000/instinct-pokemon.png"/><p className="ps-2 m-0 fs-3">Pokemon Center</p></a>
			</Link>
			<div className="d-flex">
				<form className="d-flex px-2">
					<input onChange={(e) => setSearch(e.target.value.toLowerCase())} className="form-control me-2" type="search" placeholder="Search by Name or Nº" aria-label="Search"/>
					<Link to={`./${searchLog}`}>
						<button className="btn btn-outline-success" type="submit">Search</button>
					</Link>
				</form>
				<div className="d-flex justify-content-end pe-4">
						<button onClick={() => classToggle()} className="btn btn-primary dropdown-toggle" href="#">
							Favorites
						</button>
						<ul style={{left: "auto", top: "100%"}} className={"bg-light dropdown-menu " + addClass}>
							<li className="px-3">Pokémon:</li>
							<li><hr className="dropdown-divider"/></li>
							{store.pokedex ? store.pokedex.map((item, index) => (<li className=" dropdown-item d-flex py-0 px-2 custom-favorite align-items-center justify-content-between" key={item + index}><Link className="text-decoration-none text-muted d-flex align-items-center justify-content-between" to={`./${item}`}><img className="img-fluid custom-favorite-img" src={store.favorite[item].img} alt={item} /><p className="py-0 px-2 m-0" href="#">{actions.capitalizeFirstLetter(item)} - [{store.favorite[item].dexEntry}]</p></Link><button onClick={() => actions.deleterList(item)} type="button" className="ps-2 btn-close" data-bs-dismiss="alert" aria-label="Close"></button></li>)) : null}
							<li><hr className="dropdown-divider"/></li>
							<li className="px-3">Games:</li>
							{store.regions ? store.regions.map((item, index) => (<li className="custom-favorite dropdown-item d-flex align-items-center justify-content-between py-0 px-2" key={item + index}><img className="img-fluid custom-favorite-img" src={store.favRegion[item].img} alt={item} /><p className="py-0 px-2 m-0" href="#">{actions.capitalizeFirstLetter(item)} - [{store.favRegion[item].gen}]</p><button onClick={() => actions.deleterListRegion(item)} type="button" className="ps-2 btn-close" data-bs-dismiss="alert" aria-label="Close"></button></li>)) : null}
							<li><hr className="dropdown-divider"/></li>
					</ul>
				</div>	
			</div>
			
		</nav>
	);
};
