import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";

export const CharacterCard = ({ item }) => {

    const { store, actions } = useContext(Context)

    const [isFavorite, setIsFavorite] = useState(false)
    const cambioFavorito = (item) => {
        actions.getFavoriteCharacter(item);
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
                <img src={"https://starwars-visualguide.com/assets/img/characters/" + (item.uid) + ".jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <Link to={"/character/" + (item.uid)}>
                        <div className="btn btn-outline-warning">¡Averigua más!</div>
                    </Link>
                    <i className={isFavorite ? 'fa fa-star btn btn-outline-warning ms-5' : 'fa fa-heart btn btn-outline-warning ms-5'} onClick={() => cambioFavorito(item)} />
                </div>
            </div>
        </div>
    );
}; 