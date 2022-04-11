import {createStore} from 'redux'
// import {changeSelection } from './myAction'
import {reducer} from './reducer'

const store=createStore(reducer)

export default store;