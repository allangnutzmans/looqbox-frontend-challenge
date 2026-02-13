import { configureStore } from '@reduxjs/toolkit';
import { client } from './api/client';

export const store = configureStore({
    reducer: {
        [client.reducerPath]: client.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(client.middleware),
});
