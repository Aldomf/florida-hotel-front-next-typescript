import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/room/roomSlice'
import bookingReducer from './features/booking/bookingSlice'
import { roomApi } from './services/roomApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { bookingApi } from './services/bookingApi';

export const store = configureStore({
  reducer: {
    bookingReducer,
    counterReducer,
    [roomApi.reducerPath]: roomApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(roomApi.middleware).concat(bookingApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch