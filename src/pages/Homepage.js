import avatar from './avatar.png';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';

// console.log(avatar);


function Homepage(props) {
    const { characters } = props;

    return (
        <div className='page'>
            <h1>Hi. I'm Casey.</h1>
            <img id='avatar' src={avatar} alt='Avatar' />
            <h2 className='charContainer'>
                {characters.map((char => {
                    const { zi } = char;

                    return (
                        <Link key={zi} to={`/${zi}`} className='chars'>{char.zi}</Link>
                    )
                }))
                }
            </h2>
            <h2>I translate (CN/JP-{'>'}EN), edit, and code.</h2>
            <Footer/>
        </div>
    )
}

export default Homepage;