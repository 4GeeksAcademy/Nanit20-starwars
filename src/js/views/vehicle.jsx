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
	}, [params.theid])
	useEffect(() => {
		setVehicle(store.vehicle)
	}, [store.vehicle])
	return (
		<div className="container mt-4">

			<div>
				<div className="row featurette">
					<div className="col-md-7 order-md-2">
						<h2 className="featurette-heading text-center">{vehicle?.properties?.name}</h2>
						<p className="lead">{vehicle?.description}</p>
					</div>
					<div className="col-md-5 order-md-1 text-center">
						<img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`} style={{ border: "5px solid", borderRadius:"10px", borderColor:"#ffc107",maxWidth: "18rem", width: 'auto', height: "auto", marginTop: "10px", marginRight: "-10px" }}/>

					</div>
				</div>
				<hr className="featurette-divider"></hr>
				<div className="row">
					<div className="col-2 text-center"><strong>Nombre</strong> <br />{vehicle?.properties?.name}</div>
					<div className="col-2 text-center"><strong>Capacidad</strong> <br /> {vehicle?.properties?.cargo_capacity}</div>
					<div className="col-2 text-center"><strong>Tripulación</strong> <br /> {vehicle?.properties?.crew}</div>
					<div className="col-2 text-center"><strong>Tamaño</strong> <br /> {vehicle?.properties?.length}</div>
					<div className="col-2 text-center"><strong>Modelo</strong> <br /> {vehicle?.properties?.model}</div>
					<div className="col-2 text-center"><strong>Pasajeros</strong> <br /> {vehicle?.properties?.passengers}</div>
				</div>
			</div>
		</div>
	);
};

Vehicle.propTypes = {
	id: PropTypes.string
};