import avatar from './avatar.png';

// console.log(avatar);

function Homepage () {
    return (
        <div className='page'>
             <h1>Hi. I'm Casey.</h1>
            <img id='avatar' src={avatar} alt='Avatar'/>
            <h2>I translate (CN/JP-{'>'}EN), edit, and code.</h2>
        </div>
    )
}

export default Homepage;