const URL = "https://swapi.tech/api/"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			character: {},
			planet: {},
			vehicle: {},
			favorite: [],
		},
		actions: {

			getCharacters: async () => {
				try {
					const response = await fetch(URL + "people");
					const data = await response.json();

					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					setStore({ characters: data.results })
				} catch (error) {
					console.log(error);
				}
			},
			getPlanets: async () => {
				try {
					const response = await fetch(URL + "planets");
					const data = await response.json();

					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					setStore({ planets: data.results })
				} catch (error) {
					console.log(error);
				}
			},
			getVehicles: async () => {
				try {
					const response = await fetch(URL + "vehicles");
					const data = await response.json();
					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					setStore({ vehicles: data.results })
				} catch (error) {
					console.log(error);
				}
			},
			getCharacter: async (id) => {
				try {
					const response = await fetch(URL + "people/" + id);
					const data = await response.json();
					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					setStore({ character: data.result })
				} catch (error) {
					console.log(error);
				}
			},
			getPlanet: async (id) => {
				try {
					const response = await fetch(URL + "planets/" + id);
					const data = await response.json();

					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					setStore({ planet: data.result })
				} catch (error) {
					console.log(error);
				}
			},
			getVehicle: async (id) => {
				try {
					const response = await fetch(URL + "vehicles/" + id);
					const data = await response.json();

					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					setStore({ vehicle: data.result })
				} catch (error) {
					console.log(error);
				}
			},
			getFavoriteCharacter: async (item) => {
				const store = getStore();
				if (store.favorite.find(value => value.name == item.name)) {
					const aux = store.favorite.filter((favorito) => favorito.name != item.name);
					setStore({ favorite: aux });
				} else {
					store.favorite.push({ name: item.name, id: item.uid, type: "character" });
					setStore({ favorite: store.favorite })
				}
			},
			getFavoritePlanet: async (item) => {
				const store = getStore();
				if (store.favorite.find(value => value.name == item.name)) {
					const aux = store.favorite.filter((favorito) => favorito.name != item.name);
					setStore({ favorite: aux });
				} else {
					store.favorite.push({ name: item.name, id: item.uid, type: "planet" });
					setStore({ favorite: store.favorite })
				}
			},
			getFavoriteVehicle: async (item) => {

				const store = getStore();

				if (store.favorite.find(value => value.name == item.name)) {
					const aux = store.favorite.filter((favorito) => favorito.name != item.name);
					setStore({ favorite: aux });
				} else {
					store.favorite.push({ name: item.name, id: item.uid, type: "vehicle" });
					setStore({ favorite: store.favorite })
				}

			},
			deleteFavorite: (id) => {
				const store = getStore();
				const aux = store.favorite.filter((item, ind) => id != ind);
				setStore({ favorite: aux });
			},
		},
	};
};

export default getState;