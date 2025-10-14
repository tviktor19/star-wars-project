import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResources } from '../../store/actions'
import './CharacterList.css'

export const CharacterList = () => {
  const dispatch = useDispatch()
  const characters = useSelector((state) => state.resources.characters)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    dispatch(fetchResources())
  }, [dispatch])

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentCharacters = characters.slice(indexOfFirstItem, indexOfLastItem)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(characters.length / itemsPerPage); i++) {
    pageNumbers.push(
      <li key={i}>
        <button className={currentPage === i ? 'active' : ''} onClick={() => handleClick(i)}>
          {i}
        </button>
      </li>
    )
  }

  return (
    <div className="container">
      <main>
        <div className="top">
          <h2>Characters</h2>
        </div>
        <div className="films">
          {currentCharacters.map((character) => (
            <Link className="words" key={character.id} to={`/character/${character.id}`}>
              <div className="card">
                <div className="left">
                  <img src={character.src} alt="" />
                </div>
                <div className="right">
                  <h3>{character.name}</h3>
                  <div className="detailsGrid">
                    <span className="gray">Birth:</span>
                    <p>{character.birth_year}</p>
                    <span className="gray">Gender:</span>
                    <p>{character.gender}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <nav>
          <ul className="pagination">{pageNumbers}</ul>
        </nav>
      </main>
    </div>
  )
}
