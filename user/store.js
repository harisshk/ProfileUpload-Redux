import {createStore} from 'redux'
import ProfileReducer from './reducer/reducer'

const store = createStore(ProfileReducer)

export {store}