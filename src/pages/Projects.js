import Footer from "../components/Footer";
import recipe_game from '../img/recipe_game.jpg';
import glossary_sfx from '../img/glossary_sfx.jpg';

function Projects() {
    return (
        <div className="page">
            <h2>Projects</h2>
            <div className="projects">
                <figure className="child-figure">
                    <a href="https://github.com/cmslee/recipegame" target='_blank' rel="noreferrer">
                        <img className="project-image" src={recipe_game} alt="kitsune udon">
                        </img>
                    </a>
                    <figcaption>
                        "What's for Dinner Tonight?"
                        <br/>
                        JS choose-your-own-adventure recipe game
                    </figcaption>
                </figure>
                <figure className="child-figure">
                    <a href="https://github.com/cmslee/final-project" target='_blank' rel="noreferrer">
                        <img className="project-image" src={glossary_sfx} alt="Japanese sound words handwritten on notes and related reference books">
                        </img>
                    </a>
                    <figcaption>
                        "Japanese SFX Glossary app"
                        <br/>
                        Full CRUD reference tool created with MERN stack
                    </figcaption>
                </figure>
                {/* <figure>
                    <a href='https://starwars-app-by-clee.netlify.app' target='_blank'rel="noreferrer">
                        <img className="project-image" alt="Starwars Image">
                        </img>
                    </a>
                    <figcaption>
                        "Starwars App"
                    </figcaption>
                </figure>
                <figure>
                    <a href="https://digimon-app-by-clee.netlify.app" target='_blank' rel="noreferrer">
                        <img className="project-image" alt="10-routes">
                        </img>
                    </a>
                    <figcaption>
                        "Mascots of Akira Prefecture"
                        <br/>
                        Create 10 routes using...
                    </figcaption>
                </figure> */}
            </div>
            <Footer/>
        </div>
    )
}

export default Projects;