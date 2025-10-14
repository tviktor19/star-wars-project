import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResources } from '../../store/actions'
import './EpisodeList.css'

export const EpisodeList = () => {
  const dispatch = useDispatch()
  const films = useSelector((state) => state.resources.films)
  const [sortBy, setSortBy] = useState('release_date')

  useEffect(() => {
    dispatch(fetchResources())
  }, [dispatch])

  const handleSortChange = (event) => {
    setSortBy(event.target.value)
  }

  const sortedFilms = films.slice().sort((a, b) => {
    if (sortBy === 'episode') {
      return a.id - b.id
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name)
    } else {
      return new Date(a.release_date) - new Date(b.release_date)
    }
  })

  return (
    <div className="container">
      <main>
        <div className="top">
          <h2>Episodes</h2>
          <p className="sort">
            Sort by:{' '}
            <select name="sort" id="sort" onChange={handleSortChange} value={sortBy}>
              <option value="release_date">Date</option>
              <option value="name">Name</option>
              <option value="episode">Episode</option>
            </select>
          </p>
        </div>
        <div className="films">
          {sortedFilms.map((film) => (
            <Link className="words" key={film.id} to={`/episode/${film.id}`}>
              <div className="card">
                <div className="left">
                  <img src={film.src} alt="" />
                  <div className="yellow"> +18</div>
                </div>
                <div className="right">
                  <h3>
                    Star Wars: Episode {film.id}- {film.name}
                  </h3>
                  <div className="detailsGrid">
                    <span className="gray">Episod:</span>
                    <p>Episode {film.id}</p>
                    <span className="gray">Director:</span>
                    <p>{film.director}</p>
                    <span className="gray">Producer:</span>
                    <p>{film.producer}</p>
                    <span className="gray">Release date:</span>
                    <p>{film.release_date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
