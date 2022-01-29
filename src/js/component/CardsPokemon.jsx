import PropTypes from "prop-types";
import React from "react";

const CardsPokemon = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="" className="card-img-top" alt={props.pokes}/>
            <div className="card-body">
                <h5 className="card-title">{props.pokes}</h5>
                <p className="card-text">Type:</p>
                <p className="card-text">: </p>
                <a href="#" className="btn btn-primary">Read its pokedex description</a>
            </div>
        </div>
    )
}

CardsPokemon.propTypes = {
    pokes: PropTypes.string
}

export default CardsPokemon