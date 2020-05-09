import { createStore, applyMiddleware, compose } from 'redux'
import { persistCombineReducers, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import immutableTransform from 'redux-persist-transform-immutable'
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import createEncryptor from 'redux-persist-transform-encrypt'

const encryptor = createEncryptor({
  secretKey: '7bc44abb0daa31af6b3b2a3f4fd1eb7b',
  onError: function(error) {
    // Handle the error.
  }
})
const persistConfig = {
  transforms: [encryptor],
  key: 'root',
  storage,
}

const middlewares = [thunk];
//const persistedReducer = persistReducer(persistConfig, rootReducer)
//let store = createStore(persistedReducer);


const store = createStore(
  persistCombineReducers(persistConfig,{
    ...rootReducer
  }),
  compose(applyMiddleware(...middlewares))
);


// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
// let store = createStore(persistedReducer)
// let persistor = persistStore(store)
export { store };
