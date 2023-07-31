import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { LoginReducer, getAllStaffReducer } from './reducers/staffReducers'


const reducer = combineReducers({
    login: LoginReducer,
    allOperators: getAllStaffReducer,
})

const staffInfoFromStorage = localStorage.getItem("staffInfo") ? JSON.parse(localStorage.getItem("staffInfo")) : {}


const initialState = {
    login: {
        staffInfo: staffInfoFromStorage
    }
}

const middleware = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store