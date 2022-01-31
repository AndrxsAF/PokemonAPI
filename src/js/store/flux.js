const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorite: []
		},
		actions: {
			addPokeFav: (item) => {
				const store = getStore()
				setStore({...store, favorite: [...store.favorite, item]})
			} 
		}
	};
};

export default getState;
