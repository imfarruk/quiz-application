import { createStore ,applyMiddleware, compose} from 'redux'
import {thunk} from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import rootReducer from './reducers/index';
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
const initialState = {};
// const middleware = [thunk];

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
const store = createStore(persistedReducer, initialState,compose(
  applyMiddleware(thunk)))
const Persistor = persistStore(store)

export {Persistor};
export default store;