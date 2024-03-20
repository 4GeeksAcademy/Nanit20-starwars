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
    }, [])
    useEffect(() => {
        setPlanet(store.planet)
    }, [store.planet])
    let planetNumber = Number(params.theid) + 1

    return (
        <div className="container mt-4">

            <div>
                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading text-center">{planet?.name}</h2>
                        <p class="lead">The Force is strong with this one. Perhaps you think you are being treated unfairly? Nothing will stand in our way. I will finish what you started. No, I am your father! Impressive. Most impressive. Obi-Wan has taught you well. You have controlled your fear. Now, release your anger. Only your hatred can destroy me.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img src={"https://starwars-visualguide.com/assets/img/planets/" + (planetNumber) + ".jpg"} />

                    </div>
                </div>
                <hr class="featurette-divider"></hr>
                <div className="row">
                    <div className="col-2 text-center"><strong>Nombre</strong> <br />{planet?.name}</div>
                    <div className="col-2 text-center"><strong>Periodo de rotación</strong> <br /> {planet?.rotation_period}</div>
                    <div className="col-2 text-center"><strong>Periodo orbital</strong> <br /> {planet?.orbital_period}</div>
                    <div className="col-2 text-center"><strong>Diámetro</strong> <br /> {planet?.diameter}</div>
                    <div className="col-2 text-center"><strong>Clima</strong> <br /> {planet?.climate}</div>
                    <div className="col-2 text-center"><strong>Gravedad</strong> <br /> {planet?.gravity}</div>
                </div>
            </div>
        </div>
    );
};

Planet.propTypes = {
    id: PropTypes.string
};