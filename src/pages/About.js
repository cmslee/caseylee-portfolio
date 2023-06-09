import Footer from "../components/Footer";
import differences_24_2_cover from "../img/differences_24_2_cover.png";

function About () {

    const JochUrl = 'https://brill.com/coverimage?doc=%2Fjournals%2Fjoch%2Fjoch-overview.xml&width=300&type=webp';    
    const MucoCoverUrl = 'https://images3.penguinrandomhouse.com/cover/9781647292393';

    return (
        <div className="page">
            <h2>About</h2>
            <h3 id='about'>
                Casey Lee is a multi-media translator, wordsmith, and researcher with an MA in East Asian Studies. Since completing a software engineering boot camp, they have also been exploring areas in tech that align with their interests in localization, education, and life-enabling movements. Her academic translations can be found in <span>Journal of Chinese Humanities</span> and <span>differences: A Journal of Feminist Cultural Studies</span>. They are the translator of <span>Lovely Muco</span> by Takayuki Mizushina. The first volume is available for order <a href="https://www.penguinrandomhouse.com/books/723217/lovely-muco-1-by-takayuki-mizushina/" target="_blank" rel="noreferrer">here</a>. Volumes 2-4 are available for pre-order <a href="https://www.penguinrandomhouse.com/series/G2O/lovely-muco/" target="_blank" rel="noreferrer">here</a>.
            </h3>
            <div className="publications">
                <figure className="pubs-figure">
                    <img className="pubs-image" src={JochUrl} alt="Journal of Chinese Humanities cover"></img>
                </figure>
                <figure className="pubs-figure">
                    <img className="pubs-image" src={MucoCoverUrl} alt="Lovely Muco book cover"></img>
                </figure>
                <figure>
                    <img className="pubs-image" src={differences_24_2_cover} alt="differences journal cover for volume 24 issue 2"></img>
                </figure>
            </div>
            <h4 id='avatar-credit'>
                *Avatar made with <a href="https://grgikau.com/work" target="_blank" rel='noreferrer'>Kasey Uhter/grgikau</a>'s <a href="https://t.co/flRYoFz6CY" target="_blank" rel='noreferrer'>Picrew maker</a>.
            </h4>
            <Footer />
        </div>
    )
}

export default About;