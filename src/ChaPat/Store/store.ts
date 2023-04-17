import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "../../ChaPat/Config/reducer/rootReducer "
import { pokemonApi } from '../Config/API/PockemonServices/api';
import { useDispatch } from 'react-redux';




const store = configureStore({
  reducer: rootReducer,
   //   pockemon used middleware
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(pokemonApi.middleware),
   
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>

export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export type AppDispatch = typeof store.dispatch

export default store









