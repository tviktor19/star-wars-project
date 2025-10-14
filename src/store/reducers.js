import { combineReducers } from 'redux'
import { FETCH_RESOURCES_REQUEST, FETCH_RESOURCES_SUCCESS, FETCH_RESOURCES_FAILURE } from './actions'

const initialResourcesState = {
  characters: [],
  planets: [],
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  loading: false,
  error: null,
}

const resourcesReducer = (state = initialResourcesState, action) => {
  switch (action.type) {
    case FETCH_RESOURCES_REQUEST:
      return { ...state, loading: true, error: null }
    case FETCH_RESOURCES_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: null }
    case FETCH_RESOURCES_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  resources: resourcesReducer,
})

export default rootReducer
