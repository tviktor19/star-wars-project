import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import episodesActive from '../../assets/images/episodesActive.svg'
import episodes from '../../assets/images/episodes.svg'
import characters from '../../assets/images/characters.svg'
import charactersActive from '../../assets/images/charactersActive.svg'
import planets from '../../assets/images/planets.svg'
import planetsActive from '../../assets/images/planetsActive.svg'
import species from '../../assets/images/species.svg'
import speciesActive from '../../assets/images/speciesActive.svg'
import vehicles from '../../assets/images/vehicles.svg'
import vehiclesActive from '../../assets/images/vehiclesActive.svg'
import starships from '../../assets/images/starships.svg'
import starshipsActive from '../../assets/images/starshipsActive.svg'

import './Header.css'

export const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <nav>
        <Link className="link" to="/">
          <img src={location.pathname === '/' ? episodesActive : episodes} alt="episodes" />
          <p className={`hover ${location.pathname === '/' ? 'activeLink' : ''}`}>Episodes</p>
        </Link>

        <Link className="link" to="/character">
          <img src={location.pathname === '/character' ? charactersActive : characters} alt="characters" />
          <p className={`hover ${location.pathname === '/character' ? 'activeLink' : ''}`}>Characters</p>
        </Link>

        <Link className="link" to="/planets">
          <img src={location.pathname === '/planets' ? planetsActive : planets} alt="planets" />
          <p className={`hover ${location.pathname === '/planets' ? 'activeLink' : ''}`}>Planets</p>
        </Link>

        <Link className="link" to="/species">
          <img src={location.pathname === '/species' ? speciesActive : species} alt="species" />
          <p className={`hover ${location.pathname === '/species' ? 'activeLink' : ''}`}>Species</p>
        </Link>

        <Link className="link" to="/vehicles">
          <img src={location.pathname === '/vehicles' ? vehiclesActive : vehicles} alt="vehicles" />
          <p className={`hover ${location.pathname === '/vehicles' ? 'activeLink' : ''}`}> Vehicles</p>
        </Link>

        <Link className="link" to="/starships">
          <img src={location.pathname === '/starships' ? starshipsActive : starships} alt="starships" />
          <p className={`hover ${location.pathname === '/starships' ? 'activeLink' : ''}`}>Starships</p>
        </Link>
      </nav>
    </header>
  )
}
