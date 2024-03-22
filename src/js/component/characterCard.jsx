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
        //setIsFavorite(store.favorite[item.uid - 1]?.name == item.name)
        //setIsFavorite(store.favorite.includes(favoritoo => favoritoo.name == item.name))
        //setIsFavorite(store.favorite.find(favoritoo => favoritoo.id == item.uid) != undefined)
    }, [store.favorite])

    /*const [character, setCharacter] = useState();
    useEffect(() => {

        actions.getCharacter(item.uid)
    }, [])
    useEffect(() => {
        setCharacter(store.character)
    }, [store.character])
    <p className="card-text">Género: {character?.gender} <br /> Color de pelo: {item.hair_color} <br /> Color de ojos: {item.eye_color} </p>*/

    return (
        <div className="d-flex flex-row ">
            <div className="card" style={{ width: '18rem', flex: "none", margin: "10px" }}>
                <img src={"https://starwars-visualguide.com/assets/img/characters/" + (item.uid) + ".jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <Link to={"/character/" + (item.uid)}>
                        <a href="#" className="btn btn-outline-warning">¡Averigua más!</a>
                    </Link>
                    <i className={isFavorite ? 'fa fa-star btn btn-outline-warning ms-5' : 'fa fa-heart btn btn-outline-warning ms-5'} onClick={() => cambioFavorito(item)} />
                </div>
            </div>
        </div>
    );
}; 