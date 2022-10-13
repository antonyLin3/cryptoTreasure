import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { getDefaultNormalizer } from '@testing-library/react'

import { cryptoApi } from '../services/cryptoApi'
import { cryptoNewsApi } from '../services/cryptoNewsApi'
import { cryptoExchangesApi } from '../services/crytpoExchanges'

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [cryptoExchangesApi.reducerPath]: cryptoExchangesApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(cryptoNewsApi.middleware),
})