import axios from 'axios'

export const FETCH_RESOURCES_REQUEST = 'FETCH_RESOURCES_REQUEST'
export const FETCH_RESOURCES_SUCCESS = 'FETCH_RESOURCES_SUCCESS'
export const FETCH_RESOURCES_FAILURE = 'FETCH_RESOURCES_FAILURE'

export const fetchResourcesRequest = () => ({
  type: FETCH_RESOURCES_REQUEST,
})

export const fetchResourcesSuccess = (resources) => ({
  type: FETCH_RESOURCES_SUCCESS,
  payload: resources,
})

export const fetchResourcesFailure = (error) => ({
  type: FETCH_RESOURCES_FAILURE,
  payload: error,
})

export const fetchResources = () => {
  return async (dispatch) => {
    dispatch(fetchResourcesRequest())
    try {
      const characters = axios.get('http://localhost:3004/characters')
      const planets = axios.get('http://localhost:3004/planets')
      const films = axios.get('http://localhost:3004/films')
      const species = axios.get('http://localhost:3004/species')
      const vehicles = axios.get('http://localhost:3004/vehicles')
      const starships = axios.get('http://localhost:3004/starships')

      const response = await Promise.all([characters, planets, films, species, vehicles, starships])
      const [charactersData, planetsData, filmsData, speciesData, vehiclesData, starshipsData] = response.map(
        (res) => res.data
      )

      const resources = {
        characters: charactersData,
        planets: planetsData,
        films: filmsData,
        species: speciesData,
        vehicles: vehiclesData,
        starships: starshipsData,
      }

      dispatch(fetchResourcesSuccess(resources))
    } catch (error) {
      dispatch(fetchResourcesFailure(error.message))
    }
  }
}
