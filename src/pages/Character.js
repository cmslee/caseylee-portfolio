import { useParams } from "react-router-dom";
import axios from "axios";

import { useState, useEffect } from "react";

function Character () {
    const [charInfo, setCharInfo] = useState(null);
    const params = useParams();
    console.log(params);
    
    return (
        <div className="page">
            <h2>characters</h2>
        </div>
    )
}

export default Character;