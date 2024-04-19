import React from "react";
import { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const VehicleCard = ({item}) => {

    const { store, actions } = useContext(Context)

    const [isFavorite, setIsFavorite] = useState(false)
    const cambioFavorito = (item) => {
        actions.getFavoriteVehicle(item);
        setIsFavorite(store.favorite.find(favoritoo => favoritoo.id == item.uid) != undefined)
    }

    useEffect(() => {
        let isThere = false
        store.favorite.forEach(function (number) {
            if (number?.name == item.name) {
                isThere = true
            }
        });
        setIsFavorite(isThere)
    }, [store.favorite])

    return (
        <div className="d-flex flex-row ">
            <div className="card" style={{ width: '18rem', flex: "none", margin: "10px" }}>
                <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (item.uid) + ".jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <Link to={"/vehicle/" + (item.uid)}>
                        <div className="btn btn-outline-warning">¡Averigua más!</div>
                    </Link>
                    <i className={isFavorite ? 'fa fa-star btn btn-outline-warning ms-5' : 'fa fa-heart btn btn-outline-warning ms-5'} onClick={() => cambioFavorito(item)} />
                </div>
            </div>
        </div>
    );
}; 