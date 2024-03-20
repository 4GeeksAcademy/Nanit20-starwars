import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicle = props => {
	const [vehicle, setVehicle] = useState();
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getVehicle(params.theid)
	}, [])
	useEffect(() => {
		setVehicle(store.vehicle)
	}, [store.vehicle])
	return (
		<div className="container mt-4">

			<div>
				<div class="row featurette">
					<div class="col-md-7 order-md-2">
						<h2 class="featurette-heading text-center">{vehicle?.name}</h2>
						<p class="lead">The Force is strong with this one. Perhaps you think you are being treated unfairly? Nothing will stand in our way. I will finish what you started. No, I am your father! Impressive. Most impressive. Obi-Wan has taught you well. You have controlled your fear. Now, release your anger. Only your hatred can destroy me.</p>
					</div>
					<div class="col-md-5 order-md-1">
						<img src={`https://starwars-visualguide.com/assets/img/vehicle/${params.theid}.jpg`} />

					</div>
				</div>
				<hr class="featurette-divider"></hr>
				<div className="row">
					<div className="col-2 text-center"><strong>Nombre</strong> <br />{vehicle?.name}</div>
					<div className="col-2 text-center"><strong>Capacidad</strong> <br /> {vehicle?.cargo_capacity}</div>
					<div className="col-2 text-center"><strong>Tripulación</strong> <br /> {vehicle?.crew}</div>
					<div className="col-2 text-center"><strong>Tamaño</strong> <br /> {vehicle?.length}</div>
					<div className="col-2 text-center"><strong>Modelo</strong> <br /> {vehicle?.model}</div>
					<div className="col-2 text-center"><strong>Pasajeros</strong> <br /> {vehicle?.passengers}</div>
				</div>
			</div>
		</div>
	);
};

Vehicle.propTypes = {
	id: PropTypes.string
};