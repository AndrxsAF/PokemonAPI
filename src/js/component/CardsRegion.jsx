import PropTypes from "prop-types";
import { getPokemon, getSpecificPokemon } from "../services/services.js";
import React, { useEffect, useState } from "react";

const imgList = {
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
}

const CardsRegion = (props) => {

    const [genList, setGenList] = useState({});
    const [regionList, setRegionList] = useState([])

    const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

    const genGetFunct = async (url) => {
		try {
			const res = await getPokemon(url);
			const dataJSON = await res.json();
			setGenList(dataJSON.generation)
            setRegionList(dataJSON.regions[0])
		} catch (err) {
			console.log(err);
		}
	};

    const checkRegion = () => {
        if (regionList) {
            if (regionList.length > 1) {
                return (
                    <p className="card-text mb-1"><strong>Regions:</strong> Kanto and Johto.</p>
                )
            } else {
                return (
                    <p className="card-text mb-1"><strong>Region:</strong> {regionList.name}.</p>
                )
            }
        } else {
            return null
        }
    }

    useEffect(() => {
        genGetFunct(props.url)
    }, [])
		
    return (
        <div className="col-md-3 col-sm-12 p-4">
            <div className="card">
                <img src={imgList[props.region.split("-").join("")]} className="card-img-top img-fluid" alt={props.region}/>
                <div className="card-body bg-light">
                    <h5 className="card-title fs-3 text-center">Pokémon {props.region.split("-").map((strings) => capitalizeFirstLetter(strings)).join(" ")}</h5>
                    <p className="card-text mb-1"><strong>Gen:</strong> {genList.name}.</p>
                    {checkRegion()}
                    <div className="container-fluid d-flex justify-content-end p-0">
                        <input type="checkbox" className="btn-check" name={props.region} id={`${props.region}-check`}/>
                        <label className="btn btn-outline-warning p-1" htmlFor={`${props.region}-check`}><img src="https://img.icons8.com/color/40/000000/star-pokemon.png"/></label>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

CardsRegion.propTypes = {
    region: PropTypes.string,
    url: PropTypes.string
}

export default CardsRegion