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
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				try {
					const response = await fetch("https://swapi.tech/api/people");
					const data = await response.json();
					//console.log(data);
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
					const response = await fetch("https://swapi.tech/api/planets");
					const data = await response.json();
					//console.log(data);
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
					const response = await fetch("https://swapi.tech/api/vehicles");
					const data = await response.json();
					console.log(data);
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
					const response = await fetch("https://swapi.tech/api/people/" + id);
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
					const response = await fetch("https://swapi.tech/api/planets/" + id);
					const data = await response.json();
					//console.log(data);
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
					const response = await fetch("https://swapi.tech/api/vehicles/" + id);
					const data = await response.json();
					//console.log(data);
					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					setStore({ vehicle: data.result.properties })
				} catch (error) {
					console.log(error);
				}
			},
			getFavoriteCharacter: async (item) => {
				/*try {
					const response = await fetch("https://swapi.tech/api/people/" + (id + 1));
					const data = await response.json();
					//console.log(data);
					if (!response.ok) {
						//console.log(response.statusText);
						return;
					}*/

				const store = getStore();
				//console.log(data.name)
				if (store.favorite.find(value => value.name == item.name)) {
					const aux = store.favorite.filter((favorito) => favorito.name != item.name);
					setStore({ favorite: aux });
				} else {
					store.favorite.push({ name: item.name, id: item.uid, type: "character" });
					setStore({ favorite: store.favorite })
				}

				/*} catch (error) {
					console.log(error);
				}*/
			},
			getFavoritePlanet: async (item) => {
				/*try {
					const response = await fetch("https://swapi.tech/api/planets/" + (id + 1));
					const data = await response.json();
					//console.log(data);
					if (!response.ok) {
						console.log(response.statusText);
						return;
					}*/

				const store = getStore();

				if (store.favorite.find(value => value.name == item.name)) {
					const aux = store.favorite.filter((favorito) => favorito.name != item.name);
					setStore({ favorite: aux });
				} else {
					store.favorite.push({ name: item.name, id: item.uid, type: "planet" });
					setStore({ favorite: store.favorite })
				}

				/*	} catch (error) {
						console.log(error);
					}*/
			},
			getFavoriteVehicle: async (item) => {
				/*try {
					const response = await fetch("https://swapi.tech/api/planets/" + (id + 1));
					const data = await response.json();
					//console.log(data);
					if (!response.ok) {
						console.log(response.statusText);
						return;
					}*/

				const store = getStore();

				if (store.favorite.find(value => value.name == item.name)) {
					const aux = store.favorite.filter((favorito) => favorito.name != item.name);
					setStore({ favorite: aux });
				} else {
					store.favorite.push({ name: item.name, id: item.uid, type: "vehicle" });
					setStore({ favorite: store.favorite })
				}

				/*	} catch (error) {
						console.log(error);
					}*/
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