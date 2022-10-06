import { Link } from "react-router-dom";

/**
 * If the alter_ego is the same as the characters, then return an empty tag, otherwise return a
 * paragraph tag with the characters.
 */
const CharactersByHero = ({ alter_ego, characters }) => {
    return (alter_ego === characters)
        ? <></>
        : <p>{ characters }</p>
}

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters }) => {
    
    const heroImageUrl = `../assets/heroes/${ id }.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card text-white bg-dark mb-3">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={ heroImageUrl } className="card-img" alt={ superhero } />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">{ alter_ego }</p>
                        <CharactersByHero alter_ego={ alter_ego } characters={ characters } />
                        <p className="card-text">
                            <small className="text-muted">{ first_appearance }</small>
                        </p>
                        <Link to={`/hero/${ id }`}>
                            More...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
