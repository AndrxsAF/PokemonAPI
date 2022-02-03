import { Context } from "./appContext";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorite: {},
			imgList: {
				redblue: "https://romsjuegos.com/wp-content/uploads/pokemon-red-and-blue-version-gameboy-cover.png",
				yellow: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9be30e5-5d79-4c7e-b734-3ce0a28bb294/d9tkrb7-deb03749-e1a8-435b-836a-45f209c2c202.png/v1/fill/w_900,h_900,q_80,strp/pokemon_yellow_version__game_boy__hq_box_art_by_jadelune_d9tkrb7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYzliZTMwZTUtNWQ3OS00YzdlLWI3MzQtM2NlMGEyOGJiMjk0XC9kOXRrcmI3LWRlYjAzNzQ5LWUxYTgtNDM1Yi04MzZhLTQ1ZjIwOWMyYzIwMi5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3MFpw_1R8jYq-GvP6hrMO73j5tKtG4zVRAKccb0peoY",
				goldsilver: "https://upload.wikimedia.org/wikipedia/en/4/4c/Pok%C3%A9mon_box_art_-_Gold_Version.png",
				crystal: "https://img.zonared.com/images/noticias/28500/28519/1.jpg",
				rubysapphire: "https://i.scdn.co/image/ab67706c0000bebb724b07dc4e0101d6293bf39f",
				emerald: "http://www.retroplace.com/pics/gba/packshots/63892--pokemon-emerald-version.png",
				fireredleafgreen: "https://imagen.nextn.es/wp-content/uploads/2013/12/1312-10-Pok%C3%A9mon-FireRed-Pok%C3%A9mon-LeafGreen-Super-Music-Collection.jpg?strip=all&lossy=1&resize=390%2C390&ssl=1",
				diamondpearl: "https://vgmsite.com/soundtracks/pokemon-diamond-and-pearl-super-music-collection/1200px-Pok%C3%A9mon_Diamond_Pok%C3%A9mon_Pearl_Super_Music_Collection.png",
				platinum: "https://m.media-amazon.com/images/I/71C28eEEaML._SL1114_.jpg",
				heartgoldsoulsilver: "https://is4-ssl.mzstatic.com/image/thumb/Music127/v4/29/11/92/29119215-b4f4-5eae-9954-a3dc5b2bd7d3/859711583162_cover.jpg/600x600bf-60.jpg",
				colosseum: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d265001f-678c-410b-a8e1-4c59c0f024c4/dapsgsy-95c7d6c7-4d30-44dc-b0ef-56518df6baaf.png/v1/fill/w_1024,h_1024,q_80,strp/pokemon_colosseum_super_music_cover__fanmade__by_fakemon123_dapsgsy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2QyNjUwMDFmLTY3OGMtNDEwYi1hOGUxLTRjNTljMGYwMjRjNFwvZGFwc2dzeS05NWM3ZDZjNy00ZDMwLTQ0ZGMtYjBlZi01NjUxOGRmNmJhYWYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YWHlthYd9ldd1CLrXti-HrmoZvhYAVbydIjSRGcrts4",
				xd: "https://lastfm.freetls.fastly.net/i/u/ar0/6804bd8073413be88e9604e8d263b517.jpg",
				black2white2: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/44/latest/20140513223804/Pok%C3%A9mon_Black_2_%26_Pok%C3%A9mon_White_2_-_Super_Music_Collection.png/1200px-Pok%C3%A9mon_Black_2_%26_Pok%C3%A9mon_White_2_-_Super_Music_Collection.png",
				xy: "https://p4.wallpaperbetter.com/wallpaper/85/743/793/pokemon-wallpaper-preview.jpg",
				omegarubyalphasapphire: "https://img.discogs.com/4mceTCwL0olnrYV_SFdEDuv5i2E=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-10830710-1505012954-1785.jpeg.jpg",
				sunmoon: "https://lastfm.freetls.fastly.net/i/u/ar0/2ca1d8042877fc7e2998a3ebeadd9552.jpg",
				ultrasunultramoon: "https://lastfm.freetls.fastly.net/i/u/ar0/882af633d2d924e35f5b55ee601059a4.jpg",
				letsgopikachuletsgoeevee: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/10/pokemon-lets-go-pikachu-cover.jpg?itok=us0bGkFC",
				swordshield: "https://www.sittingonclouds.net/_next/image?w=3840&q=50&url=https://cdn.sittingonclouds.net/album/739.png",
				blackwhite: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/07/latest/20140408154321/Pok%C3%A9mon_Black_%26_Pok%C3%A9mon_White_-_Super_Music_Collection.png/1200px-Pok%C3%A9mon_Black_%26_Pok%C3%A9mon_White_-_Super_Music_Collection.png"
			 },
			 pokedex: [],
			 favRegion: {},
			 regions: []
		},
		actions: {
			addPokeFav: (name, item) => {
				const store = getStore()
				store.favorite[name] = item
				console.log("check", store.favorite[name].check)
				const keys = Object.keys(store.favorite).filter((pokes) => !store.favorite[pokes].check)
				keys ? delete store.favorite[keys[0]] : null
				store.pokedex = Object.keys(store.favorite)
				setStore(store)
			},
			checker: (name) => {
				const store = getStore()
				if (store.favorite[name]) {
					return store.favorite[name].check ? false : true
				} else {
					return true
				}
			},
			regionChecker: (name) => {
				const store = getStore()
				if (store.favRegion[name]) {
					return store.favRegion[name].check ? false : true
				} else {
					return true
				}
			},
			capitalizeFirstLetter: (string) => string.charAt(0).toUpperCase() + string.slice(1),
			deleterList: (name) => {
				const store = getStore()
				store.pokedex.forEach((pokemon, index, pokedex) => pokemon == name ? pokedex.splice(index,1) : null)
				delete store.favorite[name]
				setStore(store)
			},
			deleterListRegion: (name) => {
				const store = getStore()
				store.regions.forEach((pokemon, index, pokedex) => pokemon == name ? pokedex.splice(index,1) : null)
				delete store.favRegion[name]
				setStore(store)
			},
			addRegionFav: (name, item) => {
				const store = getStore()
				store.favRegion[name] = item
				const keys = Object.keys(store.favRegion).filter((pokes) => !store.favRegion[pokes].check)
				keys ? delete store.favRegion[keys[0]] : null
				store.regions = Object.keys(store.favRegion)
				console.log(store)
				setStore(store)
				console.log(item)
				console.log(name)
			}
		}
	};
};

export default getState;
