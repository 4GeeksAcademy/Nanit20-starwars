import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const VehicleCard = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.getVehicles()
    }, [])

    let enFavorito = "fa fa-heart btn btn-outline-warning ms-5";

    const cambioFavorito = (id) => {
        console.log(enFavorito)
        console.log("hola")
        if (enFavorito === "fa fa-heart btn btn-outline-warning ms-5") {
            console.log("ho1")
            enFavorito = "fa fa-start btn btn-outline-warning ms-5"
            console.log(enFavorito)
        } else {
            console.log("ho2")
            enFavorito = "fa fa-heart btn btn-outline-warning ms-5"
        }
        console.log("hello")
        console.log(enFavorito)
        actions.getFavoriteCharacter(id);
        console.log(enFavorito)
    }

    return (
        <div className="card-group row flex-nowrap overflow-auto">
            <div className="d-flex flex-row ">
                {store.vehicles.map((item, id) => (
                    <div className="card" style={{ width: '18rem', flex: "none", margin: "10px" }}>


                        <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (id + 4) + ".jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Tripulación: {item.crew} <br /> Máxima velocidad: {item.max_atmosphering_speed} <br /> Modelo: {item.model} </p>
                            <Link to={"/vehicle/" + (id + 4)}>
                                <a href="#" className="btn btn-outline-primary">¡Averigua más!</a>
                            </Link>
                            <i className={enFavorito} onClick={() => cambioFavorito(id)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}; 