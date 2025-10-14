import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResources } from '../../store/actions'
import './EpisodeDetails.css'
import { Breadcrumbs } from '../Breadcrumbs'

export const EpisodeDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const films = useSelector((state) => state.resources.films)
  const episode = films.find((film) => film.id == parseInt(id))

  const [showAllCharacters, setShowAllCharacters] = useState(false)
  const [showAllPlanets, setShowAllPlanets] = useState(false)
  const [showAllStarships, setShowAllStarships] = useState(false)
  const [showAllVehicles, setShowAllVehicles] = useState(false)
  const [showAllSpecies, setShowAllSpecies] = useState(false)

  useEffect(() => {
    dispatch(fetchResources())
  }, [dispatch])

  const characters = showAllCharacters ? episode.characters : episode.characters.slice(0, 3)
  const planets = showAllPlanets ? episode.planets : episode.planets.slice(0, 3)
  const starships = showAllStarships ? episode.starships : episode.starships.slice(0, 3)
  const vehicles = showAllVehicles ? episode.vehicles : episode.vehicles.slice(0, 3)
  const species = showAllSpecies ? episode.species : episode.species.slice(0, 3)

  return (
    <div className="container">
      <main className="episodeDetails">
        <div className="title">
          <Breadcrumbs />
        </div>
        <div className="episode">
          <div className="left">{episode && <img src={episode.src} alt="" />}</div>
          <div className="rigth">
            <h2>
              Star Wars: Episode {episode.id} - {episode.name}
            </h2>
            <div className="grid">
              <span className="gray">Episode:</span>
              <p>{episode.id}</p>
              <span className="gray">Director:</span>
              <p>{episode.director}</p>
              <span className="gray">Producer:</span>
              <p>{episode.producer}</p>
              <span className="gray">Release Date:</span>
              <p>{episode.release_date}</p>
              <span className="gray">Characters:</span>{' '}
              <p>
                {characters.map((character) => character.name).join(' , ')}
                {episode.characters.length > 3 && (
                  <p className="showBtn" onClick={() => setShowAllCharacters(!showAllCharacters)}>
                    {showAllCharacters ? 'Show Less...' : 'Show More...'}
                  </p>
                )}
              </p>
              <span className="gray">Planets:</span>
              <p>
                {planets.map((planet) => planet.name).join(' , ')}
                {episode.planets.length > 3 && (
                  <p className="showBtn" onClick={() => setShowAllPlanets(!showAllPlanets)}>
                    {showAllPlanets ? 'Show Less...' : 'Show More...'}
                  </p>
                )}
              </p>
              <span className="gray">Starships:</span>
              <p>
                {starships.map((starship) => starship.name).join(' , ')}
                {episode.starships.length > 3 && (
                  <p className="showBtn" onClick={() => setShowAllStarships(!showAllStarships)}>
                    {showAllStarships ? 'Show Less...' : 'Show More...'}
                  </p>
                )}
              </p>
              <span className="gray">Vehicles:</span>
              <p>
                {vehicles.map((vehicle) => vehicle.name).join(' , ')}
                {episode.vehicles.length > 3 && (
                  <p className="showBtn" onClick={() => setShowAllVehicles(!showAllVehicles)}>
                    {showAllVehicles ? 'Show Less...' : 'Show More...'}
                  </p>
                )}
              </p>
              <span className="gray">Species:</span>
              <p>
                {species.map((specie) => specie.name).join(' , ')}
                {episode.species.length > 3 && (
                  <p className="showBtn" onClick={() => setShowAllSpecies(!showAllSpecies)}>
                    {showAllSpecies ? 'Show Less...' : 'Show More...'}
                  </p>
                )}
              </p>
              <span className="gray">Created:</span>
              <p>{episode.created}</p>
              <span className="gray">Edited:</span>
              <p>{episode.edited}</p>
              <span className="gray"></span>
              <p className="desc">{episode.opening_crawl}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
