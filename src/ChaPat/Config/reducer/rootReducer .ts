import { combineReducers } from 'redux'
// import usersReducer from './usersReducer'
// import postsReducer from './postsReducer'
import counterReducer from '../../Config/reducer/counterSlice'
import { pokemonApi } from '../API/PockemonServices/api'


const rootReducer = combineReducers({
//   users: usersReducer,
//   posts: postsReducer,
  counter: counterReducer,
    // Pockemon used reducer
     [pokemonApi.reducerPath]: pokemonApi.reducer,
     
})
export default rootReducer