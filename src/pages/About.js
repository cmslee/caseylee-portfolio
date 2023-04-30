import Footer from "../components/Footer";

function About () {

    const JochUrl = 'https://brill.com/coverimage?doc=%2Fjournals%2Fjoch%2Fjoch-overview.xml&width=300&type=webp';    
    const MucoCoverUrl = 'https://images3.penguinrandomhouse.com/cover/9781647292393';
    const DifferencesUrl = 'https://dup.silverchair-cdn.com/dup/Content_public/Journal/differences/Issue/24/2/2/m_dddif_24_2_cover.png?Expires=1685915467&Signature=SR87beVQSCq-QUZHLW7qs~r8NrToWhWxBy-YBo~u81hrQwzY7Umdy~STuX8uaeW~2o1e2u9GXiWWzWEtIBCRSATS5afRu9oFPLdpd-M8WRQaPkyzmWR2mOCt-~LnmA5uEKl3xcOr~msEwWLQSMAHT5Q~vA1-OXguqSS6loWtNbUFlC24edVvycHLKUSP6VA2ysMeqKVBNRZA1f626kjo9y5cDqrB-BWfmUWYlLig7LF4QdAp1N-0pGUf0gjihV8IH8xJFhUn~-7lybd70YKXA1AcjxiPLC300eVgs2v8rDIjB2jKx2iflckndIE1QRaP5tqTy~eF5N6Vd4vR~7LLUQ__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA';

    return (
        <div className="page">
            <h2>About</h2>
            <h3 id='about'>
                Casey Lee is a multi-media translator, wordsmith, and researcher with an MA in East Asian Studies. Her academic translations can be found in <span>Journal of Chinese Humanities</span> and <span>differences: A Journal of Feminist Cultural Studies</span>. They are currently translating <span>Lovely Muco</span> by Takayuki Mizushina. The <a href="https://www.penguinrandomhouse.com/books/723217/lovely-muco-1-by-takayuki-mizushina/" target="_blank" rel="noreferrer">first volume</a> will be out in May 2023. 
            </h3>
            <div className="publications">
                <figure className="pubs-figure">
                    <img className="pubs-image" src={JochUrl} alt="Journal of Chinese Humanities cover"></img>
                </figure>
                <figure className="pubs-figure">
                    <img className="pubs-image" src={MucoCoverUrl} alt="Lovely Muco book cover"></img>
                </figure>
                <figure>
                    <img className="pubs-image" src={DifferencesUrl} alt="differences journal cover for volume 24 issue 2"></img>
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