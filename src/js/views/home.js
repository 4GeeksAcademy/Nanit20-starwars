import React from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/characterCard.jsx";
import { PlanetCard } from "../component/planetCard.jsx";
import { VehicleCard } from "../component/vehicleCard.jsx";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";



export const Home = () => {

	const { store, actions } = useContext(Context)
	useEffect(() => {
		actions.getCharacters()
		actions.getPlanets()
		actions.getVehicles()
	}, [])

	return (
		<div className="container-fluid px-5">
			<h1 className="display-5 bs-danger fw-bold text-danger">Personajes</h1>
			<div className="card-group row flex-nowrap overflow-auto">
				<div className="d-flex flex-row ">
					{store.characters.map((item) => (
						<CharacterCard key={item.uid} item={item} />
					))}
				</div>
			</div>
			<h1 className="display-5 bs-danger fw-bold text-danger">Planetas</h1>
			<div className="card-group row flex-nowrap overflow-auto">
				<div className="d-flex flex-row ">
					{store.planets.map((item) => (
						<PlanetCard key={item.uid} item={item} />
					))}
				</div>
			</div>
			<h1 className="display-5 bs-danger fw-bold text-danger">Vehículos</h1>
			<div className="card-group row flex-nowrap overflow-auto">
				<div className="d-flex flex-row ">
					{store.vehicles.map((item) => (
						<VehicleCard key={item.uid} item={item} />
					))}
				</div>
			</div>
		</div>
	)
}