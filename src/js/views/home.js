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
	}, [])

	return (
		<>
			<div className="container-fluid px-5">
				<h1 className="display-5 bs-danger fw-bold text-danger">Personajes</h1>
				<div className="card-group row flex-nowrap overflow-auto">
					<div className="d-flex flex-row ">
						{store.characters.map((item) => (
							<CharacterCard item={item} />
						))}
					</div>
				</div>

				<h1 className="display-5 bs-danger fw-bold text-danger">Planetas</h1>
				<PlanetCard />
				<h1 className="display-5 bs-danger fw-bold text-danger">Vehículos</h1>
				<VehicleCard />
			</div>
		</>
	)
}