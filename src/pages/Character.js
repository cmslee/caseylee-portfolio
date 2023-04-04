import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { useState, useEffect } from "react";
// import Homepage from "./Homepage";

function Character () {
    const [charData, setCharData] = useState(null);
    const params = useParams();
    // console.log(params);

    const char = params.zi;
    const url = `https://api.ctext.org/getcharacter?char=${char}`

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const getCharData = async () => {
        try {
            const res = await axios.get(url);
            setCharData(res.data)
            console.log(res.data) 
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
            {/* {readings.mandarinpinyin.map(sound => <h3>{sound}</h3>)} */}
            <h3>read: {readings.mandarinpinyin[0]}</h3>
            <h3>For more info, see <a href={url} target='_blank' rel='noreferrer'>here.</a></h3>
            <button className="back-button" onClick={goBack}>{`<`}</button>
        </div>
        )
    }

    const loading = () => <h2 id="loading">Loading...</h2>

    return charData ? loaded() : loading();
}

export default Character;