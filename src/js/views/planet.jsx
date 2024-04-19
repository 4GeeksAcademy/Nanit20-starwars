import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = props => {
    const [planet, setPlanet] = useState();
    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        actions.getPlanet(params.theid)
    }, [params.theid])
    useEffect(() => {
        setPlanet(store.planet)
    }, [store.planet])
    return (
        <div className="container mt-4">

            <div>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading text-center">{planet?.properties?.name}</h2>
                        <p className="lead">{planet?.description}</p>
                    </div>
                    <div className="col-md-5 order-md-1 text-center">
                        <img src={planet?.uid == 1 ? 'https://i.pinimg.com/474x/9f/d0/02/9fd00203ccb2d3b53270623f7c5e8482.jpg' : "https://starwars-visualguide.com/assets/img/planets/" + (planet?.uid) + ".jpg"} style={{ border: "5px solid", borderRadius:"10px", borderColor:"#ffc107",maxWidth: "18rem", width: 'auto', height: "auto", marginTop: "10px", marginRight: "-10px" }}/>


                    </div>
                </div>
                <hr className="featurette-divider"></hr>
                <div className="row">
                    <div className="col-2 text-center"><strong>Nombre</strong> <br />{planet?.properties?.name}</div>
                    <div className="col-2 text-center"><strong>Periodo de rotación</strong> <br /> {planet?.properties?.rotation_period}</div>
                    <div className="col-2 text-center"><strong>Periodo orbital</strong> <br /> {planet?.properties?.orbital_period}</div>
                    <div className="col-2 text-center"><strong>Diámetro</strong> <br /> {planet?.properties?.diameter}</div>
                    <div className="col-2 text-center"><strong>Clima</strong> <br /> {planet?.properties?.climate}</div>
                    <div className="col-2 text-center"><strong>Gravedad</strong> <br /> {planet?.properties?.gravity}</div>
                </div>
            </div>
        </div>
    );
};

Planet.propTypes = {
    id: PropTypes.string
};