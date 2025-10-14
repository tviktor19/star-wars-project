import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResources } from '../../store/actions'
import { Breadcrumbs } from '../Breadcrumbs'
import './CharacterDetails.css'

export const CharacterDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const characters = useSelector((state) => state.resources.characters)
  const character = characters.find((character) => character.id == parseInt(id))

  useEffect(() => {
    dispatch(fetchResources())
  }, [dispatch])

  return (
    <div className="container">
      <main className="characterDetails">
        <div className="title">
          <Breadcrumbs />
        </div>
        <div className="episode">
          <div className="left">{character && <img src={character.src} alt="" />}</div>
          <div className="rigth">
            <h2>{character.name}</h2>
            <div className="grid">
              <span className="gray">Height:</span>
              <p>{character.height}</p>
              <span className="gray">Mass:</span>
              <p>{character.mass}</p>
              <span className="gray">Hair color:</span>
              <p>{character.hair_color}</p>
              <span className="gray">Eye color:</span>
              <p>{character.eye_color}</p>
              <span className="gray">Birth:</span>
              <p>{character.birth_year}</p>
              <span className="gray">Gender:</span>
              <p>{character.gender}</p>
              <span className="gray">Homeworld:</span>
              <p>{character.homeworld.map((world) => world.name)}</p>
              <span className="gray">Films:</span>
              <p>{character.films.map((film) => film.name).join(', ')}</p>
              <span className="gray">Species:</span>
              <p>{character.species.map((species) => species.name).join(', ')}</p>
              <span className="gray">Vehicles:</span>
              <p>{character.vehicles.map((vehicles) => vehicles.name).join(', ')}</p>
              <span className="gray">Starships:</span>
              <p>{character.starships.map((ship) => ship.name).join(', ')}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
