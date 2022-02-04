import PropTypes from "prop-types";
import { getPokemon, getSpecificPokemon } from "../services/services.js";
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext"
import Spinner from "./spinner.jsx"

const CardsRegion = (props) => {

    const { store, actions } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [regionList, setRegionList] = useState([]);

    const genGetFunct = async (url) => {
		try {
            setLoading(true)
			const res = await getPokemon(url);
			const dataJSON = await res.json();
            setRegionList(dataJSON)
		} catch (err) {
			console.log(err);
		} finally {
            setLoading(false)
        }
	};

    useEffect(() => {
        genGetFunct(props.url)
    }, [])
		
    return (
        <div className="col-lg-3 col-md-4 col-sm-12 px-2 d-flex justify-content-center">
            {loading ? (<Spinner/>) 
            : (<div className="card h-100">
                <img src={store.imgList[props.region.split("-").join("")]} className="card-img-top img-fluid" alt={props.region}/>
                <div className="card-body bg-light">
                    <h5 className="card-title fs-3 text-center">Pokémon {props.region.split("-").map((strings) => actions.capitalizeFirstLetter(strings)).join(" ")}</h5>
                    <p className="card-text mb-1"><strong>Gen: </strong>{actions.capitalizeFirstLetter(regionList.generation.name)}.</p>
                    <p className="card-text mb-1"><strong>Regions:</strong> {regionList.regions.length == 0 ? "Unknown" : null}{regionList.regions.length == 1 ? `${actions.capitalizeFirstLetter(regionList.regions[0].name)}` : null}{regionList.regions.length == 2 ? `${actions.capitalizeFirstLetter(regionList.regions[0].name)} and ${actions.capitalizeFirstLetter(regionList.regions[1].name)}` : null}.</p>
                </div>
                <div className="card-body bg-light d-flex justify-content-end align-items-end">
                        <input checked={store.favRegion[props.region.split("-").join("")]} onClick={() => actions.addRegionFav(props.region.split("-").join(""), {name: props.region.split("-").join(""), img: store.imgList[props.region.split("-").join("")], gen: regionList.generation.name.split("-")[1].toUpperCase(), check: actions.regionChecker(props.region.split("-").join(""))})} type="checkbox" className="btn-check" name={props.region} id={`${props.region}-check`}/>
                        <label className="btn btn-outline-warning p-1" htmlFor={`${props.region}-check`}><img src="https://img.icons8.com/color/40/000000/star-pokemon.png"/></label>
                </div>
            </div>)}
        </div>
        
    )
}

CardsRegion.propTypes = {
    region: PropTypes.string,
    url: PropTypes.string
}

export default CardsRegion