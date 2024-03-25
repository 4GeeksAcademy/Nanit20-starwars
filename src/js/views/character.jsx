import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = props => {
	const [character, setCharacter] = useState();
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		console.log(params.theid)
		actions.getCharacter(params.theid)
	}, [params.theid])
	useEffect(() => {
		setCharacter(store.character)
	}, [store.character])
	return (
		<div className="container mt-4">
			<div>
				<div class="row featurette">
					<div class="col-md-7 order-md-2">
						<h2 class="featurette-heading text-center">{character?.properties?.name}</h2>
						<p class="lead" style={{ textAlign: "center" }}>{character?.description}</p>
					</div>
					<div class="col-md-5 order-md-1 text-center">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} classname="singleImg" style={{ border: "5px solid", borderRadius: "10px", borderColor: "#ffc107", maxWidth: "18rem", width: 'auto', height: "auto", marginTop: "10px", marginRight: "-10px" }} />

					</div>
				</div>
				<hr class="featurette-divider"></hr>
				<div className="row">
					<div className="col-2 text-center"><strong>Nombre</strong> <br />{character?.properties?.name}</div>
					<div className="col-2 text-center"><strong>Año de nacimiento</strong> <br /> {character?.properties?.birth_year}</div>
					<div className="col-2 text-center"><strong>Género</strong> <br /> {character?.properties?.gender}</div>
					<div className="col-2 text-center"><strong>Altura</strong> <br /> {character?.properties?.height}</div>
					<div className="col-2 text-center"><strong>Color de piel</strong> <br /> {character?.properties?.skin_color}</div>
					<div className="col-2 text-center"><strong>Color de ojos</strong> <br /> {character?.properties?.eye_color}</div>
				</div>
			</div>
		</div>
	);
};

Character.propTypes = {
	id: PropTypes.string
};