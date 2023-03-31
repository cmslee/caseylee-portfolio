import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import { useState, useEffect } from "react";
import Homepage from "./Homepage";

function Character () {
    const [charData, setCharData] = useState(null);
    const params = useParams();
    // console.log(params);

    const char = params.zi;
    const url = `https://api.ctext.org/getcharacter?char=${char}`

    // console.log(url)

    const getCharData = async () => {
        try {
            const res = await axios.get(url);
            setCharData(res.data) 
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getCharData();
    }, [])

    const loaded = () => {
        const {char, readings, url } = charData;

        return (
        <div className="page">
            <h2>{char}</h2>
            <h3>{readings.mandarinpinyin[0]}</h3>
            <h3>For more info, see<a href={url} target='_blank' rel='noreferrer'>here.</a></h3>
            <button>Back to Home</button>
        </div>
        )
    }

    const loading = () => <h2 id="loading">Loading...</h2>

    return charData ? loaded() : loading();
}

export default Character;