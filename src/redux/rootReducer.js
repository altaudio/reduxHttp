import { combineReducers } from 'redux'
import todos from './reducers/todos'
import user from './reducers/user'
import albumsList from './reducers/albumsList'

const rootReducer = combineReducers({
  todos,
  user,
  albumsList

})

export default rootReducer
